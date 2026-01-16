import { SongLine } from "../types/song-line.type";
import { CHORDS } from "./constants";

// Checks if a string is service information
export function isServiceLine(text: string): boolean {
  if (!text) return false;
  const trimmedText = text.trim();
  if (!trimmedText) return false;

  // Check for special characters not used in regular sentences
  const specialCharsRegex = /[{}[\]|\\~`@#$%^&*+=<>]/;
  if (specialCharsRegex.test(trimmedText)) {
    return true;
  }

  // Check for keywords followed by a space or colon
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
    "coda",
    "автор",
    "текст",
    "музыка",
    "composer",
    "lyrics by",
    "music by",
  ];

  const keywordPattern = new RegExp(
    `^(?:${serviceKeywords.join("|")})(?:\\s|:|$)`,
    "i"
  );
  if (keywordPattern.test(trimmedText)) {
    return true;
  }

  // Check for repeats in parentheses
  if (/^\([x\d](?:\s?(?:раза?))?\)$/i.test(trimmedText)) {
    return true;
  }

  // Check for copyrights
  if (/^[©℗®]/.test(trimmedText)) {
    return true;
  }

  // Check for separators
  const separatorPatterns = [
    /^[-—–=]{3,}$/, // Дефисы и тире
    /^[_.]{3,}$/, // Точки и подчеркивания
    /^[*]{3,}$/, // Звездочки
    /^[=]{3,}$/, // Знаки равенства
    /^[^a-zа-яё\d]*$/i, // Строки только из символов-разделителей
  ];

  if (separatorPatterns.some((pattern) => pattern.test(trimmedText))) {
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

  const pushLine = (line: SongLine) => {
    lines.push(line);
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

        pushLine({
          id,
          orderIndex: orderIndex++,
          type: "songString",
          text: next,
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
        pushLine({
          id,
          orderIndex: orderIndex++,
          type: "plainText",
          text: line,
        });
      }
      continue;
    }

    /** -------- songString без аккордов -------- */
    pushLine({
      id,
      orderIndex: orderIndex++,
      type: "songString",
      text: line,
      chords: {},
    });
  }

  return lines;
};
