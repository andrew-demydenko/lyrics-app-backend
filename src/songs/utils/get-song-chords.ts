import { SongLine } from "../types/song-line.type";
import { CHORDS } from "./constants";

let cachedChordRegex: RegExp | null = null;

function getChordRegex(): RegExp {
  if (!cachedChordRegex) {
    cachedChordRegex = new RegExp(`\\b(${CHORDS.join("|")})\\b`, "g");
  }
  return cachedChordRegex;
}

export const getSongChords = (lines: SongLine[]): string[] => {
  const chordsSet = new Set<string>();

  lines.forEach((line) => {
    if (line.type === "songString" && line.chords) {
      // For songString lines, use the chords object
      Object.values(line.chords).forEach((chord) => {
        chordsSet.add(chord);
      });
    } else if (line.type === "chordRiff" || line.type === "plainText") {
      const matches = line.text.match(getChordRegex());
      if (matches) {
        matches.forEach((match) => {
          chordsSet.add(match);
        });
      }
    }
  });

  return Array.from(chordsSet);
};
