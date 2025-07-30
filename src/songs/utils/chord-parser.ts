import { ChordPositions } from "../types/chord-position.type";
import { CHORDS } from "./constants";

/**
 * Determines if a line contains chord notation
 */
export const isChordsLine = (text: string): boolean => {
  if (!text) return false;
  const parts = text.split(/\s+/);
  return parts.some((part) => CHORDS.includes(part));
};

/**
 * Checks if a line is a service line (like section markers, separators, etc.)
 */
export const isServiceLine = (text: string): boolean => {
  if (!text) return false;
  const trimmedText = text.trim();
  if (!trimmedText) return false;

  // Separators are always service lines, regardless of indentation
  const separatorPatterns = [
    /^[| ]/, // Bars and spaces
    /^[-—–=]{3,}$/, // Dashes and equal signs
    /^[_.]{3,}$/, // Dots and underscores
    /^[*]{3,}$/, // Asterisks
    /^[=]{3,}$/, // Equal signs
    /^[^a-zа-яё\d]*$/i, // Lines with only separator symbols
  ];

  // First check for separators
  if (separatorPatterns.some((pattern) => pattern.test(trimmedText))) {
    return true;
  }

  // Check if the line starts with spaces or tabs
  const leadingSpaces = text.match(/^[\s\t]*/)?.[0]?.length || 0;
  const isIndented = leadingSpaces > 0;

  // If line is indented, it might be part of song lyrics
  if (isIndented) {
    return false;
  }

  const serviceLinePatterns = [
    // Section headers - should be at the beginning of line and may contain a number
    // Examples: "Verse 1", "Chorus:", "BRIDGE", "Verse 2"
    /^(?:куплет|припев|бридж|кода|инструментал|проигрыш|вступление|outro|intro|verse|chorus|bridge|coda)[\s:]?\d*$/i,

    // Metadata - should be at the beginning of line and end with a colon
    /^(?:автор|текст|музыка|composer|lyrics by|music by):.*$/i,

    // Repeats - should be in parentheses and contain only a digit or 'x' and optionally the word "times"
    /^\([x\d](?:\s?(?:раза?))?\)$/i,

    // Copyrights - should be at the beginning of line
    /^[©℗®]/,
  ];

  // Check for pattern matches
  const isService = serviceLinePatterns.some((pattern) => {
    const match = pattern.test(trimmedText);
    // Additional check for song section headers
    if (match && pattern.source.includes("куплет|припев")) {
      // Verify it's actually a header, not part of lyrics
      // Headers should be shorter than 25 characters and not contain punctuation except : and numbers
      return trimmedText.length < 25 && !/[,.!?;]/.test(trimmedText);
    }
    return match;
  });

  return isService;
};

/**
 * Adds extra spaces to repeated lines to make them unique
 * This helps in differentiating between identical chord lines
 */
export const addExtraSpaceOnRepeat = (lines: string[]): string[] => {
  const seenLines = new Map();

  return lines.map((line) => {
    if (seenLines.has(line)) {
      const repeatCount = seenLines.get(line);
      seenLines.set(line, repeatCount + 1);
      return line + " ".repeat(repeatCount);
    } else {
      seenLines.set(line, 1);
      return line;
    }
  });
};

export interface ChordTextPart {
  chords?: ChordPositions;
  text: string;
}

export const parseChordText = (text: string): ChordTextPart => {
  const chordPositions: ChordPositions = [];
  let cleanText = "";

  const lines = addExtraSpaceOnRepeat(text.split("\n"));
  let lineIndex = 0;

  // Character width approximation
  const getCharWidth = (char: string): number => {
    if (char === " ") return 0.5;
    return 1;
  };

  // Calculate position based on character widths
  const calculatePosition = (text: string): number => {
    return Array.from(text).reduce((pos, char) => pos + getCharWidth(char), 0);
  };

  const addLine = (line: string, withPrefix: boolean = false) => {
    if (withPrefix && line.trim()) {
      cleanText += "| ";
    }
    cleanText += line + "\n";
  };

  lines.forEach((line, index) => {
    const hasChords = isChordsLine(line);

    const nextLine = lines[index + 1];
    const prevLine = lines[index - 1];

    if (hasChords) {
      // Skip adding chords if next line is empty or invalid
      if (
        !nextLine?.trim() ||
        isChordsLine(nextLine) ||
        isServiceLine(nextLine)
      ) {
        lineIndex += 1;
        addLine(line);
        return;
      }

      // Create chord positions
      const chordMap: Map<number, string> = new Map();
      let currentPos = 0;
      let currentWord = "";

      for (let i = 0; i < line.length; i++) {
        const char = line[i];

        if (char === " ") {
          // Check if the current word is a chord
          if (CHORDS.includes(currentWord)) {
            chordMap.set(
              currentPos - calculatePosition(currentWord),
              currentWord
            );
          }

          currentWord = "";
          currentPos += getCharWidth(char);
        } else {
          currentWord += char;
          currentPos += getCharWidth(char);
        }
      }

      // Check if the last word is a chord
      if (currentWord && CHORDS.includes(currentWord)) {
        chordMap.set(currentPos - calculatePosition(currentWord), currentWord);
      }

      // Sort positions and calculate final positions
      const sortedPositions = Array.from(chordMap.keys()).sort((a, b) => a - b);

      let lastPosition = -Infinity;
      let lastWidth = 0;

      for (const position of sortedPositions) {
        const chord = chordMap.get(position)!;
        let finalPosition = position;

        // Check for overlap with the last chord
        if (position < lastPosition + lastWidth + 2) {
          finalPosition = lastPosition + lastWidth + 2;
        }

        lastPosition = finalPosition;
        lastWidth = calculatePosition(chord);

        chordPositions.push([Math.round(finalPosition), chord, nextLine]);
      }
    } else {
      lineIndex += 1;
      addLine(line, !isChordsLine(prevLine));
    }
  });

  return {
    text: cleanText.trim(),
    chords: chordPositions,
  };
};
