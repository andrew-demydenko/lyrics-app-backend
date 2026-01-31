import "dotenv/config";
import { PrismaClient } from "../.prisma/client";
import {
  S3Client,
  ListObjectsV2Command,
  GetObjectCommand,
} from "@aws-sdk/client-s3";
import { parseChordText } from "../src/songs/utils/chord-parser";
import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";

const prisma = new PrismaClient({
  adapter: new PrismaBetterSqlite3({ url: process.env.DATABASE_URL }),
});
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;

// Setup S3 / RustFS
const s3 = new S3Client({
  region: "ger-de",
  endpoint: process.env.RUSTFS_ENDPOINT,
  credentials: {
    accessKeyId: process.env.RUSTFS_ACCESS_KEY!,
    secretAccessKey: process.env.RUSTFS_SECRET_KEY!,
  },
  forcePathStyle: true,
});

const BUCKET_NAME = "backups";

async function streamToBuffer(stream: any): Promise<Buffer> {
  const chunks: any[] = [];
  for await (const chunk of stream) chunks.push(chunk);
  return Buffer.concat(chunks);
}

async function main() {
  // Create Admin, if not exists
  let user = await prisma.user.findUnique({
    where: { email: "test-admin@guitar-tabs-test.com" },
  });
  if (!user) {
    user = await prisma.user.create({
      data: {
        name: "Admin",
        email: "test-admin@guitar-tabs-test.com",
        password: ADMIN_PASSWORD,
        isAdmin: true,
        isVerified: true,
      },
    });
    console.log("Создан пользователь Admin");
  }

  const userId = user.id;
  const importedSongs: string[] = [];

  const listCommand = new ListObjectsV2Command({
    Bucket: BUCKET_NAME,
    Prefix: "songs-files/",
  });
  const listResponse = await s3.send(listCommand);

  const jsonFiles =
    listResponse.Contents?.map((f) => f.Key!).filter((k) =>
      k.endsWith(".json"),
    ) || [];
  if (!jsonFiles.length) throw new Error("Не найдено json-файлов");

  for (const file of jsonFiles) {
    const getCommand = new GetObjectCommand({
      Bucket: BUCKET_NAME,
      Key: file,
    });
    const response = await s3.send(getCommand);
    const fileContent = await streamToBuffer(response.Body);
    const songs = JSON.parse(fileContent.toString("utf-8"));

    for (const songData of songs) {
      if (!songData.name || !songData.author || !songData.text) {
        console.warn(
          `Пропущена песня из-за отсутствия данных: ${JSON.stringify(songData)}`,
        );
        continue;
      }

      const exists = await prisma.song.findFirst({
        where: { name: songData.name, author: songData.author },
      });
      if (exists) continue;

      const lines = parseChordText(songData.text);

      await prisma.song.create({
        data: {
          name: songData.name,
          author: songData.author,
          lines: JSON.stringify(lines),
          shared: true,
          verified: true,
          userId,
        },
      });

      importedSongs.push(songData.name);
    }
  }

  console.log(
    `Импорт завершён: ${importedSongs.length} песен (${importedSongs.join(", ")})`,
  );
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
