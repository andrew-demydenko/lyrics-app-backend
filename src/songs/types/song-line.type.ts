export interface SongLine {
  id: string;
  orderIndex: number;
  type: "songString" | "plainText" | "chordRiff";
  text: string;
  chords?: { [position: number]: string }; // позиция символа -> аккорд
}
