/**
 * Represents a chord position in text
 * [position, chord, line]
 * - position: character index in the line
 * - chord: the chord string (e.g., "Am", "C", "F#")
 * - line: the text line this chord belongs to
 */
export type ChordPosition = [number, string, string];

export type ChordPositions = ChordPosition[];
