import { SongLine } from "../types/song-line.type";
import { CHORDS } from "./constants";

export const normalizeSongStringText = (
  text: string,
  chords: Record<number, string>
): string => {
  const indexes = Object.keys(chords).map(Number);

  if (!indexes.length) return text;

  const maxIndex = Math.max(...indexes);

  if (maxIndex < text.length) return text;

  return text + " ".repeat(maxIndex - text.length + 1);
};

export const parseChordText = (text: string): SongLine[] => {
  const rawLines = text.split("\n");

  let idCounter = 1;
  let orderIndex = 0;

  const lines: SongLine[] = [];

  const getCharWidth = (char: string): number => (char === " " ? 0.5 : 1);

  const calculatePosition = (text: string): number =>
    Array.from(text).reduce((pos, char) => pos + getCharWidth(char), 0);

  const parseChords = (line: string): Record<number, string> => {
    const chords: Record<number, string> = {};
    let currentWord = "";
    let currentPos = 0;

    for (let i = 0; i < line.length; i++) {
      const char = line[i];

      if (char === " ") {
        if (CHORDS.includes(currentWord)) {
          const pos = currentPos - calculatePosition(currentWord);
          chords[Math.round(pos)] = currentWord;
        }
        currentWord = "";
        currentPos += getCharWidth(char);
      } else {
        currentWord += char;
        currentPos += getCharWidth(char);
      }
    }

    if (currentWord && CHORDS.includes(currentWord)) {
      const pos = currentPos - calculatePosition(currentWord);
      chords[Math.round(pos)] = currentWord;
    }

    return chords;
  };

  for (let i = 0; i < rawLines.length; i++) {
    const line = rawLines[i];
    const prev = lines[lines.length - 1];
    const next = rawLines[i + 1] ?? "";
    const id = (idCounter++).toString();

    /** -------- chords line -------- */
    if (isChordsLine(line)) {
      const nextIsSongString =
        next &&
        !isServiceLine(next) &&
        !isChordsLine(next) &&
        next.trim() !== "";

      if (nextIsSongString) {
        const chords = parseChords(line);

        lines.push({
          id,
          orderIndex: orderIndex++,
          type: "songString",
          text: normalizeSongStringText(next, chords),
          chords,
        });

        i++;
        continue;
      }

      lines.push({
        id,
        orderIndex: orderIndex++,
        type: "chordRiff",
        text: line,
      });

      continue;
    }

    /** -------- plainText -------- */
    if (isServiceLine(line) || line.trim() === "") {
      if (prev?.type === "plainText") {
        prev.text += "\n" + line;
      } else {
        lines.push({
          id,
          orderIndex: orderIndex++,
          type: "plainText",
          text: line,
        });
      }
      continue;
    }

    /** -------- songString без аккордов -------- */
    lines.push({
      id,
      orderIndex: orderIndex++,
      type: "songString",
      text: line,
      chords: {},
    });
  }

  return lines;
};

// Checks if a string is service information
export function isServiceLine(text: string): boolean {
  if (!text) return false;

  const trimmedText = text.trim();
  if (!trimmedText) return false;

  // 1. Check for special characters that should not appear in song lyrics
  const invalidChars = /[{}[\]|\\~`@#$©℗®%^&*+=<>_]/;
  if (invalidChars.test(trimmedText)) {
    return true;
  }

  // 2. Check for separators: 2+ separator characters in a row
  const hasMultipleSeparators = /[-—–.,!?/\\():;"']{2,}/.test(trimmedText);
  if (hasMultipleSeparators) {
    return true;
  }

  // 3. Check for keywords at the beginning of the line followed by : or -
  const serviceKeywords = [
    "куплет",
    "припев",
    "бридж",
    "кода",
    "инструментал",
    "проигрыш",
    "вступление",
    "outro",
    "intro",
    "verse",
    "chorus",
    "bridge",
    "автор",
    "текст",
    "музыка",
    "composer",
    "lyrics",
    "music",
  ];

  const keywordPattern = new RegExp(
    `^(${serviceKeywords.join("|")})\\s*[:—–-]`,
    "i"
  );
  if (keywordPattern.test(trimmedText)) {
    return true;
  }

  return false;
}

// Checks if a string contains chords
export const isChordsLine = (text: string): boolean => {
  if (!text) return false;

  const parts = text.trim().split(/\s+/);

  if (!parts.length) return false;

  return parts.every((part) => CHORDS.includes(part));
};
