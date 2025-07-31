import { PrismaClient } from "@prisma/client";
import * as fs from "fs";
import * as path from "path";
import { parseChordText } from "../src/songs/utils/chord-parser";

const prisma = new PrismaClient();
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;

async function main() {
  // Create user Admin if not exists
  let user = await prisma.user.findUnique({
    where: { email: "admin@gmail.com" },
  });
  if (!user) {
    user = await prisma.user.create({
      data: {
        name: "Admin",
        email: "admin@gmail.com",
        password: ADMIN_PASSWORD,
        isAdmin: true,
      },
    });
    console.log("Создан пользователь Admin");
  }

  const userId = user.id;

  // Find all JSON files in /songs-store
  const songsDir = path.join(__dirname, "./songs-store");
  const files = fs.readdirSync(songsDir).filter((f) => f.endsWith(".json"));
  const importedSongs = [];

  for (const file of files) {
    const filePath = path.join(songsDir, file);
    let songs = [];
    try {
      songs = JSON.parse(fs.readFileSync(filePath, "utf-8"));
    } catch (e) {
      console.error(`Ошибка чтения файла ${file}: ${e.message}`);
      continue;
    }

    for (const songData of songs) {
      if (!songData.name || !songData.author || !songData.text) {
        console.warn(
          `Пропущена песня из-за отсутствия данных: ${JSON.stringify(songData)}`
        );
        continue;
      }
      // Check if song exists
      const exists = await prisma.song.findFirst({
        where: {
          name: songData.name,
          author: songData.author,
        },
      });
      if (exists) continue;

      // Parse chords
      const parsedData = parseChordText(songData.text);

      await prisma.song.create({
        data: {
          name: songData.name,
          author: songData.author,
          text: parsedData.text || songData.text,
          chords: JSON.stringify(parsedData.chords || {}),
          shared: true,
          verified: true,
          userId,
        },
      });
      importedSongs.push(songData.name);
    }
  }
  console.log(
    "Импорт завершён",
    `${importedSongs.length} пеcен: (${importedSongs.join(", ")})`
  );
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
