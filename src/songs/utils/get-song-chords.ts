import { SongLine } from "../types/song-line.type";
import { CHORDS } from "./constants";

export const getSongChords = (lines: SongLine[]): string[] => {
  const chordsSet = new Set<string>();

  lines.forEach((line) => {
    if (line.type === "songString" && line.chords) {
      // For songString lines, use the chords object
      Object.values(line.chords).forEach((chord) => {
        chordsSet.add(chord);
      });
    } else if (line.type === "chordRiff" || line.type === "plainText") {
      // For chordRiff and plainText lines, use regex to find chords
      const lineRegex = new RegExp(
        getChordRegex().source,
        getChordRegex().flags,
      );
      const matches = line.text.match(lineRegex);

      if (matches) {
        matches.forEach((match) => {
          chordsSet.add(match);
        });
      }
    }
  });

  return Array.from(chordsSet);
};

export const getChordRegex = (): RegExp => {
  const escapedChords = CHORDS.map((chord) =>
    chord.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"),
  );
  return new RegExp(`\\b(${escapedChords.join("|")})\\b`, "gi");
};
