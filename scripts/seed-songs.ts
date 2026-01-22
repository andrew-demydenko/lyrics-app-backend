import { PrismaClient } from "@prisma/client";
import {
  S3Client,
  ListObjectsV2Command,
  GetObjectCommand,
} from "@aws-sdk/client-s3";
import { parseChordText } from "../src/songs/utils/chord-parser";
import { writeFile, mkdir, readFile, readdir, rm } from "fs/promises";
import * as path from "path";
import * as tar from "tar";

const prisma = new PrismaClient();
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;

// Настройки S3 / RustFS
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
  // Создаём Admin, если не существует
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

  // Получаем список архивов в RustFS
  const listCommand = new ListObjectsV2Command({
    Bucket: BUCKET_NAME,
    Prefix: "song-uploads/",
  });
  const listResponse = await s3.send(listCommand);

  const tarFiles =
    listResponse.Contents?.map((f) => f.Key!).filter((k) =>
      k.endsWith(".tar"),
    ) || [];
  if (!tarFiles.length)
    throw new Error("Не найдено архивов .tar в song-uploads");

  // Берём последний архив по имени (ISO-дата в имени)
  const lastArchive = tarFiles.sort().pop()!;
  console.log("Последний архив:", lastArchive);

  // Получаем архив
  const getCommand = new GetObjectCommand({
    Bucket: BUCKET_NAME,
    Key: lastArchive,
  });
  const response = await s3.send(getCommand);
  const buffer = await streamToBuffer(response.Body);

  // Создаём временную папку для распаковки
  const extractDir = path.join("/tmp", "song-uploads");
  await mkdir(extractDir, { recursive: true });

  // Сохраняем архив во временную папку
  const tarPath = path.join(extractDir, "last-archive.tar");
  await writeFile(tarPath, buffer as any);

  // Разархивируем
  await tar.extract({ file: tarPath, cwd: extractDir });

  // Читаем JSON-файлы из распакованного архива
  const files = readdir(extractDir);
  for (const file of await files) {
    if (!file.endsWith(".json")) continue;

    const filePath = path.join(extractDir, file);
    const songs = JSON.parse(await readFile(filePath, "utf-8"));

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
  await rm(extractDir, { recursive: true, force: true });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
