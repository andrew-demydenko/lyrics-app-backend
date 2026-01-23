const chordFingers = {
  "A#13": {
    root: "A#",
    type: "13",
    structure: ["1", "3", "5", "b7", "9", "11", "13"],
    positions: [
      {
        fingers: "x,1,0,2,3,4",
        notes: ["A#", "C##", "G#", "B#", "F##"],
        baseFret: 1,
      },
      {
        fingers: "4,x,3,2,1,1",
        notes: ["A#", "G#", "B#", "C##", "F##"],
        baseFret: 5,
      },
      {
        fingers: "1,x,1,2,3,4",
        notes: ["A#", "G#", "C##", "F##", "B#"],
        baseFret: 5,
      },
    ],
  },
  "A#7(#9)": {
    root: "A#",
    type: "7(#9)",
    structure: ["1", "3", "5", "b7", "#9"],
    positions: [
      {
        fingers: "x,1,0,2,4,3",
        notes: ["A#", "C##", "G#", "B##", "E#"],
        baseFret: 1,
      },
      {
        fingers: "2,1,3,3,3,x",
        notes: ["A#", "C##", "G#", "B##", "E#"],
        baseFret: 5,
      },
      {
        fingers: "1,3,1,2,1,4",
        notes: ["A#", "E#", "G#", "C##", "E#", "B##"],
        baseFret: 5,
      },
    ],
  },
  "A#9": {
    root: "A#",
    type: "9",
    structure: ["1", "3", "5", "b7", "9"],
    positions: [
      {
        fingers: "x,2,0,3,4,x",
        notes: ["A#", "C##", "G#", "B#"],
        baseFret: 1,
      },
      {
        fingers: "x,1,3,2,4,x",
        notes: ["C##", "G#", "B#", "E#"],
        baseFret: 5,
      },
      {
        fingers: "1,x,1,2,1,4",
        notes: ["A#", "G#", "C##", "E#", "B#"],
        baseFret: 5,
      },
    ],
  },
  "A#9b5": {
    root: "A#",
    type: "9b5",
    structure: ["1", "3", "b5", "b7", "9"],
    positions: [
      {
        fingers: "0,1,0,2,3,0",
        notes: ["E", "A#", "C##", "G#", "B#", "E"],
        baseFret: 1,
      },
      {
        fingers: "2,1,3,1,1,4",
        notes: ["A#", "C##", "G#", "B#", "E", "A#"],
        baseFret: 5,
      },
      {
        fingers: "x,x,1,2,3,1",
        notes: ["A#", "E", "G#", "B#"],
        baseFret: 5,
      },
    ],
  },
  "A#7": {
    root: "A#",
    type: "7",
    structure: ["1", "3", "5", "b7"],
    positions: [
      {
        fingers: "x,1,3,1,4,1",
        notes: ["A#", "E#", "G#", "C##", "E#"],
        baseFret: 5,
      },
      {
        fingers: "1,3,1,2,4,1",
        notes: ["A#", "E#", "G#", "C##", "G#", "A#"],
        baseFret: 5,
      },
      {
        fingers: "x,x,1,3,2,4",
        notes: ["A#", "E#", "G#", "C##"],
        baseFret: 5,
      },
    ],
  },
  "A#dim7": {
    root: "A#",
    type: "dim7",
    structure: ["1", "b3", "b5", "bb7"],
    positions: [
      {
        fingers: "2,4,1,3,x,x",
        notes: ["G", "C#", "E", "A#"],
        baseFret: 5,
      },
      {
        fingers: "x,2,3,1,4,x",
        notes: ["C#", "G", "A#", "E"],
        baseFret: 5,
      },
      {
        fingers: "x,x,1,3,2,4",
        notes: ["A#", "E", "G", "C#"],
        baseFret: 5,
      },
      {
        fingers: "x,1,2,0,3,x",
        notes: ["A#", "E", "G", "C#"],
        baseFret: 1,
      },
      {
        fingers: "2,x,1,3,x,x",
        notes: ["A#", "G", "C#"],
        baseFret: 1,
      },
      {
        fingers: "2,x,1,3,x,x",
        notes: ["C#", "A#", "E"],
        baseFret: 1,
      },
      {
        fingers: "3,x,1,4,2,x",
        notes: ["A#", "G", "C#", "E"],
        baseFret: 5,
      },
      {
        fingers: "x,2,3,1,4,x",
        notes: ["E", "A#", "C#", "G"],
        baseFret: 5,
      },
    ],
  },
  "A#aug": {
    root: "A#",
    type: "aug",
    structure: ["1", "3", "#5"],
    positions: [
      {
        fingers: "x,3,2,1,1,x",
        notes: ["C##", "E##", "A#", "C##"],
        baseFret: 5,
      },
      {
        fingers: "4,3,2,1,x,x",
        notes: ["A#", "C##", "E##", "A#"],
        baseFret: 5,
      },
      {
        fingers: "x,x,4,2,3,1",
        notes: ["C##", "E##", "A#", "C##"],
        baseFret: 5,
      },
    ],
  },
  "A#maj": {
    root: "A#",
    type: "maj",
    structure: ["1", "3", "5"],
    positions: [
      {
        fingers: "x,1,3,3,3,x",
        notes: ["A#", "E#", "A#", "C##"],
        baseFret: 5,
      },
      {
        fingers: "1,3,4,2,1,1",
        notes: ["A#", "E#", "A#", "C##", "E#", "A#"],
        baseFret: 5,
      },
      {
        fingers: "x,4,3,1,2,1",
        notes: ["A#", "C##", "E#", "A#", "C##"],
        baseFret: 5,
      },
    ],
  },
  "A#11": {
    root: "A#",
    type: "11",
    structure: ["1", "3", "5", "b7", "9", "11"],
    positions: [
      {
        fingers: "x,1,1,1,1,1",
        notes: ["A#", "D#", "G#", "B#", "E#"],
        baseFret: 5,
      },
      {
        fingers: "3,x,4,2,1,1",
        notes: ["A#", "G#", "B#", "D#", "G#"],
        baseFret: 5,
      },
      {
        fingers: "x,x,1,1,2,1",
        notes: ["A#", "D#", "G#", "B#"],
        baseFret: 5,
      },
    ],
  },
  "A#maj9": {
    root: "A#",
    type: "maj9",
    structure: ["1", "3", "5", "7", "9"],
    positions: [
      {
        fingers: "x,1,0,4,2,3",
        notes: ["A#", "C##", "G##", "B#", "E#"],
        baseFret: 1,
      },
      {
        fingers: "2,1,4,1,x,x",
        notes: ["A#", "C##", "G##", "B#"],
        baseFret: 5,
      },
      {
        fingers: "x,x,4,1,2,1",
        notes: ["A#", "B#", "E#", "G##"],
        baseFret: 5,
      },
    ],
  },
  "A#m": {
    root: "A#",
    type: "m",
    structure: ["1", "b3", "5"],
    positions: [
      {
        fingers: "x,1,3,4,2,1",
        notes: ["A#", "E#", "A#", "C#", "E#"],
        baseFret: 5,
      },
      {
        fingers: "1,3,4,1,1,1",
        notes: ["A#", "E#", "A#", "C#", "E#", "A#"],
        baseFret: 5,
      },
      {
        fingers: "x,x,1,3,4,2",
        notes: ["A#", "E#", "A#", "C#"],
        baseFret: 5,
      },
      {
        fingers: "x,x,3,1,1,x",
        notes: ["A#", "C#", "E#"],
        baseFret: 1,
      },
    ],
  },
  "A#7b5": {
    root: "A#",
    type: "7b5",
    structure: ["1", "3", "b5", "b7"],
    positions: [
      {
        fingers: "x,1,2,1,3,x",
        notes: ["A#", "E", "G#", "C##"],
        baseFret: 5,
      },
      {
        fingers: "x,x,2,4,1,3",
        notes: ["G#", "C##", "E", "A#"],
        baseFret: 5,
      },
      {
        fingers: "x,x,1,2,3,4",
        notes: ["A#", "E", "G#", "C##"],
        baseFret: 5,
      },
    ],
  },
  "A#m7": {
    root: "A#",
    type: "m7",
    structure: ["1", "b3", "5", "b7"],
    positions: [
      {
        fingers: "x,1,3,1,2,1",
        notes: ["A#", "E#", "G#", "C#", "E#"],
        baseFret: 5,
      },
      {
        fingers: "1,3,1,1,4,1",
        notes: ["A#", "E#", "G#", "C#", "G#", "A#"],
        baseFret: 5,
      },
      {
        fingers: "x,x,1,4,2,3",
        notes: ["A#", "E#", "G#", "C#"],
        baseFret: 5,
      },
    ],
  },
  "A#dim": {
    root: "A#",
    type: "dim",
    structure: ["1", "b3", "b5"],
    positions: [
      {
        fingers: "x,1,2,3,4,x",
        notes: ["A#", "E", "A#", "C#"],
        baseFret: 5,
      },
      {
        fingers: "x,x,4,3,1,2",
        notes: ["A#", "C#", "E", "A#"],
        baseFret: 5,
      },
      {
        fingers: "1,2,3,1,x,x",
        notes: ["A#", "E", "A#", "C#"],
        baseFret: 5,
      },
    ],
  },
  "A#6": {
    root: "A#",
    type: "6",
    structure: ["1", "3", "5", "6"],
    positions: [
      {
        fingers: "x,1,3,3,3,3",
        notes: ["A#", "E#", "A#", "C##", "F##"],
        baseFret: 5,
      },
      {
        fingers: "1,x,3,2,4,1",
        notes: ["A#", "A#", "C##", "F##", "A#"],
        baseFret: 5,
      },
      {
        fingers: "x,x,1,3,1,4",
        notes: ["A#", "E#", "F##", "C##"],
        baseFret: 5,
      },
    ],
  },
  "A#7(#5)": {
    root: "A#",
    type: "7(#5)",
    structure: ["1", "3", "#5", "b7"],
    positions: [
      {
        fingers: "x,1,4,1,3,2",
        notes: ["A#", "E##", "G#", "C##", "E##"],
        baseFret: 5,
      },
      {
        fingers: "1,x,1,2,3,1",
        notes: ["A#", "G#", "C##", "E##", "A#"],
        baseFret: 5,
      },
      {
        fingers: "x,1,2,1,1,x",
        notes: ["G#", "C##", "E##", "A#"],
        baseFret: 5,
      },
    ],
  },
  "A#7sus4": {
    root: "A#",
    type: "7sus4",
    structure: ["1", "4", "5", "b7"],
    positions: [
      {
        fingers: "x,1,3,1,4,1",
        notes: ["A#", "E#", "G#", "D#", "E#"],
        baseFret: 5,
      },
      {
        fingers: "1,3,1,4,1,1",
        notes: ["A#", "E#", "G#", "D#", "E#", "A#"],
        baseFret: 5,
      },
      {
        fingers: "x,x,1,3,2,4",
        notes: ["A#", "E#", "G#", "D#"],
        baseFret: 5,
      },
    ],
  },
  "A#maj7": {
    root: "A#",
    type: "maj7",
    structure: ["1", "3", "5", "7"],
    positions: [
      {
        fingers: "x,1,3,2,4,1",
        notes: ["A#", "E#", "G##", "C##", "E#"],
        baseFret: 5,
      },
      {
        fingers: "1,4,2,3,1,x",
        notes: ["A#", "E#", "G##", "C##", "E#"],
        baseFret: 5,
      },
      {
        fingers: "x,4,3,1,1,1",
        notes: ["A#", "C##", "E#", "G##", "C##"],
        baseFret: 5,
      },
    ],
  },
  "A#5": {
    root: "A#",
    type: "5",
    structure: ["1", "5"],
    positions: [
      {
        fingers: "1,3,x,x,x,x",
        notes: ["A#", "E#"],
        baseFret: 1,
      },
    ],
  },
  "A#m6": {
    root: "A#",
    type: "m6",
    structure: ["1", "b3", "5", "6"],
    positions: [
      {
        fingers: "x,1,3,0,2,4",
        notes: ["A#", "E#", "F##", "C#", "F##"],
        baseFret: 1,
      },
      {
        fingers: "1,x,3,1,4,1",
        notes: ["A#", "A#", "C#", "F##", "A#"],
        baseFret: 5,
      },
      {
        fingers: "x,x,1,3,1,2",
        notes: ["A#", "E#", "F##", "C#"],
        baseFret: 5,
      },
    ],
  },
  "A#7(b9)": {
    root: "A#",
    type: "7(b9)",
    structure: ["1", "3", "5", "b7", "b9"],
    positions: [
      {
        fingers: "x,1,0,2,x,3",
        notes: ["A#", "C##", "G#", "E#"],
        baseFret: 1,
      },
      {
        fingers: "3,2,4,1,x,x",
        notes: ["A#", "C##", "G#", "B"],
        baseFret: 5,
      },
      {
        fingers: "1,x,1,2,1,3",
        notes: ["A#", "G#", "C##", "E#", "B"],
        baseFret: 5,
      },
    ],
  },
  "A#m9": {
    root: "A#",
    type: "m9",
    structure: ["1", "b3", "5", "b7", "9"],
    positions: [
      {
        fingers: "3,1,4,2,x,x",
        notes: ["A#", "C#", "G#", "B#"],
        baseFret: 5,
      },
      {
        fingers: "1,3,1,1,1,4",
        notes: ["A#", "E#", "G#", "C#", "E#", "B#"],
        baseFret: 5,
      },
      {
        fingers: "x,2,1,3,4,x",
        notes: ["A#", "C#", "G#", "B#"],
        baseFret: 5,
      },
    ],
  },
  "A#sus4": {
    root: "A#",
    type: "sus4",
    structure: ["1", "4", "5"],
    positions: [
      {
        fingers: "x,1,2,3,4,1",
        notes: ["A#", "E#", "A#", "D#", "E#"],
        baseFret: 5,
      },
      {
        fingers: "x,x,1,1,2,4",
        notes: ["E#", "A#", "D#", "A#"],
        baseFret: 5,
      },
      {
        fingers: "1,1,3,4,1,1",
        notes: ["A#", "D#", "A#", "D#", "E#", "A#"],
        baseFret: 5,
      },
    ],
  },
  "A#6/9": {
    root: "A#",
    type: "6/9",
    structure: ["1", "3", "5", "6", "9"],
    positions: [
      {
        fingers: "x,1,0,0,2,3",
        notes: ["A#", "C##", "F##", "B#", "E#"],
        baseFret: 1,
      },
      {
        fingers: "2,1,1,1,3,4",
        notes: ["A#", "C##", "F##", "B#", "E#", "A#"],
        baseFret: 5,
      },
      {
        fingers: "x,x,2,1,3,4",
        notes: ["A#", "C##", "F##", "B#"],
        baseFret: 5,
      },
    ],
  },
  "C#13": {
    root: "C#",
    type: "13",
    structure: ["1", "3", "5", "b7", "9", "11", "13"],
    positions: [
      {
        fingers: "x,2,1,3,3,4",
        notes: ["C#", "E#", "B", "D#", "A#"],
        baseFret: 5,
      },
      {
        fingers: "3,x,4,2,1,1",
        notes: ["C#", "B", "D#", "E#", "A#"],
        baseFret: 5,
      },
      {
        fingers: "1,x,1,2,3,4",
        notes: ["C#", "B", "E#", "A#", "D#"],
        baseFret: 5,
      },
    ],
  },
  "C#7(#9)": {
    root: "C#",
    type: "7(#9)",
    structure: ["1", "3", "5", "b7", "#9"],
    positions: [
      {
        fingers: "x,2,1,3,4,x",
        notes: ["C#", "E#", "B", "D##"],
        baseFret: 5,
      },
      {
        fingers: "2,1,3,3,3,x",
        notes: ["C#", "E#", "B", "D##", "G#"],
        baseFret: 5,
      },
      {
        fingers: "1,3,1,2,1,4",
        notes: ["C#", "G#", "B", "E#", "G#", "D##"],
        baseFret: 5,
      },
    ],
  },
  "C#9": {
    root: "C#",
    type: "9",
    structure: ["1", "3", "5", "b7", "9"],
    positions: [
      {
        fingers: "x,2,1,3,4,x",
        notes: ["C#", "E#", "B", "D#"],
        baseFret: 5,
      },
      {
        fingers: "x,1,3,2,4,x",
        notes: ["E#", "B", "D#", "G#"],
        baseFret: 5,
      },
      {
        fingers: "x,x,2,1,3,4",
        notes: ["B", "D#", "G#", "C#"],
        baseFret: 5,
      },
      {
        fingers: "x,2,1,3,3,3",
        notes: ["C#", "E#", "B", "D#", "G#"],
        baseFret: 5,
      },
      {
        fingers: "x,x,3,2,1,4",
        notes: ["B", "D#", "E#", "C#"],
        baseFret: 5,
      },
    ],
  },
  "C#9b5": {
    root: "C#",
    type: "9b5",
    structure: ["1", "3", "b5", "b7", "9"],
    positions: [
      {
        fingers: "1,2,1,3,4,1",
        notes: ["G", "C#", "E#", "B", "D#", "G"],
        baseFret: 5,
      },
      {
        fingers: "2,1,3,1,1,4",
        notes: ["C#", "E#", "B", "D#", "G", "C#"],
        baseFret: 5,
      },
      {
        fingers: "x,x,1,2,3,1",
        notes: ["C#", "G", "B", "D#"],
        baseFret: 5,
      },
    ],
  },
  "C#7": {
    root: "C#",
    type: "7",
    structure: ["1", "3", "5", "b7"],
    positions: [
      {
        fingers: "x,3,2,4,1,x",
        notes: ["C#", "E#", "B", "C#"],
        baseFret: 5,
      },
      {
        fingers: "x,1,3,1,4,1",
        notes: ["C#", "G#", "B", "E#", "G#"],
        baseFret: 5,
      },
      {
        fingers: "1,3,1,2,4,1",
        notes: ["C#", "G#", "B", "E#", "B", "C#"],
        baseFret: 5,
      },
      {
        fingers: "x,x,2,3,1,4",
        notes: ["E#", "B", "C#", "G#"],
        baseFret: 5,
      },
      {
        fingers: "x,2,1,3,0,4",
        notes: ["C#", "E#", "B", "B", "G#"],
        baseFret: 1,
      },
      {
        fingers: "2,x,3,4,1,x",
        notes: ["G#", "E#", "B", "C#"],
        baseFret: 5,
      },
      {
        fingers: "1,3,1,2,1,1",
        notes: ["C#", "G#", "B", "E#", "G#", "C#"],
        baseFret: 5,
      },
      {
        fingers: "x,2,1,3,x,x",
        notes: ["C#", "E#", "B"],
        baseFret: 1,
      },
      {
        fingers: "1,x,1,2,x,x",
        notes: ["C#", "B", "E#"],
        baseFret: 1,
      },
      {
        fingers: "x,x,1,1,1,2",
        notes: ["G#", "C#", "E#", "B"],
        baseFret: 5,
      },
      {
        fingers: "x,x,1,3,2,4",
        notes: ["C#", "G#", "B", "E#"],
        baseFret: 5,
      },
    ],
  },
  "C#dim7": {
    root: "C#",
    type: "dim7",
    structure: ["1", "b3", "b5", "bb7"],
    positions: [
      {
        fingers: "2,4,1,3,x,x",
        notes: ["G", "C#", "E", "Bb"],
        baseFret: 5,
      },
      {
        fingers: "x,2,3,1,4,x",
        notes: ["E", "Bb", "C#", "G"],
        baseFret: 5,
      },
      {
        fingers: "x,x,1,3,2,4",
        notes: ["C#", "G", "Bb", "E"],
        baseFret: 5,
      },
      {
        fingers: "x,2,3,1,4,x",
        notes: ["C#", "G", "Bb", "E"],
        baseFret: 5,
      },
      {
        fingers: "x,x,1,3,2,4",
        notes: ["G", "C#", "E", "Bb"],
        baseFret: 5,
      },
      {
        fingers: "x,x,1,3,2,4",
        notes: ["Bb", "E", "G", "C#"],
        baseFret: 5,
      },
      {
        fingers: "2,x,1,3,x,x",
        notes: ["C#", "Bb", "E"],
        baseFret: 1,
      },
      {
        fingers: "x,x,1,3,2,4",
        notes: ["E", "Bb", "C#", "G"],
        baseFret: 5,
      },
      {
        fingers: "3,x,1,4,2,x",
        notes: ["G", "E", "Bb", "C#"],
        baseFret: 5,
      },
      {
        fingers: "x,3,1,2,x,x",
        notes: ["C#", "E", "Bb"],
        baseFret: 1,
      },
      {
        fingers: "x,2,3,1,4,1",
        notes: ["C#", "G", "Bb", "E", "G"],
        baseFret: 5,
      },
    ],
  },
  "C#aug": {
    root: "C#",
    type: "aug",
    structure: ["1", "3", "#5"],
    positions: [
      {
        fingers: "x,3,2,1,1,x",
        notes: ["C#", "E#", "G##", "C#"],
        baseFret: 5,
      },
      {
        fingers: "4,3,2,1,x,x",
        notes: ["G##", "C#", "E#", "G##"],
        baseFret: 5,
      },
      {
        fingers: "x,x,4,2,3,1",
        notes: ["C#", "E#", "G##", "C#"],
        baseFret: 5,
      },
    ],
  },
  "C#maj": {
    root: "C#",
    type: "maj",
    structure: ["1", "3", "5"],
    positions: [
      {
        fingers: "x,4,3,1,2,1",
        notes: ["C#", "E#", "G#", "C#", "E#"],
        baseFret: 5,
      },
      {
        fingers: "x,1,3,3,3,x",
        notes: ["C#", "G#", "C#", "E#"],
        baseFret: 5,
      },
      {
        fingers: "1,3,4,2,1,1",
        notes: ["C#", "G#", "C#", "E#", "G#", "C#"],
        baseFret: 5,
      },
      {
        fingers: "x,x,3,3,3,x",
        notes: ["G#", "C#", "E#"],
        baseFret: 1,
      },
      {
        fingers: "x,1,2,3,4,1",
        notes: ["C#", "G#", "C#", "E#", "G#"],
        baseFret: 5,
      },
    ],
  },
  "C#11": {
    root: "C#",
    type: "11",
    structure: ["1", "3", "5", "b7", "9", "11"],
    positions: [
      {
        fingers: "x,1,1,1,1,1",
        notes: ["C#", "F#", "B", "D#", "G#"],
        baseFret: 5,
      },
      {
        fingers: "4,x,3,2,1,1",
        notes: ["C#", "B", "D#", "F#", "B"],
        baseFret: 5,
      },
      {
        fingers: "x,x,1,1,2,1",
        notes: ["C#", "F#", "B", "D#"],
        baseFret: 5,
      },
    ],
  },
  "C#maj9": {
    root: "C#",
    type: "maj9",
    structure: ["1", "3", "5", "7", "9"],
    positions: [
      {
        fingers: "x,2,1,4,3,x",
        notes: ["C#", "E#", "B#", "D#"],
        baseFret: 5,
      },
      {
        fingers: "2,1,3,1,x,x",
        notes: ["C#", "E#", "B#", "D#"],
        baseFret: 5,
      },
      {
        fingers: "x,x,4,1,2,1",
        notes: ["C#", "D#", "G#", "B#"],
        baseFret: 5,
      },
    ],
  },
  "C#m11": {
    root: "C#",
    type: "m11",
    structure: ["1", "b3", "5", "b7", "9", "11"],
    positions: [
      {
        fingers: "x,1,1,1,2,1",
        notes: ["C#", "F#", "B", "E", "G#"],
        baseFret: 5,
      },
      {
        fingers: "2,x,3,4,1,x",
        notes: ["C#", "B", "E", "F#"],
        baseFret: 5,
      },
      {
        fingers: "0,1,1,1,2,1",
        notes: ["E", "C#", "F#", "B", "E", "G#"],
        baseFret: 1,
      },
      {
        fingers: "x,1,1,1,2,x",
        notes: ["C#", "F#", "B", "E"],
        baseFret: 5,
      },
      {
        fingers: "x,2,1,3,1,1",
        notes: ["C#", "E", "B", "C#", "F#"],
        baseFret: 5,
      },
      {
        fingers: "x,2,1,3,4,1",
        notes: ["C#", "E", "B", "D#", "F#"],
        baseFret: 5,
      },
      {
        fingers: "2,x,3,4,1,1",
        notes: ["C#", "B", "E", "F#", "B"],
        baseFret: 5,
      },
    ],
  },
  "C#m7b5": {
    root: "C#",
    type: "m7b5",
    structure: ["1", "b3", "b5", "b7"],
    positions: [
      {
        fingers: "x,3,1,0,0,0",
        notes: ["C#", "E", "G", "B", "E"],
        baseFret: 1,
      },
      {
        fingers: "x,1,3,2,4,0",
        notes: ["C#", "G", "B", "E", "E"],
        baseFret: 1,
      },
      {
        fingers: "2,x,3,4,1,x",
        notes: ["C#", "B", "E", "G"],
        baseFret: 5,
      },
      {
        fingers: "x,1,3,2,4,x",
        notes: ["C#", "G", "B", "E"],
        baseFret: 5,
      },
      {
        fingers: "x,x,1,3,3,3",
        notes: ["C#", "G", "B", "E"],
        baseFret: 5,
      },
      {
        fingers: "x,1,3,2,4,x",
        notes: ["C#", "G", "B", "E"],
        baseFret: 5,
      },
    ],
  },
  "C#m": {
    root: "C#",
    type: "m",
    structure: ["1", "b3", "5"],
    positions: [
      {
        fingers: "x,1,3,4,2,1",
        notes: ["C#", "G#", "C#", "E", "G#"],
        baseFret: 5,
      },
      {
        fingers: "1,3,4,1,1,1",
        notes: ["C#", "G#", "C#", "E", "G#", "C#"],
        baseFret: 5,
      },
      {
        fingers: "x,x,1,3,4,2",
        notes: ["C#", "G#", "C#", "E"],
        baseFret: 5,
      },
      {
        fingers: "x,1,3,4,2,x",
        notes: ["C#", "G#", "C#", "E"],
        baseFret: 5,
      },
      {
        fingers: "x,3,4,1,1,x",
        notes: ["G#", "C#", "E", "G#"],
        baseFret: 5,
      },
      {
        fingers: "x,3,1,x,x,x",
        notes: ["C#", "E"],
        baseFret: 1,
      },
      {
        fingers: "3,1,x,x,x,x",
        notes: ["C#", "E"],
        baseFret: 1,
      },
      {
        fingers: "x,x,3,1,1,1",
        notes: ["C#", "E", "G#", "C#"],
        baseFret: 5,
      },
    ],
  },
  "C#7b5": {
    root: "C#",
    type: "7b5",
    structure: ["1", "3", "b5", "b7"],
    positions: [
      {
        fingers: "x,1,2,1,3,x",
        notes: ["C#", "G", "B", "E#"],
        baseFret: 5,
      },
      {
        fingers: "x,x,2,4,1,3",
        notes: ["B", "E#", "G", "C#"],
        baseFret: 5,
      },
      {
        fingers: "1,3,2,4,x,x",
        notes: ["C#", "G", "B", "E#"],
        baseFret: 5,
      },
    ],
  },
  "C#9(#11)": {
    root: "C#",
    type: "9(#11)",
    structure: ["1", "3", "5", "b7", "9", "#11"],
    positions: [
      {
        fingers: "x,2,1,3,4,1",
        notes: ["C#", "E#", "B", "D#", "F##"],
        baseFret: 5,
      },
    ],
  },
  "C#m7": {
    root: "C#",
    type: "m7",
    structure: ["1", "b3", "5", "b7"],
    positions: [
      {
        fingers: "x,3,1,4,1,x",
        notes: ["C#", "E", "B", "C#"],
        baseFret: 5,
      },
      {
        fingers: "x,1,3,1,2,1",
        notes: ["C#", "G#", "B", "E", "G#"],
        baseFret: 5,
      },
      {
        fingers: "1,3,1,1,4,1",
        notes: ["C#", "G#", "B", "E", "B", "C#"],
        baseFret: 5,
      },
      {
        fingers: "1,3,1,1,1,1",
        notes: ["C#", "G#", "B", "E", "G#", "C#"],
        baseFret: 5,
      },
      {
        fingers: "2,x,3,3,x,x",
        notes: ["C#", "B", "E"],
        baseFret: 1,
      },
      {
        fingers: "x,2,1,3,x,x",
        notes: ["C#", "E", "B"],
        baseFret: 1,
      },
      {
        fingers: "2,x,3,3,3,x",
        notes: ["C#", "B", "E", "G#"],
        baseFret: 1,
      },
      {
        fingers: "x,1,x,2,4,3",
        notes: ["C#", "B", "E", "G#"],
        baseFret: 5,
      },
      {
        fingers: "2,1,3,4,0,0",
        notes: ["C#", "E", "B", "E", "B", "E"],
        baseFret: 1,
      },
      {
        fingers: "x,2,1,3,4,x",
        notes: ["C#", "E", "B", "E"],
        baseFret: 5,
      },
      {
        fingers: "x,1,3,1,2,x",
        notes: ["C#", "G#", "B", "E"],
        baseFret: 5,
      },
      {
        fingers: "x,1,3,4,0,0",
        notes: ["C#", "G#", "C#", "B", "E"],
        baseFret: 1,
      },
      {
        fingers: "x,1,x,1,2,4",
        notes: ["C#", "B", "E", "B"],
        baseFret: 5,
      },
      {
        fingers: "x,1,x,2,3,x",
        notes: ["C#", "B", "E"],
        baseFret: 1,
      },
      {
        fingers: "1,1,3,4,0,0",
        notes: ["G#", "C#", "G#", "C#", "B", "E"],
        baseFret: 1,
      },
      {
        fingers: "x,3,x,x,0,0",
        notes: ["C#", "B", "E"],
        baseFret: 1,
      },
      {
        fingers: "1,x,1,1,1,1",
        notes: ["C#", "B", "E", "G#", "C#"],
        baseFret: 5,
      },
    ],
  },
  "C#dim": {
    root: "C#",
    type: "dim",
    structure: ["1", "b3", "b5"],
    positions: [
      {
        fingers: "x,1,2,4,3,x",
        notes: ["C#", "G", "C#", "E"],
        baseFret: 5,
      },
      {
        fingers: "x,x,4,3,1,2",
        notes: ["C#", "E", "G", "C#"],
        baseFret: 5,
      },
      {
        fingers: "1,2,3,1,x,x",
        notes: ["C#", "G", "C#", "E"],
        baseFret: 5,
      },
      {
        fingers: "x,2,x,0,x,1",
        notes: ["C#", "G", "G"],
        baseFret: 1,
      },
      {
        fingers: "x,3,1,x,x,x",
        notes: ["C#", "E"],
        baseFret: 1,
      },
    ],
  },
  "C#6": {
    root: "C#",
    type: "6",
    structure: ["1", "3", "5", "6"],
    positions: [
      {
        fingers: "x,4,2,3,1,x",
        notes: ["C#", "E#", "A#", "C#"],
        baseFret: 5,
      },
      {
        fingers: "x,1,3,3,3,3",
        notes: ["C#", "G#", "C#", "E#", "A#"],
        baseFret: 5,
      },
      {
        fingers: "1,x,3,2,4,1",
        notes: ["C#", "C#", "E#", "A#", "C#"],
        baseFret: 5,
      },
    ],
  },
  "C#7(#5)": {
    root: "C#",
    type: "7(#5)",
    structure: ["1", "3", "#5", "b7"],
    positions: [
      {
        fingers: "x,1,2,1,1,x",
        notes: ["B", "E#", "G##", "C#"],
        baseFret: 5,
      },
      {
        fingers: "x,1,4,1,3,2",
        notes: ["C#", "G##", "B", "E#", "G##"],
        baseFret: 5,
      },
      {
        fingers: "1,x,1,2,3,1",
        notes: ["C#", "B", "E#", "G##", "C#"],
        baseFret: 5,
      },
    ],
  },
  "C#7sus4": {
    root: "C#",
    type: "7sus4",
    structure: ["1", "4", "5", "b7"],
    positions: [
      {
        fingers: "x,2,3,4,1,x",
        notes: ["C#", "F#", "B", "C#"],
        baseFret: 5,
      },
      {
        fingers: "x,1,3,1,4,1",
        notes: ["C#", "G#", "B", "F#", "G#"],
        baseFret: 5,
      },
      {
        fingers: "1,3,1,4,1,1",
        notes: ["C#", "G#", "B", "F#", "G#", "C#"],
        baseFret: 5,
      },
      {
        fingers: "1,x,1,4,x,x",
        notes: ["C#", "B", "F#"],
        baseFret: 1,
      },
    ],
  },
  "C#maj7": {
    root: "C#",
    type: "maj7",
    structure: ["1", "3", "5", "7"],
    positions: [
      {
        fingers: "x,4,3,1,1,1",
        notes: ["C#", "E#", "G#", "B#", "E#"],
        baseFret: 5,
      },
      {
        fingers: "x,1,3,2,4,1",
        notes: ["C#", "G#", "B#", "E#", "G#"],
        baseFret: 5,
      },
      {
        fingers: "x,x,4,3,2,1",
        notes: ["C#", "E#", "G#", "B#"],
        baseFret: 5,
      },
    ],
  },
  "C#5": {
    root: "C#",
    type: "5",
    structure: ["1", "5"],
    positions: [
      {
        fingers: "x,1,3,x,x,x",
        notes: ["C#", "G#"],
        baseFret: 1,
      },
      {
        fingers: "x,1,3,4,x,x",
        notes: ["C#", "G#", "C#"],
        baseFret: 1,
      },
      {
        fingers: "1,1,3,x,x,x",
        notes: ["G#", "C#", "G#"],
        baseFret: 1,
      },
      {
        fingers: "1,3,4,x,x,x",
        notes: ["C#", "G#", "C#"],
        baseFret: 1,
      },
      {
        fingers: "x,x,1,3,4,x",
        notes: ["C#", "G#", "C#"],
        baseFret: 1,
      },
    ],
  },
  "C#m6": {
    root: "C#",
    type: "m6",
    structure: ["1", "b3", "5", "6"],
    positions: [
      {
        fingers: "x,3,1,2,1,x",
        notes: ["C#", "E", "A#", "C#"],
        baseFret: 5,
      },
      {
        fingers: "x,1,x,3,2,4",
        notes: ["C#", "C#", "E", "A#"],
        baseFret: 5,
      },
      {
        fingers: "1,x,3,1,4,1",
        notes: ["C#", "C#", "E", "A#", "C#"],
        baseFret: 5,
      },
      {
        fingers: "3,1,2,x,x,x",
        notes: ["C#", "E", "A#"],
        baseFret: 1,
      },
    ],
  },
  "C#7(b9)": {
    root: "C#",
    type: "7(b9)",
    structure: ["1", "3", "5", "b7", "b9"],
    positions: [
      {
        fingers: "x,2,1,3,1,x",
        notes: ["C#", "E#", "B", "D"],
        baseFret: 5,
      },
      {
        fingers: "3,2,4,1,x,x",
        notes: ["C#", "E#", "B", "D"],
        baseFret: 5,
      },
      {
        fingers: "1,x,1,2,1,3",
        notes: ["C#", "B", "E#", "G#", "D"],
        baseFret: 5,
      },
    ],
  },
  "C#m9": {
    root: "C#",
    type: "m9",
    structure: ["1", "b3", "5", "b7", "9"],
    positions: [
      {
        fingers: "x,2,1,3,4,x",
        notes: ["C#", "E", "B", "D#"],
        baseFret: 5,
      },
      {
        fingers: "3,1,4,2,x,x",
        notes: ["C#", "E", "B", "D#"],
        baseFret: 5,
      },
      {
        fingers: "1,3,1,1,1,4",
        notes: ["C#", "G#", "B", "E", "G#", "D#"],
        baseFret: 5,
      },
      {
        fingers: "x,x,1,1,1,4",
        notes: ["B", "E", "G#", "D#"],
        baseFret: 5,
      },
      {
        fingers: "2,x,1,3,4,x",
        notes: ["G#", "E", "B", "D#"],
        baseFret: 5,
      },
      {
        fingers: "1,x,1,1,1,4",
        notes: ["C#", "B", "E", "G#", "D#"],
        baseFret: 5,
      },
    ],
  },
  "C#sus4": {
    root: "C#",
    type: "sus4",
    structure: ["1", "4", "5"],
    positions: [
      {
        fingers: "x,1,2,3,4,1",
        notes: ["C#", "G#", "C#", "F#", "G#"],
        baseFret: 5,
      },
      {
        fingers: "x,x,1,1,2,4",
        notes: ["G#", "C#", "F#", "C#"],
        baseFret: 5,
      },
      {
        fingers: "1,1,3,4,1,1",
        notes: ["C#", "F#", "C#", "F#", "G#", "C#"],
        baseFret: 5,
      },
    ],
  },
  "C#6/9": {
    root: "C#",
    type: "6/9",
    structure: ["1", "3", "5", "6", "9"],
    positions: [
      {
        fingers: "x,2,1,1,3,4",
        notes: ["C#", "E#", "A#", "D#", "G#"],
        baseFret: 5,
      },
      {
        fingers: "2,1,1,1,3,4",
        notes: ["C#", "E#", "A#", "D#", "G#", "C#"],
        baseFret: 5,
      },
      {
        fingers: "x,x,2,1,3,4",
        notes: ["C#", "E#", "A#", "D#"],
        baseFret: 5,
      },
    ],
  },
  "D#13": {
    root: "D#",
    type: "13",
    structure: ["1", "3", "5", "b7", "9", "11", "13"],
    positions: [
      {
        fingers: "x,2,1,3,3,4",
        notes: ["D#", "F##", "C#", "E#", "B#"],
        baseFret: 5,
      },
      {
        fingers: "3,x,4,2,1,1",
        notes: ["D#", "C#", "E#", "F##", "B#"],
        baseFret: 5,
      },
      {
        fingers: "1,x,1,2,3,4",
        notes: ["D#", "C#", "F##", "B#", "E#"],
        baseFret: 5,
      },
    ],
  },
  "D#7(#9)": {
    root: "D#",
    type: "7(#9)",
    structure: ["1", "3", "5", "b7", "#9"],
    positions: [
      {
        fingers: "x,x,1,0,3,4",
        notes: ["D#", "F##", "C#", "E##"],
        baseFret: 1,
      },
      {
        fingers: "x,2,1,3,4,x",
        notes: ["D#", "F##", "C#", "E##"],
        baseFret: 5,
      },
      {
        fingers: "1,3,1,2,1,4",
        notes: ["D#", "A#", "C#", "F##", "A#", "E##"],
        baseFret: 5,
      },
    ],
  },
  "D#9": {
    root: "D#",
    type: "9",
    structure: ["1", "3", "5", "b7", "9"],
    positions: [
      {
        fingers: "x,2,1,3,4,x",
        notes: ["D#", "F##", "C#", "E#"],
        baseFret: 5,
      },
      {
        fingers: "x,1,3,2,4,x",
        notes: ["F##", "C#", "E#", "A#"],
        baseFret: 5,
      },
      {
        fingers: "x,x,2,1,3,4",
        notes: ["C#", "E#", "A#", "D#"],
        baseFret: 5,
      },
    ],
  },
  "D#9b5": {
    root: "D#",
    type: "9b5",
    structure: ["1", "3", "b5", "b7", "9"],
    positions: [
      {
        fingers: "x,x,1,2,3,1",
        notes: ["D#", "A", "C#", "E#"],
        baseFret: 5,
      },
      {
        fingers: "1,2,1,3,4,1",
        notes: ["A", "D#", "F##", "C#", "E#", "A"],
        baseFret: 5,
      },
      {
        fingers: "2,1,3,1,1,4",
        notes: ["D#", "F##", "C#", "E#", "A", "D#"],
        baseFret: 5,
      },
    ],
  },
  "D#7": {
    root: "D#",
    type: "7",
    structure: ["1", "3", "5", "b7"],
    positions: [
      {
        fingers: "x,3,2,4,1,x",
        notes: ["D#", "F##", "C#", "D#"],
        baseFret: 5,
      },
      {
        fingers: "x,1,3,1,4,1",
        notes: ["D#", "A#", "C#", "F##", "A#"],
        baseFret: 5,
      },
      {
        fingers: "1,3,1,2,4,1",
        notes: ["D#", "A#", "C#", "F##", "C#", "D#"],
        baseFret: 5,
      },
      {
        fingers: "x,2,1,3,x,x",
        notes: ["D#", "F##", "C#"],
        baseFret: 1,
      },
    ],
  },
  "D#dim7": {
    root: "D#",
    type: "dim7",
    structure: ["1", "b3", "b5", "bb7"],
    positions: [
      {
        fingers: "2,4,1,3,x,x",
        notes: ["A", "D#", "F#", "C"],
        baseFret: 5,
      },
      {
        fingers: "x,2,3,1,4,x",
        notes: ["F#", "C", "D#", "A"],
        baseFret: 5,
      },
      {
        fingers: "x,x,1,3,2,4",
        notes: ["C", "F#", "A", "D#"],
        baseFret: 5,
      },
      {
        fingers: "x,2,3,1,4,x",
        notes: ["D#", "A", "C", "F#"],
        baseFret: 5,
      },
      {
        fingers: "x,x,1,3,2,4",
        notes: ["D#", "A", "C", "F#"],
        baseFret: 5,
      },
      {
        fingers: "x,2,3,1,4,1",
        notes: ["D#", "A", "C", "F#", "A"],
        baseFret: 5,
      },
      {
        fingers: "x,x,1,3,2,4",
        notes: ["F#", "C", "D#", "A"],
        baseFret: 5,
      },
      {
        fingers: "x,x,1,3,2,4",
        notes: ["A", "D#", "F#", "C"],
        baseFret: 5,
      },
      {
        fingers: "3,x,1,4,2,x",
        notes: ["D#", "C", "F#", "A"],
        baseFret: 5,
      },
      {
        fingers: "x,0,1,3,2,4",
        notes: ["A", "F#", "C", "D#", "A"],
        baseFret: 1,
      },
      {
        fingers: "x,0,1,3,2,4",
        notes: ["A", "D#", "A", "C", "F#"],
        baseFret: 1,
      },
    ],
  },
  "D#aug": {
    root: "D#",
    type: "aug",
    structure: ["1", "3", "#5"],
    positions: [
      {
        fingers: "x,3,2,0,0,x",
        notes: ["A##", "D#", "F##", "A##"],
        baseFret: 1,
      },
      {
        fingers: "4,3,2,0,x,x",
        notes: ["F##", "A##", "D#", "F##"],
        baseFret: 1,
      },
      {
        fingers: "x,x,4,2,3,1",
        notes: ["D#", "F##", "A##", "D#"],
        baseFret: 5,
      },
    ],
  },
  "D#maj": {
    root: "D#",
    type: "maj",
    structure: ["1", "3", "5"],
    positions: [
      {
        fingers: "x,4,3,1,2,1",
        notes: ["D#", "F##", "A#", "D#", "F##"],
        baseFret: 5,
      },
      {
        fingers: "x,1,3,3,3,x",
        notes: ["D#", "A#", "D#", "F##"],
        baseFret: 5,
      },
      {
        fingers: "1,3,4,2,1,1",
        notes: ["D#", "A#", "D#", "F##", "A#", "D#"],
        baseFret: 5,
      },
    ],
  },
  "D#11": {
    root: "D#",
    type: "11",
    structure: ["1", "3", "5", "b7", "9", "11"],
    positions: [
      {
        fingers: "x,x,1,1,2,1",
        notes: ["D#", "G#", "C#", "E#"],
        baseFret: 5,
      },
      {
        fingers: "x,1,1,1,1,1",
        notes: ["D#", "G#", "C#", "E#", "A#"],
        baseFret: 5,
      },
      {
        fingers: "4,x,3,2,1,1",
        notes: ["D#", "C#", "E#", "G#", "C#"],
        baseFret: 5,
      },
    ],
  },
  "D#maj9": {
    root: "D#",
    type: "maj9",
    structure: ["1", "3", "5", "7", "9"],
    positions: [
      {
        fingers: "x,x,1,0,4,2",
        notes: ["D#", "F##", "C##", "E#"],
        baseFret: 1,
      },
      {
        fingers: "x,2,1,4,3,x",
        notes: ["D#", "F##", "C##", "E#"],
        baseFret: 5,
      },
      {
        fingers: "x,x,4,1,2,1",
        notes: ["D#", "E#", "A#", "C##"],
        baseFret: 5,
      },
    ],
  },
  "D#m11": {
    root: "D#",
    type: "m11",
    structure: ["1", "b3", "5", "b7", "9", "11"],
    positions: [
      {
        fingers: "x,1,1,1,2,1",
        notes: ["D#", "G#", "C#", "F#", "A#"],
        baseFret: 5,
      },
    ],
  },
  "D#m": {
    root: "D#",
    type: "m",
    structure: ["1", "b3", "5"],
    positions: [
      {
        fingers: "x,x,3,2,4,1",
        notes: ["F#", "A#", "D#", "F#"],
        baseFret: 5,
      },
      {
        fingers: "x,1,3,4,2,1",
        notes: ["D#", "A#", "D#", "F#", "A#"],
        baseFret: 5,
      },
      {
        fingers: "1,3,4,1,1,1",
        notes: ["D#", "A#", "D#", "F#", "A#", "D#"],
        baseFret: 5,
      },
    ],
  },
  "D#7b5": {
    root: "D#",
    type: "7b5",
    structure: ["1", "3", "b5", "b7"],
    positions: [
      {
        fingers: "x,x,1,2,3,4",
        notes: ["D#", "A", "C#", "F##"],
        baseFret: 5,
      },
      {
        fingers: "x,1,2,1,3,x",
        notes: ["D#", "A", "C#", "F##"],
        baseFret: 5,
      },
      {
        fingers: "x,x,2,4,1,3",
        notes: ["C#", "F##", "A", "D#"],
        baseFret: 5,
      },
    ],
  },
  "D#m7": {
    root: "D#",
    type: "m7",
    structure: ["1", "b3", "5", "b7"],
    positions: [
      {
        fingers: "x,3,1,4,1,x",
        notes: ["D#", "F#", "C#", "D#"],
        baseFret: 5,
      },
      {
        fingers: "x,1,3,1,2,1",
        notes: ["D#", "A#", "C#", "F#", "A#"],
        baseFret: 5,
      },
      {
        fingers: "1,3,1,1,4,1",
        notes: ["D#", "A#", "C#", "F#", "C#", "D#"],
        baseFret: 5,
      },
    ],
  },
  "D#dim": {
    root: "D#",
    type: "dim",
    structure: ["1", "b3", "b5"],
    positions: [
      {
        fingers: "x,x,1,2,3,4",
        notes: ["D#", "A", "D#", "F#"],
        baseFret: 5,
      },
      {
        fingers: "x,1,2,3,4,x",
        notes: ["D#", "A", "D#", "F#"],
        baseFret: 5,
      },
      {
        fingers: "x,x,4,3,1,2",
        notes: ["D#", "F#", "A", "D#"],
        baseFret: 5,
      },
    ],
  },
  "D#6": {
    root: "D#",
    type: "6",
    structure: ["1", "3", "5", "6"],
    positions: [
      {
        fingers: "x,4,2,3,1,x",
        notes: ["D#", "F##", "B#", "D#"],
        baseFret: 5,
      },
      {
        fingers: "x,1,3,3,3,3",
        notes: ["D#", "A#", "D#", "F##", "B#"],
        baseFret: 5,
      },
      {
        fingers: "1,x,3,2,4,1",
        notes: ["D#", "D#", "F##", "B#", "D#"],
        baseFret: 5,
      },
    ],
  },
  "D#7(#5)": {
    root: "D#",
    type: "7(#5)",
    structure: ["1", "3", "#5", "b7"],
    positions: [
      {
        fingers: "x,1,2,1,1,x",
        notes: ["C#", "F##", "A##", "D#"],
        baseFret: 5,
      },
      {
        fingers: "x,1,4,1,3,2",
        notes: ["D#", "A##", "C#", "F##", "A##"],
        baseFret: 5,
      },
      {
        fingers: "1,x,1,2,3,1",
        notes: ["D#", "C#", "F##", "A##", "D#"],
        baseFret: 5,
      },
    ],
  },
  "D#7sus4": {
    root: "D#",
    type: "7sus4",
    structure: ["1", "4", "5", "b7"],
    positions: [
      {
        fingers: "x,2,3,4,1,x",
        notes: ["D#", "G#", "C#", "D#"],
        baseFret: 5,
      },
      {
        fingers: "x,1,3,1,4,1",
        notes: ["D#", "A#", "C#", "G#", "A#"],
        baseFret: 5,
      },
      {
        fingers: "1,3,1,4,1,1",
        notes: ["D#", "A#", "C#", "G#", "A#", "D#"],
        baseFret: 5,
      },
    ],
  },
  "D#maj7": {
    root: "D#",
    type: "maj7",
    structure: ["1", "3", "5", "7"],
    positions: [
      {
        fingers: "x,4,3,1,1,1",
        notes: ["D#", "F##", "A#", "C##", "F##"],
        baseFret: 5,
      },
      {
        fingers: "x,1,3,2,4,1",
        notes: ["D#", "A#", "C##", "F##", "A#"],
        baseFret: 5,
      },
      {
        fingers: "x,x,4,3,2,1",
        notes: ["D#", "F##", "A#", "C##"],
        baseFret: 5,
      },
    ],
  },
  "D#5": {
    root: "D#",
    type: "5",
    structure: ["1", "5"],
    positions: [
      {
        fingers: "x,1,3,4,x,x",
        notes: ["D#", "A#", "D#"],
        baseFret: 1,
      },
      {
        fingers: "x,1,3,x,x,x",
        notes: ["D#", "A#"],
        baseFret: 1,
      },
      {
        fingers: "1,1,3,x,x,x",
        notes: ["A#", "D#", "A#"],
        baseFret: 1,
      },
    ],
  },
  "D#m6": {
    root: "D#",
    type: "m6",
    structure: ["1", "b3", "5", "6"],
    positions: [
      {
        fingers: "x,3,1,2,1,x",
        notes: ["D#", "F#", "B#", "D#"],
        baseFret: 5,
      },
      {
        fingers: "x,1,x,3,2,4",
        notes: ["D#", "D#", "F#", "B#"],
        baseFret: 5,
      },
      {
        fingers: "1,x,3,1,4,1",
        notes: ["D#", "D#", "F#", "B#", "D#"],
        baseFret: 5,
      },
    ],
  },
  "D#7(b9)": {
    root: "D#",
    type: "7(b9)",
    structure: ["1", "3", "5", "b7", "b9"],
    positions: [
      {
        fingers: "x,x,1,0,3,0",
        notes: ["D#", "F##", "C#", "E"],
        baseFret: 1,
      },
      {
        fingers: "x,2,1,3,1,x",
        notes: ["D#", "F##", "C#", "E"],
        baseFret: 5,
      },
      {
        fingers: "1,x,1,2,1,3",
        notes: ["D#", "C#", "F##", "A#", "E"],
        baseFret: 5,
      },
    ],
  },
  "D#m9": {
    root: "D#",
    type: "m9",
    structure: ["1", "b3", "5", "b7", "9"],
    positions: [
      {
        fingers: "x,2,1,3,4,x",
        notes: ["D#", "F#", "C#", "E#"],
        baseFret: 5,
      },
      {
        fingers: "3,1,4,2,x,x",
        notes: ["D#", "F#", "C#", "E#"],
        baseFret: 5,
      },
      {
        fingers: "1,3,1,1,1,4",
        notes: ["D#", "A#", "C#", "F#", "A#", "E#"],
        baseFret: 5,
      },
    ],
  },
  "D#sus4": {
    root: "D#",
    type: "sus4",
    structure: ["1", "4", "5"],
    positions: [
      {
        fingers: "x,3,4,1,2,x",
        notes: ["D#", "G#", "A#", "D#"],
        baseFret: 5,
      },
      {
        fingers: "x,1,2,3,4,1",
        notes: ["D#", "A#", "D#", "G#", "A#"],
        baseFret: 5,
      },
      {
        fingers: "1,1,3,4,1,1",
        notes: ["D#", "G#", "D#", "G#", "A#", "D#"],
        baseFret: 5,
      },
    ],
  },
  "D#6/9": {
    root: "D#",
    type: "6/9",
    structure: ["1", "3", "5", "6", "9"],
    positions: [
      {
        fingers: "x,x,1,0,2,3",
        notes: ["D#", "F##", "B#", "E#"],
        baseFret: 1,
      },
      {
        fingers: "x,2,1,1,3,4",
        notes: ["D#", "F##", "B#", "E#", "A#"],
        baseFret: 5,
      },
      {
        fingers: "2,1,1,1,3,4",
        notes: ["D#", "F##", "B#", "E#", "A#", "D#"],
        baseFret: 5,
      },
    ],
  },
  "F#9(#5)": {
    root: "F#",
    type: "9(#5)",
    structure: ["1", "3", "#5", "b7", "9"],
    positions: [
      {
        fingers: "x,1,2,1,1,x",
        notes: ["E", "A#", "C##", "F#"],
        baseFret: 5,
      },
    ],
  },
  "F#13": {
    root: "F#",
    type: "13",
    structure: ["1", "3", "5", "b7", "9", "11", "13"],
    positions: [
      {
        fingers: "1,x,1,2,3,4",
        notes: ["F#", "E", "A#", "D#", "G#"],
        baseFret: 5,
      },
      {
        fingers: "x,2,1,3,3,4",
        notes: ["F#", "A#", "E", "G#", "D#"],
        baseFret: 5,
      },
      {
        fingers: "x,1,3,1,1,4",
        notes: ["F#", "C#", "E", "G#", "D#"],
        baseFret: 5,
      },
      {
        fingers: "1,x,2,3,4,x",
        notes: ["F#", "E", "A#", "D#"],
        baseFret: 5,
      },
      {
        fingers: "x,1,3,4,2,x",
        notes: ["E", "A#", "D#", "F#"],
        baseFret: 5,
      },
      {
        fingers: "x,x,1,2,2,4",
        notes: ["A#", "E", "G#", "D#"],
        baseFret: 5,
      },
    ],
  },
  "F#7(#9)": {
    root: "F#",
    type: "7(#9)",
    structure: ["1", "3", "5", "b7", "#9"],
    positions: [
      {
        fingers: "2,1,3,3,3,3",
        notes: ["F#", "A#", "E", "G##", "C#", "F#"],
        baseFret: 5,
      },
      {
        fingers: "1,3,1,2,1,4",
        notes: ["F#", "C#", "E", "A#", "C#", "G##"],
        baseFret: 5,
      },
      {
        fingers: "x,2,1,3,4,x",
        notes: ["F#", "A#", "E", "G##"],
        baseFret: 5,
      },
    ],
  },
  "F#9": {
    root: "F#",
    type: "9",
    structure: ["1", "3", "5", "b7", "9"],
    positions: [
      {
        fingers: "x,x,2,1,3,4",
        notes: ["E", "G#", "C#", "F#"],
        baseFret: 5,
      },
      {
        fingers: "x,x,1,3,2,1",
        notes: ["F#", "C#", "E", "G#"],
        baseFret: 5,
      },
      {
        fingers: "x,2,1,3,4,x",
        notes: ["F#", "A#", "E", "G#"],
        baseFret: 5,
      },
      {
        fingers: "x,2,1,3,3,3",
        notes: ["F#", "A#", "E", "G#", "C#"],
        baseFret: 5,
      },
      {
        fingers: "x,x,3,2,1,4",
        notes: ["E", "G#", "A#", "F#"],
        baseFret: 5,
      },
      {
        fingers: "x,1,3,2,4,x",
        notes: ["A#", "E", "G#", "C#"],
        baseFret: 5,
      },
    ],
  },
  "F#9b5": {
    root: "F#",
    type: "9b5",
    structure: ["1", "3", "b5", "b7", "9"],
    positions: [
      {
        fingers: "2,1,3,1,1,4",
        notes: ["F#", "A#", "E", "G#", "C", "F#"],
        baseFret: 5,
      },
      {
        fingers: "x,x,1,2,3,1",
        notes: ["F#", "C", "E", "G#"],
        baseFret: 5,
      },
      {
        fingers: "1,2,1,3,4,1",
        notes: ["C", "F#", "A#", "E", "G#", "C"],
        baseFret: 5,
      },
    ],
  },
  "F#7": {
    root: "F#",
    type: "7",
    structure: ["1", "3", "5", "b7"],
    positions: [
      {
        fingers: "1,3,1,2,4,1",
        notes: ["F#", "C#", "E", "A#", "E", "F#"],
        baseFret: 5,
      },
      {
        fingers: "x,3,2,4,1,x",
        notes: ["F#", "A#", "E", "F#"],
        baseFret: 5,
      },
      {
        fingers: "x,1,3,1,4,1",
        notes: ["F#", "C#", "E", "A#", "C#"],
        baseFret: 5,
      },
      {
        fingers: "1,3,1,2,1,1",
        notes: ["F#", "C#", "E", "A#", "C#", "F#"],
        baseFret: 5,
      },
      {
        fingers: "1,x,2,4,3,x",
        notes: ["F#", "E", "A#", "C#"],
        baseFret: 5,
      },
      {
        fingers: "x,x,x,2,1,3",
        notes: ["C#", "E", "A#"],
        baseFret: 1,
      },
    ],
  },
  "F#dim7": {
    root: "F#",
    type: "dim7",
    structure: ["1", "b3", "b5", "bb7"],
    positions: [
      {
        fingers: "2,4,1,3,x,x",
        notes: ["A", "Eb", "F#", "C"],
        baseFret: 5,
      },
      {
        fingers: "x,2,3,1,4,x",
        notes: ["A", "Eb", "F#", "C"],
        baseFret: 5,
      },
      {
        fingers: "x,x,1,3,2,4",
        notes: ["Eb", "A", "C", "F#"],
        baseFret: 5,
      },
      {
        fingers: "x,x,1,3,2,4",
        notes: ["F#", "C", "Eb", "A"],
        baseFret: 5,
      },
      {
        fingers: "1,2,3,1,4,1",
        notes: ["F#", "C", "F#", "A", "Eb", "F#"],
        baseFret: 5,
      },
      {
        fingers: "x,2,3,1,4,x",
        notes: ["F#", "C", "Eb", "A"],
        baseFret: 5,
      },
      {
        fingers: "x,x,1,3,2,4",
        notes: ["Eb", "A", "C", "F#"],
        baseFret: 5,
      },
      {
        fingers: "2,x,1,3,1,x",
        notes: ["F#", "Eb", "A", "C"],
        baseFret: 5,
      },
      {
        fingers: "x,2,3,1,4,x",
        notes: ["Eb", "A", "C", "F#"],
        baseFret: 5,
      },
      {
        fingers: "x,x,1,3,2,4",
        notes: ["C", "F#", "A", "Eb"],
        baseFret: 5,
      },
      {
        fingers: "2,x,1,3,1,x",
        notes: ["C", "A", "Eb", "F#"],
        baseFret: 5,
      },
    ],
  },
  "F#aug": {
    root: "F#",
    type: "aug",
    structure: ["1", "3", "#5"],
    positions: [
      {
        fingers: "x,3,2,1,1,x",
        notes: ["C##", "F#", "A#", "C##"],
        baseFret: 5,
      },
      {
        fingers: "4,3,2,1,x,x",
        notes: ["A#", "C##", "F#", "A#"],
        baseFret: 5,
      },
      {
        fingers: "x,x,4,2,3,1",
        notes: ["C##", "F#", "A#", "C##"],
        baseFret: 5,
      },
      {
        fingers: "2,1,0,x,x,x",
        notes: ["F#", "A#", "C##"],
        baseFret: 1,
      },
      {
        fingers: "x,3,2,1,1,x",
        notes: ["F#", "A#", "C##", "F#"],
        baseFret: 5,
      },
    ],
  },
  "F#maj": {
    root: "F#",
    type: "maj",
    structure: ["1", "3", "5"],
    positions: [
      {
        fingers: "1,3,4,2,1,1",
        notes: ["F#", "C#", "F#", "A#", "C#", "F#"],
        baseFret: 5,
      },
      {
        fingers: "x,4,3,1,2,1",
        notes: ["F#", "A#", "C#", "F#", "A#"],
        baseFret: 5,
      },
      {
        fingers: "x,1,3,3,3,x",
        notes: ["F#", "C#", "F#", "A#"],
        baseFret: 5,
      },
      {
        fingers: "1,3,4,2,x,x",
        notes: ["F#", "C#", "F#", "A#"],
        baseFret: 5,
      },
      {
        fingers: "x,x,3,1,2,x",
        notes: ["A#", "C#", "F#"],
        baseFret: 1,
      },
      {
        fingers: "2,1,x,x,x,x",
        notes: ["F#", "A#"],
        baseFret: 1,
      },
      {
        fingers: "x,x,x,1,3,2",
        notes: ["C#", "F#", "A#"],
        baseFret: 1,
      },
      {
        fingers: "x,x,3,2,1,1",
        notes: ["F#", "A#", "C#", "F#"],
        baseFret: 5,
      },
      {
        fingers: "x,x,3,3,3,x",
        notes: ["C#", "F#", "A#"],
        baseFret: 1,
      },
      {
        fingers: "1,3,x,2,x,x",
        notes: ["F#", "C#", "A#"],
        baseFret: 1,
      },
      {
        fingers: "1,4,x,x,x,x",
        notes: ["A#", "F#"],
        baseFret: 1,
      },
    ],
  },
  "F#11": {
    root: "F#",
    type: "11",
    structure: ["1", "3", "5", "b7", "9", "11"],
    positions: [
      {
        fingers: "2,x,3,1,0,0",
        notes: ["F#", "E", "G#", "B", "E"],
        baseFret: 1,
      },
      {
        fingers: "x,x,1,1,2,1",
        notes: ["F#", "B", "E", "G#"],
        baseFret: 5,
      },
      {
        fingers: "x,1,1,1,1,1",
        notes: ["F#", "B", "E", "G#", "C#"],
        baseFret: 5,
      },
    ],
  },
  "F#maj9": {
    root: "F#",
    type: "maj9",
    structure: ["1", "3", "5", "7", "9"],
    positions: [
      {
        fingers: "x,x,4,1,2,1",
        notes: ["F#", "G#", "C#", "E#"],
        baseFret: 5,
      },
      {
        fingers: "x,4,1,1,1,1",
        notes: ["F#", "G#", "C#", "E#", "A#"],
        baseFret: 5,
      },
      {
        fingers: "x,2,1,4,3,x",
        notes: ["F#", "A#", "E#", "G#"],
        baseFret: 5,
      },
    ],
  },
  "F#m11": {
    root: "F#",
    type: "m11",
    structure: ["1", "b3", "5", "b7", "9", "11"],
    positions: [
      {
        fingers: "x,3,1,4,0,0",
        notes: ["F#", "A", "E", "B", "E"],
        baseFret: 1,
      },
      {
        fingers: "1,3,4,1,0,0",
        notes: ["F#", "C#", "F#", "A", "B", "E"],
        baseFret: 1,
      },
      {
        fingers: "x,1,1,1,2,x",
        notes: ["F#", "B", "E", "A"],
        baseFret: 5,
      },
      {
        fingers: "2,x,3,4,0,x",
        notes: ["F#", "E", "A", "B"],
        baseFret: 1,
      },
      {
        fingers: "2,x,3,4,0,0",
        notes: ["F#", "E", "A", "B", "E"],
        baseFret: 1,
      },
      {
        fingers: "x,1,3,4,0,0",
        notes: ["F#", "C#", "F#", "B", "E"],
        baseFret: 1,
      },
      {
        fingers: "x,x,3,1,4,x",
        notes: ["C#", "E", "B"],
        baseFret: 1,
      },
      {
        fingers: "x,1,4,1,2,1",
        notes: ["C#", "A", "B", "E", "G#"],
        baseFret: 5,
      },
    ],
  },
  "F#m": {
    root: "F#",
    type: "m",
    structure: ["1", "b3", "5"],
    positions: [
      {
        fingers: "1,3,4,1,1,1",
        notes: ["F#", "C#", "F#", "A", "C#", "F#"],
        baseFret: 5,
      },
      {
        fingers: "x,x,1,3,4,2",
        notes: ["F#", "C#", "F#", "A"],
        baseFret: 5,
      },
      {
        fingers: "x,1,3,4,2,1",
        notes: ["F#", "C#", "F#", "A", "C#"],
        baseFret: 5,
      },
      {
        fingers: "x,1,3,4,2,x",
        notes: ["F#", "C#", "F#", "A"],
        baseFret: 5,
      },
      {
        fingers: "x,x,3,1,1,1",
        notes: ["F#", "A", "C#", "F#"],
        baseFret: 5,
      },
    ],
  },
  "F#7b5": {
    root: "F#",
    type: "7b5",
    structure: ["1", "3", "b5", "b7"],
    positions: [
      {
        fingers: "1,3,2,4,x,x",
        notes: ["F#", "C", "E", "A#"],
        baseFret: 5,
      },
      {
        fingers: "x,x,1,2,3,4",
        notes: ["F#", "C", "E", "A#"],
        baseFret: 5,
      },
      {
        fingers: "x,1,2,1,3,x",
        notes: ["F#", "C", "E", "A#"],
        baseFret: 5,
      },
    ],
  },
  "F#m7": {
    root: "F#",
    type: "m7",
    structure: ["1", "b3", "5", "b7"],
    positions: [
      {
        fingers: "1,3,1,1,4,1",
        notes: ["F#", "C#", "E", "A", "E", "F#"],
        baseFret: 5,
      },
      {
        fingers: "x,x,1,4,2,3",
        notes: ["F#", "C#", "E", "A"],
        baseFret: 5,
      },
      {
        fingers: "x,1,3,1,2,1",
        notes: ["F#", "C#", "E", "A", "C#"],
        baseFret: 5,
      },
      {
        fingers: "1,3,1,1,1,1",
        notes: ["F#", "C#", "E", "A", "C#", "F#"],
        baseFret: 5,
      },
      {
        fingers: "x,2,1,3,4,x",
        notes: ["F#", "A", "E", "A"],
        baseFret: 5,
      },
      {
        fingers: "2,x,3,3,3,x",
        notes: ["F#", "E", "A", "C#"],
        baseFret: 1,
      },
      {
        fingers: "2,x,3,3,x,x",
        notes: ["F#", "E", "A"],
        baseFret: 1,
      },
      {
        fingers: "x,2,x,3,4,x",
        notes: ["F#", "E", "A"],
        baseFret: 1,
      },
      {
        fingers: "x,x,1,1,1,1",
        notes: ["E", "A", "C#", "F#"],
        baseFret: 5,
      },
      {
        fingers: "1,3,1,1,1,4",
        notes: ["F#", "C#", "E", "A", "C#", "A"],
        baseFret: 5,
      },
    ],
  },
  "F#dim": {
    root: "F#",
    type: "dim",
    structure: ["1", "b3", "b5"],
    positions: [
      {
        fingers: "1,2,3,1,x,x",
        notes: ["F#", "C", "F#", "A"],
        baseFret: 5,
      },
      {
        fingers: "x,x,1,2,4,3",
        notes: ["F#", "C", "F#", "A"],
        baseFret: 5,
      },
      {
        fingers: "x,1,2,3,4,x",
        notes: ["F#", "C", "F#", "A"],
        baseFret: 5,
      },
      {
        fingers: "x,x,3,1,4,x",
        notes: ["A", "C", "F#"],
        baseFret: 1,
      },
      {
        fingers: "2,x,4,3,1,x",
        notes: ["F#", "F#", "A", "C"],
        baseFret: 5,
      },
      {
        fingers: "x,0,1,2,4,3",
        notes: ["A", "F#", "C", "F#", "A"],
        baseFret: 1,
      },
    ],
  },
  "F#6": {
    root: "F#",
    type: "6",
    structure: ["1", "3", "5", "6"],
    positions: [
      {
        fingers: "1,x,3,2,4,1",
        notes: ["F#", "F#", "A#", "D#", "F#"],
        baseFret: 5,
      },
      {
        fingers: "x,4,2,3,1,x",
        notes: ["F#", "A#", "D#", "F#"],
        baseFret: 5,
      },
      {
        fingers: "x,1,3,3,3,3",
        notes: ["F#", "C#", "F#", "A#", "D#"],
        baseFret: 5,
      },
      {
        fingers: "2,x,1,4,3,x",
        notes: ["F#", "D#", "A#", "C#"],
        baseFret: 5,
      },
    ],
  },
  "F#7(#5)": {
    root: "F#",
    type: "7(#5)",
    structure: ["1", "3", "#5", "b7"],
    positions: [
      {
        fingers: "1,x,1,2,3,1",
        notes: ["F#", "E", "A#", "C##", "F#"],
        baseFret: 5,
      },
      {
        fingers: "x,1,2,1,1,x",
        notes: ["E", "A#", "C##", "F#"],
        baseFret: 5,
      },
      {
        fingers: "x,1,4,1,3,2",
        notes: ["F#", "C##", "E", "A#", "C##"],
        baseFret: 5,
      },
    ],
  },
  "F#7sus4": {
    root: "F#",
    type: "7sus4",
    structure: ["1", "4", "5", "b7"],
    positions: [
      {
        fingers: "1,3,1,4,1,1",
        notes: ["F#", "C#", "E", "B", "C#", "F#"],
        baseFret: 5,
      },
      {
        fingers: "x,2,3,4,1,x",
        notes: ["F#", "B", "E", "F#"],
        baseFret: 5,
      },
      {
        fingers: "x,1,3,1,4,1",
        notes: ["F#", "C#", "E", "B", "C#"],
        baseFret: 5,
      },
      {
        fingers: "x,x,3,4,2,0",
        notes: ["F#", "B", "C#", "E"],
        baseFret: 1,
      },
    ],
  },
  "F#maj7": {
    root: "F#",
    type: "maj7",
    structure: ["1", "3", "5", "7"],
    positions: [
      {
        fingers: "1,4,2,3,1,x",
        notes: ["F#", "C#", "E#", "A#", "C#"],
        baseFret: 5,
      },
      {
        fingers: "x,4,3,1,1,1",
        notes: ["F#", "A#", "C#", "E#", "A#"],
        baseFret: 5,
      },
      {
        fingers: "x,1,3,2,4,1",
        notes: ["F#", "C#", "E#", "A#", "C#"],
        baseFret: 5,
      },
    ],
  },
  "F#5": {
    root: "F#",
    type: "5",
    structure: ["1", "5"],
    positions: [
      {
        fingers: "1,3,x,x,x,x",
        notes: ["F#", "C#"],
        baseFret: 1,
      },
      {
        fingers: "1,3,4,x,x,x",
        notes: ["F#", "C#", "F#"],
        baseFret: 1,
      },
      {
        fingers: "x,1,3,4,x,x",
        notes: ["F#", "C#", "F#"],
        baseFret: 1,
      },
    ],
  },
  "F#7(#11)": {
    root: "F#",
    type: "7(#11)",
    structure: ["1", "3", "5", "b7", "#11"],
    positions: [
      {
        fingers: "x,1,3,2,x,x",
        notes: ["F#", "B#", "E"],
        baseFret: 1,
      },
      {
        fingers: "2,x,3,4,1,x",
        notes: ["F#", "E", "A#", "B#"],
        baseFret: 5,
      },
      {
        fingers: "2,x,3,4,1,0",
        notes: ["F#", "E", "A#", "B#", "E"],
        baseFret: 1,
      },
    ],
  },
  "F#m6": {
    root: "F#",
    type: "m6",
    structure: ["1", "b3", "5", "6"],
    positions: [
      {
        fingers: "1,x,3,1,4,1",
        notes: ["F#", "F#", "A", "D#", "F#"],
        baseFret: 5,
      },
      {
        fingers: "x,3,1,2,1,x",
        notes: ["F#", "A", "D#", "F#"],
        baseFret: 5,
      },
      {
        fingers: "x,1,x,3,2,4",
        notes: ["F#", "F#", "A", "D#"],
        baseFret: 5,
      },
    ],
  },
  "F#7(b9)": {
    root: "F#",
    type: "7(b9)",
    structure: ["1", "3", "5", "b7", "b9"],
    positions: [
      {
        fingers: "1,x,1,2,1,3",
        notes: ["F#", "E", "A#", "C#", "G"],
        baseFret: 5,
      },
      {
        fingers: "x,x,2,1,3,1",
        notes: ["F#", "A#", "E", "G"],
        baseFret: 5,
      },
      {
        fingers: "x,2,1,3,1,x",
        notes: ["F#", "A#", "E", "G"],
        baseFret: 5,
      },
    ],
  },
  "F#m9": {
    root: "F#",
    type: "m9",
    structure: ["1", "b3", "5", "b7", "9"],
    positions: [
      {
        fingers: "1,3,1,1,1,4",
        notes: ["F#", "C#", "E", "A", "C#", "G#"],
        baseFret: 5,
      },
      {
        fingers: "x,x,2,1,4,3",
        notes: ["F#", "A", "E", "G#"],
        baseFret: 5,
      },
      {
        fingers: "x,2,1,3,4,x",
        notes: ["F#", "A", "E", "G#"],
        baseFret: 5,
      },
    ],
  },
  "F#sus4": {
    root: "F#",
    type: "sus4",
    structure: ["1", "4", "5"],
    positions: [
      {
        fingers: "1,1,3,4,1,1",
        notes: ["F#", "B", "F#", "B", "C#", "F#"],
        baseFret: 5,
      },
      {
        fingers: "x,3,4,1,2,x",
        notes: ["F#", "B", "C#", "F#"],
        baseFret: 5,
      },
      {
        fingers: "x,1,2,3,4,1",
        notes: ["F#", "C#", "F#", "B", "C#"],
        baseFret: 5,
      },
      {
        fingers: "x,1,3,3,4,x",
        notes: ["F#", "C#", "F#", "B"],
        baseFret: 5,
      },
    ],
  },
  "F#6/9": {
    root: "F#",
    type: "6/9",
    structure: ["1", "3", "5", "6", "9"],
    positions: [
      {
        fingers: "2,1,1,1,3,4",
        notes: ["F#", "A#", "D#", "G#", "C#", "F#"],
        baseFret: 5,
      },
      {
        fingers: "x,x,2,1,3,4",
        notes: ["F#", "A#", "D#", "G#"],
        baseFret: 5,
      },
      {
        fingers: "x,2,1,1,3,4",
        notes: ["F#", "A#", "D#", "G#", "C#"],
        baseFret: 5,
      },
    ],
  },
  "G#13": {
    root: "G#",
    type: "13",
    structure: ["1", "3", "5", "b7", "9", "11", "13"],
    positions: [
      {
        fingers: "3,x,4,2,1,1",
        notes: ["G#", "F#", "A#", "B#", "E#"],
        baseFret: 5,
      },
      {
        fingers: "1,x,1,2,3,4",
        notes: ["G#", "F#", "B#", "E#", "A#"],
        baseFret: 5,
      },
      {
        fingers: "x,2,1,3,3,4",
        notes: ["G#", "B#", "F#", "A#", "E#"],
        baseFret: 5,
      },
      {
        fingers: "1,x,2,3,4,x",
        notes: ["G#", "F#", "B#", "E#"],
        baseFret: 5,
      },
    ],
  },
  "G#7(#9)": {
    root: "G#",
    type: "7(#9)",
    structure: ["1", "3", "5", "b7", "#9"],
    positions: [
      {
        fingers: "2,1,3,3,3,3",
        notes: ["G#", "B#", "F#", "A##", "D#", "G#"],
        baseFret: 5,
      },
      {
        fingers: "1,3,1,2,1,4",
        notes: ["G#", "D#", "F#", "B#", "D#", "A##"],
        baseFret: 5,
      },
      {
        fingers: "x,2,1,3,4,x",
        notes: ["G#", "B#", "F#", "A##"],
        baseFret: 5,
      },
    ],
  },
  "G#9": {
    root: "G#",
    type: "9",
    structure: ["1", "3", "5", "b7", "9"],
    positions: [
      {
        fingers: "x,1,3,2,4,x",
        notes: ["B#", "F#", "A#", "D#"],
        baseFret: 5,
      },
      {
        fingers: "x,x,2,1,3,4",
        notes: ["F#", "A#", "D#", "G#"],
        baseFret: 5,
      },
      {
        fingers: "x,2,1,3,4,x",
        notes: ["G#", "B#", "F#", "A#"],
        baseFret: 5,
      },
    ],
  },
  "G#9b5": {
    root: "G#",
    type: "9b5",
    structure: ["1", "3", "b5", "b7", "9"],
    positions: [
      {
        fingers: "2,1,3,1,1,4",
        notes: ["G#", "B#", "F#", "A#", "D", "G#"],
        baseFret: 5,
      },
      {
        fingers: "x,x,1,2,3,1",
        notes: ["G#", "D", "F#", "A#"],
        baseFret: 5,
      },
      {
        fingers: "1,2,1,3,4,1",
        notes: ["D", "G#", "B#", "F#", "A#", "D"],
        baseFret: 5,
      },
    ],
  },
  "G#7": {
    root: "G#",
    type: "7",
    structure: ["1", "3", "5", "b7"],
    positions: [
      {
        fingers: "x,x,1,1,1,2",
        notes: ["D#", "G#", "B#", "F#"],
        baseFret: 5,
      },
      {
        fingers: "1,3,1,2,4,1",
        notes: ["G#", "D#", "F#", "B#", "F#", "G#"],
        baseFret: 5,
      },
      {
        fingers: "x,1,3,1,4,1",
        notes: ["G#", "D#", "F#", "B#", "D#"],
        baseFret: 5,
      },
      {
        fingers: "1,3,1,2,1,1",
        notes: ["G#", "D#", "F#", "B#", "D#", "G#"],
        baseFret: 5,
      },
    ],
  },
  "G#dim7": {
    root: "G#",
    type: "dim7",
    structure: ["1", "b3", "b5", "bb7"],
    positions: [
      {
        fingers: "2,4,1,3,x,x",
        notes: ["G#", "D", "F", "B"],
        baseFret: 5,
      },
      {
        fingers: "x,2,3,1,4,x",
        notes: ["F", "B", "D", "G#"],
        baseFret: 5,
      },
      {
        fingers: "x,x,1,3,2,4",
        notes: ["B", "F", "G#", "D"],
        baseFret: 5,
      },
      {
        fingers: "2,x,1,3,1,x",
        notes: ["G#", "F", "B", "D"],
        baseFret: 5,
      },
      {
        fingers: "x,x,x,2,1,3",
        notes: ["F", "G#", "D"],
        baseFret: 1,
      },
      {
        fingers: "x,x,x,2,1,3",
        notes: ["G#", "B", "F"],
        baseFret: 1,
      },
    ],
  },
  "G#aug": {
    root: "G#",
    type: "aug",
    structure: ["1", "3", "#5"],
    positions: [
      {
        fingers: "x,3,2,1,1,x",
        notes: ["D##", "G#", "B#", "D##"],
        baseFret: 5,
      },
      {
        fingers: "4,3,2,1,x,x",
        notes: ["B#", "D##", "G#", "B#"],
        baseFret: 5,
      },
      {
        fingers: "x,x,4,2,3,1",
        notes: ["D##", "G#", "B#", "D##"],
        baseFret: 5,
      },
    ],
  },
  "G#maj": {
    root: "G#",
    type: "maj",
    structure: ["1", "3", "5"],
    positions: [
      {
        fingers: "x,x,1,1,1,4",
        notes: ["D#", "G#", "B#", "G#"],
        baseFret: 5,
      },
      {
        fingers: "1,3,4,2,1,1",
        notes: ["G#", "D#", "G#", "B#", "D#", "G#"],
        baseFret: 5,
      },
      {
        fingers: "x,4,3,1,2,1",
        notes: ["G#", "B#", "D#", "G#", "B#"],
        baseFret: 5,
      },
      {
        fingers: "x,3,1,1,1,x",
        notes: ["B#", "D#", "G#", "B#"],
        baseFret: 5,
      },
    ],
  },
  "G#11": {
    root: "G#",
    type: "11",
    structure: ["1", "3", "5", "b7", "9", "11"],
    positions: [
      {
        fingers: "3,x,4,2,1,1",
        notes: ["G#", "F#", "A#", "C#", "F#"],
        baseFret: 5,
      },
      {
        fingers: "x,x,1,1,2,1",
        notes: ["G#", "C#", "F#", "A#"],
        baseFret: 5,
      },
      {
        fingers: "x,1,1,1,1,1",
        notes: ["G#", "C#", "F#", "A#", "D#"],
        baseFret: 5,
      },
    ],
  },
  "G#maj9": {
    root: "G#",
    type: "maj9",
    structure: ["1", "3", "5", "7", "9"],
    positions: [
      {
        fingers: "2,1,4,1,3,x",
        notes: ["G#", "B#", "F##", "A#", "D#"],
        baseFret: 5,
      },
      {
        fingers: "x,x,4,1,2,1",
        notes: ["G#", "A#", "D#", "F##"],
        baseFret: 5,
      },
      {
        fingers: "x,2,1,4,3,x",
        notes: ["G#", "B#", "F##", "A#"],
        baseFret: 5,
      },
    ],
  },
  "G#m11": {
    root: "G#",
    type: "m11",
    structure: ["1", "b3", "5", "b7", "9", "11"],
    positions: [
      {
        fingers: "2,x,3,4,1,x",
        notes: ["G#", "F#", "B", "C#"],
        baseFret: 5,
      },
    ],
  },
  "G#m7b5": {
    root: "G#",
    type: "m7b5",
    structure: ["1", "b3", "b5", "b7"],
    positions: [
      {
        fingers: "2,x,3,4,1,x",
        notes: ["G#", "F#", "B", "D"],
        baseFret: 5,
      },
    ],
  },
  "G#m": {
    root: "G#",
    type: "m",
    structure: ["1", "b3", "5"],
    positions: [
      {
        fingers: "1,3,4,1,1,1",
        notes: ["G#", "D#", "G#", "B", "D#", "G#"],
        baseFret: 5,
      },
      {
        fingers: "x,x,1,3,4,2",
        notes: ["G#", "D#", "G#", "B"],
        baseFret: 5,
      },
      {
        fingers: "x,1,3,4,2,1",
        notes: ["G#", "D#", "G#", "B", "D#"],
        baseFret: 5,
      },
      {
        fingers: "x,3,4,1,1,x",
        notes: ["D#", "G#", "B", "D#"],
        baseFret: 5,
      },
      {
        fingers: "1,4,x,2,x,x",
        notes: ["G#", "D#", "B"],
        baseFret: 1,
      },
      {
        fingers: "3,1,x,x,x,x",
        notes: ["G#", "B"],
        baseFret: 1,
      },
      {
        fingers: "1,3,4,1,1,x",
        notes: ["G#", "D#", "G#", "B", "D#"],
        baseFret: 5,
      },
    ],
  },
  "G#7b5": {
    root: "G#",
    type: "7b5",
    structure: ["1", "3", "b5", "b7"],
    positions: [
      {
        fingers: "x,x,2,4,1,3",
        notes: ["F#", "B#", "D", "G#"],
        baseFret: 5,
      },
      {
        fingers: "1,3,2,4,x,x",
        notes: ["G#", "D", "F#", "B#"],
        baseFret: 5,
      },
      {
        fingers: "x,x,1,2,3,4",
        notes: ["G#", "D", "F#", "B#"],
        baseFret: 5,
      },
    ],
  },
  "G#m7": {
    root: "G#",
    type: "m7",
    structure: ["1", "b3", "5", "b7"],
    positions: [
      {
        fingers: "1,3,1,1,4,1",
        notes: ["G#", "D#", "F#", "B", "F#", "G#"],
        baseFret: 5,
      },
      {
        fingers: "x,x,1,4,2,3",
        notes: ["G#", "D#", "F#", "B"],
        baseFret: 5,
      },
      {
        fingers: "x,1,3,1,2,1",
        notes: ["G#", "D#", "F#", "B", "D#"],
        baseFret: 5,
      },
      {
        fingers: "2,x,3,3,3,x",
        notes: ["G#", "F#", "B", "D#"],
        baseFret: 1,
      },
      {
        fingers: "1,3,1,1,1,4",
        notes: ["G#", "D#", "F#", "B", "D#", "B"],
        baseFret: 5,
      },
      {
        fingers: "2,1,3,4,0,x",
        notes: ["G#", "B", "F#", "B", "B"],
        baseFret: 1,
      },
      {
        fingers: "2,x,3,4,x,x",
        notes: ["G#", "F#", "B"],
        baseFret: 1,
      },
      {
        fingers: "x,2,1,3,4,x",
        notes: ["G#", "B", "F#", "B"],
        baseFret: 5,
      },
      {
        fingers: "1,3,1,1,1,1",
        notes: ["G#", "D#", "F#", "B", "D#", "G#"],
        baseFret: 5,
      },
      {
        fingers: "1,3,1,1,1,x",
        notes: ["G#", "D#", "F#", "B", "D#"],
        baseFret: 5,
      },
    ],
  },
  "G#dim": {
    root: "G#",
    type: "dim",
    structure: ["1", "b3", "b5"],
    positions: [
      {
        fingers: "x,x,4,3,1,2",
        notes: ["G#", "B", "D", "G#"],
        baseFret: 5,
      },
      {
        fingers: "1,2,4,1,x,x",
        notes: ["G#", "D", "G#", "B"],
        baseFret: 5,
      },
      {
        fingers: "x,1,2,4,3,x",
        notes: ["G#", "D", "G#", "B"],
        baseFret: 5,
      },
      {
        fingers: "x,x,3,1,4,x",
        notes: ["B", "D", "G#"],
        baseFret: 1,
      },
      {
        fingers: "x,x,x,2,1,3",
        notes: ["B", "D", "G#"],
        baseFret: 1,
      },
      {
        fingers: "2,x,x,3,1,x",
        notes: ["G#", "B", "D"],
        baseFret: 1,
      },
      {
        fingers: "x,x,x,3,2,1",
        notes: ["G#", "B", "D"],
        baseFret: 1,
      },
    ],
  },
  "G#6": {
    root: "G#",
    type: "6",
    structure: ["1", "3", "5", "6"],
    positions: [
      {
        fingers: "x,x,1,1,1,1",
        notes: ["D#", "G#", "B#", "E#"],
        baseFret: 5,
      },
      {
        fingers: "1,x,3,2,4,1",
        notes: ["G#", "G#", "B#", "E#", "G#"],
        baseFret: 5,
      },
      {
        fingers: "x,4,2,3,1,x",
        notes: ["G#", "B#", "E#", "G#"],
        baseFret: 5,
      },
    ],
  },
  "G#7(#5)": {
    root: "G#",
    type: "7(#5)",
    structure: ["1", "3", "#5", "b7"],
    positions: [
      {
        fingers: "1,x,1,2,3,1",
        notes: ["G#", "F#", "B#", "D##", "G#"],
        baseFret: 5,
      },
      {
        fingers: "x,1,2,1,1,x",
        notes: ["F#", "B#", "D##", "G#"],
        baseFret: 5,
      },
      {
        fingers: "x,1,4,1,3,2",
        notes: ["G#", "D##", "F#", "B#", "D##"],
        baseFret: 5,
      },
    ],
  },
  "G#7sus4": {
    root: "G#",
    type: "7sus4",
    structure: ["1", "4", "5", "b7"],
    positions: [
      {
        fingers: "x,x,1,1,2,3",
        notes: ["D#", "G#", "C#", "F#"],
        baseFret: 5,
      },
      {
        fingers: "1,3,1,4,1,1",
        notes: ["G#", "D#", "F#", "C#", "D#", "G#"],
        baseFret: 5,
      },
      {
        fingers: "x,x,1,3,2,4",
        notes: ["G#", "D#", "F#", "C#"],
        baseFret: 5,
      },
    ],
  },
  "G#maj7": {
    root: "G#",
    type: "maj7",
    structure: ["1", "3", "5", "7"],
    positions: [
      {
        fingers: "x,x,4,3,2,1",
        notes: ["G#", "B#", "D#", "F##"],
        baseFret: 5,
      },
      {
        fingers: "1,4,2,3,1,x",
        notes: ["G#", "D#", "F##", "B#", "D#"],
        baseFret: 5,
      },
      {
        fingers: "x,4,3,1,1,1",
        notes: ["G#", "B#", "D#", "F##", "B#"],
        baseFret: 5,
      },
    ],
  },
  "G#5": {
    root: "G#",
    type: "5",
    structure: ["1", "5"],
    positions: [
      {
        fingers: "1,3,x,x,x,x",
        notes: ["G#", "D#"],
        baseFret: 1,
      },
      {
        fingers: "1,3,4,x,x,x",
        notes: ["G#", "D#", "G#"],
        baseFret: 1,
      },
      {
        fingers: "x,1,3,x,x,x",
        notes: ["G#", "D#"],
        baseFret: 1,
      },
    ],
  },
  "G#7(#11)": {
    root: "G#",
    type: "7(#11)",
    structure: ["1", "3", "5", "b7", "#11"],
    positions: [
      {
        fingers: "x,1,3,2,x,x",
        notes: ["G#", "C##", "F#"],
        baseFret: 1,
      },
    ],
  },
  "G#m6": {
    root: "G#",
    type: "m6",
    structure: ["1", "b3", "5", "6"],
    positions: [
      {
        fingers: "x,x,1,2,0,3",
        notes: ["D#", "G#", "B", "E#"],
        baseFret: 1,
      },
      {
        fingers: "1,x,3,1,4,1",
        notes: ["G#", "G#", "B", "E#", "G#"],
        baseFret: 5,
      },
      {
        fingers: "x,3,1,2,1,x",
        notes: ["G#", "B", "E#", "G#"],
        baseFret: 5,
      },
      {
        fingers: "2,x,1,3,3,3",
        notes: ["G#", "E#", "B", "D#", "G#"],
        baseFret: 5,
      },
    ],
  },
  "G#7(b9)": {
    root: "G#",
    type: "7(b9)",
    structure: ["1", "3", "5", "b7", "b9"],
    positions: [
      {
        fingers: "3,2,4,1,x,x",
        notes: ["G#", "B#", "F#", "A"],
        baseFret: 5,
      },
      {
        fingers: "1,x,1,2,1,3",
        notes: ["G#", "F#", "B#", "D#", "A"],
        baseFret: 5,
      },
      {
        fingers: "x,2,1,3,1,x",
        notes: ["G#", "B#", "F#", "A"],
        baseFret: 5,
      },
    ],
  },
  "G#m9": {
    root: "G#",
    type: "m9",
    structure: ["1", "b3", "5", "b7", "9"],
    positions: [
      {
        fingers: "1,3,1,1,1,4",
        notes: ["G#", "D#", "F#", "B", "D#", "A#"],
        baseFret: 5,
      },
      {
        fingers: "x,x,2,1,4,3",
        notes: ["G#", "B", "F#", "A#"],
        baseFret: 5,
      },
      {
        fingers: "x,2,1,3,4,x",
        notes: ["G#", "B", "F#", "A#"],
        baseFret: 5,
      },
      {
        fingers: "2,x,3,1,0,4",
        notes: ["G#", "F#", "A#", "B", "G#"],
        baseFret: 1,
      },
    ],
  },
  "G#sus4": {
    root: "G#",
    type: "sus4",
    structure: ["1", "4", "5"],
    positions: [
      {
        fingers: "x,x,1,1,2,4",
        notes: ["D#", "G#", "C#", "G#"],
        baseFret: 5,
      },
      {
        fingers: "1,1,3,4,1,1",
        notes: ["G#", "C#", "G#", "C#", "D#", "G#"],
        baseFret: 5,
      },
      {
        fingers: "x,x,1,2,3,4",
        notes: ["G#", "D#", "G#", "C#"],
        baseFret: 5,
      },
    ],
  },
  "G#6/9": {
    root: "G#",
    type: "6/9",
    structure: ["1", "3", "5", "6", "9"],
    positions: [
      {
        fingers: "2,1,1,1,3,4",
        notes: ["G#", "B#", "E#", "A#", "D#", "G#"],
        baseFret: 5,
      },
      {
        fingers: "x,x,2,1,3,4",
        notes: ["G#", "B#", "E#", "A#"],
        baseFret: 5,
      },
      {
        fingers: "x,2,1,1,3,4",
        notes: ["G#", "B#", "E#", "A#", "D#"],
        baseFret: 5,
      },
    ],
  },
  Ab13: {
    root: "Ab",
    type: "13",
    structure: ["1", "3", "5", "b7", "9", "11", "13"],
    positions: [
      {
        fingers: "3,x,4,2,1,1",
        notes: ["Ab", "Gb", "Bb", "C", "F"],
        baseFret: 5,
      },
      {
        fingers: "1,x,1,2,3,4",
        notes: ["Ab", "Gb", "C", "F", "Bb"],
        baseFret: 5,
      },
      {
        fingers: "x,2,1,3,3,4",
        notes: ["Ab", "C", "Gb", "Bb", "F"],
        baseFret: 5,
      },
      {
        fingers: "1,x,2,3,4,x",
        notes: ["Ab", "Gb", "C", "F"],
        baseFret: 5,
      },
      {
        fingers: "x,x,1,3,3,4",
        notes: ["C", "Gb", "Bb", "F"],
        baseFret: 5,
      },
    ],
  },
  "Ab7(#9)": {
    root: "Ab",
    type: "7(#9)",
    structure: ["1", "3", "5", "b7", "#9"],
    positions: [
      {
        fingers: "2,1,3,3,3,3",
        notes: ["Ab", "C", "Gb", "B", "Eb", "Ab"],
        baseFret: 5,
      },
      {
        fingers: "1,3,1,2,1,4",
        notes: ["Ab", "Eb", "Gb", "C", "Eb", "B"],
        baseFret: 5,
      },
      {
        fingers: "x,2,1,3,4,x",
        notes: ["Ab", "C", "Gb", "B"],
        baseFret: 5,
      },
    ],
  },
  Ab9: {
    root: "Ab",
    type: "9",
    structure: ["1", "3", "5", "b7", "9"],
    positions: [
      {
        fingers: "x,1,3,2,4,x",
        notes: ["C", "Gb", "Bb", "Eb"],
        baseFret: 5,
      },
      {
        fingers: "x,x,2,1,3,4",
        notes: ["Gb", "Bb", "Eb", "Ab"],
        baseFret: 5,
      },
      {
        fingers: "x,2,1,3,4,x",
        notes: ["Ab", "C", "Gb", "Bb"],
        baseFret: 5,
      },
    ],
  },
  Ab9b5: {
    root: "Ab",
    type: "9b5",
    structure: ["1", "3", "b5", "b7", "9"],
    positions: [
      {
        fingers: "2,1,3,1,1,4",
        notes: ["Ab", "C", "Gb", "Bb", "Ebb", "Ab"],
        baseFret: 5,
      },
      {
        fingers: "x,x,1,2,3,1",
        notes: ["Ab", "Ebb", "Gb", "Bb"],
        baseFret: 5,
      },
      {
        fingers: "1,2,1,3,4,1",
        notes: ["Ebb", "Ab", "C", "Gb", "Bb", "Ebb"],
        baseFret: 5,
      },
    ],
  },
  Abmaj13: {
    root: "Ab",
    type: "maj13",
    structure: ["1", "3", "5", "7", "9", "11", "13"],
    positions: [
      {
        fingers: "2,1,1,1,3,1",
        notes: ["Ab", "C", "F", "Bb", "Eb", "G"],
        baseFret: 5,
      },
      {
        fingers: "1,x,2,3,4,x",
        notes: ["Ab", "G", "C", "F"],
        baseFret: 5,
      },
      {
        fingers: "2,x,1,1,4,1",
        notes: ["Ab", "F", "Bb", "F", "G"],
        baseFret: 5,
      },
      {
        fingers: "x,1,1,1,2,1",
        notes: ["C", "F", "Bb", "Eb", "G"],
        baseFret: 5,
      },
    ],
  },
  Ab7: {
    root: "Ab",
    type: "7",
    structure: ["1", "3", "5", "b7"],
    positions: [
      {
        fingers: "x,x,1,1,1,2",
        notes: ["Eb", "Ab", "C", "Gb"],
        baseFret: 5,
      },
      {
        fingers: "1,3,1,2,4,1",
        notes: ["Ab", "Eb", "Gb", "C", "Gb", "Ab"],
        baseFret: 5,
      },
      {
        fingers: "x,1,3,1,4,1",
        notes: ["Ab", "Eb", "Gb", "C", "Eb"],
        baseFret: 5,
      },
      {
        fingers: "x,x,x,2,1,3",
        notes: ["Eb", "Gb", "C"],
        baseFret: 1,
      },
      {
        fingers: "1,3,1,2,1,1",
        notes: ["Ab", "Eb", "Gb", "C", "Eb", "Ab"],
        baseFret: 5,
      },
      {
        fingers: "1,x,2,3,x,x",
        notes: ["Ab", "Gb", "C"],
        baseFret: 1,
      },
      {
        fingers: "x,2,1,3,x,x",
        notes: ["Ab", "C", "Gb"],
        baseFret: 1,
      },
      {
        fingers: "x,x,1,3,2,4",
        notes: ["Ab", "Eb", "Gb", "C"],
        baseFret: 5,
      },
      {
        fingers: "1,3,x,2,4,x",
        notes: ["Ab", "Eb", "C", "Gb"],
        baseFret: 5,
      },
      {
        fingers: "x,x,1,2,1,1",
        notes: ["Gb", "C", "Eb", "Ab"],
        baseFret: 5,
      },
      {
        fingers: "x,x,2,3,1,4",
        notes: ["C", "Gb", "Ab", "Eb"],
        baseFret: 5,
      },
      {
        fingers: "1,3,1,2,4,x",
        notes: ["Ab", "Eb", "Gb", "C", "Gb"],
        baseFret: 5,
      },
    ],
  },
  Abdim7: {
    root: "Ab",
    type: "dim7",
    structure: ["1", "b3", "b5", "bb7"],
    positions: [
      {
        fingers: "2,4,1,3,x,x",
        notes: ["Ab", "Ebb", "Gbb", "Cb"],
        baseFret: 5,
      },
      {
        fingers: "x,2,3,1,4,x",
        notes: ["Gbb", "Cb", "Ebb", "Ab"],
        baseFret: 5,
      },
      {
        fingers: "x,x,1,3,2,4",
        notes: ["Cb", "Gbb", "Ab", "Ebb"],
        baseFret: 5,
      },
      {
        fingers: "3,x,1,4,2,x",
        notes: ["Ab", "Gbb", "Cb", "Ebb"],
        baseFret: 5,
      },
      {
        fingers: "x,x,1,3,2,4",
        notes: ["Ab", "Ebb", "Gbb", "Cb"],
        baseFret: 5,
      },
    ],
  },
  Abaug: {
    root: "Ab",
    type: "aug",
    structure: ["1", "3", "#5"],
    positions: [
      {
        fingers: "x,3,2,1,1,x",
        notes: ["E", "Ab", "C", "E"],
        baseFret: 5,
      },
      {
        fingers: "4,3,2,1,x,x",
        notes: ["C", "E", "Ab", "C"],
        baseFret: 5,
      },
      {
        fingers: "x,x,4,2,3,1",
        notes: ["E", "Ab", "C", "E"],
        baseFret: 5,
      },
    ],
  },
  Abmaj: {
    root: "Ab",
    type: "maj",
    structure: ["1", "3", "5"],
    positions: [
      {
        fingers: "x,x,1,1,1,4",
        notes: ["Eb", "Ab", "C", "Ab"],
        baseFret: 5,
      },
      {
        fingers: "1,3,4,2,1,1",
        notes: ["Ab", "Eb", "Ab", "C", "Eb", "Ab"],
        baseFret: 5,
      },
      {
        fingers: "x,4,3,1,2,1",
        notes: ["Ab", "C", "Eb", "Ab", "C"],
        baseFret: 5,
      },
      {
        fingers: "4,x,1,1,1,x",
        notes: ["Ab", "Eb", "Ab", "C"],
        baseFret: 5,
      },
      {
        fingers: "x,3,1,1,1,x",
        notes: ["C", "Eb", "Ab", "C"],
        baseFret: 5,
      },
      {
        fingers: "x,1,4,3,2,x",
        notes: ["C", "Ab", "C", "Eb"],
        baseFret: 5,
      },
      {
        fingers: "x,1,4,4,4,x",
        notes: ["Ab", "Eb", "Ab", "C"],
        baseFret: 5,
      },
      {
        fingers: "1,x,3,1,2,x",
        notes: ["C", "C", "Eb", "Ab"],
        baseFret: 5,
      },
      {
        fingers: "x,x,3,2,1,1",
        notes: ["Ab", "C", "Eb", "Ab"],
        baseFret: 5,
      },
      {
        fingers: "x,x,x,3,4,1",
        notes: ["Ab", "C", "Eb"],
        baseFret: 1,
      },
      {
        fingers: "x,x,1,1,1,x",
        notes: ["Eb", "Ab", "C"],
        baseFret: 1,
      },
      {
        fingers: "1,3,4,2,x,x",
        notes: ["Ab", "Eb", "Ab", "C"],
        baseFret: 5,
      },
      {
        fingers: "x,4,3,1,x,x",
        notes: ["Ab", "C", "Eb"],
        baseFret: 1,
      },
      {
        fingers: "x,3,4,2,1,x",
        notes: ["Eb", "Ab", "C", "Eb"],
        baseFret: 5,
      },
      {
        fingers: "1,x,x,2,1,1",
        notes: ["Ab", "C", "Eb", "Ab"],
        baseFret: 5,
      },
      {
        fingers: "2,1,x,x,x,x",
        notes: ["Ab", "C"],
        baseFret: 1,
      },
      {
        fingers: "x,3,4,2,1,1",
        notes: ["Eb", "Ab", "C", "Eb", "Ab"],
        baseFret: 5,
      },
      {
        fingers: "3,x,1,4,x,x",
        notes: ["C", "Ab", "Eb"],
        baseFret: 1,
      },
      {
        fingers: "x,1,2,3,4,1",
        notes: ["Ab", "Eb", "Ab", "C", "Eb"],
        baseFret: 5,
      },
    ],
  },
  Ab11: {
    root: "Ab",
    type: "11",
    structure: ["1", "3", "5", "b7", "9", "11"],
    positions: [
      {
        fingers: "3,x,4,2,1,1",
        notes: ["Ab", "Gb", "Bb", "Db", "Gb"],
        baseFret: 5,
      },
      {
        fingers: "x,x,1,1,2,1",
        notes: ["Ab", "Db", "Gb", "Bb"],
        baseFret: 5,
      },
      {
        fingers: "x,1,1,1,1,1",
        notes: ["Ab", "Db", "Gb", "Bb", "Eb"],
        baseFret: 5,
      },
    ],
  },
  Abmaj9: {
    root: "Ab",
    type: "maj9",
    structure: ["1", "3", "5", "7", "9"],
    positions: [
      {
        fingers: "2,1,4,1,3,x",
        notes: ["Ab", "C", "G", "Bb", "Eb"],
        baseFret: 5,
      },
      {
        fingers: "x,x,4,1,2,1",
        notes: ["Ab", "Bb", "Eb", "G"],
        baseFret: 5,
      },
      {
        fingers: "x,2,1,4,3,x",
        notes: ["Ab", "C", "G", "Bb"],
        baseFret: 5,
      },
    ],
  },
  Abm11: {
    root: "Ab",
    type: "m11",
    structure: ["1", "b3", "5", "b7", "9", "11"],
    positions: [
      {
        fingers: "2,x,3,4,1,x",
        notes: ["Ab", "Gb", "Cb", "Db"],
        baseFret: 5,
      },
    ],
  },
  Abm7b5: {
    root: "Ab",
    type: "m7b5",
    structure: ["1", "b3", "b5", "b7"],
    positions: [
      {
        fingers: "2,x,3,4,1,x",
        notes: ["Ab", "Gb", "Cb", "Ebb"],
        baseFret: 5,
      },
    ],
  },
  Abm: {
    root: "Ab",
    type: "m",
    structure: ["1", "b3", "5"],
    positions: [
      {
        fingers: "1,3,4,1,1,1",
        notes: ["Ab", "Eb", "Ab", "Cb", "Eb", "Ab"],
        baseFret: 5,
      },
      {
        fingers: "x,x,1,3,4,2",
        notes: ["Ab", "Eb", "Ab", "Cb"],
        baseFret: 5,
      },
      {
        fingers: "x,1,3,4,2,1",
        notes: ["Ab", "Eb", "Ab", "Cb", "Eb"],
        baseFret: 5,
      },
      {
        fingers: "x,3,x,1,1,x",
        notes: ["Eb", "Cb", "Eb"],
        baseFret: 1,
      },
    ],
  },
  Ab7b5: {
    root: "Ab",
    type: "7b5",
    structure: ["1", "3", "b5", "b7"],
    positions: [
      {
        fingers: "x,x,2,4,1,3",
        notes: ["Gb", "C", "Ebb", "Ab"],
        baseFret: 5,
      },
      {
        fingers: "1,3,2,4,x,x",
        notes: ["Ab", "Ebb", "Gb", "C"],
        baseFret: 5,
      },
      {
        fingers: "x,x,1,2,3,4",
        notes: ["Ab", "Ebb", "Gb", "C"],
        baseFret: 5,
      },
    ],
  },
  Abm7: {
    root: "Ab",
    type: "m7",
    structure: ["1", "b3", "5", "b7"],
    positions: [
      {
        fingers: "1,3,1,1,4,1",
        notes: ["Ab", "Eb", "Gb", "Cb", "Gb", "Ab"],
        baseFret: 5,
      },
      {
        fingers: "x,x,1,4,2,3",
        notes: ["Ab", "Eb", "Gb", "Cb"],
        baseFret: 5,
      },
      {
        fingers: "x,1,3,1,2,1",
        notes: ["Ab", "Eb", "Gb", "Cb", "Eb"],
        baseFret: 5,
      },
      {
        fingers: "2,x,3,3,3,x",
        notes: ["Ab", "Gb", "Cb", "Eb"],
        baseFret: 1,
      },
      {
        fingers: "1,3,1,1,1,1",
        notes: ["Ab", "Eb", "Gb", "Cb", "Eb", "Ab"],
        baseFret: 5,
      },
      {
        fingers: "1,3,1,1,1,x",
        notes: ["Ab", "Eb", "Gb", "Cb", "Eb"],
        baseFret: 5,
      },
    ],
  },
  Abdim: {
    root: "Ab",
    type: "dim",
    structure: ["1", "b3", "b5"],
    positions: [
      {
        fingers: "x,x,4,3,1,2",
        notes: ["Ab", "Cb", "Ebb", "Ab"],
        baseFret: 5,
      },
      {
        fingers: "x,1,2,4,3,x",
        notes: ["Ab", "Ebb", "Ab", "Cb"],
        baseFret: 5,
      },
    ],
  },
  Ab6: {
    root: "Ab",
    type: "6",
    structure: ["1", "3", "5", "6"],
    positions: [
      {
        fingers: "x,x,1,1,1,1",
        notes: ["Eb", "Ab", "C", "F"],
        baseFret: 5,
      },
      {
        fingers: "1,x,3,2,4,1",
        notes: ["Ab", "Ab", "C", "F", "Ab"],
        baseFret: 5,
      },
      {
        fingers: "x,4,2,3,1,x",
        notes: ["Ab", "C", "F", "Ab"],
        baseFret: 5,
      },
      {
        fingers: "x,x,3,2,4,1",
        notes: ["Ab", "C", "F", "Ab"],
        baseFret: 5,
      },
      {
        fingers: "2,x,1,4,x,x",
        notes: ["Ab", "F", "C"],
        baseFret: 1,
      },
      {
        fingers: "1,x,x,3,4,x",
        notes: ["Ab", "C", "F"],
        baseFret: 1,
      },
      {
        fingers: "x,x,1,3,1,4",
        notes: ["Ab", "Eb", "F", "C"],
        baseFret: 5,
      },
    ],
  },
  "Ab7(#5)": {
    root: "Ab",
    type: "7(#5)",
    structure: ["1", "3", "#5", "b7"],
    positions: [
      {
        fingers: "1,x,1,2,3,1",
        notes: ["Ab", "Gb", "C", "E", "Ab"],
        baseFret: 5,
      },
      {
        fingers: "x,1,2,1,1,x",
        notes: ["Gb", "C", "E", "Ab"],
        baseFret: 5,
      },
      {
        fingers: "x,1,4,1,3,2",
        notes: ["Ab", "E", "Gb", "C", "E"],
        baseFret: 5,
      },
      {
        fingers: "1,x,2,3,4,x",
        notes: ["Ab", "Gb", "C", "E"],
        baseFret: 5,
      },
      {
        fingers: "x,x,1,2,3,1",
        notes: ["Gb", "C", "E", "Ab"],
        baseFret: 5,
      },
    ],
  },
  Ab7sus4: {
    root: "Ab",
    type: "7sus4",
    structure: ["1", "4", "5", "b7"],
    positions: [
      {
        fingers: "x,x,1,1,2,3",
        notes: ["Eb", "Ab", "Db", "Gb"],
        baseFret: 5,
      },
      {
        fingers: "1,3,1,4,1,1",
        notes: ["Ab", "Eb", "Gb", "Db", "Eb", "Ab"],
        baseFret: 5,
      },
      {
        fingers: "x,x,1,3,2,4",
        notes: ["Ab", "Eb", "Gb", "Db"],
        baseFret: 5,
      },
      {
        fingers: "4,x,1,3,2,x",
        notes: ["Db", "Ab", "Eb", "Gb"],
        baseFret: 5,
      },
    ],
  },
  Abmaj7: {
    root: "Ab",
    type: "maj7",
    structure: ["1", "3", "5", "7"],
    positions: [
      {
        fingers: "x,x,4,3,2,1",
        notes: ["Ab", "C", "Eb", "G"],
        baseFret: 5,
      },
      {
        fingers: "1,4,2,3,1,x",
        notes: ["Ab", "Eb", "G", "C", "Eb"],
        baseFret: 5,
      },
      {
        fingers: "x,4,3,1,1,1",
        notes: ["Ab", "C", "Eb", "G", "C"],
        baseFret: 5,
      },
      {
        fingers: "2,1,4,0,x,x",
        notes: ["Ab", "C", "G", "G"],
        baseFret: 1,
      },
      {
        fingers: "1,x,3,4,2,x",
        notes: ["Ab", "G", "C", "Eb"],
        baseFret: 5,
      },
      {
        fingers: "x,1,x,x,2,4",
        notes: ["Ab", "C", "G"],
        baseFret: 1,
      },
      {
        fingers: "x,x,x,1,1,1",
        notes: ["Eb", "G", "C"],
        baseFret: 1,
      },
      {
        fingers: "x,x,x,3,2,1",
        notes: ["C", "Eb", "G"],
        baseFret: 1,
      },
      {
        fingers: "x,x,x,2,4,1",
        notes: ["G", "C", "Eb"],
        baseFret: 1,
      },
      {
        fingers: "x,3,2,0,1,x",
        notes: ["Ab", "C", "G", "Ab"],
        baseFret: 1,
      },
      {
        fingers: "1,x,2,3,x,x",
        notes: ["Ab", "G", "C"],
        baseFret: 1,
      },
      {
        fingers: "x,2,x,0,1,4",
        notes: ["G", "G", "Ab", "Eb"],
        baseFret: 1,
      },
      {
        fingers: "2,x,3,4,2,1",
        notes: ["Ab", "G", "C", "Eb", "G"],
        baseFret: 5,
      },
      {
        fingers: "x,x,1,3,3,3",
        notes: ["Ab", "Eb", "G", "C"],
        baseFret: 5,
      },
    ],
  },
  Ab5: {
    root: "Ab",
    type: "5",
    structure: ["1", "5"],
    positions: [
      {
        fingers: "1,3,x,x,x,x",
        notes: ["Ab", "Eb"],
        baseFret: 1,
      },
      {
        fingers: "1,3,4,x,x,x",
        notes: ["Ab", "Eb", "Ab"],
        baseFret: 1,
      },
      {
        fingers: "x,1,1,x,x,x",
        notes: ["Eb", "Ab"],
        baseFret: 1,
      },
      {
        fingers: "x,1,3,4,x,x",
        notes: ["Ab", "Eb", "Ab"],
        baseFret: 1,
      },
    ],
  },
  "Ab7(#11)": {
    root: "Ab",
    type: "7(#11)",
    structure: ["1", "3", "5", "b7", "#11"],
    positions: [
      {
        fingers: "2,x,3,4,1,x",
        notes: ["Ab", "Gb", "C", "D"],
        baseFret: 5,
      },
      {
        fingers: "1,x,1,4,x,x",
        notes: ["Ab", "Gb", "D"],
        baseFret: 1,
      },
    ],
  },
  Abm6: {
    root: "Ab",
    type: "m6",
    structure: ["1", "b3", "5", "6"],
    positions: [
      {
        fingers: "x,x,1,2,0,3",
        notes: ["Eb", "Ab", "Cb", "F"],
        baseFret: 1,
      },
      {
        fingers: "1,x,3,1,4,1",
        notes: ["Ab", "Ab", "Cb", "F", "Ab"],
        baseFret: 5,
      },
      {
        fingers: "x,3,1,2,1,x",
        notes: ["Ab", "Cb", "F", "Ab"],
        baseFret: 5,
      },
    ],
  },
  "Ab7(b9)": {
    root: "Ab",
    type: "7(b9)",
    structure: ["1", "3", "5", "b7", "b9"],
    positions: [
      {
        fingers: "3,2,4,1,x,x",
        notes: ["Ab", "C", "Gb", "Bbb"],
        baseFret: 5,
      },
      {
        fingers: "1,x,1,2,1,3",
        notes: ["Ab", "Gb", "C", "Eb", "Bbb"],
        baseFret: 5,
      },
      {
        fingers: "x,2,1,3,1,x",
        notes: ["Ab", "C", "Gb", "Bbb"],
        baseFret: 5,
      },
    ],
  },
  Abm9: {
    root: "Ab",
    type: "m9",
    structure: ["1", "b3", "5", "b7", "9"],
    positions: [
      {
        fingers: "1,3,1,1,1,4",
        notes: ["Ab", "Eb", "Gb", "Cb", "Eb", "Bb"],
        baseFret: 5,
      },
      {
        fingers: "x,x,2,1,4,3",
        notes: ["Ab", "Cb", "Gb", "Bb"],
        baseFret: 5,
      },
      {
        fingers: "x,2,1,3,4,x",
        notes: ["Ab", "Cb", "Gb", "Bb"],
        baseFret: 5,
      },
    ],
  },
  Absus4: {
    root: "Ab",
    type: "sus4",
    structure: ["1", "4", "5"],
    positions: [
      {
        fingers: "x,x,1,1,2,4",
        notes: ["Eb", "Ab", "Db", "Ab"],
        baseFret: 5,
      },
      {
        fingers: "1,1,3,4,1,1",
        notes: ["Ab", "Db", "Ab", "Db", "Eb", "Ab"],
        baseFret: 5,
      },
      {
        fingers: "x,x,1,2,3,4",
        notes: ["Ab", "Eb", "Ab", "Db"],
        baseFret: 5,
      },
      {
        fingers: "1,x,3,3,x,x",
        notes: ["Ab", "Ab", "Db"],
        baseFret: 1,
      },
    ],
  },
  "Ab6/9": {
    root: "Ab",
    type: "6/9",
    structure: ["1", "3", "5", "6", "9"],
    positions: [
      {
        fingers: "2,1,1,1,3,4",
        notes: ["Ab", "C", "F", "Bb", "Eb", "Ab"],
        baseFret: 5,
      },
      {
        fingers: "x,x,2,1,3,4",
        notes: ["Ab", "C", "F", "Bb"],
        baseFret: 5,
      },
      {
        fingers: "x,2,1,1,3,4",
        notes: ["Ab", "C", "F", "Bb", "Eb"],
        baseFret: 5,
      },
    ],
  },
  Bb13: {
    root: "Bb",
    type: "13",
    structure: ["1", "3", "5", "b7", "9", "11", "13"],
    positions: [
      {
        fingers: "x,1,0,2,3,4",
        notes: ["Bb", "D", "Ab", "C", "G"],
        baseFret: 1,
      },
      {
        fingers: "4,x,3,2,1,1",
        notes: ["Bb", "Ab", "C", "D", "G"],
        baseFret: 5,
      },
      {
        fingers: "1,x,1,2,3,4",
        notes: ["Bb", "Ab", "D", "G", "C"],
        baseFret: 5,
      },
      {
        fingers: "1,x,2,3,4,x",
        notes: ["Bb", "Ab", "D", "G"],
        baseFret: 5,
      },
      {
        fingers: "x,1,2,1,4,4",
        notes: ["D", "Ab", "C", "G", "C"],
        baseFret: 5,
      },
      {
        fingers: "x,1,1,1,2,1",
        notes: ["G", "C", "F", "Bb", "D"],
        baseFret: 5,
      },
      {
        fingers: "x,x,1,2,3,1",
        notes: ["Ab", "D", "G", "Bb"],
        baseFret: 5,
      },
      {
        fingers: "1,x,1,2,3,1",
        notes: ["Bb", "Ab", "D", "G", "Bb"],
        baseFret: 5,
      },
    ],
  },
  "Bb6(#11)": {
    root: "Bb",
    type: "6(#11)",
    structure: ["1", "3", "5", "6", "#11"],
    positions: [
      {
        fingers: "x,1,3,0,4,0",
        notes: ["Bb", "F", "G", "D", "E"],
        baseFret: 1,
      },
    ],
  },
  "Bb7(#9)": {
    root: "Bb",
    type: "7(#9)",
    structure: ["1", "3", "5", "b7", "#9"],
    positions: [
      {
        fingers: "x,1,0,2,4,3",
        notes: ["Bb", "D", "Ab", "C#", "F"],
        baseFret: 1,
      },
      {
        fingers: "2,1,3,3,3,x",
        notes: ["Bb", "D", "Ab", "C#", "F"],
        baseFret: 5,
      },
      {
        fingers: "1,3,1,2,1,4",
        notes: ["Bb", "F", "Ab", "D", "F", "C#"],
        baseFret: 5,
      },
    ],
  },
  Bb9: {
    root: "Bb",
    type: "9",
    structure: ["1", "3", "5", "b7", "9"],
    positions: [
      {
        fingers: "x,2,0,3,4,x",
        notes: ["Bb", "D", "Ab", "C"],
        baseFret: 1,
      },
      {
        fingers: "x,1,3,2,4,x",
        notes: ["D", "Ab", "C", "F"],
        baseFret: 5,
      },
      {
        fingers: "1,x,1,2,1,4",
        notes: ["Bb", "Ab", "D", "F", "C"],
        baseFret: 5,
      },
      {
        fingers: "x,2,1,3,3,3",
        notes: ["Bb", "D", "Ab", "C", "F"],
        baseFret: 5,
      },
      {
        fingers: "x,x,1,2,1,4",
        notes: ["Ab", "D", "F", "C"],
        baseFret: 5,
      },
      {
        fingers: "x,x,1,3,3,3",
        notes: ["D", "Ab", "C", "F"],
        baseFret: 5,
      },
      {
        fingers: "x,1,3,2,4,4",
        notes: ["D", "Ab", "C", "F", "Bb"],
        baseFret: 5,
      },
      {
        fingers: "x,x,3,2,1,4",
        notes: ["Ab", "C", "D", "Bb"],
        baseFret: 5,
      },
      {
        fingers: "x,2,1,3,4,x",
        notes: ["Bb", "D", "Ab", "C"],
        baseFret: 5,
      },
      {
        fingers: "2,1,3,1,x,x",
        notes: ["Bb", "D", "Ab", "C"],
        baseFret: 5,
      },
      {
        fingers: "x,1,3,2,x,x",
        notes: ["D", "Ab", "C"],
        baseFret: 1,
      },
      {
        fingers: "x,x,2,1,3,x",
        notes: ["Ab", "C", "F"],
        baseFret: 1,
      },
      {
        fingers: "x,x,0,1,1,1",
        notes: ["D", "Ab", "C", "F"],
        baseFret: 1,
      },
      {
        fingers: "x,2,0,3,3,3",
        notes: ["Bb", "D", "Ab", "C", "F"],
        baseFret: 1,
      },
    ],
  },
  Bb9b5: {
    root: "Bb",
    type: "9b5",
    structure: ["1", "3", "b5", "b7", "9"],
    positions: [
      {
        fingers: "0,1,0,2,3,0",
        notes: ["Fb", "Bb", "D", "Ab", "C", "Fb"],
        baseFret: 1,
      },
      {
        fingers: "2,1,3,1,1,4",
        notes: ["Bb", "D", "Ab", "C", "Fb", "Bb"],
        baseFret: 5,
      },
      {
        fingers: "x,x,1,2,3,1",
        notes: ["Bb", "Fb", "Ab", "C"],
        baseFret: 5,
      },
    ],
  },
  Bbmaj13: {
    root: "Bb",
    type: "maj13",
    structure: ["1", "3", "5", "7", "9", "11", "13"],
    positions: [
      {
        fingers: "2,1,1,1,3,1",
        notes: ["Bb", "D", "G", "C", "F", "A"],
        baseFret: 5,
      },
      {
        fingers: "3,x,4,2,1,1",
        notes: ["Bb", "A", "C", "D", "G"],
        baseFret: 5,
      },
    ],
  },
  Bb7: {
    root: "Bb",
    type: "7",
    structure: ["1", "3", "5", "b7"],
    positions: [
      {
        fingers: "x,1,3,1,4,1",
        notes: ["Bb", "F", "Ab", "D", "F"],
        baseFret: 5,
      },
      {
        fingers: "1,3,1,2,4,1",
        notes: ["Bb", "F", "Ab", "D", "Ab", "Bb"],
        baseFret: 5,
      },
      {
        fingers: "x,x,1,3,2,4",
        notes: ["Bb", "F", "Ab", "D"],
        baseFret: 5,
      },
      {
        fingers: "1,3,1,2,1,1",
        notes: ["Bb", "F", "Ab", "D", "F", "Bb"],
        baseFret: 5,
      },
      {
        fingers: "x,x,1,3,2,x",
        notes: ["Ab", "D", "F"],
        baseFret: 1,
      },
      {
        fingers: "x,x,1,1,1,3",
        notes: ["F", "Bb", "D", "Ab"],
        baseFret: 5,
      },
      {
        fingers: "1,x,2,3,x,x",
        notes: ["Bb", "Ab", "D"],
        baseFret: 1,
      },
      {
        fingers: "x,2,0,3,x,x",
        notes: ["Bb", "D", "Ab"],
        baseFret: 1,
      },
      {
        fingers: "x,x,x,3,2,1",
        notes: ["D", "F", "Ab"],
        baseFret: 1,
      },
      {
        fingers: "x,x,x,1,4,x",
        notes: ["D", "Ab"],
        baseFret: 1,
      },
      {
        fingers: "x,x,x,2,1,3",
        notes: ["F", "Ab", "D"],
        baseFret: 1,
      },
      {
        fingers: "1,x,2,4,3,x",
        notes: ["Bb", "Ab", "D", "F"],
        baseFret: 5,
      },
      {
        fingers: "x,x,1,2,1,1",
        notes: ["Ab", "D", "F", "Bb"],
        baseFret: 5,
      },
      {
        fingers: "x,2,1,3,x,x",
        notes: ["Bb", "D", "Ab"],
        baseFret: 1,
      },
      {
        fingers: "x,x,x,1,1,2",
        notes: ["Bb", "D", "Ab"],
        baseFret: 1,
      },
      {
        fingers: "x,x,x,2,4,1",
        notes: ["D", "Ab", "Bb"],
        baseFret: 1,
      },
    ],
  },
  Bbdim7: {
    root: "Bb",
    type: "dim7",
    structure: ["1", "b3", "b5", "bb7"],
    positions: [
      {
        fingers: "2,4,1,3,x,x",
        notes: ["Abb", "Db", "Fb", "Bb"],
        baseFret: 5,
      },
      {
        fingers: "x,2,3,1,4,x",
        notes: ["Db", "Abb", "Bb", "Fb"],
        baseFret: 5,
      },
      {
        fingers: "x,x,1,3,2,4",
        notes: ["Bb", "Fb", "Abb", "Db"],
        baseFret: 5,
      },
      {
        fingers: "x,2,3,1,4,x",
        notes: ["Bb", "Fb", "Abb", "Db"],
        baseFret: 5,
      },
      {
        fingers: "3,x,1,4,2,x",
        notes: ["Bb", "Abb", "Db", "Fb"],
        baseFret: 5,
      },
    ],
  },
  Bbaug: {
    root: "Bb",
    type: "aug",
    structure: ["1", "3", "#5"],
    positions: [
      {
        fingers: "x,3,2,1,1,x",
        notes: ["D", "F#", "Bb", "D"],
        baseFret: 5,
      },
      {
        fingers: "4,3,2,1,x,x",
        notes: ["Bb", "D", "F#", "Bb"],
        baseFret: 5,
      },
      {
        fingers: "x,x,4,2,3,1",
        notes: ["D", "F#", "Bb", "D"],
        baseFret: 5,
      },
    ],
  },
  Bbmaj: {
    root: "Bb",
    type: "maj",
    structure: ["1", "3", "5"],
    positions: [
      {
        fingers: "x,1,3,3,3,x",
        notes: ["Bb", "F", "Bb", "D"],
        baseFret: 5,
      },
      {
        fingers: "1,3,4,2,1,1",
        notes: ["Bb", "F", "Bb", "D", "F", "Bb"],
        baseFret: 5,
      },
      {
        fingers: "x,4,3,1,2,1",
        notes: ["Bb", "D", "F", "Bb", "D"],
        baseFret: 5,
      },
      {
        fingers: "4,3,1,1,1,x",
        notes: ["Bb", "D", "F", "Bb", "D"],
        baseFret: 5,
      },
      {
        fingers: "2,1,x,x,x,x",
        notes: ["Bb", "D"],
        baseFret: 1,
      },
      {
        fingers: "x,x,x,x,1,4",
        notes: ["D", "Bb"],
        baseFret: 1,
      },
      {
        fingers: "x,x,x,x,1,1",
        notes: ["F", "Bb"],
        baseFret: 1,
      },
      {
        fingers: "x,1,4,x,x,x",
        notes: ["D", "Bb"],
        baseFret: 1,
      },
      {
        fingers: "x,1,3,3,3,1",
        notes: ["Bb", "F", "Bb", "D", "F"],
        baseFret: 5,
      },
      {
        fingers: "x,x,0,3,4,1",
        notes: ["D", "Bb", "D", "F"],
        baseFret: 1,
      },
      {
        fingers: "x,x,3,2,1,1",
        notes: ["Bb", "D", "F", "Bb"],
        baseFret: 5,
      },
      {
        fingers: "x,3,x,2,1,1",
        notes: ["F", "D", "F", "Bb"],
        baseFret: 5,
      },
      {
        fingers: "x,3,4,2,1,1",
        notes: ["F", "Bb", "D", "F", "Bb"],
        baseFret: 5,
      },
      {
        fingers: "x,x,1,1,1,x",
        notes: ["F", "Bb", "D"],
        baseFret: 1,
      },
      {
        fingers: "x,3,1,1,1,x",
        notes: ["D", "F", "Bb", "D"],
        baseFret: 5,
      },
      {
        fingers: "x,x,1,1,1,4",
        notes: ["F", "Bb", "D", "Bb"],
        baseFret: 5,
      },
      {
        fingers: "x,x,2,1,x,x",
        notes: ["Bb", "D"],
        baseFret: 1,
      },
    ],
  },
  Bb11: {
    root: "Bb",
    type: "11",
    structure: ["1", "3", "5", "b7", "9", "11"],
    positions: [
      {
        fingers: "x,1,1,1,1,1",
        notes: ["Bb", "Eb", "Ab", "C", "F"],
        baseFret: 5,
      },
      {
        fingers: "3,x,4,2,1,1",
        notes: ["Bb", "Ab", "C", "Eb", "Ab"],
        baseFret: 5,
      },
      {
        fingers: "x,x,1,1,2,1",
        notes: ["Bb", "Eb", "Ab", "C"],
        baseFret: 5,
      },
    ],
  },
  Bbmaj9: {
    root: "Bb",
    type: "maj9",
    structure: ["1", "3", "5", "7", "9"],
    positions: [
      {
        fingers: "x,1,0,4,2,3",
        notes: ["Bb", "D", "A", "C", "F"],
        baseFret: 1,
      },
      {
        fingers: "2,1,4,1,x,x",
        notes: ["Bb", "D", "A", "C"],
        baseFret: 5,
      },
      {
        fingers: "x,x,4,1,2,1",
        notes: ["Bb", "C", "F", "A"],
        baseFret: 5,
      },
      {
        fingers: "x,1,4,1,2,1",
        notes: ["D", "Bb", "C", "F", "A"],
        baseFret: 5,
      },
      {
        fingers: "x,x,1,3,4,1",
        notes: ["Bb", "F", "A", "C"],
        baseFret: 5,
      },
      {
        fingers: "x,1,3,2,1,x",
        notes: ["Bb", "F", "A", "C"],
        baseFret: 5,
      },
    ],
  },
  Bbsus2: {
    root: "Bb",
    type: "sus2",
    structure: ["1", "2", "5"],
    positions: [
      {
        fingers: "x,1,3,4,1,1",
        notes: ["Bb", "F", "Bb", "C", "F"],
        baseFret: 5,
      },
    ],
  },
  Bbm11: {
    root: "Bb",
    type: "m11",
    structure: ["1", "b3", "5", "b7", "9", "11"],
    positions: [
      {
        fingers: "x,x,2,3,1,x",
        notes: ["Ab", "Db", "Eb"],
        baseFret: 1,
      },
      {
        fingers: "x,1,1,1,2,1",
        notes: ["Bb", "Eb", "Ab", "Db", "F"],
        baseFret: 5,
      },
      {
        fingers: "x,1,1,1,2,x",
        notes: ["Bb", "Eb", "Ab", "Db"],
        baseFret: 5,
      },
      {
        fingers: "2,x,3,4,1,x",
        notes: ["Bb", "Ab", "Db", "Eb"],
        baseFret: 5,
      },
    ],
  },
  Bbm: {
    root: "Bb",
    type: "m",
    structure: ["1", "b3", "5"],
    positions: [
      {
        fingers: "x,1,3,4,2,1",
        notes: ["Bb", "F", "Bb", "Db", "F"],
        baseFret: 5,
      },
      {
        fingers: "1,3,4,1,1,1",
        notes: ["Bb", "F", "Bb", "Db", "F", "Bb"],
        baseFret: 5,
      },
      {
        fingers: "x,x,1,3,4,2",
        notes: ["Bb", "F", "Bb", "Db"],
        baseFret: 5,
      },
      {
        fingers: "x,x,3,4,2,1",
        notes: ["F", "Bb", "Db", "F"],
        baseFret: 5,
      },
      {
        fingers: "3,1,x,x,x,x",
        notes: ["Bb", "Db"],
        baseFret: 1,
      },
      {
        fingers: "x,x,x,3,2,1",
        notes: ["Bb", "Db", "F"],
        baseFret: 1,
      },
      {
        fingers: "x,x,x,1,1,1",
        notes: ["Db", "F", "Bb"],
        baseFret: 1,
      },
      {
        fingers: "x,3,4,1,x,x",
        notes: ["F", "Bb", "Db"],
        baseFret: 1,
      },
    ],
  },
  Bb7b5: {
    root: "Bb",
    type: "7b5",
    structure: ["1", "3", "b5", "b7"],
    positions: [
      {
        fingers: "x,1,2,1,3,x",
        notes: ["Bb", "Fb", "Ab", "D"],
        baseFret: 5,
      },
      {
        fingers: "x,x,2,4,1,3",
        notes: ["Ab", "D", "Fb", "Bb"],
        baseFret: 5,
      },
      {
        fingers: "x,x,1,2,3,4",
        notes: ["Bb", "Fb", "Ab", "D"],
        baseFret: 5,
      },
    ],
  },
  "Bb9(#11)": {
    root: "Bb",
    type: "9(#11)",
    structure: ["1", "3", "5", "b7", "9", "#11"],
    positions: [
      {
        fingers: "x,1,2,1,1,x",
        notes: ["D", "Ab", "C", "E"],
        baseFret: 5,
      },
      {
        fingers: "2,x,3,4,1,x",
        notes: ["Bb", "Ab", "D", "E"],
        baseFret: 5,
      },
      {
        fingers: "0,x,0,1,1,1",
        notes: ["E", "D", "Ab", "C", "F"],
        baseFret: 1,
      },
    ],
  },
  Bbm7: {
    root: "Bb",
    type: "m7",
    structure: ["1", "b3", "5", "b7"],
    positions: [
      {
        fingers: "x,1,3,1,2,1",
        notes: ["Bb", "F", "Ab", "Db", "F"],
        baseFret: 5,
      },
      {
        fingers: "1,3,1,1,4,1",
        notes: ["Bb", "F", "Ab", "Db", "Ab", "Bb"],
        baseFret: 5,
      },
      {
        fingers: "x,x,1,4,2,3",
        notes: ["Bb", "F", "Ab", "Db"],
        baseFret: 5,
      },
      {
        fingers: "2,x,3,3,3,x",
        notes: ["Bb", "Ab", "Db", "F"],
        baseFret: 1,
      },
      {
        fingers: "1,3,1,1,1,1",
        notes: ["Bb", "F", "Ab", "Db", "F", "Bb"],
        baseFret: 5,
      },
      {
        fingers: "x,x,x,2,1,1",
        notes: ["F", "Ab", "Db"],
        baseFret: 1,
      },
      {
        fingers: "2,x,3,3,3,3",
        notes: ["Bb", "Ab", "Db", "F", "Bb"],
        baseFret: 1,
      },
      {
        fingers: "2,x,3,3,x,x",
        notes: ["Bb", "Ab", "Db"],
        baseFret: 1,
      },
      {
        fingers: "x,x,2,3,1,4",
        notes: ["F", "Bb", "Db", "Ab"],
        baseFret: 5,
      },
      {
        fingers: "1,x,1,1,4,x",
        notes: ["Bb", "Ab", "Db", "Ab"],
        baseFret: 5,
      },
    ],
  },
  "Bbm(maj7)": {
    root: "Bb",
    type: "m(maj7)",
    structure: ["1", "b3", "5", "7"],
    positions: [
      {
        fingers: "x,1,4,2,3,x",
        notes: ["Bb", "F", "A", "Db"],
        baseFret: 5,
      },
      {
        fingers: "x,x,2,1,1,1",
        notes: ["A", "Db", "F", "Bb"],
        baseFret: 5,
      },
      {
        fingers: "1,x,4,2,3,x",
        notes: ["Bb", "A", "Db", "F"],
        baseFret: 5,
      },
      {
        fingers: "1,3,2,1,1,1",
        notes: ["Bb", "F", "A", "Db", "F", "Bb"],
        baseFret: 5,
      },
    ],
  },
  Bbdim: {
    root: "Bb",
    type: "dim",
    structure: ["1", "b3", "b5"],
    positions: [
      {
        fingers: "x,1,2,4,3,x",
        notes: ["Bb", "Fb", "Bb", "Db"],
        baseFret: 5,
      },
      {
        fingers: "x,x,4,3,1,2",
        notes: ["Bb", "Db", "Fb", "Bb"],
        baseFret: 5,
      },
      {
        fingers: "1,2,3,1,x,x",
        notes: ["Bb", "Fb", "Bb", "Db"],
        baseFret: 5,
      },
      {
        fingers: "x,x,x,2,1,3",
        notes: ["Db", "Fb", "Bb"],
        baseFret: 1,
      },
    ],
  },
  Bb6: {
    root: "Bb",
    type: "6",
    structure: ["1", "3", "5", "6"],
    positions: [
      {
        fingers: "x,1,3,3,3,3",
        notes: ["Bb", "F", "Bb", "D", "G"],
        baseFret: 5,
      },
      {
        fingers: "1,x,3,2,4,1",
        notes: ["Bb", "Bb", "D", "G", "Bb"],
        baseFret: 5,
      },
      {
        fingers: "x,x,1,3,1,4",
        notes: ["Bb", "F", "G", "D"],
        baseFret: 5,
      },
      {
        fingers: "3,1,2,0,x,x",
        notes: ["Bb", "D", "G", "G"],
        baseFret: 1,
      },
      {
        fingers: "x,1,x,0,3,4",
        notes: ["Bb", "G", "D", "G"],
        baseFret: 1,
      },
      {
        fingers: "x,1,x,0,4,x",
        notes: ["Bb", "G", "D"],
        baseFret: 1,
      },
      {
        fingers: "2,x,1,4,3,x",
        notes: ["Bb", "G", "D", "F"],
        baseFret: 5,
      },
      {
        fingers: "x,x,3,3,3,3",
        notes: ["F", "Bb", "D", "G"],
        baseFret: 1,
      },
      {
        fingers: "x,1,3,0,4,x",
        notes: ["Bb", "F", "G", "D"],
        baseFret: 1,
      },
      {
        fingers: "2,1,0,0,3,4",
        notes: ["Bb", "D", "D", "G", "F", "Bb"],
        baseFret: 1,
      },
      {
        fingers: "2,x,1,3,x,x",
        notes: ["Bb", "G", "D"],
        baseFret: 1,
      },
      {
        fingers: "2,x,1,3,4,x",
        notes: ["Bb", "G", "D", "G"],
        baseFret: 5,
      },
      {
        fingers: "x,x,3,2,4,1",
        notes: ["Bb", "D", "G", "Bb"],
        baseFret: 5,
      },
      {
        fingers: "1,x,x,0,2,x",
        notes: ["Bb", "G", "F"],
        baseFret: 1,
      },
      {
        fingers: "x,2,3,1,4,x",
        notes: ["Bb", "F", "G", "D"],
        baseFret: 5,
      },
      {
        fingers: "x,x,1,1,1,1",
        notes: ["F", "Bb", "D", "G"],
        baseFret: 5,
      },
      {
        fingers: "x,1,3,1,2,1",
        notes: ["G", "D", "F", "Bb", "D"],
        baseFret: 5,
      },
      {
        fingers: "x,x,1,4,2,3",
        notes: ["G", "D", "F", "Bb"],
        baseFret: 5,
      },
      {
        fingers: "x,1,x,x,3,4",
        notes: ["Bb", "D", "G"],
        baseFret: 1,
      },
      {
        fingers: "x,1,3,0,x,x",
        notes: ["Bb", "F", "G"],
        baseFret: 1,
      },
      {
        fingers: "1,x,0,0,4,x",
        notes: ["Bb", "D", "G", "G"],
        baseFret: 1,
      },
      {
        fingers: "x,1,0,0,4,x",
        notes: ["Bb", "D", "G", "D"],
        baseFret: 1,
      },
    ],
  },
  "Bb7(#5)": {
    root: "Bb",
    type: "7(#5)",
    structure: ["1", "3", "#5", "b7"],
    positions: [
      {
        fingers: "x,1,4,1,3,2",
        notes: ["Bb", "F#", "Ab", "D", "F#"],
        baseFret: 5,
      },
      {
        fingers: "1,x,1,2,3,1",
        notes: ["Bb", "Ab", "D", "F#", "Bb"],
        baseFret: 5,
      },
      {
        fingers: "x,1,2,1,1,x",
        notes: ["Ab", "D", "F#", "Bb"],
        baseFret: 5,
      },
      {
        fingers: "x,x,1,2,3,1",
        notes: ["Ab", "D", "F#", "Bb"],
        baseFret: 5,
      },
      {
        fingers: "1,x,2,3,4,x",
        notes: ["Bb", "Ab", "D", "F#"],
        baseFret: 5,
      },
    ],
  },
  Bb7sus4: {
    root: "Bb",
    type: "7sus4",
    structure: ["1", "4", "5", "b7"],
    positions: [
      {
        fingers: "x,1,3,1,4,1",
        notes: ["Bb", "F", "Ab", "Eb", "F"],
        baseFret: 5,
      },
      {
        fingers: "1,3,1,4,1,1",
        notes: ["Bb", "F", "Ab", "Eb", "F", "Bb"],
        baseFret: 5,
      },
      {
        fingers: "x,x,1,3,2,4",
        notes: ["Bb", "F", "Ab", "Eb"],
        baseFret: 5,
      },
      {
        fingers: "x,1,1,1,2,x",
        notes: ["F", "Bb", "Eb", "Ab"],
        baseFret: 5,
      },
      {
        fingers: "1,x,2,4,x,x",
        notes: ["Bb", "Ab", "Eb"],
        baseFret: 1,
      },
    ],
  },
  Bbmaj7: {
    root: "Bb",
    type: "maj7",
    structure: ["1", "3", "5", "7"],
    positions: [
      {
        fingers: "x,1,3,2,4,1",
        notes: ["Bb", "F", "A", "D", "F"],
        baseFret: 5,
      },
      {
        fingers: "1,4,2,3,1,x",
        notes: ["Bb", "F", "A", "D", "F"],
        baseFret: 5,
      },
      {
        fingers: "x,4,3,1,1,1",
        notes: ["Bb", "D", "F", "A", "D"],
        baseFret: 5,
      },
      {
        fingers: "x,x,1,3,3,3",
        notes: ["Bb", "F", "A", "D"],
        baseFret: 5,
      },
      {
        fingers: "x,1,3,2,4,x",
        notes: ["Bb", "F", "A", "D"],
        baseFret: 5,
      },
      {
        fingers: "1,x,3,4,x,x",
        notes: ["Bb", "A", "D"],
        baseFret: 1,
      },
      {
        fingers: "1,x,3,4,2,x",
        notes: ["Bb", "A", "D", "F"],
        baseFret: 5,
      },
      {
        fingers: "x,x,4,3,2,1",
        notes: ["Bb", "D", "F", "A"],
        baseFret: 5,
      },
      {
        fingers: "x,x,1,1,1,4",
        notes: ["F", "Bb", "D", "A"],
        baseFret: 5,
      },
      {
        fingers: "x,2,4,1,3,x",
        notes: ["D", "A", "Bb", "F"],
        baseFret: 5,
      },
      {
        fingers: "1,1,3,2,4,1",
        notes: ["F", "Bb", "F", "A", "D", "F"],
        baseFret: 5,
      },
      {
        fingers: "2,x,3,4,2,1",
        notes: ["Bb", "A", "D", "F", "A"],
        baseFret: 5,
      },
      {
        fingers: "x,1,4,2,x,x",
        notes: ["Bb", "F", "A"],
        baseFret: 1,
      },
      {
        fingers: "x,1,0,2,4,1",
        notes: ["Bb", "D", "A", "D", "F"],
        baseFret: 1,
      },
    ],
  },
  Bb5: {
    root: "Bb",
    type: "5",
    structure: ["1", "5"],
    positions: [
      {
        fingers: "x,1,3,x,x,x",
        notes: ["Bb", "F"],
        baseFret: 1,
      },
      {
        fingers: "1,3,x,x,x,x",
        notes: ["Bb", "F"],
        baseFret: 1,
      },
      {
        fingers: "1,3,4,x,x,x",
        notes: ["Bb", "F", "Bb"],
        baseFret: 1,
      },
      {
        fingers: "x,1,1,x,x,x",
        notes: ["F", "Bb"],
        baseFret: 1,
      },
      {
        fingers: "1,1,3,x,x,x",
        notes: ["F", "Bb", "F"],
        baseFret: 1,
      },
      {
        fingers: "x,1,3,4,x,x",
        notes: ["Bb", "F", "Bb"],
        baseFret: 1,
      },
      {
        fingers: "1,1,x,x,x,x",
        notes: ["F", "Bb"],
        baseFret: 1,
      },
      {
        fingers: "x,x,x,1,4,x",
        notes: ["Bb", "F"],
        baseFret: 1,
      },
      {
        fingers: "x,x,1,1,x,x",
        notes: ["F", "Bb"],
        baseFret: 1,
      },
      {
        fingers: "x,x,1,3,4,x",
        notes: ["Bb", "F", "Bb"],
        baseFret: 1,
      },
      {
        fingers: "x,x,1,4,x,x",
        notes: ["Bb", "F"],
        baseFret: 1,
      },
    ],
  },
  Bbm6: {
    root: "Bb",
    type: "m6",
    structure: ["1", "b3", "5", "6"],
    positions: [
      {
        fingers: "x,1,3,0,2,4",
        notes: ["Bb", "F", "G", "Db", "G"],
        baseFret: 1,
      },
      {
        fingers: "1,x,3,1,4,1",
        notes: ["Bb", "Bb", "Db", "G", "Bb"],
        baseFret: 5,
      },
      {
        fingers: "x,x,1,3,1,2",
        notes: ["Bb", "F", "G", "Db"],
        baseFret: 5,
      },
      {
        fingers: "2,x,1,3,3,3",
        notes: ["Bb", "G", "Db", "F", "Bb"],
        baseFret: 5,
      },
    ],
  },
  "Bb7(b9)": {
    root: "Bb",
    type: "7(b9)",
    structure: ["1", "3", "5", "b7", "b9"],
    positions: [
      {
        fingers: "x,1,0,2,x,3",
        notes: ["Bb", "D", "Ab", "F"],
        baseFret: 1,
      },
      {
        fingers: "3,2,4,1,x,x",
        notes: ["Bb", "D", "Ab", "Cb"],
        baseFret: 5,
      },
      {
        fingers: "1,x,1,2,1,3",
        notes: ["Bb", "Ab", "D", "F", "Cb"],
        baseFret: 5,
      },
      {
        fingers: "x,2,3,1,4,x",
        notes: ["D", "Ab", "Cb", "F"],
        baseFret: 5,
      },
    ],
  },
  Bbm9: {
    root: "Bb",
    type: "m9",
    structure: ["1", "b3", "5", "b7", "9"],
    positions: [
      {
        fingers: "3,1,4,2,x,x",
        notes: ["Bb", "Db", "Ab", "C"],
        baseFret: 5,
      },
      {
        fingers: "1,3,1,1,1,4",
        notes: ["Bb", "F", "Ab", "Db", "F", "C"],
        baseFret: 5,
      },
      {
        fingers: "x,2,1,3,4,x",
        notes: ["Bb", "Db", "Ab", "C"],
        baseFret: 5,
      },
      {
        fingers: "x,x,2,4,1,3",
        notes: ["F", "C", "Db", "Ab"],
        baseFret: 5,
      },
      {
        fingers: "1,x,1,1,1,4",
        notes: ["Bb", "Ab", "Db", "F", "C"],
        baseFret: 5,
      },
    ],
  },
  "Bb13(b9)": {
    root: "Bb",
    type: "13(b9)",
    structure: ["1", "3", "5", "b7", "b9", "11", "13"],
    positions: [
      {
        fingers: "x,x,1,2,4,3",
        notes: ["Ab", "D", "G", "Cb"],
        baseFret: 5,
      },
    ],
  },
  Bbsus4: {
    root: "Bb",
    type: "sus4",
    structure: ["1", "4", "5"],
    positions: [
      {
        fingers: "x,1,2,3,4,1",
        notes: ["Bb", "F", "Bb", "Eb", "F"],
        baseFret: 5,
      },
      {
        fingers: "x,x,1,1,2,4",
        notes: ["F", "Bb", "Eb", "Bb"],
        baseFret: 5,
      },
      {
        fingers: "1,1,3,4,1,1",
        notes: ["Bb", "Eb", "Bb", "Eb", "F", "Bb"],
        baseFret: 5,
      },
      {
        fingers: "x,1,3,3,4,x",
        notes: ["Bb", "F", "Bb", "Eb"],
        baseFret: 5,
      },
    ],
  },
  "Bb6/9": {
    root: "Bb",
    type: "6/9",
    structure: ["1", "3", "5", "6", "9"],
    positions: [
      {
        fingers: "x,1,0,0,2,3",
        notes: ["Bb", "D", "G", "C", "F"],
        baseFret: 1,
      },
      {
        fingers: "2,1,1,1,3,4",
        notes: ["Bb", "D", "G", "C", "F", "Bb"],
        baseFret: 5,
      },
      {
        fingers: "x,x,2,1,3,4",
        notes: ["Bb", "D", "G", "C"],
        baseFret: 5,
      },
      {
        fingers: "2,x,1,1,3,x",
        notes: ["Bb", "G", "C", "F"],
        baseFret: 5,
      },
    ],
  },
  Cb7: {
    root: "Cb",
    type: "7",
    structure: ["1", "3", "5", "b7"],
    positions: [
      {
        fingers: "1,x,2,3,x,x",
        notes: ["Cb", "Bbb", "Eb"],
        baseFret: 1,
      },
    ],
  },
  Db13: {
    root: "Db",
    type: "13",
    structure: ["1", "3", "5", "b7", "9", "11", "13"],
    positions: [
      {
        fingers: "x,2,1,3,3,4",
        notes: ["Db", "F", "Cb", "Eb", "Bb"],
        baseFret: 5,
      },
      {
        fingers: "3,x,4,2,1,1",
        notes: ["Db", "Cb", "Eb", "F", "Bb"],
        baseFret: 5,
      },
      {
        fingers: "1,x,1,2,3,4",
        notes: ["Db", "Cb", "F", "Bb", "Eb"],
        baseFret: 5,
      },
      {
        fingers: "x,x,1,2,3,1",
        notes: ["Cb", "F", "Bb", "Db"],
        baseFret: 5,
      },
      {
        fingers: "1,x,2,3,4,x",
        notes: ["Db", "Cb", "F", "Bb"],
        baseFret: 5,
      },
    ],
  },
  "Db7(#9)": {
    root: "Db",
    type: "7(#9)",
    structure: ["1", "3", "5", "b7", "#9"],
    positions: [
      {
        fingers: "x,2,1,3,4,x",
        notes: ["Db", "F", "Cb", "E"],
        baseFret: 5,
      },
      {
        fingers: "2,1,3,3,3,x",
        notes: ["Db", "F", "Cb", "E", "Ab"],
        baseFret: 5,
      },
      {
        fingers: "1,3,1,2,1,4",
        notes: ["Db", "Ab", "Cb", "F", "Ab", "E"],
        baseFret: 5,
      },
      {
        fingers: "1,3,1,2,4,4",
        notes: ["Db", "Ab", "Cb", "F", "Cb", "E"],
        baseFret: 5,
      },
      {
        fingers: "1,x,2,3,4,4",
        notes: ["Db", "Cb", "F", "Cb", "E"],
        baseFret: 5,
      },
      {
        fingers: "x,x,2,1,3,4",
        notes: ["Db", "F", "Cb", "E"],
        baseFret: 5,
      },
    ],
  },
  Db9: {
    root: "Db",
    type: "9",
    structure: ["1", "3", "5", "b7", "9"],
    positions: [
      {
        fingers: "x,2,1,3,4,x",
        notes: ["Db", "F", "Cb", "Eb"],
        baseFret: 5,
      },
      {
        fingers: "x,1,3,2,4,x",
        notes: ["F", "Cb", "Eb", "Ab"],
        baseFret: 5,
      },
      {
        fingers: "x,x,2,1,3,4",
        notes: ["Cb", "Eb", "Ab", "Db"],
        baseFret: 5,
      },
      {
        fingers: "x,2,1,3,3,3",
        notes: ["Db", "F", "Cb", "Eb", "Ab"],
        baseFret: 5,
      },
      {
        fingers: "2,x,1,3,3,3",
        notes: ["Ab", "F", "Cb", "Eb", "Ab"],
        baseFret: 5,
      },
      {
        fingers: "x,1,2,1,3,4",
        notes: ["F", "Cb", "Eb", "Ab", "Db"],
        baseFret: 5,
      },
      {
        fingers: "x,x,x,3,1,2",
        notes: ["Eb", "F", "Cb"],
        baseFret: 1,
      },
      {
        fingers: "1,x,2,3,x,4",
        notes: ["Db", "Cb", "F", "Eb"],
        baseFret: 5,
      },
      {
        fingers: "x,x,1,2,1,4",
        notes: ["Cb", "F", "Ab", "Eb"],
        baseFret: 5,
      },
    ],
  },
  Db9b5: {
    root: "Db",
    type: "9b5",
    structure: ["1", "3", "b5", "b7", "9"],
    positions: [
      {
        fingers: "1,2,1,3,4,1",
        notes: ["Abb", "Db", "F", "Cb", "Eb", "Abb"],
        baseFret: 5,
      },
      {
        fingers: "2,1,3,1,1,4",
        notes: ["Db", "F", "Cb", "Eb", "Abb", "Db"],
        baseFret: 5,
      },
      {
        fingers: "x,x,1,2,3,1",
        notes: ["Db", "Abb", "Cb", "Eb"],
        baseFret: 5,
      },
    ],
  },
  Dbmaj13: {
    root: "Db",
    type: "maj13",
    structure: ["1", "3", "5", "7", "9", "11", "13"],
    positions: [
      {
        fingers: "1,x,2,3,4,x",
        notes: ["Db", "C", "F", "Bb"],
        baseFret: 5,
      },
    ],
  },
  Db7: {
    root: "Db",
    type: "7",
    structure: ["1", "3", "5", "b7"],
    positions: [
      {
        fingers: "x,3,2,4,1,x",
        notes: ["Db", "F", "Cb", "Db"],
        baseFret: 5,
      },
      {
        fingers: "x,1,3,1,4,1",
        notes: ["Db", "Ab", "Cb", "F", "Ab"],
        baseFret: 5,
      },
      {
        fingers: "1,3,1,2,4,1",
        notes: ["Db", "Ab", "Cb", "F", "Cb", "Db"],
        baseFret: 5,
      },
      {
        fingers: "1,x,2,4,3,x",
        notes: ["Db", "Cb", "F", "Ab"],
        baseFret: 5,
      },
      {
        fingers: "x,2,1,3,x,x",
        notes: ["Db", "F", "Cb"],
        baseFret: 1,
      },
      {
        fingers: "1,x,2,3,x,x",
        notes: ["Db", "Cb", "F"],
        baseFret: 1,
      },
      {
        fingers: "x,1,3,x,2,x",
        notes: ["Cb", "F", "Db"],
        baseFret: 1,
      },
      {
        fingers: "x,x,3,2,4,1",
        notes: ["Db", "F", "Cb", "Db"],
        baseFret: 5,
      },
      {
        fingers: "x,x,1,2,1,1",
        notes: ["Cb", "F", "Ab", "Db"],
        baseFret: 5,
      },
      {
        fingers: "x,x,1,3,2,4",
        notes: ["Db", "Ab", "Cb", "F"],
        baseFret: 5,
      },
      {
        fingers: "x,x,2,3,1,4",
        notes: ["F", "Cb", "Db", "Ab"],
        baseFret: 5,
      },
      {
        fingers: "x,x,1,1,1,3",
        notes: ["Ab", "Db", "F", "Cb"],
        baseFret: 5,
      },
    ],
  },
  Dbdim7: {
    root: "Db",
    type: "dim7",
    structure: ["1", "b3", "b5", "bb7"],
    positions: [
      {
        fingers: "2,4,1,3,x,x",
        notes: ["Abb", "Db", "Fb", "Cbb"],
        baseFret: 5,
      },
      {
        fingers: "x,2,3,1,4,x",
        notes: ["Fb", "Cbb", "Db", "Abb"],
        baseFret: 5,
      },
      {
        fingers: "x,x,1,3,2,4",
        notes: ["Db", "Abb", "Cbb", "Fb"],
        baseFret: 5,
      },
      {
        fingers: "3,x,1,4,2,x",
        notes: ["Db", "Cbb", "Fb", "Abb"],
        baseFret: 5,
      },
    ],
  },
  Dbaug: {
    root: "Db",
    type: "aug",
    structure: ["1", "3", "#5"],
    positions: [
      {
        fingers: "x,3,2,1,1,x",
        notes: ["Db", "F", "A", "Db"],
        baseFret: 5,
      },
      {
        fingers: "4,3,2,1,x,x",
        notes: ["A", "Db", "F", "A"],
        baseFret: 5,
      },
      {
        fingers: "x,x,4,2,3,1",
        notes: ["Db", "F", "A", "Db"],
        baseFret: 5,
      },
    ],
  },
  Dbmaj: {
    root: "Db",
    type: "maj",
    structure: ["1", "3", "5"],
    positions: [
      {
        fingers: "x,4,3,1,2,1",
        notes: ["Db", "F", "Ab", "Db", "F"],
        baseFret: 5,
      },
      {
        fingers: "x,1,3,3,3,x",
        notes: ["Db", "Ab", "Db", "F"],
        baseFret: 5,
      },
      {
        fingers: "1,3,4,2,1,1",
        notes: ["Db", "Ab", "Db", "F", "Ab", "Db"],
        baseFret: 5,
      },
      {
        fingers: "x,1,3,3,3,1",
        notes: ["Db", "Ab", "Db", "F", "Ab"],
        baseFret: 5,
      },
      {
        fingers: "x,x,x,1,3,2",
        notes: ["Ab", "Db", "F"],
        baseFret: 1,
      },
      {
        fingers: "x,3,1,1,1,x",
        notes: ["F", "Ab", "Db", "F"],
        baseFret: 5,
      },
      {
        fingers: "x,x,3,1,2,4",
        notes: ["F", "Ab", "Db", "Ab"],
        baseFret: 5,
      },
      {
        fingers: "x,x,x,3,4,1",
        notes: ["Db", "F", "Ab"],
        baseFret: 1,
      },
      {
        fingers: "x,x,3,3,3,x",
        notes: ["Ab", "Db", "F"],
        baseFret: 1,
      },
      {
        fingers: "x,4,3,1,2,x",
        notes: ["Db", "F", "Ab", "Db"],
        baseFret: 5,
      },
      {
        fingers: "2,x,1,4,x,x",
        notes: ["Ab", "F", "Db"],
        baseFret: 1,
      },
      {
        fingers: "x,x,x,2,1,1",
        notes: ["F", "Ab", "Db"],
        baseFret: 1,
      },
    ],
  },
  Db11: {
    root: "Db",
    type: "11",
    structure: ["1", "3", "5", "b7", "9", "11"],
    positions: [
      {
        fingers: "x,1,1,1,1,1",
        notes: ["Db", "Gb", "Cb", "Eb", "Ab"],
        baseFret: 5,
      },
      {
        fingers: "4,x,3,2,1,1",
        notes: ["Db", "Cb", "Eb", "Gb", "Cb"],
        baseFret: 5,
      },
      {
        fingers: "x,x,1,1,2,1",
        notes: ["Db", "Gb", "Cb", "Eb"],
        baseFret: 5,
      },
    ],
  },
  Dbmaj9: {
    root: "Db",
    type: "maj9",
    structure: ["1", "3", "5", "7", "9"],
    positions: [
      {
        fingers: "x,2,1,4,3,x",
        notes: ["Db", "F", "C", "Eb"],
        baseFret: 5,
      },
      {
        fingers: "2,1,3,1,x,x",
        notes: ["Db", "F", "C", "Eb"],
        baseFret: 5,
      },
      {
        fingers: "x,x,4,1,2,1",
        notes: ["Db", "Eb", "Ab", "C"],
        baseFret: 5,
      },
      {
        fingers: "x,1,x,3,2,2",
        notes: ["Db", "C", "Eb", "Ab"],
        baseFret: 5,
      },
    ],
  },
  Dbm: {
    root: "Db",
    type: "m",
    structure: ["1", "b3", "5"],
    positions: [
      {
        fingers: "x,1,3,4,2,1",
        notes: ["Db", "Ab", "Db", "Fb", "Ab"],
        baseFret: 5,
      },
      {
        fingers: "1,3,4,1,1,1",
        notes: ["Db", "Ab", "Db", "Fb", "Ab", "Db"],
        baseFret: 5,
      },
      {
        fingers: "x,x,1,3,4,2",
        notes: ["Db", "Ab", "Db", "Fb"],
        baseFret: 5,
      },
      {
        fingers: "x,x,x,1,1,1",
        notes: ["Fb", "Ab", "Db"],
        baseFret: 1,
      },
    ],
  },
  Db7b5: {
    root: "Db",
    type: "7b5",
    structure: ["1", "3", "b5", "b7"],
    positions: [
      {
        fingers: "x,1,2,1,3,x",
        notes: ["Db", "Abb", "Cb", "F"],
        baseFret: 5,
      },
      {
        fingers: "x,x,2,4,1,3",
        notes: ["Cb", "F", "Abb", "Db"],
        baseFret: 5,
      },
      {
        fingers: "1,3,2,4,x,x",
        notes: ["Db", "Abb", "Cb", "F"],
        baseFret: 5,
      },
    ],
  },
  Dbm7: {
    root: "Db",
    type: "m7",
    structure: ["1", "b3", "5", "b7"],
    positions: [
      {
        fingers: "x,3,1,4,1,x",
        notes: ["Db", "Fb", "Cb", "Db"],
        baseFret: 5,
      },
      {
        fingers: "x,1,3,1,2,1",
        notes: ["Db", "Ab", "Cb", "Fb", "Ab"],
        baseFret: 5,
      },
      {
        fingers: "1,3,1,1,4,1",
        notes: ["Db", "Ab", "Cb", "Fb", "Cb", "Db"],
        baseFret: 5,
      },
      {
        fingers: "x,1,x,2,3,x",
        notes: ["Db", "Cb", "Fb"],
        baseFret: 1,
      },
    ],
  },
  Dbdim: {
    root: "Db",
    type: "dim",
    structure: ["1", "b3", "b5"],
    positions: [
      {
        fingers: "x,1,2,4,3,x",
        notes: ["Db", "Abb", "Db", "Fb"],
        baseFret: 5,
      },
      {
        fingers: "x,x,4,3,1,2",
        notes: ["Db", "Fb", "Abb", "Db"],
        baseFret: 5,
      },
      {
        fingers: "1,2,3,1,x,x",
        notes: ["Db", "Abb", "Db", "Fb"],
        baseFret: 5,
      },
    ],
  },
  Db6: {
    root: "Db",
    type: "6",
    structure: ["1", "3", "5", "6"],
    positions: [
      {
        fingers: "x,4,2,3,1,x",
        notes: ["Db", "F", "Bb", "Db"],
        baseFret: 5,
      },
      {
        fingers: "x,1,3,3,3,3",
        notes: ["Db", "Ab", "Db", "F", "Bb"],
        baseFret: 5,
      },
      {
        fingers: "1,x,3,2,4,1",
        notes: ["Db", "Db", "F", "Bb", "Db"],
        baseFret: 5,
      },
      {
        fingers: "x,2,4,1,x,x",
        notes: ["Db", "Ab", "Bb"],
        baseFret: 1,
      },
      {
        fingers: "x,x,3,2,4,1",
        notes: ["Db", "F", "Bb", "Db"],
        baseFret: 5,
      },
      {
        fingers: "x,x,3,2,4,x",
        notes: ["Db", "F", "Bb"],
        baseFret: 1,
      },
      {
        fingers: "x,x,x,3,3,3",
        notes: ["Db", "F", "Bb"],
        baseFret: 1,
      },
    ],
  },
  "Db7(#5)": {
    root: "Db",
    type: "7(#5)",
    structure: ["1", "3", "#5", "b7"],
    positions: [
      {
        fingers: "x,1,2,1,1,x",
        notes: ["Cb", "F", "A", "Db"],
        baseFret: 5,
      },
      {
        fingers: "x,1,4,1,3,2",
        notes: ["Db", "A", "Cb", "F", "A"],
        baseFret: 5,
      },
      {
        fingers: "1,x,1,2,3,1",
        notes: ["Db", "Cb", "F", "A", "Db"],
        baseFret: 5,
      },
    ],
  },
  Db7sus4: {
    root: "Db",
    type: "7sus4",
    structure: ["1", "4", "5", "b7"],
    positions: [
      {
        fingers: "x,2,3,4,1,x",
        notes: ["Db", "Gb", "Cb", "Db"],
        baseFret: 5,
      },
      {
        fingers: "x,1,3,1,4,1",
        notes: ["Db", "Ab", "Cb", "Gb", "Ab"],
        baseFret: 5,
      },
      {
        fingers: "1,3,1,4,1,1",
        notes: ["Db", "Ab", "Cb", "Gb", "Ab", "Db"],
        baseFret: 5,
      },
      {
        fingers: "x,2,2,3,x,x",
        notes: ["Db", "Gb", "Cb"],
        baseFret: 1,
      },
    ],
  },
  Dbmaj7: {
    root: "Db",
    type: "maj7",
    structure: ["1", "3", "5", "7"],
    positions: [
      {
        fingers: "x,4,3,1,1,1",
        notes: ["Db", "F", "Ab", "C", "F"],
        baseFret: 5,
      },
      {
        fingers: "x,1,3,2,4,1",
        notes: ["Db", "Ab", "C", "F", "Ab"],
        baseFret: 5,
      },
      {
        fingers: "x,x,4,3,2,1",
        notes: ["Db", "F", "Ab", "C"],
        baseFret: 5,
      },
      {
        fingers: "1,x,3,4,2,x",
        notes: ["Db", "C", "F", "Ab"],
        baseFret: 5,
      },
      {
        fingers: "x,1,3,2,4,x",
        notes: ["Db", "Ab", "C", "F"],
        baseFret: 5,
      },
      {
        fingers: "x,2,x,3,4,x",
        notes: ["Db", "C", "F"],
        baseFret: 1,
      },
    ],
  },
  Db5: {
    root: "Db",
    type: "5",
    structure: ["1", "5"],
    positions: [
      {
        fingers: "x,1,3,4,x,x",
        notes: ["Db", "Ab", "Db"],
        baseFret: 1,
      },
      {
        fingers: "x,1,4,x,x,x",
        notes: ["Db", "Ab"],
        baseFret: 1,
      },
    ],
  },
  "Db7(#11)": {
    root: "Db",
    type: "7(#11)",
    structure: ["1", "3", "5", "b7", "#11"],
    positions: [
      {
        fingers: "2,x,3,4,1,x",
        notes: ["Db", "Cb", "F", "G"],
        baseFret: 5,
      },
      {
        fingers: "x,1,3,2,4,x",
        notes: ["Db", "G", "Cb", "F"],
        baseFret: 5,
      },
    ],
  },
  Dbm6: {
    root: "Db",
    type: "m6",
    structure: ["1", "b3", "5", "6"],
    positions: [
      {
        fingers: "x,3,1,2,1,x",
        notes: ["Db", "Fb", "Bb", "Db"],
        baseFret: 5,
      },
      {
        fingers: "x,1,x,3,2,4",
        notes: ["Db", "Db", "Fb", "Bb"],
        baseFret: 5,
      },
      {
        fingers: "1,x,3,1,4,1",
        notes: ["Db", "Db", "Fb", "Bb", "Db"],
        baseFret: 5,
      },
    ],
  },
  "Db7(b9)": {
    root: "Db",
    type: "7(b9)",
    structure: ["1", "3", "5", "b7", "b9"],
    positions: [
      {
        fingers: "x,2,1,3,1,x",
        notes: ["Db", "F", "Cb", "Ebb"],
        baseFret: 5,
      },
      {
        fingers: "3,2,4,1,x,x",
        notes: ["Db", "F", "Cb", "Ebb"],
        baseFret: 5,
      },
      {
        fingers: "1,x,1,2,1,3",
        notes: ["Db", "Cb", "F", "Ab", "Ebb"],
        baseFret: 5,
      },
    ],
  },
  Dbm9: {
    root: "Db",
    type: "m9",
    structure: ["1", "b3", "5", "b7", "9"],
    positions: [
      {
        fingers: "x,2,1,3,4,x",
        notes: ["Db", "Fb", "Cb", "Eb"],
        baseFret: 5,
      },
      {
        fingers: "3,1,4,2,x,x",
        notes: ["Db", "Fb", "Cb", "Eb"],
        baseFret: 5,
      },
      {
        fingers: "1,3,1,1,1,4",
        notes: ["Db", "Ab", "Cb", "Fb", "Ab", "Eb"],
        baseFret: 5,
      },
      {
        fingers: "x,1,x,1,1,x",
        notes: ["Db", "Cb", "Eb"],
        baseFret: 1,
      },
    ],
  },
  Dbsus4: {
    root: "Db",
    type: "sus4",
    structure: ["1", "4", "5"],
    positions: [
      {
        fingers: "x,1,2,3,4,1",
        notes: ["Db", "Ab", "Db", "Gb", "Ab"],
        baseFret: 5,
      },
      {
        fingers: "x,x,1,1,2,4",
        notes: ["Ab", "Db", "Gb", "Db"],
        baseFret: 5,
      },
      {
        fingers: "1,1,3,4,1,1",
        notes: ["Db", "Gb", "Db", "Gb", "Ab", "Db"],
        baseFret: 5,
      },
    ],
  },
  "Db6/9": {
    root: "Db",
    type: "6/9",
    structure: ["1", "3", "5", "6", "9"],
    positions: [
      {
        fingers: "x,2,1,1,3,4",
        notes: ["Db", "F", "Bb", "Eb", "Ab"],
        baseFret: 5,
      },
      {
        fingers: "2,1,1,1,3,4",
        notes: ["Db", "F", "Bb", "Eb", "Ab", "Db"],
        baseFret: 5,
      },
      {
        fingers: "x,x,2,1,3,4",
        notes: ["Db", "F", "Bb", "Eb"],
        baseFret: 5,
      },
    ],
  },
  "Eb9(#5)": {
    root: "Eb",
    type: "9(#5)",
    structure: ["1", "3", "#5", "b7", "9"],
    positions: [
      {
        fingers: "x,1,2,1,4,x",
        notes: ["Db", "G", "B", "F"],
        baseFret: 5,
      },
    ],
  },
  Eb13: {
    root: "Eb",
    type: "13",
    structure: ["1", "3", "5", "b7", "9", "11", "13"],
    positions: [
      {
        fingers: "x,2,1,3,3,4",
        notes: ["Eb", "G", "Db", "F", "C"],
        baseFret: 5,
      },
      {
        fingers: "3,x,4,2,1,1",
        notes: ["Eb", "Db", "F", "G", "C"],
        baseFret: 5,
      },
      {
        fingers: "1,x,1,2,3,4",
        notes: ["Eb", "Db", "G", "C", "F"],
        baseFret: 5,
      },
    ],
  },
  "Eb7(#9)": {
    root: "Eb",
    type: "7(#9)",
    structure: ["1", "3", "5", "b7", "#9"],
    positions: [
      {
        fingers: "x,x,1,0,3,4",
        notes: ["Eb", "G", "Db", "F#"],
        baseFret: 1,
      },
      {
        fingers: "x,2,1,3,4,x",
        notes: ["Eb", "G", "Db", "F#"],
        baseFret: 5,
      },
      {
        fingers: "1,3,1,2,1,4",
        notes: ["Eb", "Bb", "Db", "G", "Bb", "F#"],
        baseFret: 5,
      },
    ],
  },
  "Eb+(#11)": {
    root: "Eb",
    type: "+(#11)",
    structure: ["1", "3", "#5", "#11"],
    positions: [
      {
        fingers: "x,2,x,0,0,1",
        notes: ["Eb", "G", "B", "A"],
        baseFret: 1,
      },
      {
        fingers: "x,1,x,0,0,4",
        notes: ["Eb", "G", "B", "B"],
        baseFret: 1,
      },
    ],
  },
  Eb9: {
    root: "Eb",
    type: "9",
    structure: ["1", "3", "5", "b7", "9"],
    positions: [
      {
        fingers: "x,2,1,3,4,x",
        notes: ["Eb", "G", "Db", "F"],
        baseFret: 5,
      },
      {
        fingers: "x,1,3,2,4,x",
        notes: ["G", "Db", "F", "Bb"],
        baseFret: 5,
      },
      {
        fingers: "x,x,2,1,3,4",
        notes: ["Db", "F", "Bb", "Eb"],
        baseFret: 5,
      },
      {
        fingers: "x,2,1,3,3,3",
        notes: ["Eb", "G", "Db", "F", "Bb"],
        baseFret: 5,
      },
      {
        fingers: "2,x,1,3,3,3",
        notes: ["Bb", "G", "Db", "F", "Bb"],
        baseFret: 5,
      },
      {
        fingers: "2,x,1,3,4,x",
        notes: ["Bb", "G", "Db", "F"],
        baseFret: 5,
      },
      {
        fingers: "x,x,3,2,1,4",
        notes: ["Db", "F", "G", "Eb"],
        baseFret: 5,
      },
      {
        fingers: "x,1,3,2,4,4",
        notes: ["G", "Db", "F", "Bb", "Eb"],
        baseFret: 5,
      },
      {
        fingers: "x,1,3,1,1,x",
        notes: ["Eb", "Bb", "Db", "F"],
        baseFret: 5,
      },
    ],
  },
  Eb9b5: {
    root: "Eb",
    type: "9b5",
    structure: ["1", "3", "b5", "b7", "9"],
    positions: [
      {
        fingers: "x,x,1,2,3,1",
        notes: ["Eb", "Bbb", "Db", "F"],
        baseFret: 5,
      },
      {
        fingers: "1,2,1,3,4,1",
        notes: ["Bbb", "Eb", "G", "Db", "F", "Bbb"],
        baseFret: 5,
      },
      {
        fingers: "2,1,3,1,1,4",
        notes: ["Eb", "G", "Db", "F", "Bbb", "Eb"],
        baseFret: 5,
      },
    ],
  },
  Eb7: {
    root: "Eb",
    type: "7",
    structure: ["1", "3", "5", "b7"],
    positions: [
      {
        fingers: "x,3,2,4,1,x",
        notes: ["Eb", "G", "Db", "Eb"],
        baseFret: 5,
      },
      {
        fingers: "x,1,3,1,4,1",
        notes: ["Eb", "Bb", "Db", "G", "Bb"],
        baseFret: 5,
      },
      {
        fingers: "1,3,1,2,4,1",
        notes: ["Eb", "Bb", "Db", "G", "Db", "Eb"],
        baseFret: 5,
      },
      {
        fingers: "x,x,x,2,1,3",
        notes: ["Bb", "Db", "G"],
        baseFret: 1,
      },
      {
        fingers: "x,2,1,3,x,x",
        notes: ["Eb", "G", "Db"],
        baseFret: 1,
      },
      {
        fingers: "x,x,x,1,4,1",
        notes: ["Db", "G", "Bb"],
        baseFret: 1,
      },
      {
        fingers: "x,x,2,3,1,x",
        notes: ["G", "Db", "Eb"],
        baseFret: 1,
      },
      {
        fingers: "x,x,x,3,2,1",
        notes: ["G", "Bb", "Db"],
        baseFret: 1,
      },
      {
        fingers: "3,x,2,4,1,x",
        notes: ["Bb", "G", "Db", "Eb"],
        baseFret: 5,
      },
      {
        fingers: "3,x,2,4,x,x",
        notes: ["Bb", "G", "Db"],
        baseFret: 1,
      },
      {
        fingers: "x,x,1,3,2,4",
        notes: ["Eb", "Bb", "Db", "G"],
        baseFret: 5,
      },
      {
        fingers: "x,1,3,1,4,x",
        notes: ["Eb", "Bb", "Db", "G"],
        baseFret: 5,
      },
    ],
  },
  Ebdim7: {
    root: "Eb",
    type: "dim7",
    structure: ["1", "b3", "b5", "bb7"],
    positions: [
      {
        fingers: "2,4,1,3,x,x",
        notes: ["Bbb", "Eb", "Gb", "Dbb"],
        baseFret: 5,
      },
      {
        fingers: "x,2,3,1,4,x",
        notes: ["Gb", "Dbb", "Eb", "Bbb"],
        baseFret: 5,
      },
      {
        fingers: "x,x,1,3,2,4",
        notes: ["Dbb", "Gb", "Bbb", "Eb"],
        baseFret: 5,
      },
      {
        fingers: "x,2,3,1,4,x",
        notes: ["Eb", "Bbb", "Dbb", "Gb"],
        baseFret: 5,
      },
      {
        fingers: "2,x,1,3,1,x",
        notes: ["Eb", "Dbb", "Gb", "Bbb"],
        baseFret: 5,
      },
      {
        fingers: "x,x,1,3,2,4",
        notes: ["Eb", "Bbb", "Dbb", "Gb"],
        baseFret: 5,
      },
      {
        fingers: "x,2,3,1,4,1",
        notes: ["Eb", "Bbb", "Dbb", "Gb", "Bbb"],
        baseFret: 5,
      },
      {
        fingers: "x,x,1,3,2,4",
        notes: ["Gb", "Dbb", "Eb", "Bbb"],
        baseFret: 5,
      },
    ],
  },
  Ebaug: {
    root: "Eb",
    type: "aug",
    structure: ["1", "3", "#5"],
    positions: [
      {
        fingers: "x,3,2,0,0,x",
        notes: ["B", "Eb", "G", "B"],
        baseFret: 1,
      },
      {
        fingers: "4,3,2,0,x,x",
        notes: ["G", "B", "Eb", "G"],
        baseFret: 1,
      },
      {
        fingers: "x,x,4,2,3,1",
        notes: ["Eb", "G", "B", "Eb"],
        baseFret: 5,
      },
    ],
  },
  Ebmaj: {
    root: "Eb",
    type: "maj",
    structure: ["1", "3", "5"],
    positions: [
      {
        fingers: "x,4,3,1,2,1",
        notes: ["Eb", "G", "Bb", "Eb", "G"],
        baseFret: 5,
      },
      {
        fingers: "x,1,3,3,3,x",
        notes: ["Eb", "Bb", "Eb", "G"],
        baseFret: 5,
      },
      {
        fingers: "1,3,4,2,1,1",
        notes: ["Eb", "Bb", "Eb", "G", "Bb", "Eb"],
        baseFret: 5,
      },
      {
        fingers: "x,1,x,0,4,x",
        notes: ["Eb", "G", "G"],
        baseFret: 1,
      },
      {
        fingers: "x,x,x,3,4,1",
        notes: ["Eb", "G", "Bb"],
        baseFret: 1,
      },
      {
        fingers: "x,3,1,1,1,x",
        notes: ["G", "Bb", "Eb", "G"],
        baseFret: 5,
      },
      {
        fingers: "1,x,3,3,3,x",
        notes: ["Bb", "Bb", "Eb", "G"],
        baseFret: 5,
      },
      {
        fingers: "x,1,1,3,4,x",
        notes: ["Bb", "Eb", "Bb", "Eb"],
        baseFret: 5,
      },
      {
        fingers: "x,x,3,1,2,x",
        notes: ["G", "Bb", "Eb"],
        baseFret: 1,
      },
      {
        fingers: "x,x,1,1,1,x",
        notes: ["Bb", "Eb", "G"],
        baseFret: 1,
      },
      {
        fingers: "x,1,2,3,4,1",
        notes: ["Eb", "Bb", "Eb", "G", "Bb"],
        baseFret: 5,
      },
      {
        fingers: "1,1,3,3,3,x",
        notes: ["Bb", "Eb", "Bb", "Eb", "G"],
        baseFret: 5,
      },
      {
        fingers: "x,x,1,4,x,x",
        notes: ["G", "Eb"],
        baseFret: 1,
      },
      {
        fingers: "x,x,x,2,1,1",
        notes: ["G", "Bb", "Eb"],
        baseFret: 1,
      },
      {
        fingers: "x,4,3,1,2,x",
        notes: ["Eb", "G", "Bb", "Eb"],
        baseFret: 5,
      },
    ],
  },
  Eb11: {
    root: "Eb",
    type: "11",
    structure: ["1", "3", "5", "b7", "9", "11"],
    positions: [
      {
        fingers: "x,x,1,1,2,1",
        notes: ["Eb", "Ab", "Db", "F"],
        baseFret: 5,
      },
      {
        fingers: "x,1,1,1,1,1",
        notes: ["Eb", "Ab", "Db", "F", "Bb"],
        baseFret: 5,
      },
      {
        fingers: "4,x,3,2,1,1",
        notes: ["Eb", "Db", "F", "Ab", "Db"],
        baseFret: 5,
      },
    ],
  },
  Ebmaj9: {
    root: "Eb",
    type: "maj9",
    structure: ["1", "3", "5", "7", "9"],
    positions: [
      {
        fingers: "x,x,1,0,4,2",
        notes: ["Eb", "G", "D", "F"],
        baseFret: 1,
      },
      {
        fingers: "x,2,1,4,3,x",
        notes: ["Eb", "G", "D", "F"],
        baseFret: 5,
      },
      {
        fingers: "x,x,4,1,2,1",
        notes: ["Eb", "F", "Bb", "D"],
        baseFret: 5,
      },
      {
        fingers: "x,x,1,3,4,1",
        notes: ["Eb", "Bb", "D", "F"],
        baseFret: 5,
      },
    ],
  },
  Ebsus2: {
    root: "Eb",
    type: "sus2",
    structure: ["1", "2", "5"],
    positions: [
      {
        fingers: "x,1,3,4,1,1",
        notes: ["Eb", "Bb", "Eb", "F", "Bb"],
        baseFret: 5,
      },
      {
        fingers: "x,1,3,4,1,x",
        notes: ["Eb", "Bb", "Eb", "F"],
        baseFret: 5,
      },
    ],
  },
  Ebm11: {
    root: "Eb",
    type: "m11",
    structure: ["1", "b3", "5", "b7", "9", "11"],
    positions: [
      {
        fingers: "x,x,3,1,4,x",
        notes: ["Bb", "Db", "Ab"],
        baseFret: 1,
      },
      {
        fingers: "x,2,x,3,4,1",
        notes: ["Eb", "Db", "Gb", "Ab"],
        baseFret: 5,
      },
    ],
  },
  Ebm: {
    root: "Eb",
    type: "m",
    structure: ["1", "b3", "5"],
    positions: [
      {
        fingers: "x,x,3,2,4,1",
        notes: ["Gb", "Bb", "Eb", "Gb"],
        baseFret: 5,
      },
      {
        fingers: "x,1,3,4,2,1",
        notes: ["Eb", "Bb", "Eb", "Gb", "Bb"],
        baseFret: 5,
      },
      {
        fingers: "1,3,4,1,1,1",
        notes: ["Eb", "Bb", "Eb", "Gb", "Bb", "Eb"],
        baseFret: 5,
      },
      {
        fingers: "x,x,2,1,3,x",
        notes: ["Gb", "Bb", "Eb"],
        baseFret: 1,
      },
      {
        fingers: "x,1,3,4,2,x",
        notes: ["Eb", "Bb", "Eb", "Gb"],
        baseFret: 5,
      },
    ],
  },
  Eb7b5: {
    root: "Eb",
    type: "7b5",
    structure: ["1", "3", "b5", "b7"],
    positions: [
      {
        fingers: "x,x,1,2,3,4",
        notes: ["Eb", "Bbb", "Db", "G"],
        baseFret: 5,
      },
      {
        fingers: "x,1,2,1,3,x",
        notes: ["Eb", "Bbb", "Db", "G"],
        baseFret: 5,
      },
      {
        fingers: "x,x,2,4,1,3",
        notes: ["Db", "G", "Bbb", "Eb"],
        baseFret: 5,
      },
    ],
  },
  Ebm7: {
    root: "Eb",
    type: "m7",
    structure: ["1", "b3", "5", "b7"],
    positions: [
      {
        fingers: "x,3,1,4,1,x",
        notes: ["Eb", "Gb", "Db", "Eb"],
        baseFret: 5,
      },
      {
        fingers: "x,1,3,1,2,1",
        notes: ["Eb", "Bb", "Db", "Gb", "Bb"],
        baseFret: 5,
      },
      {
        fingers: "1,3,1,1,4,1",
        notes: ["Eb", "Bb", "Db", "Gb", "Db", "Eb"],
        baseFret: 5,
      },
      {
        fingers: "x,2,1,3,4,x",
        notes: ["Eb", "Gb", "Db", "Gb"],
        baseFret: 5,
      },
      {
        fingers: "x,1,x,2,3,x",
        notes: ["Eb", "Db", "Gb"],
        baseFret: 1,
      },
      {
        fingers: "x,2,1,3,x,x",
        notes: ["Eb", "Gb", "Db"],
        baseFret: 1,
      },
      {
        fingers: "x,x,3,1,2,x",
        notes: ["Bb", "Db", "Gb"],
        baseFret: 1,
      },
      {
        fingers: "2,x,3,3,3,x",
        notes: ["Eb", "Db", "Gb", "Bb"],
        baseFret: 1,
      },
      {
        fingers: "x,1,1,4,1,x",
        notes: ["Db", "Gb", "Db", "Eb"],
        baseFret: 5,
      },
      {
        fingers: "3,x,1,4,1,x",
        notes: ["Bb", "Gb", "Db", "Eb"],
        baseFret: 5,
      },
      {
        fingers: "x,1,3,1,2,x",
        notes: ["Eb", "Bb", "Db", "Gb"],
        baseFret: 5,
      },
    ],
  },
  Ebdim: {
    root: "Eb",
    type: "dim",
    structure: ["1", "b3", "b5"],
    positions: [
      {
        fingers: "x,x,1,2,4,3",
        notes: ["Eb", "Bbb", "Eb", "Gb"],
        baseFret: 5,
      },
      {
        fingers: "x,1,2,3,4,x",
        notes: ["Eb", "Bbb", "Eb", "Gb"],
        baseFret: 5,
      },
      {
        fingers: "x,x,4,3,1,2",
        notes: ["Eb", "Gb", "Bbb", "Eb"],
        baseFret: 5,
      },
      {
        fingers: "x,x,3,1,4,x",
        notes: ["Gb", "Bbb", "Eb"],
        baseFret: 1,
      },
    ],
  },
  Eb6: {
    root: "Eb",
    type: "6",
    structure: ["1", "3", "5", "6"],
    positions: [
      {
        fingers: "x,4,2,3,1,x",
        notes: ["Eb", "G", "C", "Eb"],
        baseFret: 5,
      },
      {
        fingers: "x,1,3,3,3,3",
        notes: ["Eb", "Bb", "Eb", "G", "C"],
        baseFret: 5,
      },
      {
        fingers: "1,x,3,2,4,1",
        notes: ["Eb", "Eb", "G", "C", "Eb"],
        baseFret: 5,
      },
      {
        fingers: "x,x,x,1,1,1",
        notes: ["Eb", "G", "C"],
        baseFret: 1,
      },
      {
        fingers: "x,x,3,2,4,1",
        notes: ["Eb", "G", "C", "Eb"],
        baseFret: 5,
      },
      {
        fingers: "x,x,3,2,4,x",
        notes: ["Eb", "G", "C"],
        baseFret: 1,
      },
    ],
  },
  "Eb7(#5)": {
    root: "Eb",
    type: "7(#5)",
    structure: ["1", "3", "#5", "b7"],
    positions: [
      {
        fingers: "x,1,2,1,1,x",
        notes: ["Db", "G", "B", "Eb"],
        baseFret: 5,
      },
      {
        fingers: "x,1,4,1,3,2",
        notes: ["Eb", "B", "Db", "G", "B"],
        baseFret: 5,
      },
      {
        fingers: "1,x,1,2,3,1",
        notes: ["Eb", "Db", "G", "B", "Eb"],
        baseFret: 5,
      },
    ],
  },
  Eb7sus4: {
    root: "Eb",
    type: "7sus4",
    structure: ["1", "4", "5", "b7"],
    positions: [
      {
        fingers: "x,2,3,4,1,x",
        notes: ["Eb", "Ab", "Db", "Eb"],
        baseFret: 5,
      },
      {
        fingers: "x,1,3,1,4,1",
        notes: ["Eb", "Bb", "Db", "Ab", "Bb"],
        baseFret: 5,
      },
      {
        fingers: "1,3,1,4,1,1",
        notes: ["Eb", "Bb", "Db", "Ab", "Bb", "Eb"],
        baseFret: 5,
      },
      {
        fingers: "x,2,2,3,x,x",
        notes: ["Eb", "Ab", "Db"],
        baseFret: 1,
      },
    ],
  },
  Ebmaj7: {
    root: "Eb",
    type: "maj7",
    structure: ["1", "3", "5", "7"],
    positions: [
      {
        fingers: "x,4,3,1,1,1",
        notes: ["Eb", "G", "Bb", "D", "G"],
        baseFret: 5,
      },
      {
        fingers: "x,1,3,2,4,1",
        notes: ["Eb", "Bb", "D", "G", "Bb"],
        baseFret: 5,
      },
      {
        fingers: "x,x,4,3,2,1",
        notes: ["Eb", "G", "Bb", "D"],
        baseFret: 5,
      },
    ],
  },
  "Eb7(#11)": {
    root: "Eb",
    type: "7(#11)",
    structure: ["1", "3", "5", "b7", "#11"],
    positions: [
      {
        fingers: "x,1,3,1,x,x",
        notes: ["Eb", "A", "Db"],
        baseFret: 1,
      },
    ],
  },
  Ebm6: {
    root: "Eb",
    type: "m6",
    structure: ["1", "b3", "5", "6"],
    positions: [
      {
        fingers: "x,3,1,2,1,x",
        notes: ["Eb", "Gb", "C", "Eb"],
        baseFret: 5,
      },
      {
        fingers: "x,1,x,3,2,4",
        notes: ["Eb", "Eb", "Gb", "C"],
        baseFret: 5,
      },
      {
        fingers: "1,x,3,1,4,1",
        notes: ["Eb", "Eb", "Gb", "C", "Eb"],
        baseFret: 5,
      },
    ],
  },
  "Eb7(b9)": {
    root: "Eb",
    type: "7(b9)",
    structure: ["1", "3", "5", "b7", "b9"],
    positions: [
      {
        fingers: "x,x,1,0,3,0",
        notes: ["Eb", "G", "Db", "Fb"],
        baseFret: 1,
      },
      {
        fingers: "x,2,1,3,1,x",
        notes: ["Eb", "G", "Db", "Fb"],
        baseFret: 5,
      },
      {
        fingers: "1,x,1,2,1,3",
        notes: ["Eb", "Db", "G", "Bb", "Fb"],
        baseFret: 5,
      },
      {
        fingers: "x,x,1,3,2,4",
        notes: ["Db", "G", "Bb", "Fb"],
        baseFret: 5,
      },
      {
        fingers: "x,2,3,1,4,x",
        notes: ["Db", "G", "Bb", "Fb"],
        baseFret: 5,
      },
    ],
  },
  Ebm9: {
    root: "Eb",
    type: "m9",
    structure: ["1", "b3", "5", "b7", "9"],
    positions: [
      {
        fingers: "x,2,1,3,4,x",
        notes: ["Eb", "Gb", "Db", "F"],
        baseFret: 5,
      },
      {
        fingers: "3,1,4,2,x,x",
        notes: ["Eb", "Gb", "Db", "F"],
        baseFret: 5,
      },
      {
        fingers: "1,3,1,1,1,4",
        notes: ["Eb", "Bb", "Db", "Gb", "Bb", "F"],
        baseFret: 5,
      },
    ],
  },
  Ebsus4: {
    root: "Eb",
    type: "sus4",
    structure: ["1", "4", "5"],
    positions: [
      {
        fingers: "x,3,4,1,2,x",
        notes: ["Eb", "Ab", "Bb", "Eb"],
        baseFret: 5,
      },
      {
        fingers: "x,1,2,3,4,1",
        notes: ["Eb", "Bb", "Eb", "Ab", "Bb"],
        baseFret: 5,
      },
      {
        fingers: "1,1,3,4,1,1",
        notes: ["Eb", "Ab", "Eb", "Ab", "Bb", "Eb"],
        baseFret: 5,
      },
    ],
  },
  "Eb6/9": {
    root: "Eb",
    type: "6/9",
    structure: ["1", "3", "5", "6", "9"],
    positions: [
      {
        fingers: "x,x,1,0,2,3",
        notes: ["Eb", "G", "C", "F"],
        baseFret: 1,
      },
      {
        fingers: "x,2,1,1,3,4",
        notes: ["Eb", "G", "C", "F", "Bb"],
        baseFret: 5,
      },
      {
        fingers: "2,1,1,1,3,4",
        notes: ["Eb", "G", "C", "F", "Bb", "Eb"],
        baseFret: 5,
      },
      {
        fingers: "x,x,1,3,1,1",
        notes: ["Eb", "Bb", "C", "F"],
        baseFret: 5,
      },
      {
        fingers: "x,2,x,1,3,x",
        notes: ["Eb", "C", "F"],
        baseFret: 1,
      },
    ],
  },
  Gb13: {
    root: "Gb",
    type: "13",
    structure: ["1", "3", "5", "b7", "9", "11", "13"],
    positions: [
      {
        fingers: "1,x,1,2,3,4",
        notes: ["Gb", "Fb", "Bb", "Eb", "Ab"],
        baseFret: 5,
      },
      {
        fingers: "x,2,1,3,3,4",
        notes: ["Gb", "Bb", "Fb", "Ab", "Eb"],
        baseFret: 5,
      },
      {
        fingers: "x,1,3,1,1,4",
        notes: ["Gb", "Db", "Fb", "Ab", "Eb"],
        baseFret: 5,
      },
      {
        fingers: "1,x,2,3,4,x",
        notes: ["Gb", "Fb", "Bb", "Eb"],
        baseFret: 5,
      },
      {
        fingers: "x,x,1,3,3,4",
        notes: ["Bb", "Fb", "Ab", "Eb"],
        baseFret: 5,
      },
    ],
  },
  "Gb7(#9)": {
    root: "Gb",
    type: "7(#9)",
    structure: ["1", "3", "5", "b7", "#9"],
    positions: [
      {
        fingers: "2,1,3,3,3,3",
        notes: ["Gb", "Bb", "Fb", "A", "Db", "Gb"],
        baseFret: 5,
      },
      {
        fingers: "1,3,1,2,1,4",
        notes: ["Gb", "Db", "Fb", "Bb", "Db", "A"],
        baseFret: 5,
      },
      {
        fingers: "x,2,1,3,4,x",
        notes: ["Gb", "Bb", "Fb", "A"],
        baseFret: 5,
      },
      {
        fingers: "1,3,1,2,4,4",
        notes: ["Gb", "Db", "Fb", "Bb", "Fb", "A"],
        baseFret: 5,
      },
    ],
  },
  Gb9: {
    root: "Gb",
    type: "9",
    structure: ["1", "3", "5", "b7", "9"],
    positions: [
      {
        fingers: "x,x,2,1,3,4",
        notes: ["Fb", "Ab", "Db", "Gb"],
        baseFret: 5,
      },
      {
        fingers: "x,x,1,3,2,1",
        notes: ["Gb", "Db", "Fb", "Ab"],
        baseFret: 5,
      },
      {
        fingers: "x,2,1,3,4,x",
        notes: ["Gb", "Bb", "Fb", "Ab"],
        baseFret: 5,
      },
      {
        fingers: "2,x,1,3,4,x",
        notes: ["Db", "Bb", "Fb", "Ab"],
        baseFret: 5,
      },
      {
        fingers: "x,x,1,3,3,3",
        notes: ["Bb", "Fb", "Ab", "Db"],
        baseFret: 5,
      },
      {
        fingers: "x,2,1,3,3,3",
        notes: ["Gb", "Bb", "Fb", "Ab", "Db"],
        baseFret: 5,
      },
    ],
  },
  Gb9b5: {
    root: "Gb",
    type: "9b5",
    structure: ["1", "3", "b5", "b7", "9"],
    positions: [
      {
        fingers: "2,1,3,1,1,4",
        notes: ["Gb", "Bb", "Fb", "Ab", "Dbb", "Gb"],
        baseFret: 5,
      },
      {
        fingers: "x,x,1,2,3,1",
        notes: ["Gb", "Dbb", "Fb", "Ab"],
        baseFret: 5,
      },
      {
        fingers: "1,2,1,3,4,1",
        notes: ["Dbb", "Gb", "Bb", "Fb", "Ab", "Dbb"],
        baseFret: 5,
      },
    ],
  },
  Gbmaj13: {
    root: "Gb",
    type: "maj13",
    structure: ["1", "3", "5", "7", "9", "11", "13"],
    positions: [
      {
        fingers: "1,x,2,3,4,x",
        notes: ["Gb", "F", "Bb", "Eb"],
        baseFret: 5,
      },
    ],
  },
  Gb7: {
    root: "Gb",
    type: "7",
    structure: ["1", "3", "5", "b7"],
    positions: [
      {
        fingers: "1,3,1,2,4,1",
        notes: ["Gb", "Db", "Fb", "Bb", "Fb", "Gb"],
        baseFret: 5,
      },
      {
        fingers: "x,3,2,4,1,x",
        notes: ["Gb", "Bb", "Fb", "Gb"],
        baseFret: 5,
      },
      {
        fingers: "x,1,3,1,4,1",
        notes: ["Gb", "Db", "Fb", "Bb", "Db"],
        baseFret: 5,
      },
      {
        fingers: "x,x,x,2,1,3",
        notes: ["Db", "Fb", "Bb"],
        baseFret: 1,
      },
      {
        fingers: "1,x,2,3,x,x",
        notes: ["Gb", "Fb", "Bb"],
        baseFret: 1,
      },
      {
        fingers: "x,2,1,3,x,x",
        notes: ["Gb", "Bb", "Fb"],
        baseFret: 1,
      },
      {
        fingers: "x,x,1,3,2,4",
        notes: ["Gb", "Db", "Fb", "Bb"],
        baseFret: 5,
      },
      {
        fingers: "x,3,x,2,1,x",
        notes: ["Fb", "Db", "Fb"],
        baseFret: 1,
      },
    ],
  },
  Gbdim7: {
    root: "Gb",
    type: "dim7",
    structure: ["1", "b3", "b5", "bb7"],
    positions: [
      {
        fingers: "2,4,1,3,x,x",
        notes: ["Bbb", "Fbb", "Gb", "Dbb"],
        baseFret: 5,
      },
      {
        fingers: "x,2,3,1,4,x",
        notes: ["Bbb", "Fbb", "Gb", "Dbb"],
        baseFret: 5,
      },
      {
        fingers: "x,x,1,3,2,4",
        notes: ["Fbb", "Bbb", "Dbb", "Gb"],
        baseFret: 5,
      },
      {
        fingers: "2,x,1,3,1,x",
        notes: ["Gb", "Fbb", "Bbb", "Dbb"],
        baseFret: 5,
      },
    ],
  },
  Gbaug: {
    root: "Gb",
    type: "aug",
    structure: ["1", "3", "#5"],
    positions: [
      {
        fingers: "x,3,2,1,1,x",
        notes: ["D", "Gb", "Bb", "D"],
        baseFret: 5,
      },
      {
        fingers: "4,3,2,1,x,x",
        notes: ["Bb", "D", "Gb", "Bb"],
        baseFret: 5,
      },
      {
        fingers: "x,x,4,2,3,1",
        notes: ["D", "Gb", "Bb", "D"],
        baseFret: 5,
      },
    ],
  },
  Gbmaj: {
    root: "Gb",
    type: "maj",
    structure: ["1", "3", "5"],
    positions: [
      {
        fingers: "1,3,4,2,1,1",
        notes: ["Gb", "Db", "Gb", "Bb", "Db", "Gb"],
        baseFret: 5,
      },
      {
        fingers: "x,4,3,1,2,1",
        notes: ["Gb", "Bb", "Db", "Gb", "Bb"],
        baseFret: 5,
      },
      {
        fingers: "x,1,3,3,3,x",
        notes: ["Gb", "Db", "Gb", "Bb"],
        baseFret: 5,
      },
      {
        fingers: "3,1,1,x,x,x",
        notes: ["Bb", "Db", "Gb"],
        baseFret: 1,
      },
      {
        fingers: "x,3,x,2,1,x",
        notes: ["Db", "Bb", "Db"],
        baseFret: 1,
      },
    ],
  },
  Gb11: {
    root: "Gb",
    type: "11",
    structure: ["1", "3", "5", "b7", "9", "11"],
    positions: [
      {
        fingers: "2,x,3,1,0,0",
        notes: ["Gb", "Fb", "Ab", "Cb", "Fb"],
        baseFret: 1,
      },
      {
        fingers: "x,x,1,1,2,1",
        notes: ["Gb", "Cb", "Fb", "Ab"],
        baseFret: 5,
      },
      {
        fingers: "x,1,1,1,1,1",
        notes: ["Gb", "Cb", "Fb", "Ab", "Db"],
        baseFret: 5,
      },
    ],
  },
  Gbmaj9: {
    root: "Gb",
    type: "maj9",
    structure: ["1", "3", "5", "7", "9"],
    positions: [
      {
        fingers: "x,x,4,1,2,1",
        notes: ["Gb", "Ab", "Db", "F"],
        baseFret: 5,
      },
      {
        fingers: "x,4,1,1,1,1",
        notes: ["Gb", "Ab", "Db", "F", "Bb"],
        baseFret: 5,
      },
      {
        fingers: "x,2,1,4,3,x",
        notes: ["Gb", "Bb", "F", "Ab"],
        baseFret: 5,
      },
    ],
  },
  Gbm: {
    root: "Gb",
    type: "m",
    structure: ["1", "b3", "5"],
    positions: [
      {
        fingers: "1,3,4,1,1,1",
        notes: ["Gb", "Db", "Gb", "Bbb", "Db", "Gb"],
        baseFret: 5,
      },
      {
        fingers: "x,x,1,3,4,2",
        notes: ["Gb", "Db", "Gb", "Bbb"],
        baseFret: 5,
      },
      {
        fingers: "x,1,3,4,2,1",
        notes: ["Gb", "Db", "Gb", "Bbb", "Db"],
        baseFret: 5,
      },
      {
        fingers: "1,x,x,1,1,x",
        notes: ["Gb", "Bbb", "Db"],
        baseFret: 1,
      },
    ],
  },
  Gb7b5: {
    root: "Gb",
    type: "7b5",
    structure: ["1", "3", "b5", "b7"],
    positions: [
      {
        fingers: "1,3,2,4,x,x",
        notes: ["Gb", "Dbb", "Fb", "Bb"],
        baseFret: 5,
      },
      {
        fingers: "x,x,1,2,3,4",
        notes: ["Gb", "Dbb", "Fb", "Bb"],
        baseFret: 5,
      },
      {
        fingers: "x,1,2,1,3,x",
        notes: ["Gb", "Dbb", "Fb", "Bb"],
        baseFret: 5,
      },
    ],
  },
  Gbm7: {
    root: "Gb",
    type: "m7",
    structure: ["1", "b3", "5", "b7"],
    positions: [
      {
        fingers: "1,3,1,1,4,1",
        notes: ["Gb", "Db", "Fb", "Bbb", "Fb", "Gb"],
        baseFret: 5,
      },
      {
        fingers: "x,x,1,4,2,3",
        notes: ["Gb", "Db", "Fb", "Bbb"],
        baseFret: 5,
      },
      {
        fingers: "x,1,3,1,2,1",
        notes: ["Gb", "Db", "Fb", "Bbb", "Db"],
        baseFret: 5,
      },
      {
        fingers: "2,x,3,3,3,x",
        notes: ["Gb", "Fb", "Bbb", "Db"],
        baseFret: 1,
      },
      {
        fingers: "x,1,x,2,4,3",
        notes: ["Gb", "Fb", "Bbb", "Db"],
        baseFret: 5,
      },
      {
        fingers: "1,x,x,x,2,0",
        notes: ["Gb", "Db", "Fb"],
        baseFret: 1,
      },
    ],
  },
  Gbdim: {
    root: "Gb",
    type: "dim",
    structure: ["1", "b3", "b5"],
    positions: [
      {
        fingers: "1,2,3,1,x,x",
        notes: ["Gb", "Dbb", "Gb", "Bbb"],
        baseFret: 5,
      },
      {
        fingers: "x,x,1,2,4,3",
        notes: ["Gb", "Dbb", "Gb", "Bbb"],
        baseFret: 5,
      },
      {
        fingers: "x,1,2,3,4,x",
        notes: ["Gb", "Dbb", "Gb", "Bbb"],
        baseFret: 5,
      },
    ],
  },
  Gb6: {
    root: "Gb",
    type: "6",
    structure: ["1", "3", "5", "6"],
    positions: [
      {
        fingers: "1,x,3,2,4,1",
        notes: ["Gb", "Gb", "Bb", "Eb", "Gb"],
        baseFret: 5,
      },
      {
        fingers: "x,4,2,3,1,x",
        notes: ["Gb", "Bb", "Eb", "Gb"],
        baseFret: 5,
      },
      {
        fingers: "x,1,3,3,3,3",
        notes: ["Gb", "Db", "Gb", "Bb", "Eb"],
        baseFret: 5,
      },
    ],
  },
  "Gb7(#5)": {
    root: "Gb",
    type: "7(#5)",
    structure: ["1", "3", "#5", "b7"],
    positions: [
      {
        fingers: "1,x,1,2,3,1",
        notes: ["Gb", "Fb", "Bb", "D", "Gb"],
        baseFret: 5,
      },
      {
        fingers: "x,1,2,1,1,x",
        notes: ["Fb", "Bb", "D", "Gb"],
        baseFret: 5,
      },
      {
        fingers: "x,1,4,1,3,2",
        notes: ["Gb", "D", "Fb", "Bb", "D"],
        baseFret: 5,
      },
    ],
  },
  Gb7sus4: {
    root: "Gb",
    type: "7sus4",
    structure: ["1", "4", "5", "b7"],
    positions: [
      {
        fingers: "1,3,1,4,1,1",
        notes: ["Gb", "Db", "Fb", "Cb", "Db", "Gb"],
        baseFret: 5,
      },
      {
        fingers: "x,2,3,4,1,x",
        notes: ["Gb", "Cb", "Fb", "Gb"],
        baseFret: 5,
      },
      {
        fingers: "x,1,3,1,4,1",
        notes: ["Gb", "Db", "Fb", "Cb", "Db"],
        baseFret: 5,
      },
    ],
  },
  Gbmaj7: {
    root: "Gb",
    type: "maj7",
    structure: ["1", "3", "5", "7"],
    positions: [
      {
        fingers: "1,4,2,3,1,x",
        notes: ["Gb", "Db", "F", "Bb", "Db"],
        baseFret: 5,
      },
      {
        fingers: "x,4,3,1,1,1",
        notes: ["Gb", "Bb", "Db", "F", "Bb"],
        baseFret: 5,
      },
      {
        fingers: "x,1,3,2,4,1",
        notes: ["Gb", "Db", "F", "Bb", "Db"],
        baseFret: 5,
      },
      {
        fingers: "2,4,1,x,x,x",
        notes: ["Bb", "F", "Gb"],
        baseFret: 1,
      },
      {
        fingers: "1,x,3,4,2,x",
        notes: ["Gb", "F", "Bb", "Db"],
        baseFret: 5,
      },
    ],
  },
  Gb5: {
    root: "Gb",
    type: "5",
    structure: ["1", "5"],
    positions: [
      {
        fingers: "1,3,4,x,x,x",
        notes: ["Gb", "Db", "Gb"],
        baseFret: 1,
      },
    ],
  },
  "Gb7(#11)": {
    root: "Gb",
    type: "7(#11)",
    structure: ["1", "3", "5", "b7", "#11"],
    positions: [
      {
        fingers: "2,x,3,4,1,x",
        notes: ["Gb", "Fb", "Bb", "C"],
        baseFret: 5,
      },
    ],
  },
  Gbm6: {
    root: "Gb",
    type: "m6",
    structure: ["1", "b3", "5", "6"],
    positions: [
      {
        fingers: "1,x,3,1,4,1",
        notes: ["Gb", "Gb", "Bbb", "Eb", "Gb"],
        baseFret: 5,
      },
      {
        fingers: "x,3,1,2,1,x",
        notes: ["Gb", "Bbb", "Eb", "Gb"],
        baseFret: 5,
      },
      {
        fingers: "x,1,x,3,2,4",
        notes: ["Gb", "Gb", "Bbb", "Eb"],
        baseFret: 5,
      },
    ],
  },
  "Gb7(b9)": {
    root: "Gb",
    type: "7(b9)",
    structure: ["1", "3", "5", "b7", "b9"],
    positions: [
      {
        fingers: "1,x,1,2,1,3",
        notes: ["Gb", "Fb", "Bb", "Db", "Abb"],
        baseFret: 5,
      },
      {
        fingers: "x,x,2,1,3,1",
        notes: ["Gb", "Bb", "Fb", "Abb"],
        baseFret: 5,
      },
      {
        fingers: "x,2,1,3,1,x",
        notes: ["Gb", "Bb", "Fb", "Abb"],
        baseFret: 5,
      },
    ],
  },
  Gbm9: {
    root: "Gb",
    type: "m9",
    structure: ["1", "b3", "5", "b7", "9"],
    positions: [
      {
        fingers: "1,3,1,1,1,4",
        notes: ["Gb", "Db", "Fb", "Bbb", "Db", "Ab"],
        baseFret: 5,
      },
      {
        fingers: "x,x,2,1,4,3",
        notes: ["Gb", "Bbb", "Fb", "Ab"],
        baseFret: 5,
      },
      {
        fingers: "x,2,1,3,4,x",
        notes: ["Gb", "Bbb", "Fb", "Ab"],
        baseFret: 5,
      },
    ],
  },
  Gbsus4: {
    root: "Gb",
    type: "sus4",
    structure: ["1", "4", "5"],
    positions: [
      {
        fingers: "1,1,3,4,1,1",
        notes: ["Gb", "Cb", "Gb", "Cb", "Db", "Gb"],
        baseFret: 5,
      },
      {
        fingers: "x,3,4,1,2,x",
        notes: ["Gb", "Cb", "Db", "Gb"],
        baseFret: 5,
      },
      {
        fingers: "x,1,2,3,4,1",
        notes: ["Gb", "Db", "Gb", "Cb", "Db"],
        baseFret: 5,
      },
    ],
  },
  "Gb6/9": {
    root: "Gb",
    type: "6/9",
    structure: ["1", "3", "5", "6", "9"],
    positions: [
      {
        fingers: "2,1,1,1,3,4",
        notes: ["Gb", "Bb", "Eb", "Ab", "Db", "Gb"],
        baseFret: 5,
      },
      {
        fingers: "x,x,2,1,3,4",
        notes: ["Gb", "Bb", "Eb", "Ab"],
        baseFret: 5,
      },
      {
        fingers: "x,2,1,1,3,4",
        notes: ["Gb", "Bb", "Eb", "Ab", "Db"],
        baseFret: 5,
      },
    ],
  },
  A13: {
    root: "A",
    type: "13",
    structure: ["1", "3", "5", "b7", "9", "11", "13"],
    positions: [
      {
        fingers: "x,0,4,3,1,1",
        notes: ["A", "G", "B", "C#", "F#"],
        baseFret: 1,
      },
      {
        fingers: "1,x,1,2,3,4",
        notes: ["A", "G", "C#", "F#", "B"],
        baseFret: 5,
      },
      {
        fingers: "x,0,1,2,3,4",
        notes: ["A", "C#", "G", "B", "F#"],
        baseFret: 1,
      },
      {
        fingers: "x,0,1,2,3,1",
        notes: ["A", "G", "C#", "F#", "A"],
        baseFret: 1,
      },
      {
        fingers: "1,3,1,2,4,1",
        notes: ["A", "E", "G", "C#", "F#", "A"],
        baseFret: 5,
      },
      {
        fingers: "1,x,2,3,4,x",
        notes: ["A", "G", "C#", "F#"],
        baseFret: 5,
      },
      {
        fingers: "1,x,3,2,4,x",
        notes: ["A", "A", "C#", "F#"],
        baseFret: 5,
      },
      {
        fingers: "x,1,3,4,2,x",
        notes: ["G", "C#", "F#", "A"],
        baseFret: 5,
      },
      {
        fingers: "x,2,1,3,3,4",
        notes: ["A", "C#", "G", "B", "F#"],
        baseFret: 5,
      },
      {
        fingers: "x,x,2,1,3,3",
        notes: ["E", "G", "C#", "F#"],
        baseFret: 5,
      },
      {
        fingers: "x,x,1,2,3,1",
        notes: ["G", "C#", "F#", "A"],
        baseFret: 5,
      },
      {
        fingers: "x,x,1,2,3,3",
        notes: ["G", "C#", "F#", "B"],
        baseFret: 5,
      },
    ],
  },
  "A7(#9)": {
    root: "A",
    type: "7(#9)",
    structure: ["1", "3", "5", "b7", "#9"],
    positions: [
      {
        fingers: "x,0,1,4,1,2",
        notes: ["A", "E", "B#", "C#", "G"],
        baseFret: 1,
      },
      {
        fingers: "x,0,1,2,1,4",
        notes: ["A", "G", "C#", "E", "B#"],
        baseFret: 1,
      },
      {
        fingers: "x,2,1,3,4,0",
        notes: ["A", "C#", "G", "B#", "E"],
        baseFret: 1,
      },
      {
        fingers: "x,0,2,1,4,4",
        notes: ["A", "A", "C#", "G", "B#"],
        baseFret: 1,
      },
      {
        fingers: "x,2,3,1,4,4",
        notes: ["E", "A", "C#", "G", "B#"],
        baseFret: 5,
      },
      {
        fingers: "x,2,1,3,4,x",
        notes: ["A", "C#", "G", "B#"],
        baseFret: 5,
      },
      {
        fingers: "x,x,2,1,3,4",
        notes: ["A", "C#", "G", "B#"],
        baseFret: 5,
      },
      {
        fingers: "1,3,1,2,4,4",
        notes: ["A", "E", "G", "C#", "G", "B#"],
        baseFret: 5,
      },
      {
        fingers: "x,x,1,2,1,4",
        notes: ["G", "C#", "E", "B#"],
        baseFret: 5,
      },
      {
        fingers: "2,1,3,3,x,x",
        notes: ["A", "C#", "G", "B#"],
        baseFret: 5,
      },
    ],
  },
  A9: {
    root: "A",
    type: "9",
    structure: ["1", "3", "5", "b7", "9"],
    positions: [
      {
        fingers: "x,0,1,3,1,2",
        notes: ["A", "E", "B", "C#", "G"],
        baseFret: 1,
      },
      {
        fingers: "x,0,2,1,3,4",
        notes: ["A", "G", "B", "E", "A"],
        baseFret: 1,
      },
      {
        fingers: "x,0,1,2,1,3",
        notes: ["A", "G", "C#", "E", "B"],
        baseFret: 1,
      },
    ],
  },
  A9b5: {
    root: "A",
    type: "9b5",
    structure: ["1", "3", "b5", "b7", "9"],
    positions: [
      {
        fingers: "x,0,1,0,0,x",
        notes: ["A", "Eb", "G", "B"],
        baseFret: 1,
      },
      {
        fingers: "2,1,3,1,1,4",
        notes: ["A", "C#", "G", "B", "Eb", "A"],
        baseFret: 5,
      },
      {
        fingers: "x,0,1,2,3,1",
        notes: ["A", "A", "Eb", "G", "B"],
        baseFret: 1,
      },
    ],
  },
  Amaj13: {
    root: "A",
    type: "maj13",
    structure: ["1", "3", "5", "7", "9", "11", "13"],
    positions: [
      {
        fingers: "1,x,2,3,4,x",
        notes: ["A", "G#", "C#", "F#"],
        baseFret: 5,
      },
      {
        fingers: "x,0,4,1,3,0",
        notes: ["A", "F#", "G#", "C#", "E"],
        baseFret: 1,
      },
    ],
  },
  A7: {
    root: "A",
    type: "7",
    structure: ["1", "3", "5", "b7"],
    positions: [
      {
        fingers: "x,0,1,0,3,0",
        notes: ["A", "E", "G", "C#", "E"],
        baseFret: 1,
      },
      {
        fingers: "1,3,1,2,4,1",
        notes: ["A", "E", "G", "C#", "G", "A"],
        baseFret: 5,
      },
      {
        fingers: "x,3,2,4,1,0",
        notes: ["A", "C#", "G", "A", "E"],
        baseFret: 1,
      },
      {
        fingers: "1,3,1,2,1,1",
        notes: ["A", "E", "G", "C#", "E", "A"],
        baseFret: 5,
      },
      {
        fingers: "x,0,1,2,3,4",
        notes: ["A", "E", "A", "C#", "G"],
        baseFret: 1,
      },
      {
        fingers: "x,0,2,0,3,4",
        notes: ["A", "E", "G", "C#", "G"],
        baseFret: 1,
      },
      {
        fingers: "2,1,4,0,x,x",
        notes: ["A", "C#", "G", "G"],
        baseFret: 1,
      },
      {
        fingers: "x,3,2,0,1,0",
        notes: ["A", "C#", "G", "A", "E"],
        baseFret: 1,
      },
      {
        fingers: "x,0,2,0,x,x",
        notes: ["A", "E", "G"],
        baseFret: 1,
      },
      {
        fingers: "x,x,x,2,1,3",
        notes: ["E", "G", "C#"],
        baseFret: 1,
      },
      {
        fingers: "x,0,1,3,2,0",
        notes: ["A", "G", "C#", "E", "E"],
        baseFret: 1,
      },
      {
        fingers: "x,2,1,3,x,x",
        notes: ["A", "C#", "G"],
        baseFret: 1,
      },
      {
        fingers: "x,0,x,x,1,3",
        notes: ["A", "C#", "G"],
        baseFret: 1,
      },
      {
        fingers: "1,x,2,3,x,x",
        notes: ["A", "G", "C#"],
        baseFret: 1,
      },
      {
        fingers: "x,0,x,0,2,x",
        notes: ["A", "G", "C#"],
        baseFret: 1,
      },
      {
        fingers: "x,0,3,0,2,1",
        notes: ["A", "C#", "G", "A", "C#"],
        baseFret: 1,
      },
      {
        fingers: "x,2,x,1,3,0",
        notes: ["G", "E", "A", "E"],
        baseFret: 1,
      },
    ],
  },
  Adim7: {
    root: "A",
    type: "dim7",
    structure: ["1", "b3", "b5", "bb7"],
    positions: [
      {
        fingers: "2,4,1,3,x,x",
        notes: ["A", "Eb", "Gb", "C"],
        baseFret: 5,
      },
      {
        fingers: "x,2,3,1,4,x",
        notes: ["Gb", "C", "Eb", "A"],
        baseFret: 5,
      },
      {
        fingers: "x,x,1,3,2,4",
        notes: ["C", "Gb", "A", "Eb"],
        baseFret: 5,
      },
      {
        fingers: "x,x,1,3,2,4",
        notes: ["Eb", "A", "C", "Gb"],
        baseFret: 5,
      },
      {
        fingers: "x,0,1,3,2,4",
        notes: ["A", "Gb", "C", "Eb", "A"],
        baseFret: 1,
      },
      {
        fingers: "x,x,1,3,2,4",
        notes: ["A", "Eb", "Gb", "C"],
        baseFret: 5,
      },
      {
        fingers: "x,0,1,3,x,x",
        notes: ["A", "Gb", "C"],
        baseFret: 1,
      },
      {
        fingers: "x,x,1,3,2,4",
        notes: ["Gb", "C", "Eb", "A"],
        baseFret: 5,
      },
      {
        fingers: "2,x,1,3,1,x",
        notes: ["A", "Gb", "C", "Eb"],
        baseFret: 5,
      },
      {
        fingers: "x,x,x,2,1,3",
        notes: ["Eb", "Gb", "C"],
        baseFret: 1,
      },
      {
        fingers: "x,0,x,2,1,3",
        notes: ["A", "Eb", "Gb", "C"],
        baseFret: 1,
      },
      {
        fingers: "x,0,x,x,3,1",
        notes: ["A", "Eb", "Gb"],
        baseFret: 1,
      },
      {
        fingers: "x,2,3,1,4,x",
        notes: ["A", "Eb", "Gb", "C"],
        baseFret: 5,
      },
      {
        fingers: "2,x,1,3,x,x",
        notes: ["A", "Gb", "C"],
        baseFret: 1,
      },
      {
        fingers: "x,3,1,2,x,x",
        notes: ["Gb", "A", "Eb"],
        baseFret: 1,
      },
      {
        fingers: "x,3,1,2,x,x",
        notes: ["A", "C", "Gb"],
        baseFret: 1,
      },
      {
        fingers: "x,2,3,1,4,x",
        notes: ["Eb", "A", "C", "Gb"],
        baseFret: 5,
      },
      {
        fingers: "2,x,1,3,x,x",
        notes: ["Gb", "Eb", "A"],
        baseFret: 1,
      },
    ],
  },
  Aaug: {
    root: "A",
    type: "aug",
    structure: ["1", "3", "#5"],
    positions: [
      {
        fingers: "x,3,2,1,1,x",
        notes: ["C#", "E#", "A", "C#"],
        baseFret: 5,
      },
      {
        fingers: "4,3,2,1,x,x",
        notes: ["A", "C#", "E#", "A"],
        baseFret: 5,
      },
      {
        fingers: "x,x,4,2,3,1",
        notes: ["C#", "E#", "A", "C#"],
        baseFret: 5,
      },
      {
        fingers: "x,0,4,2,3,1",
        notes: ["A", "E#", "A", "C#", "E#"],
        baseFret: 1,
      },
    ],
  },
  Amaj: {
    root: "A",
    type: "maj",
    structure: ["1", "3", "5"],
    positions: [
      {
        fingers: "x,0,1,2,3,0",
        notes: ["A", "E", "A", "C#", "E"],
        baseFret: 1,
      },
      {
        fingers: "1,3,4,2,1,1",
        notes: ["A", "E", "A", "C#", "E", "A"],
        baseFret: 5,
      },
      {
        fingers: "x,4,3,1,2,1",
        notes: ["A", "C#", "E", "A", "C#"],
        baseFret: 5,
      },
      {
        fingers: "0,3,x,1,4,0",
        notes: ["E", "C#", "A", "E", "E"],
        baseFret: 1,
      },
      {
        fingers: "x,1,4,x,x,2",
        notes: ["C#", "A", "A"],
        baseFret: 1,
      },
      {
        fingers: "x,0,1,1,1,4",
        notes: ["A", "E", "A", "C#", "A"],
        baseFret: 1,
      },
      {
        fingers: "x,0,3,2,1,0",
        notes: ["A", "A", "C#", "E", "E"],
        baseFret: 1,
      },
      {
        fingers: "x,x,x,1,3,2",
        notes: ["E", "A", "C#"],
        baseFret: 1,
      },
      {
        fingers: "x,0,1,1,1,x",
        notes: ["A", "E", "A", "C#"],
        baseFret: 1,
      },
      {
        fingers: "x,x,x,2,1,0",
        notes: ["C#", "E", "E"],
        baseFret: 1,
      },
      {
        fingers: "x,0,3,2,1,1",
        notes: ["A", "A", "C#", "E", "A"],
        baseFret: 1,
      },
      {
        fingers: "x,0,1,3,4,2",
        notes: ["A", "A", "E", "A", "C#"],
        baseFret: 1,
      },
      {
        fingers: "x,3,1,1,1,x",
        notes: ["C#", "E", "A", "C#"],
        baseFret: 5,
      },
      {
        fingers: "2,1,x,x,x,x",
        notes: ["A", "C#"],
        baseFret: 1,
      },
      {
        fingers: "x,1,3,3,3,1",
        notes: ["A", "E", "A", "C#", "E"],
        baseFret: 5,
      },
      {
        fingers: "x,x,3,1,2,x",
        notes: ["C#", "E", "A"],
        baseFret: 1,
      },
      {
        fingers: "x,3,4,2,1,1",
        notes: ["E", "A", "C#", "E", "A"],
        baseFret: 5,
      },
      {
        fingers: "x,x,3,2,1,x",
        notes: ["A", "C#", "E"],
        baseFret: 1,
      },
    ],
  },
  "A13(#11)": {
    root: "A",
    type: "13(#11)",
    structure: ["1", "3", "5", "b7", "9", "#11", "13"],
    positions: [
      {
        fingers: "x,1,2,2,4,3",
        notes: ["G", "C#", "F#", "B", "D#"],
        baseFret: 5,
      },
    ],
  },
  A11: {
    root: "A",
    type: "11",
    structure: ["1", "3", "5", "b7", "9", "11"],
    positions: [
      {
        fingers: "x,0,0,0,0,0",
        notes: ["A", "D", "G", "B", "E"],
        baseFret: 1,
      },
      {
        fingers: "x,0,3,2,1,1",
        notes: ["A", "G", "B", "D", "G"],
        baseFret: 1,
      },
      {
        fingers: "x,0,1,1,2,1",
        notes: ["A", "A", "D", "G", "B"],
        baseFret: 1,
      },
    ],
  },
  Amaj9: {
    root: "A",
    type: "maj9",
    structure: ["1", "3", "5", "7", "9"],
    positions: [
      {
        fingers: "x,0,2,1,0,0",
        notes: ["A", "E", "G#", "B", "E"],
        baseFret: 1,
      },
      {
        fingers: "2,1,4,1,3,x",
        notes: ["A", "C#", "G#", "B", "E"],
        baseFret: 5,
      },
      {
        fingers: "x,2,1,4,3,0",
        notes: ["A", "C#", "G#", "B", "E"],
        baseFret: 1,
      },
      {
        fingers: "x,0,1,3,1,4",
        notes: ["A", "E", "B", "C#", "G#"],
        baseFret: 1,
      },
    ],
  },
  Asus2: {
    root: "A",
    type: "sus2",
    structure: ["1", "2", "5"],
    positions: [
      {
        fingers: "x,0,2,3,0,0",
        notes: ["A", "E", "A", "B", "E"],
        baseFret: 1,
      },
      {
        fingers: "0,0,1,4,0,0",
        notes: ["E", "A", "E", "B", "B", "E"],
        baseFret: 1,
      },
      {
        fingers: "x,0,1,3,4,1",
        notes: ["A", "A", "E", "A", "B"],
        baseFret: 1,
      },
      {
        fingers: "x,0,2,3,0,x",
        notes: ["A", "E", "A", "B"],
        baseFret: 1,
      },
    ],
  },
  "A7(b13)": {
    root: "A",
    type: "7(b13)",
    structure: ["1", "3", "5", "b7", "b13"],
    positions: [
      {
        fingers: "x,0,2,0,3,1",
        notes: ["A", "E", "G", "C#", "F"],
        baseFret: 1,
      },
    ],
  },
  Am11: {
    root: "A",
    type: "m11",
    structure: ["1", "b3", "5", "b7", "9", "11"],
    positions: [
      {
        fingers: "2,x,3,4,1,x",
        notes: ["A", "G", "C", "D"],
        baseFret: 5,
      },
      {
        fingers: "x,0,0,3,0,1",
        notes: ["A", "D", "C", "B", "G"],
        baseFret: 1,
      },
      {
        fingers: "1,3,0,0,0,0",
        notes: ["A", "E", "D", "G", "B", "E"],
        baseFret: 1,
      },
      {
        fingers: "x,0,2,3,1,x",
        notes: ["A", "G", "C", "D"],
        baseFret: 1,
      },
      {
        fingers: "x,0,3,2,1,4",
        notes: ["A", "G", "B", "D", "A"],
        baseFret: 1,
      },
      {
        fingers: "2,x,3,4,1,0",
        notes: ["A", "G", "C", "D", "E"],
        baseFret: 1,
      },
      {
        fingers: "x,0,4,2,1,1",
        notes: ["A", "A", "C", "D", "G"],
        baseFret: 1,
      },
      {
        fingers: "x,0,3,4,0,1",
        notes: ["A", "G", "C", "B", "G"],
        baseFret: 1,
      },
      {
        fingers: "x,0,4,2,1,0",
        notes: ["A", "A", "C", "D", "E"],
        baseFret: 1,
      },
    ],
  },
  Aadd9: {
    root: "A",
    type: "add9",
    structure: ["1", "3", "5", "9"],
    positions: [
      {
        fingers: "x,0,2,1,0,0",
        notes: ["A", "A", "C#", "B", "E"],
        baseFret: 1,
      },
      {
        fingers: "x,0,1,4,2,0",
        notes: ["A", "E", "B", "C#", "E"],
        baseFret: 1,
      },
      {
        fingers: "1,3,4,2,0,0",
        notes: ["A", "E", "A", "C#", "B", "E"],
        baseFret: 1,
      },
      {
        fingers: "x,x,3,2,1,4",
        notes: ["A", "C#", "E", "B"],
        baseFret: 5,
      },
      {
        fingers: "0,3,4,2,0,0",
        notes: ["E", "E", "A", "C#", "B", "E"],
        baseFret: 1,
      },
      {
        fingers: "x,2,3,1,0,0",
        notes: ["E", "A", "C#", "B", "E"],
        baseFret: 1,
      },
    ],
  },
  Am7b5: {
    root: "A",
    type: "m7b5",
    structure: ["1", "b3", "b5", "b7"],
    positions: [
      {
        fingers: "2,x,3,4,1,x",
        notes: ["A", "G", "C", "Eb"],
        baseFret: 5,
      },
    ],
  },
  Am: {
    root: "A",
    type: "m",
    structure: ["1", "b3", "5"],
    positions: [
      {
        fingers: "x,0,2,3,1,0",
        notes: ["A", "E", "A", "C", "E"],
        baseFret: 1,
      },
      {
        fingers: "1,3,4,1,1,1",
        notes: ["A", "E", "A", "C", "E", "A"],
        baseFret: 5,
      },
      {
        fingers: "x,0,1,3,4,2",
        notes: ["A", "A", "E", "A", "C"],
        baseFret: 1,
      },
      {
        fingers: "x,0,3,1,1,1",
        notes: ["A", "A", "C", "E", "A"],
        baseFret: 1,
      },
      {
        fingers: "x,4,2,3,1,0",
        notes: ["C", "E", "A", "C", "E"],
        baseFret: 1,
      },
      {
        fingers: "x,x,3,1,1,1",
        notes: ["A", "C", "E", "A"],
        baseFret: 5,
      },
      {
        fingers: "x,x,x,2,1,0",
        notes: ["C", "E", "E"],
        baseFret: 1,
      },
      {
        fingers: "x,3,4,1,1,1",
        notes: ["E", "A", "C", "E", "A"],
        baseFret: 5,
      },
      {
        fingers: "x,x,3,1,x,x",
        notes: ["A", "C"],
        baseFret: 1,
      },
      {
        fingers: "x,x,x,1,1,1",
        notes: ["C", "E", "A"],
        baseFret: 1,
      },
      {
        fingers: "x,0,x,2,1,0",
        notes: ["A", "A", "C", "E"],
        baseFret: 1,
      },
      {
        fingers: "x,0,x,1,1,1",
        notes: ["A", "C", "E", "A"],
        baseFret: 1,
      },
      {
        fingers: "x,0,1,3,x,2",
        notes: ["A", "A", "E", "C"],
        baseFret: 1,
      },
      {
        fingers: "2,x,1,4,x,3",
        notes: ["C", "A", "E", "C"],
        baseFret: 5,
      },
      {
        fingers: "x,0,3,2,4,x",
        notes: ["A", "C", "E", "A"],
        baseFret: 1,
      },
      {
        fingers: "0,x,x,2,3,1",
        notes: ["E", "E", "A", "C"],
        baseFret: 1,
      },
      {
        fingers: "1,x,3,1,1,x",
        notes: ["A", "A", "C", "E"],
        baseFret: 5,
      },
      {
        fingers: "x,0,1,4,4,x",
        notes: ["A", "E", "C", "E"],
        baseFret: 1,
      },
      {
        fingers: "x,x,x,2,1,0",
        notes: ["A", "C", "E"],
        baseFret: 1,
      },
      {
        fingers: "x,4,2,1,x,x",
        notes: ["A", "C", "E"],
        baseFret: 1,
      },
    ],
  },
  A7b5: {
    root: "A",
    type: "7b5",
    structure: ["1", "3", "b5", "b7"],
    positions: [
      {
        fingers: "x,0,1,0,2,x",
        notes: ["A", "Eb", "G", "C#"],
        baseFret: 1,
      },
      {
        fingers: "x,0,2,4,1,3",
        notes: ["A", "G", "C#", "Eb", "A"],
        baseFret: 1,
      },
      {
        fingers: "x,0,1,2,3,4",
        notes: ["A", "A", "Eb", "G", "C#"],
        baseFret: 1,
      },
    ],
  },
  "A9(#11)": {
    root: "A",
    type: "9(#11)",
    structure: ["1", "3", "5", "b7", "9", "#11"],
    positions: [
      {
        fingers: "2,x,3,1,1,x",
        notes: ["A", "G", "B", "D#"],
        baseFret: 5,
      },
    ],
  },
  Am7: {
    root: "A",
    type: "m7",
    structure: ["1", "b3", "5", "b7"],
    positions: [
      {
        fingers: "x,0,2,0,1,0",
        notes: ["A", "E", "G", "C", "E"],
        baseFret: 1,
      },
      {
        fingers: "1,3,1,1,4,1",
        notes: ["A", "E", "G", "C", "G", "A"],
        baseFret: 5,
      },
      {
        fingers: "x,0,1,4,2,3",
        notes: ["A", "A", "E", "G", "C"],
        baseFret: 1,
      },
      {
        fingers: "1,3,1,1,1,1",
        notes: ["A", "E", "G", "C", "E", "A"],
        baseFret: 5,
      },
      {
        fingers: "x,0,2,3,1,4",
        notes: ["A", "E", "A", "C", "G"],
        baseFret: 1,
      },
      {
        fingers: "2,x,3,3,x,x",
        notes: ["A", "G", "C"],
        baseFret: 1,
      },
      {
        fingers: "2,x,3,3,3,x",
        notes: ["A", "G", "C", "E"],
        baseFret: 1,
      },
      {
        fingers: "x,0,2,0,1,4",
        notes: ["A", "E", "G", "C", "G"],
        baseFret: 1,
      },
      {
        fingers: "x,2,1,3,4,x",
        notes: ["A", "C", "G", "C"],
        baseFret: 5,
      },
      {
        fingers: "x,2,1,3,x,x",
        notes: ["A", "C", "G"],
        baseFret: 1,
      },
      {
        fingers: "x,0,x,0,1,x",
        notes: ["A", "G", "C"],
        baseFret: 1,
      },
      {
        fingers: "x,0,2,0,1,x",
        notes: ["A", "E", "G", "C"],
        baseFret: 1,
      },
      {
        fingers: "x,0,1,1,1,1",
        notes: ["A", "G", "C", "E", "A"],
        baseFret: 1,
      },
      {
        fingers: "x,1,x,x,2,4",
        notes: ["A", "C", "G"],
        baseFret: 1,
      },
      {
        fingers: "3,x,2,0,1,0",
        notes: ["G", "E", "G", "C", "E"],
        baseFret: 1,
      },
      {
        fingers: "x,0,3,3,x,x",
        notes: ["A", "G", "C"],
        baseFret: 1,
      },
      {
        fingers: "2,x,1,3,2,x",
        notes: ["C", "A", "E", "G"],
        baseFret: 5,
      },
      {
        fingers: "x,1,3,3,3,3",
        notes: ["C", "G", "C", "E", "A"],
        baseFret: 5,
      },
      {
        fingers: "x,x,2,3,1,4",
        notes: ["E", "A", "C", "G"],
        baseFret: 5,
      },
      {
        fingers: "4,x,2,3,1,0",
        notes: ["G", "E", "A", "C", "E"],
        baseFret: 1,
      },
    ],
  },
  Adim: {
    root: "A",
    type: "dim",
    structure: ["1", "b3", "b5"],
    positions: [
      {
        fingers: "x,0,1,2,3,x",
        notes: ["A", "Eb", "A", "C"],
        baseFret: 1,
      },
      {
        fingers: "x,0,4,3,1,2",
        notes: ["A", "A", "C", "Eb", "A"],
        baseFret: 1,
      },
      {
        fingers: "x,0,1,2,4,3",
        notes: ["A", "A", "Eb", "A", "C"],
        baseFret: 1,
      },
      {
        fingers: "x,0,1,3,x,x",
        notes: ["A", "Eb", "A"],
        baseFret: 1,
      },
    ],
  },
  A6: {
    root: "A",
    type: "6",
    structure: ["1", "3", "5", "6"],
    positions: [
      {
        fingers: "x,0,1,1,1,1",
        notes: ["A", "E", "A", "C#", "F#"],
        baseFret: 1,
      },
      {
        fingers: "1,x,3,2,4,1",
        notes: ["A", "A", "C#", "F#", "A"],
        baseFret: 5,
      },
      {
        fingers: "x,0,2,3,1,0",
        notes: ["A", "C#", "F#", "A", "E"],
        baseFret: 1,
      },
      {
        fingers: "x,0,4,1,2,0",
        notes: ["A", "F#", "A", "C#", "E"],
        baseFret: 1,
      },
      {
        fingers: "x,x,1,1,1,1",
        notes: ["E", "A", "C#", "F#"],
        baseFret: 5,
      },
      {
        fingers: "x,1,x,2,3,0",
        notes: ["F#", "E", "A", "E"],
        baseFret: 1,
      },
      {
        fingers: "2,x,1,4,3,x",
        notes: ["A", "F#", "C#", "E"],
        baseFret: 5,
      },
      {
        fingers: "x,0,3,x,x,x",
        notes: ["A", "F#"],
        baseFret: 1,
      },
      {
        fingers: "x,x,3,2,4,0",
        notes: ["A", "C#", "F#", "E"],
        baseFret: 1,
      },
      {
        fingers: "x,x,x,1,1,1",
        notes: ["A", "C#", "F#"],
        baseFret: 1,
      },
      {
        fingers: "x,x,3,2,4,1",
        notes: ["A", "C#", "F#", "A"],
        baseFret: 5,
      },
      {
        fingers: "x,0,x,2,4,1",
        notes: ["A", "C#", "F#", "A"],
        baseFret: 1,
      },
      {
        fingers: "1,4,x,x,x,x",
        notes: ["A", "F#"],
        baseFret: 1,
      },
      {
        fingers: "0,0,1,1,1,1",
        notes: ["E", "A", "E", "A", "C#", "F#"],
        baseFret: 1,
      },
      {
        fingers: "x,x,x,2,4,1",
        notes: ["C#", "F#", "A"],
        baseFret: 1,
      },
    ],
  },
  "A7(#5)": {
    root: "A",
    type: "7(#5)",
    structure: ["1", "3", "#5", "b7"],
    positions: [
      {
        fingers: "x,0,3,0,2,1",
        notes: ["A", "E#", "G", "C#", "E#"],
        baseFret: 1,
      },
      {
        fingers: "1,x,1,2,3,1",
        notes: ["A", "G", "C#", "E#", "A"],
        baseFret: 5,
      },
      {
        fingers: "x,1,2,1,1,x",
        notes: ["G", "C#", "E#", "A"],
        baseFret: 5,
      },
      {
        fingers: "1,x,2,3,4,x",
        notes: ["A", "G", "C#", "E#"],
        baseFret: 5,
      },
    ],
  },
  A7sus4: {
    root: "A",
    type: "7sus4",
    structure: ["1", "4", "5", "b7"],
    positions: [
      {
        fingers: "x,0,1,0,3,0",
        notes: ["A", "E", "G", "D", "E"],
        baseFret: 1,
      },
      {
        fingers: "1,3,1,4,1,1",
        notes: ["A", "E", "G", "D", "E", "A"],
        baseFret: 5,
      },
      {
        fingers: "x,0,1,1,2,4",
        notes: ["A", "A", "D", "G", "D"],
        baseFret: 1,
      },
    ],
  },
  Amaj7: {
    root: "A",
    type: "maj7",
    structure: ["1", "3", "5", "7"],
    positions: [
      {
        fingers: "x,0,2,1,3,0",
        notes: ["A", "E", "G#", "C#", "E"],
        baseFret: 1,
      },
      {
        fingers: "x,0,4,3,2,1",
        notes: ["A", "A", "C#", "E", "G#"],
        baseFret: 1,
      },
      {
        fingers: "x,4,3,1,1,1",
        notes: ["A", "C#", "E", "G#", "C#"],
        baseFret: 5,
      },
      {
        fingers: "1,x,3,4,2,x",
        notes: ["A", "G#", "C#", "E"],
        baseFret: 5,
      },
      {
        fingers: "x,3,4,1,2,0",
        notes: ["G#", "C#", "E", "A", "E"],
        baseFret: 1,
      },
      {
        fingers: "x,x,x,1,1,3",
        notes: ["A", "C#", "G#"],
        baseFret: 1,
      },
    ],
  },
  A5: {
    root: "A",
    type: "5",
    structure: ["1", "5"],
    positions: [
      {
        fingers: "1,3,x,x,x,x",
        notes: ["A", "E"],
        baseFret: 1,
      },
      {
        fingers: "x,1,1,x,x,x",
        notes: ["E", "A"],
        baseFret: 1,
      },
      {
        fingers: "x,0,1,1,x,x",
        notes: ["A", "E", "A"],
        baseFret: 1,
      },
      {
        fingers: "x,0,1,x,x,x",
        notes: ["A", "E"],
        baseFret: 1,
      },
      {
        fingers: "x,0,1,1,4,x",
        notes: ["A", "E", "A", "E"],
        baseFret: 1,
      },
      {
        fingers: "4,x,1,1,x,x",
        notes: ["A", "E", "A"],
        baseFret: 1,
      },
      {
        fingers: "x,1,3,x,x,x",
        notes: ["A", "E"],
        baseFret: 1,
      },
      {
        fingers: "1,3,4,x,x,x",
        notes: ["A", "E", "A"],
        baseFret: 1,
      },
      {
        fingers: "x,0,1,3,4,x",
        notes: ["A", "A", "E", "A"],
        baseFret: 1,
      },
      {
        fingers: "x,x,1,3,x,x",
        notes: ["A", "E"],
        baseFret: 1,
      },
      {
        fingers: "x,1,3,4,x,x",
        notes: ["A", "E", "A"],
        baseFret: 1,
      },
      {
        fingers: "x,x,1,3,4,x",
        notes: ["A", "E", "A"],
        baseFret: 1,
      },
      {
        fingers: "x,0,1,1,4,4",
        notes: ["A", "E", "A", "E", "A"],
        baseFret: 1,
      },
      {
        fingers: "x,x,x,1,4,x",
        notes: ["A", "E"],
        baseFret: 1,
      },
    ],
  },
  "A7(#11)": {
    root: "A",
    type: "7(#11)",
    structure: ["1", "3", "5", "b7", "#11"],
    positions: [
      {
        fingers: "2,x,3,4,1,x",
        notes: ["A", "G", "C#", "D#"],
        baseFret: 5,
      },
    ],
  },
  "A13(#9)": {
    root: "A",
    type: "13(#9)",
    structure: ["1", "3", "5", "b7", "#9", "11", "13"],
    positions: [
      {
        fingers: "x,x,1,2,3,4",
        notes: ["G", "C#", "F#", "B#"],
        baseFret: 5,
      },
    ],
  },
  Am6: {
    root: "A",
    type: "m6",
    structure: ["1", "b3", "5", "6"],
    positions: [
      {
        fingers: "x,0,2,3,1,4",
        notes: ["A", "E", "A", "C", "F#"],
        baseFret: 1,
      },
      {
        fingers: "1,x,3,1,4,1",
        notes: ["A", "A", "C", "F#", "A"],
        baseFret: 5,
      },
      {
        fingers: "x,0,1,3,2,0",
        notes: ["A", "C", "F#", "A", "E"],
        baseFret: 1,
      },
      {
        fingers: "2,x,1,3,3,3",
        notes: ["A", "F#", "C", "E", "A"],
        baseFret: 5,
      },
    ],
  },
  "A7(b9)": {
    root: "A",
    type: "7(b9)",
    structure: ["1", "3", "5", "b7", "b9"],
    positions: [
      {
        fingers: "3,2,4,1,x,x",
        notes: ["A", "C#", "G", "Bb"],
        baseFret: 5,
      },
      {
        fingers: "1,x,1,2,1,3",
        notes: ["A", "G", "C#", "E", "Bb"],
        baseFret: 5,
      },
      {
        fingers: "x,0,1,3,2,x",
        notes: ["A", "C#", "G", "Bb"],
        baseFret: 1,
      },
    ],
  },
  Am9: {
    root: "A",
    type: "m9",
    structure: ["1", "b3", "5", "b7", "9"],
    positions: [
      {
        fingers: "x,0,2,4,1,3",
        notes: ["A", "E", "B", "C", "G"],
        baseFret: 1,
      },
      {
        fingers: "x,0,1,1,1,3",
        notes: ["A", "G", "C", "E", "B"],
        baseFret: 1,
      },
      {
        fingers: "x,2,1,3,4,0",
        notes: ["A", "C", "G", "B", "E"],
        baseFret: 1,
      },
      {
        fingers: "x,x,2,1,4,3",
        notes: ["A", "C", "G", "B"],
        baseFret: 5,
      },
      {
        fingers: "x,2,1,3,4,x",
        notes: ["A", "C", "G", "B"],
        baseFret: 5,
      },
      {
        fingers: "x,0,3,4,0,0",
        notes: ["A", "G", "C", "B", "E"],
        baseFret: 1,
      },
      {
        fingers: "x,0,2,0,0,0",
        notes: ["A", "E", "G", "B", "E"],
        baseFret: 1,
      },
      {
        fingers: "4,2,1,0,0,x",
        notes: ["A", "C", "E", "G", "B"],
        baseFret: 1,
      },
      {
        fingers: "x,0,1,1,4,3",
        notes: ["A", "G", "C", "G", "B"],
        baseFret: 1,
      },
      {
        fingers: "1,3,1,1,1,4",
        notes: ["A", "E", "G", "C", "E", "B"],
        baseFret: 5,
      },
    ],
  },
  "A13(b9)": {
    root: "A",
    type: "13(b9)",
    structure: ["1", "3", "5", "b7", "b9", "11", "13"],
    positions: [
      {
        fingers: "x,x,1,2,4,3",
        notes: ["G", "C#", "F#", "Bb"],
        baseFret: 5,
      },
    ],
  },
  Asus4: {
    root: "A",
    type: "sus4",
    structure: ["1", "4", "5"],
    positions: [
      {
        fingers: "x,0,1,1,2,0",
        notes: ["A", "E", "A", "D", "E"],
        baseFret: 1,
      },
      {
        fingers: "x,0,3,4,1,1",
        notes: ["A", "A", "D", "E", "A"],
        baseFret: 1,
      },
      {
        fingers: "x,0,1,2,3,4",
        notes: ["A", "A", "E", "A", "D"],
        baseFret: 1,
      },
      {
        fingers: "x,0,1,1,2,x",
        notes: ["A", "E", "A", "D"],
        baseFret: 1,
      },
    ],
  },
  "A6/9": {
    root: "A",
    type: "6/9",
    structure: ["1", "3", "5", "6", "9"],
    positions: [
      {
        fingers: "x,0,3,1,0,0",
        notes: ["A", "F#", "A", "B", "E"],
        baseFret: 1,
      },
      {
        fingers: "x,0,1,1,3,4",
        notes: ["A", "F#", "B", "E", "A"],
        baseFret: 1,
      },
      {
        fingers: "x,0,2,1,3,4",
        notes: ["A", "A", "C#", "F#", "B"],
        baseFret: 1,
      },
    ],
  },
  B13: {
    root: "B",
    type: "13",
    structure: ["1", "3", "5", "b7", "9", "11", "13"],
    positions: [
      {
        fingers: "x,2,1,3,3,4",
        notes: ["B", "D#", "A", "C#", "G#"],
        baseFret: 5,
      },
      {
        fingers: "4,x,3,2,1,1",
        notes: ["B", "A", "C#", "D#", "G#"],
        baseFret: 5,
      },
      {
        fingers: "1,x,1,2,3,4",
        notes: ["B", "A", "D#", "G#", "C#"],
        baseFret: 5,
      },
      {
        fingers: "1,3,1,2,4,1",
        notes: ["B", "F#", "A", "D#", "G#", "B"],
        baseFret: 5,
      },
      {
        fingers: "1,x,2,3,4,x",
        notes: ["B", "A", "D#", "G#"],
        baseFret: 5,
      },
      {
        fingers: "x,1,3,2,4,x",
        notes: ["D#", "A", "C#", "F#"],
        baseFret: 5,
      },
      {
        fingers: "x,x,1,2,3,1",
        notes: ["A", "D#", "G#", "B"],
        baseFret: 5,
      },
      {
        fingers: "1,4,1,2,1,1",
        notes: ["B", "G#", "A", "D#", "F#", "B"],
        baseFret: 5,
      },
    ],
  },
  "B7(#9)": {
    root: "B",
    type: "7(#9)",
    structure: ["1", "3", "5", "b7", "#9"],
    positions: [
      {
        fingers: "x,2,1,3,4,x",
        notes: ["B", "D#", "A", "C##"],
        baseFret: 5,
      },
      {
        fingers: "2,1,3,3,3,x",
        notes: ["B", "D#", "A", "C##", "F#"],
        baseFret: 5,
      },
      {
        fingers: "1,3,1,2,1,4",
        notes: ["B", "F#", "A", "D#", "F#", "C##"],
        baseFret: 5,
      },
      {
        fingers: "x,1,x,2,3,x",
        notes: ["B", "A", "C##"],
        baseFret: 1,
      },
    ],
  },
  B9: {
    root: "B",
    type: "9",
    structure: ["1", "3", "5", "b7", "9"],
    positions: [
      {
        fingers: "x,2,1,3,4,x",
        notes: ["B", "D#", "A", "C#"],
        baseFret: 5,
      },
      {
        fingers: "x,1,3,2,4,x",
        notes: ["D#", "A", "C#", "F#"],
        baseFret: 5,
      },
      {
        fingers: "x,x,2,1,3,4",
        notes: ["A", "C#", "F#", "B"],
        baseFret: 5,
      },
    ],
  },
  B9b5: {
    root: "B",
    type: "9b5",
    structure: ["1", "3", "b5", "b7", "9"],
    positions: [
      {
        fingers: "1,2,1,3,4,1",
        notes: ["F", "B", "D#", "A", "C#", "F"],
        baseFret: 5,
      },
      {
        fingers: "2,1,3,1,1,4",
        notes: ["B", "D#", "A", "C#", "F", "B"],
        baseFret: 5,
      },
      {
        fingers: "x,x,1,2,3,1",
        notes: ["B", "F", "A", "C#"],
        baseFret: 5,
      },
    ],
  },
  Bmaj13: {
    root: "B",
    type: "maj13",
    structure: ["1", "3", "5", "7", "9", "11", "13"],
    positions: [
      {
        fingers: "x,1,1,1,2,1",
        notes: ["D#", "G#", "C#", "F#", "A#"],
        baseFret: 5,
      },
      {
        fingers: "1,1,3,2,1,4",
        notes: ["F#", "B", "F#", "A#", "C#", "G#"],
        baseFret: 5,
      },
    ],
  },
  B7: {
    root: "B",
    type: "7",
    structure: ["1", "3", "5", "b7"],
    positions: [
      {
        fingers: "x,2,1,3,0,4",
        notes: ["B", "D#", "A", "B", "F#"],
        baseFret: 1,
      },
      {
        fingers: "x,1,3,1,4,1",
        notes: ["B", "F#", "A", "D#", "F#"],
        baseFret: 5,
      },
      {
        fingers: "1,3,1,2,4,1",
        notes: ["B", "F#", "A", "D#", "A", "B"],
        baseFret: 5,
      },
      {
        fingers: "x,1,3,3,3,4",
        notes: ["B", "F#", "B", "D#", "A"],
        baseFret: 5,
      },
      {
        fingers: "1,3,1,2,1,1",
        notes: ["B", "F#", "A", "D#", "F#", "B"],
        baseFret: 5,
      },
      {
        fingers: "x,2,1,2,x,x",
        notes: ["B", "D#", "A"],
        baseFret: 1,
      },
      {
        fingers: "x,2,1,3,0,4",
        notes: ["B", "D#", "A", "B", "F#"],
        baseFret: 1,
      },
      {
        fingers: "x,3,2,4,1,x",
        notes: ["B", "D#", "A", "B"],
        baseFret: 5,
      },
      {
        fingers: "x,x,1,1,1,3",
        notes: ["F#", "B", "D#", "A"],
        baseFret: 5,
      },
      {
        fingers: "1,x,2,4,3,x",
        notes: ["B", "A", "D#", "F#"],
        baseFret: 5,
      },
      {
        fingers: "x,0,1,2,1,1",
        notes: ["A", "A", "D#", "F#", "B"],
        baseFret: 1,
      },
      {
        fingers: "x,2,1,3,0,x",
        notes: ["B", "D#", "A", "B"],
        baseFret: 1,
      },
      {
        fingers: "2,0,1,3,0,4",
        notes: ["F#", "A", "D#", "A", "B", "F#"],
        baseFret: 1,
      },
      {
        fingers: "2,x,1,3,x,x",
        notes: ["F#", "D#", "A"],
        baseFret: 1,
      },
      {
        fingers: "x,2,1,3,x,4",
        notes: ["B", "D#", "A", "F#"],
        baseFret: 5,
      },
      {
        fingers: "2,x,1,3,0,4",
        notes: ["F#", "D#", "A", "B", "F#"],
        baseFret: 1,
      },
      {
        fingers: "x,0,1,1,1,3",
        notes: ["A", "F#", "B", "D#", "A"],
        baseFret: 1,
      },
      {
        fingers: "1,x,2,3,x,x",
        notes: ["B", "A", "D#"],
        baseFret: 1,
      },
    ],
  },
  Bdim7: {
    root: "B",
    type: "dim7",
    structure: ["1", "b3", "b5", "bb7"],
    positions: [
      {
        fingers: "2,4,1,3,x,x",
        notes: ["Ab", "D", "F", "B"],
        baseFret: 5,
      },
      {
        fingers: "x,2,3,1,4,x",
        notes: ["D", "Ab", "B", "F"],
        baseFret: 5,
      },
      {
        fingers: "x,x,1,3,2,4",
        notes: ["B", "F", "Ab", "D"],
        baseFret: 5,
      },
      {
        fingers: "x,2,3,1,4,x",
        notes: ["B", "F", "Ab", "D"],
        baseFret: 5,
      },
      {
        fingers: "x,x,1,2,1,3",
        notes: ["Ab", "D", "F", "B"],
        baseFret: 5,
      },
      {
        fingers: "2,x,1,3,1,x",
        notes: ["B", "Ab", "D", "F"],
        baseFret: 5,
      },
      {
        fingers: "x,x,0,3,0,4",
        notes: ["D", "Ab", "B", "F"],
        baseFret: 1,
      },
    ],
  },
  Baug: {
    root: "B",
    type: "aug",
    structure: ["1", "3", "#5"],
    positions: [
      {
        fingers: "x,3,2,0,0,x",
        notes: ["B", "D#", "F##", "B"],
        baseFret: 1,
      },
      {
        fingers: "4,3,2,0,x,x",
        notes: ["F##", "B", "D#", "F##"],
        baseFret: 1,
      },
      {
        fingers: "x,x,4,2,3,1",
        notes: ["D#", "F##", "B", "D#"],
        baseFret: 5,
      },
    ],
  },
  Bmaj: {
    root: "B",
    type: "maj",
    structure: ["1", "3", "5"],
    positions: [
      {
        fingers: "x,1,3,3,3,x",
        notes: ["B", "F#", "B", "D#"],
        baseFret: 5,
      },
      {
        fingers: "1,3,4,2,1,1",
        notes: ["B", "F#", "B", "D#", "F#", "B"],
        baseFret: 5,
      },
      {
        fingers: "x,x,1,2,4,3",
        notes: ["B", "F#", "B", "D#"],
        baseFret: 5,
      },
    ],
  },
  "B13(#11)": {
    root: "B",
    type: "13(#11)",
    structure: ["1", "3", "5", "b7", "9", "#11", "13"],
    positions: [
      {
        fingers: "3,x,4,2,1,1",
        notes: ["B", "A", "C#", "D#", "G#"],
        baseFret: 5,
      },
    ],
  },
  B11: {
    root: "B",
    type: "11",
    structure: ["1", "3", "5", "b7", "9", "11"],
    positions: [
      {
        fingers: "x,1,1,1,1,1",
        notes: ["B", "E", "A", "C#", "F#"],
        baseFret: 5,
      },
      {
        fingers: "3,x,4,2,1,1",
        notes: ["B", "A", "C#", "E", "A"],
        baseFret: 5,
      },
      {
        fingers: "x,x,1,1,2,1",
        notes: ["B", "E", "A", "C#"],
        baseFret: 5,
      },
    ],
  },
  Bmaj9: {
    root: "B",
    type: "maj9",
    structure: ["1", "3", "5", "7", "9"],
    positions: [
      {
        fingers: "x,2,1,4,3,x",
        notes: ["B", "D#", "A#", "C#"],
        baseFret: 5,
      },
      {
        fingers: "2,1,4,1,x,x",
        notes: ["B", "D#", "A#", "C#"],
        baseFret: 5,
      },
      {
        fingers: "x,x,4,1,2,1",
        notes: ["B", "C#", "F#", "A#"],
        baseFret: 5,
      },
    ],
  },
  Bm11: {
    root: "B",
    type: "m11",
    structure: ["1", "b3", "5", "b7", "9", "11"],
    positions: [
      {
        fingers: "2,x,3,4,1,x",
        notes: ["B", "A", "D", "E"],
        baseFret: 5,
      },
      {
        fingers: "x,2,0,3,4,0",
        notes: ["B", "D", "A", "C#", "E"],
        baseFret: 1,
      },
      {
        fingers: "x,x,4,3,1,x",
        notes: ["A", "C#", "D"],
        baseFret: 1,
      },
      {
        fingers: "x,0,3,4,2,0",
        notes: ["A", "F#", "B", "D", "E"],
        baseFret: 1,
      },
      {
        fingers: "x,1,x,3,4,0",
        notes: ["B", "A", "C#", "E"],
        baseFret: 1,
      },
      {
        fingers: "1,x,0,3,4,0",
        notes: ["B", "D", "E", "A", "E"],
        baseFret: 1,
      },
      {
        fingers: "2,x,3,4,0,0",
        notes: ["B", "A", "D", "B", "E"],
        baseFret: 1,
      },
    ],
  },
  Bm7b5: {
    root: "B",
    type: "m7b5",
    structure: ["1", "b3", "b5", "b7"],
    positions: [
      {
        fingers: "x,2,0,3,4,1",
        notes: ["B", "D", "A", "D", "F"],
        baseFret: 1,
      },
      {
        fingers: "x,1,2,1,3,x",
        notes: ["B", "F", "A", "D"],
        baseFret: 5,
      },
      {
        fingers: "2,x,3,4,1,x",
        notes: ["B", "A", "D", "F"],
        baseFret: 5,
      },
      {
        fingers: "x,1,3,2,4,x",
        notes: ["B", "F", "A", "D"],
        baseFret: 5,
      },
    ],
  },
  Bm: {
    root: "B",
    type: "m",
    structure: ["1", "b3", "5"],
    positions: [
      {
        fingers: "x,1,3,4,2,1",
        notes: ["B", "F#", "B", "D", "F#"],
        baseFret: 5,
      },
      {
        fingers: "1,3,4,1,1,1",
        notes: ["B", "F#", "B", "D", "F#", "B"],
        baseFret: 5,
      },
      {
        fingers: "x,x,1,3,4,2",
        notes: ["B", "F#", "B", "D"],
        baseFret: 5,
      },
      {
        fingers: "x,x,3,4,2,1",
        notes: ["F#", "B", "D", "F#"],
        baseFret: 5,
      },
      {
        fingers: "x,1,3,4,2,x",
        notes: ["B", "F#", "B", "D"],
        baseFret: 5,
      },
      {
        fingers: "x,x,3,2,4,1",
        notes: ["D", "F#", "B", "D"],
        baseFret: 5,
      },
      {
        fingers: "x,1,3,4,2,1",
        notes: ["B", "F#", "B", "D", "F#"],
        baseFret: 5,
      },
      {
        fingers: "x,3,4,1,1,1",
        notes: ["F#", "B", "D", "F#", "B"],
        baseFret: 5,
      },
      {
        fingers: "x,x,3,1,1,1",
        notes: ["B", "D", "F#", "B"],
        baseFret: 5,
      },
      {
        fingers: "x,x,x,3,2,1",
        notes: ["B", "D", "F#"],
        baseFret: 1,
      },
      {
        fingers: "2,x,0,3,x,x",
        notes: ["B", "D", "D"],
        baseFret: 1,
      },
      {
        fingers: "x,1,0,x,x,x",
        notes: ["B", "D"],
        baseFret: 1,
      },
      {
        fingers: "1,x,3,1,1,x",
        notes: ["B", "B", "D", "F#"],
        baseFret: 5,
      },
    ],
  },
  B7b5: {
    root: "B",
    type: "7b5",
    structure: ["1", "3", "b5", "b7"],
    positions: [
      {
        fingers: "x,1,2,1,3,x",
        notes: ["B", "F", "A", "D#"],
        baseFret: 5,
      },
      {
        fingers: "x,x,2,4,1,3",
        notes: ["A", "D#", "F", "B"],
        baseFret: 5,
      },
      {
        fingers: "x,x,1,2,3,4",
        notes: ["B", "F", "A", "D#"],
        baseFret: 5,
      },
    ],
  },
  Bm7: {
    root: "B",
    type: "m7",
    structure: ["1", "b3", "5", "b7"],
    positions: [
      {
        fingers: "x,2,0,3,0,4",
        notes: ["B", "D", "A", "B", "F#"],
        baseFret: 1,
      },
      {
        fingers: "x,1,3,1,2,1",
        notes: ["B", "F#", "A", "D", "F#"],
        baseFret: 5,
      },
      {
        fingers: "1,3,1,1,4,1",
        notes: ["B", "F#", "A", "D", "A", "B"],
        baseFret: 5,
      },
      {
        fingers: "2,x,3,3,x,x",
        notes: ["B", "A", "D"],
        baseFret: 1,
      },
      {
        fingers: "1,3,1,1,1,1",
        notes: ["B", "F#", "A", "D", "F#", "B"],
        baseFret: 5,
      },
      {
        fingers: "2,x,3,3,3,x",
        notes: ["B", "A", "D", "F#"],
        baseFret: 1,
      },
      {
        fingers: "x,2,0,3,4,x",
        notes: ["B", "D", "A", "D"],
        baseFret: 1,
      },
      {
        fingers: "x,2,x,3,4,x",
        notes: ["B", "A", "D"],
        baseFret: 1,
      },
      {
        fingers: "x,x,1,3,2,2",
        notes: ["B", "F#", "A", "D"],
        baseFret: 5,
      },
      {
        fingers: "x,x,1,1,1,1",
        notes: ["A", "D", "F#", "B"],
        baseFret: 5,
      },
      {
        fingers: "2,x,1,4,3,x",
        notes: ["D", "B", "F#", "A"],
        baseFret: 5,
      },
      {
        fingers: "x,x,0,1,0,2",
        notes: ["D", "A", "B", "F#"],
        baseFret: 1,
      },
      {
        fingers: "x,x,2,3,1,4",
        notes: ["F#", "B", "D", "A"],
        baseFret: 5,
      },
      {
        fingers: "x,2,1,1,x,3",
        notes: ["D", "F#", "B", "A"],
        baseFret: 5,
      },
      {
        fingers: "x,4,1,2,0,x",
        notes: ["F#", "A", "D", "B"],
        baseFret: 1,
      },
      {
        fingers: "x,0,2,3,1,x",
        notes: ["A", "F#", "B", "D"],
        baseFret: 1,
      },
    ],
  },
  "Bm(maj7)": {
    root: "B",
    type: "m(maj7)",
    structure: ["1", "b3", "5", "7"],
    positions: [
      {
        fingers: "x,1,3,4,2,x",
        notes: ["A#", "F#", "B", "D"],
        baseFret: 5,
      },
    ],
  },
  Bdim: {
    root: "B",
    type: "dim",
    structure: ["1", "b3", "b5"],
    positions: [
      {
        fingers: "x,1,2,4,3,x",
        notes: ["B", "F", "B", "D"],
        baseFret: 5,
      },
      {
        fingers: "x,x,4,3,1,2",
        notes: ["B", "D", "F", "B"],
        baseFret: 5,
      },
      {
        fingers: "x,x,1,2,4,3",
        notes: ["B", "F", "B", "D"],
        baseFret: 5,
      },
      {
        fingers: "x,x,x,3,2,1",
        notes: ["B", "D", "F"],
        baseFret: 1,
      },
      {
        fingers: "x,4,2,1,x,x",
        notes: ["B", "D", "F"],
        baseFret: 1,
      },
    ],
  },
  B6: {
    root: "B",
    type: "6",
    structure: ["1", "3", "5", "6"],
    positions: [
      {
        fingers: "x,3,1,2,0,x",
        notes: ["B", "D#", "G#", "B"],
        baseFret: 1,
      },
      {
        fingers: "x,1,3,3,3,3",
        notes: ["B", "F#", "B", "D#", "G#"],
        baseFret: 5,
      },
      {
        fingers: "1,x,3,2,4,1",
        notes: ["B", "B", "D#", "G#", "B"],
        baseFret: 5,
      },
      {
        fingers: "x,1,4,x,x,x",
        notes: ["B", "G#"],
        baseFret: 1,
      },
      {
        fingers: "x,x,1,1,1,1",
        notes: ["F#", "B", "D#", "G#"],
        baseFret: 5,
      },
    ],
  },
  "B7(#5)": {
    root: "B",
    type: "7(#5)",
    structure: ["1", "3", "#5", "b7"],
    positions: [
      {
        fingers: "x,0,1,0,0,4",
        notes: ["A", "D#", "F##", "B", "F##"],
        baseFret: 1,
      },
      {
        fingers: "x,1,4,1,3,2",
        notes: ["B", "F##", "A", "D#", "F##"],
        baseFret: 5,
      },
      {
        fingers: "1,x,1,2,3,1",
        notes: ["B", "A", "D#", "F##", "B"],
        baseFret: 5,
      },
    ],
  },
  B7sus4: {
    root: "B",
    type: "7sus4",
    structure: ["1", "4", "5", "b7"],
    positions: [
      {
        fingers: "x,1,2,3,0,0",
        notes: ["B", "E", "A", "B", "E"],
        baseFret: 1,
      },
      {
        fingers: "x,1,3,1,4,1",
        notes: ["B", "F#", "A", "E", "F#"],
        baseFret: 5,
      },
      {
        fingers: "1,3,1,4,1,1",
        notes: ["B", "F#", "A", "E", "F#", "B"],
        baseFret: 5,
      },
    ],
  },
  Bmaj7: {
    root: "B",
    type: "maj7",
    structure: ["1", "3", "5", "7"],
    positions: [
      {
        fingers: "x,1,3,2,4,1",
        notes: ["B", "F#", "A#", "D#", "F#"],
        baseFret: 5,
      },
      {
        fingers: "1,4,2,3,1,x",
        notes: ["B", "F#", "A#", "D#", "F#"],
        baseFret: 5,
      },
      {
        fingers: "x,x,4,3,2,1",
        notes: ["B", "D#", "F#", "A#"],
        baseFret: 5,
      },
      {
        fingers: "x,1,3,2,4,x",
        notes: ["B", "F#", "A#", "D#"],
        baseFret: 5,
      },
      {
        fingers: "1,x,3,4,2,x",
        notes: ["B", "A#", "D#", "F#"],
        baseFret: 5,
      },
    ],
  },
  B5: {
    root: "B",
    type: "5",
    structure: ["1", "5"],
    positions: [
      {
        fingers: "1,3,x,x,x,x",
        notes: ["B", "F#"],
        baseFret: 1,
      },
      {
        fingers: "x,1,3,4,x,x",
        notes: ["B", "F#", "B"],
        baseFret: 1,
      },
      {
        fingers: "x,1,3,x,x,x",
        notes: ["B", "F#"],
        baseFret: 1,
      },
      {
        fingers: "x,1,3,4,0,x",
        notes: ["B", "F#", "B", "B"],
        baseFret: 1,
      },
      {
        fingers: "1,3,4,x,x,x",
        notes: ["B", "F#", "B"],
        baseFret: 1,
      },
      {
        fingers: "1,1,3,x,x,x",
        notes: ["F#", "B", "F#"],
        baseFret: 1,
      },
      {
        fingers: "x,x,1,3,4,x",
        notes: ["B", "F#", "B"],
        baseFret: 1,
      },
      {
        fingers: "x,x,x,1,4,x",
        notes: ["B", "F#"],
        baseFret: 1,
      },
    ],
  },
  "B7(#11)": {
    root: "B",
    type: "7(#11)",
    structure: ["1", "3", "5", "b7", "#11"],
    positions: [
      {
        fingers: "2,x,3,4,1,x",
        notes: ["B", "A", "D#", "E#"],
        baseFret: 5,
      },
    ],
  },
  Bm6: {
    root: "B",
    type: "m6",
    structure: ["1", "b3", "5", "6"],
    positions: [
      {
        fingers: "x,2,0,1,0,3",
        notes: ["B", "D", "G#", "B", "F#"],
        baseFret: 1,
      },
      {
        fingers: "x,1,x,3,2,4",
        notes: ["B", "B", "D", "G#"],
        baseFret: 5,
      },
      {
        fingers: "1,x,3,1,4,1",
        notes: ["B", "B", "D", "G#", "B"],
        baseFret: 5,
      },
      {
        fingers: "x,1,2,1,3,x",
        notes: ["G#", "D", "F#", "B"],
        baseFret: 5,
      },
    ],
  },
  "B7(b9)": {
    root: "B",
    type: "7(b9)",
    structure: ["1", "3", "5", "b7", "b9"],
    positions: [
      {
        fingers: "x,2,1,3,1,x",
        notes: ["B", "D#", "A", "C"],
        baseFret: 5,
      },
      {
        fingers: "3,2,4,1,x,x",
        notes: ["B", "D#", "A", "C"],
        baseFret: 5,
      },
      {
        fingers: "1,x,1,2,1,3",
        notes: ["B", "A", "D#", "F#", "B"],
        baseFret: 5,
      },
      {
        fingers: "x,2,1,3,1,4",
        notes: ["B", "D#", "A", "C", "F#"],
        baseFret: 5,
      },
      {
        fingers: "1,x,2,3,x,4",
        notes: ["B", "A", "D#", "C"],
        baseFret: 5,
      },
      {
        fingers: "x,2,3,1,4,x",
        notes: ["D#", "A", "C", "F#"],
        baseFret: 5,
      },
    ],
  },
  Bm9: {
    root: "B",
    type: "m9",
    structure: ["1", "b3", "5", "b7", "9"],
    positions: [
      {
        fingers: "x,1,0,2,3,x",
        notes: ["B", "D", "A", "C#"],
        baseFret: 1,
      },
      {
        fingers: "3,1,4,2,x,x",
        notes: ["B", "D", "A", "C#"],
        baseFret: 5,
      },
      {
        fingers: "1,3,1,1,1,4",
        notes: ["B", "F#", "A", "D", "F#", "C#"],
        baseFret: 5,
      },
    ],
  },
  Bsus4: {
    root: "B",
    type: "sus4",
    structure: ["1", "4", "5"],
    positions: [
      {
        fingers: "x,1,2,3,4,1",
        notes: ["B", "F#", "B", "E", "F#"],
        baseFret: 5,
      },
      {
        fingers: "x,x,1,1,2,4",
        notes: ["F#", "B", "E", "B"],
        baseFret: 5,
      },
      {
        fingers: "1,1,3,4,1,1",
        notes: ["B", "E", "B", "E", "F#", "B"],
        baseFret: 5,
      },
      {
        fingers: "x,1,3,3,4,x",
        notes: ["B", "F#", "B", "E"],
        baseFret: 5,
      },
      {
        fingers: "x,1,3,4,0,0",
        notes: ["B", "F#", "B", "B", "E"],
        baseFret: 1,
      },
    ],
  },
  "B6/9": {
    root: "B",
    type: "6/9",
    structure: ["1", "3", "5", "6", "9"],
    positions: [
      {
        fingers: "x,2,1,1,3,4",
        notes: ["B", "D#", "G#", "C#", "F#"],
        baseFret: 5,
      },
      {
        fingers: "2,1,1,1,3,4",
        notes: ["B", "D#", "G#", "C#", "F#", "B"],
        baseFret: 5,
      },
      {
        fingers: "x,x,2,1,3,4",
        notes: ["B", "D#", "G#", "C#"],
        baseFret: 5,
      },
    ],
  },
  "C9(#5)": {
    root: "C",
    type: "9(#5)",
    structure: ["1", "3", "#5", "b7", "9"],
    positions: [
      {
        fingers: "x,x,1,2,3,4",
        notes: ["Bb", "E", "G#", "D"],
        baseFret: 5,
      },
    ],
  },
  C13: {
    root: "C",
    type: "13",
    structure: ["1", "3", "5", "b7", "9", "11", "13"],
    positions: [
      {
        fingers: "x,2,1,3,3,4",
        notes: ["C", "E", "Bb", "D", "A"],
        baseFret: 5,
      },
      {
        fingers: "3,x,4,2,1,1",
        notes: ["C", "Bb", "D", "E", "A"],
        baseFret: 5,
      },
      {
        fingers: "1,x,1,2,3,4",
        notes: ["C", "Bb", "E", "A", "D"],
        baseFret: 5,
      },
      {
        fingers: "1,x,2,3,4,x",
        notes: ["C", "Bb", "E", "A"],
        baseFret: 5,
      },
      {
        fingers: "1,3,1,2,4,1",
        notes: ["C", "G", "Bb", "E", "A", "C"],
        baseFret: 5,
      },
      {
        fingers: "x,x,1,2,2,4",
        notes: ["E", "Bb", "D", "A"],
        baseFret: 5,
      },
      {
        fingers: "x,1,x,1,1,4",
        notes: ["C", "Bb", "D", "A"],
        baseFret: 5,
      },
      {
        fingers: "1,x,1,2,3,1",
        notes: ["C", "Bb", "E", "A", "C"],
        baseFret: 5,
      },
    ],
  },
  "C7(#9)": {
    root: "C",
    type: "7(#9)",
    structure: ["1", "3", "5", "b7", "#9"],
    positions: [
      {
        fingers: "x,2,1,3,4,x",
        notes: ["C", "E", "Bb", "D#"],
        baseFret: 5,
      },
      {
        fingers: "2,1,3,3,3,x",
        notes: ["C", "E", "Bb", "D#", "G"],
        baseFret: 5,
      },
      {
        fingers: "1,3,1,2,1,4",
        notes: ["C", "G", "Bb", "E", "G", "D#"],
        baseFret: 5,
      },
    ],
  },
  C9: {
    root: "C",
    type: "9",
    structure: ["1", "3", "5", "b7", "9"],
    positions: [
      {
        fingers: "x,2,1,3,4,x",
        notes: ["C", "E", "Bb", "D"],
        baseFret: 5,
      },
      {
        fingers: "x,1,3,2,4,x",
        notes: ["E", "Bb", "D", "G"],
        baseFret: 5,
      },
      {
        fingers: "x,x,2,1,3,4",
        notes: ["Bb", "D", "G", "C"],
        baseFret: 5,
      },
      {
        fingers: "x,2,1,3,3,3",
        notes: ["C", "E", "Bb", "D", "G"],
        baseFret: 5,
      },
      {
        fingers: "x,2,1,3,3,3",
        notes: ["C", "E", "Bb", "D", "G"],
        baseFret: 5,
      },
      {
        fingers: "x,x,1,3,2,1",
        notes: ["C", "G", "Bb", "D"],
        baseFret: 5,
      },
      {
        fingers: "2,x,1,3,3,3",
        notes: ["G", "E", "Bb", "D", "G"],
        baseFret: 5,
      },
      {
        fingers: "2,1,3,1,4,x",
        notes: ["C", "E", "Bb", "D", "G"],
        baseFret: 5,
      },
      {
        fingers: "x,x,2,1,4,3",
        notes: ["C", "E", "Bb", "D"],
        baseFret: 5,
      },
    ],
  },
  C9b5: {
    root: "C",
    type: "9b5",
    structure: ["1", "3", "b5", "b7", "9"],
    positions: [
      {
        fingers: "1,2,1,3,4,1",
        notes: ["Gb", "C", "E", "Bb", "D", "Gb"],
        baseFret: 5,
      },
      {
        fingers: "2,1,3,1,1,4",
        notes: ["C", "E", "Bb", "D", "Gb", "C"],
        baseFret: 5,
      },
      {
        fingers: "x,x,1,2,3,1",
        notes: ["C", "Gb", "Bb", "D"],
        baseFret: 5,
      },
    ],
  },
  Cmaj13: {
    root: "C",
    type: "maj13",
    structure: ["1", "3", "5", "7", "9", "11", "13"],
    positions: [
      {
        fingers: "1,x,2,3,4,x",
        notes: ["C", "B", "E", "A"],
        baseFret: 5,
      },
      {
        fingers: "1,x,2,3,4,4",
        notes: ["C", "B", "E", "A", "D"],
        baseFret: 5,
      },
      {
        fingers: "x,1,3,2,1,4",
        notes: ["C", "G", "B", "D", "A"],
        baseFret: 5,
      },
      {
        fingers: "x,1,4,2,1,x",
        notes: ["C", "A", "B", "D"],
        baseFret: 5,
      },
      {
        fingers: "x,1,x,2,3,4",
        notes: ["C", "B", "E", "A"],
        baseFret: 5,
      },
      {
        fingers: "1,1,3,2,1,4",
        notes: ["G", "C", "G", "B", "D", "A"],
        baseFret: 5,
      },
    ],
  },
  C7: {
    root: "C",
    type: "7",
    structure: ["1", "3", "5", "b7"],
    positions: [
      {
        fingers: "x,3,2,4,1,0",
        notes: ["C", "E", "Bb", "C", "E"],
        baseFret: 1,
      },
      {
        fingers: "x,1,3,1,4,1",
        notes: ["C", "G", "Bb", "E", "G"],
        baseFret: 5,
      },
      {
        fingers: "1,3,1,2,4,1",
        notes: ["C", "G", "Bb", "E", "Bb", "C"],
        baseFret: 5,
      },
      {
        fingers: "x,x,1,1,1,3",
        notes: ["G", "C", "E", "Bb"],
        baseFret: 5,
      },
      {
        fingers: "x,2,1,3,x,x",
        notes: ["C", "E", "Bb"],
        baseFret: 1,
      },
      {
        fingers: "x,x,3,2,4,1",
        notes: ["C", "E", "Bb", "C"],
        baseFret: 5,
      },
      {
        fingers: "1,3,1,2,1,1",
        notes: ["C", "G", "Bb", "E", "G", "C"],
        baseFret: 5,
      },
      {
        fingers: "1,x,2,4,3,x",
        notes: ["C", "Bb", "E", "G"],
        baseFret: 5,
      },
      {
        fingers: "x,x,1,3,2,4",
        notes: ["C", "G", "Bb", "E"],
        baseFret: 5,
      },
      {
        fingers: "x,x,3,4,2,1",
        notes: ["E", "Bb", "C", "E"],
        baseFret: 5,
      },
      {
        fingers: "x,2,1,3,x,4",
        notes: ["C", "E", "Bb", "G"],
        baseFret: 5,
      },
      {
        fingers: "2,x,1,3,x,x",
        notes: ["G", "E", "Bb"],
        baseFret: 1,
      },
      {
        fingers: "4,3,1,1,1,2",
        notes: ["C", "E", "G", "C", "E", "Bb"],
        baseFret: 5,
      },
      {
        fingers: "x,3,2,4,1,x",
        notes: ["C", "E", "Bb", "C"],
        baseFret: 5,
      },
      {
        fingers: "x,x,3,1,4,1",
        notes: ["G", "Bb", "E", "G"],
        baseFret: 5,
      },
      {
        fingers: "x,x,2,3,1,4",
        notes: ["E", "Bb", "C", "G"],
        baseFret: 5,
      },
      {
        fingers: "x,3,2,4,1,x",
        notes: ["C", "E", "Bb", "C"],
        baseFret: 5,
      },
    ],
  },
  Cdim7: {
    root: "C",
    type: "dim7",
    structure: ["1", "b3", "b5", "bb7"],
    positions: [
      {
        fingers: "2,4,1,3,x,x",
        notes: ["Gb", "C", "Eb", "Bbb"],
        baseFret: 5,
      },
      {
        fingers: "x,2,3,1,4,x",
        notes: ["Eb", "Bbb", "C", "Gb"],
        baseFret: 5,
      },
      {
        fingers: "x,x,1,3,2,4",
        notes: ["C", "Gb", "Bbb", "Eb"],
        baseFret: 5,
      },
      {
        fingers: "x,2,3,1,4,x",
        notes: ["C", "Gb", "Bbb", "Eb"],
        baseFret: 5,
      },
      {
        fingers: "x,x,1,3,2,4",
        notes: ["Eb", "Bbb", "C", "Gb"],
        baseFret: 5,
      },
      {
        fingers: "x,x,x,2,1,3",
        notes: ["Gb", "Bbb", "Eb"],
        baseFret: 1,
      },
      {
        fingers: "3,x,1,4,2,x",
        notes: ["Gb", "Eb", "Bbb", "C"],
        baseFret: 5,
      },
      {
        fingers: "3,x,1,4,2,x",
        notes: ["Bbb", "Gb", "C", "Eb"],
        baseFret: 5,
      },
      {
        fingers: "3,x,1,4,2,x",
        notes: ["C", "Bbb", "Eb", "Gb"],
        baseFret: 5,
      },
      {
        fingers: "x,x,1,3,2,4",
        notes: ["Gb", "C", "Eb", "Bbb"],
        baseFret: 5,
      },
      {
        fingers: "x,x,1,3,2,4",
        notes: ["Bbb", "Eb", "Gb", "C"],
        baseFret: 5,
      },
      {
        fingers: "x,2,3,1,4,x",
        notes: ["Gb", "C", "Eb", "Bbb"],
        baseFret: 5,
      },
      {
        fingers: "x,2,3,1,4,x",
        notes: ["Bbb", "Eb", "Gb", "C"],
        baseFret: 5,
      },
      {
        fingers: "3,x,1,4,2,x",
        notes: ["Eb", "C", "Gb", "Bbb"],
        baseFret: 5,
      },
      {
        fingers: "x,3,1,2,x,x",
        notes: ["C", "Eb", "Bbb"],
        baseFret: 1,
      },
      {
        fingers: "2,x,1,3,x,x",
        notes: ["C", "Bbb", "Eb"],
        baseFret: 1,
      },
    ],
  },
  Caug: {
    root: "C",
    type: "aug",
    structure: ["1", "3", "#5"],
    positions: [
      {
        fingers: "x,3,2,1,1,x",
        notes: ["C", "E", "G#", "C"],
        baseFret: 5,
      },
      {
        fingers: "4,3,2,1,x,x",
        notes: ["G#", "C", "E", "G#"],
        baseFret: 5,
      },
      {
        fingers: "x,x,4,2,3,1",
        notes: ["C", "E", "G#", "C"],
        baseFret: 5,
      },
    ],
  },
  Cmaj: {
    root: "C",
    type: "maj",
    structure: ["1", "3", "5"],
    positions: [
      {
        fingers: "0,3,2,0,1,0",
        notes: ["E", "C", "E", "G", "C", "E"],
        baseFret: 1,
      },
      {
        fingers: "x,1,3,3,3,x",
        notes: ["C", "G", "C", "E"],
        baseFret: 5,
      },
      {
        fingers: "1,3,4,2,1,1",
        notes: ["C", "G", "C", "E", "G", "C"],
        baseFret: 5,
      },
      {
        fingers: "x,3,2,0,1,0",
        notes: ["C", "E", "G", "C", "E"],
        baseFret: 1,
      },
      {
        fingers: "x,x,x,0,1,0",
        notes: ["G", "C", "E"],
        baseFret: 1,
      },
      {
        fingers: "x,1,3,3,3,1",
        notes: ["C", "G", "C", "E", "G"],
        baseFret: 5,
      },
      {
        fingers: "x,1,2,3,4,0",
        notes: ["C", "G", "C", "E", "E"],
        baseFret: 1,
      },
      {
        fingers: "3,4,2,0,1,0",
        notes: ["G", "C", "E", "G", "C", "E"],
        baseFret: 1,
      },
      {
        fingers: "2,x,x,3,x,x",
        notes: ["C", "E"],
        baseFret: 1,
      },
      {
        fingers: "x,3,2,0,1,x",
        notes: ["C", "E", "G", "C"],
        baseFret: 1,
      },
      {
        fingers: "x,x,1,1,1,4",
        notes: ["G", "C", "E", "C"],
        baseFret: 5,
      },
      {
        fingers: "x,x,x,3,4,1",
        notes: ["C", "E", "G"],
        baseFret: 1,
      },
      {
        fingers: "x,x,1,1,1,x",
        notes: ["G", "C", "E"],
        baseFret: 1,
      },
      {
        fingers: "x,2,1,x,x,x",
        notes: ["C", "E"],
        baseFret: 1,
      },
      {
        fingers: "x,x,3,2,1,1",
        notes: ["C", "E", "G", "C"],
        baseFret: 5,
      },
      {
        fingers: "x,3,2,0,1,4",
        notes: ["C", "E", "G", "C", "G"],
        baseFret: 1,
      },
      {
        fingers: "x,1,x,0,4,x",
        notes: ["C", "G", "E"],
        baseFret: 1,
      },
      {
        fingers: "3,x,2,0,1,0",
        notes: ["G", "E", "G", "C", "E"],
        baseFret: 1,
      },
    ],
  },
  C11: {
    root: "C",
    type: "11",
    structure: ["1", "3", "5", "b7", "9", "11"],
    positions: [
      {
        fingers: "x,1,1,1,1,1",
        notes: ["C", "F", "Bb", "D", "G"],
        baseFret: 5,
      },
      {
        fingers: "3,x,4,2,1,1",
        notes: ["C", "Bb", "D", "F", "Bb"],
        baseFret: 5,
      },
      {
        fingers: "x,x,1,1,2,1",
        notes: ["C", "F", "Bb", "D"],
        baseFret: 5,
      },
    ],
  },
  Cmaj9: {
    root: "C",
    type: "maj9",
    structure: ["1", "3", "5", "7", "9"],
    positions: [
      {
        fingers: "x,2,1,4,3,x",
        notes: ["C", "E", "B", "D"],
        baseFret: 5,
      },
      {
        fingers: "2,1,3,1,x,x",
        notes: ["C", "E", "B", "D"],
        baseFret: 5,
      },
      {
        fingers: "x,x,4,1,2,1",
        notes: ["C", "D", "G", "B"],
        baseFret: 5,
      },
      {
        fingers: "x,1,4,3,2,0",
        notes: ["C", "G", "B", "D", "E"],
        baseFret: 1,
      },
      {
        fingers: "x,1,0,3,2,0",
        notes: ["C", "D", "B", "D", "E"],
        baseFret: 1,
      },
      {
        fingers: "x,3,0,0,0,0",
        notes: ["C", "D", "G", "B", "E"],
        baseFret: 1,
      },
      {
        fingers: "x,x,1,3,2,2",
        notes: ["E", "B", "D", "G"],
        baseFret: 5,
      },
      {
        fingers: "x,x,2,3,1,4",
        notes: ["B", "E", "G", "D"],
        baseFret: 5,
      },
      {
        fingers: "x,2,0,0,1,0",
        notes: ["B", "D", "G", "C", "E"],
        baseFret: 1,
      },
      {
        fingers: "2,x,4,1,3,x",
        notes: ["C", "B", "D", "G"],
        baseFret: 5,
      },
      {
        fingers: "x,x,2,1,4,3",
        notes: ["C", "E", "B", "D"],
        baseFret: 5,
      },
    ],
  },
  Csus2: {
    root: "C",
    type: "sus2",
    structure: ["1", "2", "5"],
    positions: [
      {
        fingers: "x,1,3,4,1,1",
        notes: ["C", "G", "C", "D", "G"],
        baseFret: 5,
      },
      {
        fingers: "x,2,x,0,3,4",
        notes: ["C", "G", "D", "G"],
        baseFret: 1,
      },
      {
        fingers: "x,2,0,0,3,4",
        notes: ["C", "D", "G", "D", "G"],
        baseFret: 1,
      },
    ],
  },
  Cm11: {
    root: "C",
    type: "m11",
    structure: ["1", "b3", "5", "b7", "9", "11"],
    positions: [
      {
        fingers: "2,x,3,4,1,x",
        notes: ["C", "Bb", "Eb", "F"],
        baseFret: 5,
      },
      {
        fingers: "x,2,1,3,4,1",
        notes: ["C", "Eb", "Bb", "D", "F"],
        baseFret: 5,
      },
      {
        fingers: "2,x,3,4,1,1",
        notes: ["C", "Bb", "Eb", "F", "Bb"],
        baseFret: 5,
      },
      {
        fingers: "x,2,1,3,4,1",
        notes: ["C", "Eb", "Bb", "Eb", "F"],
        baseFret: 5,
      },
      {
        fingers: "x,1,1,1,2,1",
        notes: ["C", "F", "Bb", "Eb", "G"],
        baseFret: 5,
      },
      {
        fingers: "x,1,1,1,1,1",
        notes: ["C", "F", "Bb", "D", "G"],
        baseFret: 5,
      },
      {
        fingers: "x,x,3,4,1,x",
        notes: ["Bb", "Eb", "F"],
        baseFret: 1,
      },
      {
        fingers: "x,x,1,3,1,1",
        notes: ["Eb", "Bb", "C", "F"],
        baseFret: 5,
      },
    ],
  },
  Cadd9: {
    root: "C",
    type: "add9",
    structure: ["1", "3", "5", "9"],
    positions: [
      {
        fingers: "x,2,1,0,3,4",
        notes: ["C", "E", "G", "D", "G"],
        baseFret: 1,
      },
      {
        fingers: "x,2,1,0,3,0",
        notes: ["C", "E", "G", "D", "E"],
        baseFret: 1,
      },
      {
        fingers: "x,x,3,2,1,4",
        notes: ["C", "E", "G", "D"],
        baseFret: 5,
      },
      {
        fingers: "x,1,0,0,2,0",
        notes: ["C", "D", "G", "D", "E"],
        baseFret: 1,
      },
      {
        fingers: "x,3,0,0,1,0",
        notes: ["C", "D", "G", "C", "E"],
        baseFret: 1,
      },
    ],
  },
  Cm7b5: {
    root: "C",
    type: "m7b5",
    structure: ["1", "b3", "b5", "b7"],
    positions: [
      {
        fingers: "x,1,3,2,4,x",
        notes: ["C", "Gb", "Bb", "Eb"],
        baseFret: 5,
      },
      {
        fingers: "2,x,3,4,1,x",
        notes: ["C", "Bb", "Eb", "Gb"],
        baseFret: 5,
      },
      {
        fingers: "1,2,1,1,x,x",
        notes: ["C", "Gb", "Bb", "Eb"],
        baseFret: 5,
      },
      {
        fingers: "x,x,1,2,2,2",
        notes: ["C", "Gb", "Bb", "Eb"],
        baseFret: 5,
      },
      {
        fingers: "x,2,x,3,4,1",
        notes: ["C", "Bb", "Eb", "Gb"],
        baseFret: 5,
      },
    ],
  },
  Cm13: {
    root: "C",
    type: "m13",
    structure: ["1", "b3", "5", "b7", "9", "11", "13"],
    positions: [
      {
        fingers: "2,x,3,3,4,x",
        notes: ["C", "Bb", "Eb", "A"],
        baseFret: 1,
      },
      {
        fingers: "x,x,1,2,2,4",
        notes: ["Eb", "Bb", "D", "A"],
        baseFret: 5,
      },
    ],
  },
  Cm: {
    root: "C",
    type: "m",
    structure: ["1", "b3", "5"],
    positions: [
      {
        fingers: "x,4,1,0,2,x",
        notes: ["C", "Eb", "G", "C"],
        baseFret: 1,
      },
      {
        fingers: "x,1,3,4,2,1",
        notes: ["C", "G", "C", "Eb", "G"],
        baseFret: 5,
      },
      {
        fingers: "1,3,4,1,1,1",
        notes: ["C", "G", "C", "Eb", "G", "C"],
        baseFret: 5,
      },
      {
        fingers: "x,1,3,4,2,x",
        notes: ["C", "G", "C", "Eb"],
        baseFret: 5,
      },
      {
        fingers: "x,x,3,4,2,1",
        notes: ["G", "C", "Eb", "G"],
        baseFret: 5,
      },
      {
        fingers: "x,x,x,3,2,1",
        notes: ["C", "Eb", "G"],
        baseFret: 1,
      },
      {
        fingers: "x,1,x,0,2,x",
        notes: ["C", "G", "Eb"],
        baseFret: 1,
      },
      {
        fingers: "x,1,x,3,2,1",
        notes: ["C", "C", "Eb", "G"],
        baseFret: 5,
      },
      {
        fingers: "4,2,1,1,x,x",
        notes: ["C", "Eb", "G", "C"],
        baseFret: 5,
      },
      {
        fingers: "x,x,1,3,4,2",
        notes: ["C", "G", "C", "Eb"],
        baseFret: 5,
      },
      {
        fingers: "x,4,2,1,3,x",
        notes: ["C", "Eb", "G", "C"],
        baseFret: 5,
      },
      {
        fingers: "x,x,x,1,1,1",
        notes: ["Eb", "G", "C"],
        baseFret: 1,
      },
      {
        fingers: "x,x,3,1,1,1",
        notes: ["C", "Eb", "G", "C"],
        baseFret: 5,
      },
      {
        fingers: "x,x,3,1,1,x",
        notes: ["C", "Eb", "G"],
        baseFret: 1,
      },
      {
        fingers: "x,3,4,1,x,x",
        notes: ["G", "C", "Eb"],
        baseFret: 1,
      },
      {
        fingers: "2,1,1,x,x,x",
        notes: ["Eb", "G", "C"],
        baseFret: 1,
      },
      {
        fingers: "x,x,3,4,2,x",
        notes: ["G", "C", "Eb"],
        baseFret: 1,
      },
      {
        fingers: "x,2,1,1,x,x",
        notes: ["Eb", "G", "C"],
        baseFret: 1,
      },
      {
        fingers: "4,2,1,x,x,x",
        notes: ["C", "Eb", "G"],
        baseFret: 1,
      },
    ],
  },
  C7b5: {
    root: "C",
    type: "7b5",
    structure: ["1", "3", "b5", "b7"],
    positions: [
      {
        fingers: "x,1,2,1,3,x",
        notes: ["C", "Gb", "Bb", "E"],
        baseFret: 5,
      },
      {
        fingers: "x,x,2,4,1,3",
        notes: ["Bb", "E", "Gb", "C"],
        baseFret: 5,
      },
      {
        fingers: "1,3,2,4,x,x",
        notes: ["C", "Gb", "Bb", "E"],
        baseFret: 5,
      },
    ],
  },
  Cm7: {
    root: "C",
    type: "m7",
    structure: ["1", "b3", "5", "b7"],
    positions: [
      {
        fingers: "x,3,1,4,1,x",
        notes: ["C", "Eb", "Bb", "C"],
        baseFret: 5,
      },
      {
        fingers: "x,1,3,1,2,1",
        notes: ["C", "G", "Bb", "Eb", "G"],
        baseFret: 5,
      },
      {
        fingers: "1,3,1,1,4,1",
        notes: ["C", "G", "Bb", "Eb", "Bb", "C"],
        baseFret: 5,
      },
      {
        fingers: "2,x,3,3,3,x",
        notes: ["C", "Bb", "Eb", "G"],
        baseFret: 1,
      },
      {
        fingers: "x,1,x,2,3,x",
        notes: ["C", "Bb", "Eb"],
        baseFret: 1,
      },
      {
        fingers: "1,3,1,1,1,1",
        notes: ["C", "G", "Bb", "Eb", "G", "C"],
        baseFret: 5,
      },
      {
        fingers: "2,x,x,3,4,1",
        notes: ["C", "Eb", "G", "Bb"],
        baseFret: 5,
      },
      {
        fingers: "x,x,1,3,2,2",
        notes: ["C", "G", "Bb", "Eb"],
        baseFret: 5,
      },
      {
        fingers: "x,2,1,3,4,x",
        notes: ["C", "Eb", "Bb", "Eb"],
        baseFret: 5,
      },
      {
        fingers: "x,2,1,3,4,x",
        notes: ["C", "Eb", "Bb", "Eb"],
        baseFret: 5,
      },
    ],
  },
  "Cm(maj7)": {
    root: "C",
    type: "m(maj7)",
    structure: ["1", "b3", "5", "7"],
    positions: [
      {
        fingers: "1,x,4,2,3,x",
        notes: ["C", "B", "Eb", "G"],
        baseFret: 5,
      },
      {
        fingers: "x,1,3,2,2,x",
        notes: ["C", "G", "B", "Eb"],
        baseFret: 5,
      },
      {
        fingers: "x,1,4,2,3,1",
        notes: ["C", "G", "B", "Eb", "G"],
        baseFret: 5,
      },
    ],
  },
  Cdim: {
    root: "C",
    type: "dim",
    structure: ["1", "b3", "b5"],
    positions: [
      {
        fingers: "x,1,2,3,4,x",
        notes: ["C", "Gb", "C", "Eb"],
        baseFret: 5,
      },
      {
        fingers: "x,x,4,3,1,2",
        notes: ["C", "Eb", "Gb", "C"],
        baseFret: 5,
      },
      {
        fingers: "1,2,4,3,x,x",
        notes: ["C", "Gb", "C", "Eb"],
        baseFret: 5,
      },
    ],
  },
  C6: {
    root: "C",
    type: "6",
    structure: ["1", "3", "5", "6"],
    positions: [
      {
        fingers: "x,4,2,3,1,0",
        notes: ["C", "E", "A", "C", "E"],
        baseFret: 1,
      },
      {
        fingers: "x,1,3,3,3,3",
        notes: ["C", "G", "C", "E", "A"],
        baseFret: 5,
      },
      {
        fingers: "1,x,3,2,4,1",
        notes: ["C", "C", "E", "A", "C"],
        baseFret: 5,
      },
      {
        fingers: "2,x,1,4,3,x",
        notes: ["C", "A", "E", "G"],
        baseFret: 5,
      },
      {
        fingers: "x,x,3,2,4,1",
        notes: ["C", "E", "A", "C"],
        baseFret: 5,
      },
      {
        fingers: "x,x,x,1,1,1",
        notes: ["C", "E", "A"],
        baseFret: 1,
      },
      {
        fingers: "2,x,1,4,x,x",
        notes: ["C", "A", "E"],
        baseFret: 1,
      },
      {
        fingers: "x,4,2,3,1,x",
        notes: ["C", "E", "A", "C"],
        baseFret: 5,
      },
      {
        fingers: "x,2,1,1,x,x",
        notes: ["C", "E", "A"],
        baseFret: 1,
      },
      {
        fingers: "x,x,1,1,1,1",
        notes: ["G", "C", "E", "A"],
        baseFret: 5,
      },
    ],
  },
  "C7(#5)": {
    root: "C",
    type: "7(#5)",
    structure: ["1", "3", "#5", "b7"],
    positions: [
      {
        fingers: "x,1,2,1,1,x",
        notes: ["Bb", "E", "G#", "C"],
        baseFret: 5,
      },
      {
        fingers: "x,1,4,1,3,2",
        notes: ["C", "G#", "Bb", "E", "G#"],
        baseFret: 5,
      },
      {
        fingers: "1,x,1,2,3,1",
        notes: ["C", "Bb", "E", "G#", "C"],
        baseFret: 5,
      },
      {
        fingers: "1,x,2,3,4,x",
        notes: ["C", "Bb", "E", "G#"],
        baseFret: 5,
      },
    ],
  },
  C7sus4: {
    root: "C",
    type: "7sus4",
    structure: ["1", "4", "5", "b7"],
    positions: [
      {
        fingers: "x,2,3,4,1,x",
        notes: ["C", "F", "Bb", "C"],
        baseFret: 5,
      },
      {
        fingers: "x,1,3,1,4,1",
        notes: ["C", "G", "Bb", "F", "G"],
        baseFret: 5,
      },
      {
        fingers: "1,3,1,4,1,1",
        notes: ["C", "G", "Bb", "F", "G", "C"],
        baseFret: 5,
      },
    ],
  },
  Cmaj7: {
    root: "C",
    type: "maj7",
    structure: ["1", "3", "5", "7"],
    positions: [
      {
        fingers: "x,3,2,0,0,0",
        notes: ["C", "E", "G", "B", "E"],
        baseFret: 1,
      },
      {
        fingers: "x,1,3,2,4,1",
        notes: ["C", "G", "B", "E", "G"],
        baseFret: 5,
      },
      {
        fingers: "x,x,4,3,2,1",
        notes: ["C", "E", "G", "B"],
        baseFret: 5,
      },
      {
        fingers: "x,1,3,2,4,x",
        notes: ["C", "G", "B", "E"],
        baseFret: 5,
      },
      {
        fingers: "1,x,3,4,2,x",
        notes: ["C", "B", "E", "G"],
        baseFret: 5,
      },
      {
        fingers: "3,4,2,0,0,0",
        notes: ["G", "C", "E", "G", "B", "E"],
        baseFret: 1,
      },
      {
        fingers: "1,3,4,2,0,0",
        notes: ["C", "G", "C", "E", "B", "E"],
        baseFret: 1,
      },
      {
        fingers: "x,1,3,4,0,0",
        notes: ["C", "G", "C", "B", "E"],
        baseFret: 1,
      },
      {
        fingers: "1,x,3,4,x,x",
        notes: ["C", "B", "E"],
        baseFret: 1,
      },
      {
        fingers: "x,2,1,0,0,3",
        notes: ["C", "E", "G", "B", "G"],
        baseFret: 1,
      },
      {
        fingers: "x,2,4,0,0,0",
        notes: ["C", "G", "G", "B", "E"],
        baseFret: 1,
      },
      {
        fingers: "x,x,1,1,1,3",
        notes: ["G", "C", "E", "B"],
        baseFret: 5,
      },
      {
        fingers: "x,x,2,3,1,1",
        notes: ["B", "E", "G", "C"],
        baseFret: 5,
      },
      {
        fingers: "x,x,1,3,3,3",
        notes: ["C", "G", "B", "E"],
        baseFret: 5,
      },
      {
        fingers: "x,1,3,2,4,0",
        notes: ["C", "G", "B", "E", "E"],
        baseFret: 1,
      },
      {
        fingers: "x,x,2,4,1,3",
        notes: ["E", "B", "C", "G"],
        baseFret: 5,
      },
      {
        fingers: "2,x,1,3,4,x",
        notes: ["E", "C", "G", "B"],
        baseFret: 5,
      },
      {
        fingers: "x,x,2,4,1,3",
        notes: ["E", "B", "C", "G"],
        baseFret: 5,
      },
    ],
  },
  C5: {
    root: "C",
    type: "5",
    structure: ["1", "5"],
    positions: [
      {
        fingers: "x,1,3,x,x,x",
        notes: ["C", "G"],
        baseFret: 1,
      },
      {
        fingers: "1,3,x,x,x,x",
        notes: ["C", "G"],
        baseFret: 1,
      },
      {
        fingers: "x,1,3,4,x,x",
        notes: ["C", "G", "C"],
        baseFret: 1,
      },
      {
        fingers: "1,3,4,x,x,x",
        notes: ["C", "G", "C"],
        baseFret: 1,
      },
      {
        fingers: "1,1,3,x,x,x",
        notes: ["G", "C", "G"],
        baseFret: 1,
      },
      {
        fingers: "x,x,2,3,x,x",
        notes: ["G", "C"],
        baseFret: 1,
      },
      {
        fingers: "x,x,1,3,4,x",
        notes: ["C", "G", "C"],
        baseFret: 1,
      },
    ],
  },
  "C7(#11)": {
    root: "C",
    type: "7(#11)",
    structure: ["1", "3", "5", "b7", "#11"],
    positions: [
      {
        fingers: "2,x,3,4,1,x",
        notes: ["C", "Bb", "E", "F#"],
        baseFret: 5,
      },
      {
        fingers: "x,1,3,1,x,x",
        notes: ["C", "F#", "Bb"],
        baseFret: 1,
      },
      {
        fingers: "x,x,x,1,3,2",
        notes: ["C", "F#", "Bb"],
        baseFret: 1,
      },
    ],
  },
  Cm6: {
    root: "C",
    type: "m6",
    structure: ["1", "b3", "5", "6"],
    positions: [
      {
        fingers: "x,3,1,2,1,x",
        notes: ["C", "Eb", "A", "C"],
        baseFret: 5,
      },
      {
        fingers: "x,1,x,3,2,4",
        notes: ["C", "C", "Eb", "A"],
        baseFret: 5,
      },
      {
        fingers: "1,x,3,1,4,1",
        notes: ["C", "C", "Eb", "A", "C"],
        baseFret: 5,
      },
      {
        fingers: "2,x,1,3,4,x",
        notes: ["C", "A", "Eb", "G"],
        baseFret: 5,
      },
    ],
  },
  "Cm6/9": {
    root: "C",
    type: "m6/9",
    structure: ["1", "b3", "5", "6", "9"],
    positions: [
      {
        fingers: "x,x,1,2,2,4",
        notes: ["A", "Eb", "G", "D"],
        baseFret: 5,
      },
    ],
  },
  "C7(b9)": {
    root: "C",
    type: "7(b9)",
    structure: ["1", "3", "5", "b7", "b9"],
    positions: [
      {
        fingers: "x,2,1,3,1,x",
        notes: ["C", "E", "Bb", "Db"],
        baseFret: 5,
      },
      {
        fingers: "3,2,4,1,x,x",
        notes: ["C", "E", "Bb", "Db"],
        baseFret: 5,
      },
      {
        fingers: "1,x,1,2,1,3",
        notes: ["C", "Bb", "E", "G", "Db"],
        baseFret: 5,
      },
      {
        fingers: "x,2,1,3,1,4",
        notes: ["C", "E", "Bb", "Db", "G"],
        baseFret: 5,
      },
      {
        fingers: "3,x,1,4,2,x",
        notes: ["G", "E", "Bb", "Db"],
        baseFret: 5,
      },
    ],
  },
  Cm9: {
    root: "C",
    type: "m9",
    structure: ["1", "b3", "5", "b7", "9"],
    positions: [
      {
        fingers: "x,2,1,3,4,x",
        notes: ["C", "Eb", "Bb", "D"],
        baseFret: 5,
      },
      {
        fingers: "3,1,4,2,x,x",
        notes: ["C", "Eb", "Bb", "D"],
        baseFret: 5,
      },
      {
        fingers: "1,3,1,1,1,4",
        notes: ["C", "G", "Bb", "Eb", "G", "D"],
        baseFret: 5,
      },
      {
        fingers: "x,x,2,1,4,3",
        notes: ["C", "Eb", "Bb", "D"],
        baseFret: 5,
      },
    ],
  },
  "C13(b9)": {
    root: "C",
    type: "13(b9)",
    structure: ["1", "3", "5", "b7", "b9", "11", "13"],
    positions: [
      {
        fingers: "x,x,1,2,4,3",
        notes: ["Bb", "E", "A", "Db"],
        baseFret: 5,
      },
    ],
  },
  Csus4: {
    root: "C",
    type: "sus4",
    structure: ["1", "4", "5"],
    positions: [
      {
        fingers: "x,3,4,0,1,x",
        notes: ["C", "F", "G", "C"],
        baseFret: 1,
      },
      {
        fingers: "x,1,2,3,4,1",
        notes: ["C", "G", "C", "F", "G"],
        baseFret: 5,
      },
      {
        fingers: "1,1,3,4,1,1",
        notes: ["C", "F", "C", "F", "G", "C"],
        baseFret: 5,
      },
    ],
  },
  "C6/9": {
    root: "C",
    type: "6/9",
    structure: ["1", "3", "5", "6", "9"],
    positions: [
      {
        fingers: "x,2,1,1,3,4",
        notes: ["C", "E", "A", "D", "G"],
        baseFret: 5,
      },
      {
        fingers: "2,1,1,1,3,4",
        notes: ["C", "E", "A", "D", "G", "C"],
        baseFret: 5,
      },
      {
        fingers: "x,x,2,1,3,4",
        notes: ["C", "E", "A", "D"],
        baseFret: 5,
      },
      {
        fingers: "x,2,1,1,3,x",
        notes: ["C", "E", "A", "D"],
        baseFret: 5,
      },
    ],
  },
  "D9(#5)": {
    root: "D",
    type: "9(#5)",
    structure: ["1", "3", "#5", "b7", "9"],
    positions: [
      {
        fingers: "x,1,2,1,1,x",
        notes: ["C", "F#", "A#", "D"],
        baseFret: 5,
      },
      {
        fingers: "x,x,1,3,3,4",
        notes: ["F#", "C", "E", "A#"],
        baseFret: 5,
      },
    ],
  },
  D13: {
    root: "D",
    type: "13",
    structure: ["1", "3", "5", "b7", "9", "11", "13"],
    positions: [
      {
        fingers: "x,2,1,3,3,4",
        notes: ["D", "F#", "C", "E", "B"],
        baseFret: 5,
      },
      {
        fingers: "3,x,4,2,1,1",
        notes: ["D", "C", "E", "F#", "B"],
        baseFret: 5,
      },
      {
        fingers: "1,x,1,2,3,4",
        notes: ["D", "C", "F#", "B", "E"],
        baseFret: 5,
      },
      {
        fingers: "1,x,2,3,4,x",
        notes: ["D", "C", "F#", "B"],
        baseFret: 5,
      },
      {
        fingers: "x,1,3,1,1,4",
        notes: ["D", "A", "C", "E", "B"],
        baseFret: 5,
      },
      {
        fingers: "x,2,1,3,0,4",
        notes: ["D", "F#", "C", "B", "A"],
        baseFret: 1,
      },
      {
        fingers: "x,x,1,2,3,1",
        notes: ["C", "F#", "B", "D"],
        baseFret: 5,
      },
      {
        fingers: "x,1,3,3,2,x",
        notes: ["C", "F#", "B", "D"],
        baseFret: 5,
      },
      {
        fingers: "x,x,1,3,3,4",
        notes: ["F#", "C", "E", "B"],
        baseFret: 5,
      },
      {
        fingers: "x,1,x,2,4,4",
        notes: ["D", "C", "F#", "B"],
        baseFret: 5,
      },
      {
        fingers: "x,0,1,2,2,4",
        notes: ["A", "F#", "C", "E", "B"],
        baseFret: 1,
      },
      {
        fingers: "1,3,1,2,4,1",
        notes: ["D", "A", "C", "F#", "B", "D"],
        baseFret: 5,
      },
      {
        fingers: "x,x,1,2,3,4",
        notes: ["C", "F#", "B", "E"],
        baseFret: 5,
      },
    ],
  },
  "D7(#9)": {
    root: "D",
    type: "7(#9)",
    structure: ["1", "3", "5", "b7", "#9"],
    positions: [
      {
        fingers: "x,2,1,3,4,x",
        notes: ["D", "F#", "C", "E#"],
        baseFret: 5,
      },
      {
        fingers: "2,1,3,3,3,x",
        notes: ["D", "F#", "C", "E#", "A"],
        baseFret: 5,
      },
      {
        fingers: "1,3,1,2,1,4",
        notes: ["D", "A", "C", "F#", "A", "E#"],
        baseFret: 5,
      },
    ],
  },
  D9: {
    root: "D",
    type: "9",
    structure: ["1", "3", "5", "b7", "9"],
    positions: [
      {
        fingers: "x,0,x,2,1,0",
        notes: ["A", "A", "C", "E"],
        baseFret: 1,
      },
      {
        fingers: "x,2,1,3,4,x",
        notes: ["D", "F#", "C", "E"],
        baseFret: 5,
      },
      {
        fingers: "x,1,3,2,4,0",
        notes: ["F#", "C", "E", "A", "E"],
        baseFret: 1,
      },
      {
        fingers: "2,x,0,3,1,0",
        notes: ["F#", "D", "A", "C", "E"],
        baseFret: 1,
      },
      {
        fingers: "x,2,1,3,3,3",
        notes: ["D", "F#", "C", "E", "A"],
        baseFret: 5,
      },
      {
        fingers: "x,2,x,1,3,0",
        notes: ["C", "A", "D", "E"],
        baseFret: 1,
      },
      {
        fingers: "x,1,3,1,1,1",
        notes: ["D", "A", "C", "E", "A"],
        baseFret: 5,
      },
      {
        fingers: "x,x,1,3,2,1",
        notes: ["D", "A", "C", "E"],
        baseFret: 5,
      },
      {
        fingers: "x,1,3,2,4,x",
        notes: ["F#", "C", "E", "A"],
        baseFret: 5,
      },
      {
        fingers: "2,x,1,3,3,3",
        notes: ["A", "F#", "C", "E", "A"],
        baseFret: 5,
      },
    ],
  },
  D9b5: {
    root: "D",
    type: "9b5",
    structure: ["1", "3", "b5", "b7", "9"],
    positions: [
      {
        fingers: "x,x,0,1,2,0",
        notes: ["D", "Ab", "C", "E"],
        baseFret: 1,
      },
      {
        fingers: "1,2,1,3,4,1",
        notes: ["Ab", "D", "F#", "C", "E", "Ab"],
        baseFret: 5,
      },
      {
        fingers: "2,1,3,1,1,4",
        notes: ["D", "F#", "C", "E", "Ab", "D"],
        baseFret: 5,
      },
    ],
  },
  Dmaj13: {
    root: "D",
    type: "maj13",
    structure: ["1", "3", "5", "7", "9", "11", "13"],
    positions: [
      {
        fingers: "x,1,1,1,2,1",
        notes: ["F#", "B", "E", "A", "C#"],
        baseFret: 5,
      },
    ],
  },
  D7: {
    root: "D",
    type: "7",
    structure: ["1", "3", "5", "b7"],
    positions: [
      {
        fingers: "x,0,0,2,1,3",
        notes: ["A", "D", "A", "C", "F#"],
        baseFret: 1,
      },
      {
        fingers: "x,1,3,1,4,1",
        notes: ["D", "A", "C", "F#", "A"],
        baseFret: 5,
      },
      {
        fingers: "1,3,1,2,4,1",
        notes: ["D", "A", "C", "F#", "C", "D"],
        baseFret: 5,
      },
      {
        fingers: "x,x,0,2,1,3",
        notes: ["D", "A", "C", "F#"],
        baseFret: 1,
      },
      {
        fingers: "x,4,0,1,3,2",
        notes: ["C", "D", "A", "D", "F#"],
        baseFret: 1,
      },
      {
        fingers: "x,3,2,4,1,x",
        notes: ["D", "F#", "C", "D"],
        baseFret: 5,
      },
      {
        fingers: "x,2,1,3,x,x",
        notes: ["D", "F#", "C"],
        baseFret: 1,
      },
      {
        fingers: "x,x,1,1,1,3",
        notes: ["A", "D", "F#", "C"],
        baseFret: 5,
      },
      {
        fingers: "x,x,3,2,4,1",
        notes: ["D", "F#", "C", "D"],
        baseFret: 5,
      },
      {
        fingers: "1,x,2,3,x,x",
        notes: ["D", "C", "F#"],
        baseFret: 1,
      },
      {
        fingers: "x,x,2,3,1,4",
        notes: ["F#", "C", "D", "A"],
        baseFret: 5,
      },
      {
        fingers: "1,x,2,4,3,x",
        notes: ["D", "C", "F#", "A"],
        baseFret: 5,
      },
      {
        fingers: "x,x,2,3,1,4",
        notes: ["F#", "C", "D", "A"],
        baseFret: 5,
      },
      {
        fingers: "x,x,1,3,2,4",
        notes: ["D", "A", "C", "F#"],
        baseFret: 5,
      },
      {
        fingers: "2,x,1,1,1,x",
        notes: ["C", "A", "D", "F#"],
        baseFret: 5,
      },
      {
        fingers: "x,0,4,1,1,x",
        notes: ["A", "C", "D", "F#"],
        baseFret: 1,
      },
    ],
  },
  Ddim7: {
    root: "D",
    type: "dim7",
    structure: ["1", "b3", "b5", "bb7"],
    positions: [
      {
        fingers: "2,4,1,3,x,x",
        notes: ["Ab", "D", "F", "Cb"],
        baseFret: 5,
      },
      {
        fingers: "x,2,3,1,4,x",
        notes: ["F", "Cb", "D", "Ab"],
        baseFret: 5,
      },
      {
        fingers: "x,x,1,3,2,4",
        notes: ["Cb", "F", "Ab", "D"],
        baseFret: 5,
      },
      {
        fingers: "x,x,1,3,2,4",
        notes: ["Ab", "D", "F", "Cb"],
        baseFret: 5,
      },
      {
        fingers: "2,x,1,3,1,x",
        notes: ["D", "Cb", "F", "Ab"],
        baseFret: 5,
      },
      {
        fingers: "x,2,3,1,4,x",
        notes: ["D", "Ab", "Cb", "F"],
        baseFret: 5,
      },
    ],
  },
  Daug: {
    root: "D",
    type: "aug",
    structure: ["1", "3", "#5"],
    positions: [
      {
        fingers: "x,3,2,1,1,x",
        notes: ["D", "F#", "A#", "D"],
        baseFret: 5,
      },
      {
        fingers: "4,3,2,1,x,x",
        notes: ["A#", "D", "F#", "A#"],
        baseFret: 5,
      },
      {
        fingers: "x,x,4,2,3,1",
        notes: ["D", "F#", "A#", "D"],
        baseFret: 5,
      },
      {
        fingers: "x,x,0,3,4,2",
        notes: ["D", "A#", "D", "F#"],
        baseFret: 1,
      },
    ],
  },
  Dmaj: {
    root: "D",
    type: "maj",
    structure: ["1", "3", "5"],
    positions: [
      {
        fingers: "x,0,0,1,3,2",
        notes: ["A", "D", "A", "D", "F#"],
        baseFret: 1,
      },
      {
        fingers: "x,1,3,3,3,x",
        notes: ["D", "A", "D", "F#"],
        baseFret: 5,
      },
      {
        fingers: "1,3,4,2,1,1",
        notes: ["D", "A", "D", "F#", "A", "D"],
        baseFret: 5,
      },
      {
        fingers: "x,x,0,1,3,2",
        notes: ["D", "A", "D", "F#"],
        baseFret: 1,
      },
      {
        fingers: "x,4,3,1,2,1",
        notes: ["D", "F#", "A", "D", "F#"],
        baseFret: 5,
      },
      {
        fingers: "x,1,3,3,3,1",
        notes: ["D", "A", "D", "F#", "A"],
        baseFret: 5,
      },
      {
        fingers: "x,0,3,1,2,1",
        notes: ["A", "F#", "A", "D", "F#"],
        baseFret: 1,
      },
      {
        fingers: "x,x,0,3,4,1",
        notes: ["D", "D", "F#", "A"],
        baseFret: 1,
      },
      {
        fingers: "x,4,3,1,2,x",
        notes: ["D", "F#", "A", "D"],
        baseFret: 5,
      },
      {
        fingers: "2,1,x,4,x,x",
        notes: ["D", "F#", "F#"],
        baseFret: 1,
      },
      {
        fingers: "x,x,3,1,2,1",
        notes: ["F#", "A", "D", "F#"],
        baseFret: 5,
      },
      {
        fingers: "x,x,1,1,1,x",
        notes: ["A", "D", "F#"],
        baseFret: 1,
      },
      {
        fingers: "x,0,3,1,x,x",
        notes: ["A", "F#", "A"],
        baseFret: 1,
      },
      {
        fingers: "x,x,1,1,1,4",
        notes: ["A", "D", "F#", "D"],
        baseFret: 5,
      },
      {
        fingers: "x,x,3,2,1,1",
        notes: ["D", "F#", "A", "D"],
        baseFret: 5,
      },
      {
        fingers: "x,2,1,x,x,x",
        notes: ["D", "F#"],
        baseFret: 1,
      },
    ],
  },
  D11: {
    root: "D",
    type: "11",
    structure: ["1", "3", "5", "b7", "9", "11"],
    positions: [
      {
        fingers: "x,0,0,0,1,0",
        notes: ["A", "D", "G", "C", "E"],
        baseFret: 1,
      },
      {
        fingers: "x,1,1,1,1,1",
        notes: ["D", "G", "C", "E", "A"],
        baseFret: 5,
      },
      {
        fingers: "4,x,3,2,1,1",
        notes: ["D", "C", "E", "G", "C"],
        baseFret: 5,
      },
    ],
  },
  Dmaj9: {
    root: "D",
    type: "maj9",
    structure: ["1", "3", "5", "7", "9"],
    positions: [
      {
        fingers: "x,0,4,1,2,0",
        notes: ["A", "F#", "A", "C#", "E"],
        baseFret: 1,
      },
      {
        fingers: "x,2,1,4,3,x",
        notes: ["D", "F#", "C#", "E"],
        baseFret: 5,
      },
      {
        fingers: "x,0,4,1,2,1",
        notes: ["A", "D", "E", "A", "C#"],
        baseFret: 1,
      },
      {
        fingers: "x,3,4,1,2,0",
        notes: ["C#", "F#", "A", "D", "E"],
        baseFret: 1,
      },
    ],
  },
  Dsus2: {
    root: "D",
    type: "sus2",
    structure: ["1", "2", "5"],
    positions: [
      {
        fingers: "x,x,0,1,3,0",
        notes: ["D", "A", "D", "E"],
        baseFret: 1,
      },
      {
        fingers: "x,0,0,1,3,0",
        notes: ["A", "D", "A", "D", "E"],
        baseFret: 1,
      },
      {
        fingers: "x,1,3,4,1,1",
        notes: ["D", "A", "D", "E", "A"],
        baseFret: 5,
      },
      {
        fingers: "1,1,3,4,1,1",
        notes: ["A", "D", "A", "D", "E", "A"],
        baseFret: 5,
      },
    ],
  },
  Dm11: {
    root: "D",
    type: "m11",
    structure: ["1", "b3", "5", "b7", "9", "11"],
    positions: [
      {
        fingers: "2,x,3,4,1,x",
        notes: ["D", "C", "F", "G"],
        baseFret: 5,
      },
      {
        fingers: "x,x,1,3,4,1",
        notes: ["F", "C", "E", "G"],
        baseFret: 5,
      },
      {
        fingers: "x,x,2,3,1,4",
        notes: ["C", "F", "G", "D"],
        baseFret: 5,
      },
      {
        fingers: "x,x,1,3,1,1",
        notes: ["F", "C", "D", "G"],
        baseFret: 5,
      },
      {
        fingers: "x,2,1,3,4,1",
        notes: ["D", "F", "C", "E", "G"],
        baseFret: 5,
      },
      {
        fingers: "x,1,1,1,2,1",
        notes: ["D", "G", "C", "F", "A"],
        baseFret: 5,
      },
      {
        fingers: "x,x,2,3,1,4",
        notes: ["D", "G", "A", "E"],
        baseFret: 5,
      },
      {
        fingers: "x,x,3,1,4,x",
        notes: ["A", "C", "G"],
        baseFret: 1,
      },
      {
        fingers: "x,2,1,3,1,1",
        notes: ["D", "F", "C", "D", "G"],
        baseFret: 5,
      },
      {
        fingers: "x,0,2,0,3,0",
        notes: ["A", "F", "G", "D", "E"],
        baseFret: 1,
      },
      {
        fingers: "2,x,3,4,1,1",
        notes: ["D", "C", "F", "G", "C"],
        baseFret: 5,
      },
    ],
  },
  Dm13: {
    root: "D",
    type: "m13",
    structure: ["1", "b3", "5", "b7", "9", "11", "13"],
    positions: [
      {
        fingers: "x,1,3,1,2,4",
        notes: ["D", "A", "C", "F", "B"],
        baseFret: 5,
      },
    ],
  },
  Dm: {
    root: "D",
    type: "m",
    structure: ["1", "b3", "5"],
    positions: [
      {
        fingers: "x,0,0,2,3,1",
        notes: ["A", "D", "A", "D", "F"],
        baseFret: 1,
      },
      {
        fingers: "x,1,3,4,2,1",
        notes: ["D", "A", "D", "F", "A"],
        baseFret: 5,
      },
      {
        fingers: "1,3,4,1,1,1",
        notes: ["D", "A", "D", "F", "A", "D"],
        baseFret: 5,
      },
      {
        fingers: "x,x,0,2,3,1",
        notes: ["D", "A", "D", "F"],
        baseFret: 1,
      },
      {
        fingers: "2,x,x,3,x,x",
        notes: ["D", "F"],
        baseFret: 1,
      },
      {
        fingers: "x,x,x,x,1,4",
        notes: ["F", "D"],
        baseFret: 1,
      },
      {
        fingers: "x,x,3,4,2,1",
        notes: ["A", "D", "F", "A"],
        baseFret: 5,
      },
      {
        fingers: "1,x,0,2,4,x",
        notes: ["F", "D", "A", "D"],
        baseFret: 1,
      },
      {
        fingers: "x,x,3,4,2,x",
        notes: ["A", "D", "F"],
        baseFret: 1,
      },
      {
        fingers: "x,x,3,1,1,1",
        notes: ["D", "F", "A", "D"],
        baseFret: 5,
      },
      {
        fingers: "1,3,x,1,x,1",
        notes: ["D", "A", "F", "D"],
        baseFret: 5,
      },
      {
        fingers: "x,x,0,1,1,1",
        notes: ["D", "F", "A", "D"],
        baseFret: 1,
      },
      {
        fingers: "x,3,0,1,x,1",
        notes: ["A", "D", "F", "D"],
        baseFret: 1,
      },
      {
        fingers: "x,1,3,4,2,x",
        notes: ["D", "A", "D", "F"],
        baseFret: 5,
      },
      {
        fingers: "x,1,x,3,2,1",
        notes: ["D", "D", "F", "A"],
        baseFret: 5,
      },
      {
        fingers: "x,0,2,x,3,x",
        notes: ["A", "F", "D"],
        baseFret: 1,
      },
      {
        fingers: "x,4,2,1,x,x",
        notes: ["D", "F", "A"],
        baseFret: 1,
      },
      {
        fingers: "x,x,x,3,2,1",
        notes: ["D", "F", "A"],
        baseFret: 1,
      },
      {
        fingers: "x,x,0,3,2,1",
        notes: ["D", "D", "F", "A"],
        baseFret: 1,
      },
    ],
  },
  D7b5: {
    root: "D",
    type: "7b5",
    structure: ["1", "3", "b5", "b7"],
    positions: [
      {
        fingers: "x,1,2,1,3,x",
        notes: ["D", "Ab", "C", "F#"],
        baseFret: 5,
      },
      {
        fingers: "x,x,2,4,1,3",
        notes: ["C", "F#", "Ab", "D"],
        baseFret: 5,
      },
      {
        fingers: "1,3,2,4,x,x",
        notes: ["D", "Ab", "C", "F#"],
        baseFret: 5,
      },
    ],
  },
  Dm7: {
    root: "D",
    type: "m7",
    structure: ["1", "b3", "5", "b7"],
    positions: [
      {
        fingers: "x,0,0,2,1,1",
        notes: ["A", "D", "A", "C", "F"],
        baseFret: 1,
      },
      {
        fingers: "x,1,3,1,2,1",
        notes: ["D", "A", "C", "F", "A"],
        baseFret: 5,
      },
      {
        fingers: "1,3,1,1,4,1",
        notes: ["D", "A", "C", "F", "C", "D"],
        baseFret: 5,
      },
      {
        fingers: "x,x,0,2,1,1",
        notes: ["D", "A", "C", "F"],
        baseFret: 1,
      },
      {
        fingers: "2,x,3,3,x,x",
        notes: ["D", "C", "F"],
        baseFret: 1,
      },
      {
        fingers: "2,x,3,3,3,x",
        notes: ["D", "C", "F", "A"],
        baseFret: 1,
      },
      {
        fingers: "x,2,1,3,4,x",
        notes: ["D", "F", "C", "F"],
        baseFret: 5,
      },
      {
        fingers: "x,2,1,3,x,x",
        notes: ["D", "F", "C"],
        baseFret: 1,
      },
      {
        fingers: "x,1,x,2,3,x",
        notes: ["D", "C", "F"],
        baseFret: 1,
      },
      {
        fingers: "x,x,1,3,1,4",
        notes: ["F", "C", "D", "A"],
        baseFret: 5,
      },
      {
        fingers: "x,x,1,1,1,1",
        notes: ["C", "F", "A", "D"],
        baseFret: 5,
      },
      {
        fingers: "x,x,0,1,3,2",
        notes: ["D", "C", "F", "A"],
        baseFret: 1,
      },
      {
        fingers: "x,1,3,1,2,4",
        notes: ["D", "A", "C", "F", "C"],
        baseFret: 5,
      },
      {
        fingers: "x,x,3,1,2,x",
        notes: ["A", "C", "F"],
        baseFret: 1,
      },
    ],
  },
  "Dm(maj7)": {
    root: "D",
    type: "m(maj7)",
    structure: ["1", "b3", "5", "7"],
    positions: [
      {
        fingers: "x,x,0,2,3,1",
        notes: ["D", "A", "C#", "F"],
        baseFret: 1,
      },
      {
        fingers: "x,x,3,1,2,x",
        notes: ["A", "C#", "F"],
        baseFret: 1,
      },
    ],
  },
  Ddim: {
    root: "D",
    type: "dim",
    structure: ["1", "b3", "b5"],
    positions: [
      {
        fingers: "x,1,2,4,3,x",
        notes: ["D", "Ab", "D", "F"],
        baseFret: 5,
      },
      {
        fingers: "x,x,4,3,1,2",
        notes: ["D", "F", "Ab", "D"],
        baseFret: 5,
      },
      {
        fingers: "1,2,3,1,x,x",
        notes: ["D", "Ab", "D", "F"],
        baseFret: 5,
      },
      {
        fingers: "x,x,3,1,4,x",
        notes: ["F", "Ab", "D"],
        baseFret: 1,
      },
      {
        fingers: "x,3,1,2,1,x",
        notes: ["F", "Ab", "D", "F"],
        baseFret: 5,
      },
    ],
  },
  D6: {
    root: "D",
    type: "6",
    structure: ["1", "3", "5", "6"],
    positions: [
      {
        fingers: "x,0,0,1,0,2",
        notes: ["A", "D", "A", "B", "F#"],
        baseFret: 1,
      },
      {
        fingers: "x,1,3,3,3,3",
        notes: ["D", "A", "D", "F#", "B"],
        baseFret: 5,
      },
      {
        fingers: "1,x,3,2,4,1",
        notes: ["D", "D", "F#", "B", "D"],
        baseFret: 5,
      },
      {
        fingers: "x,x,0,2,0,3",
        notes: ["D", "A", "B", "F#"],
        baseFret: 1,
      },
      {
        fingers: "x,x,3,2,4,1",
        notes: ["D", "F#", "B", "D"],
        baseFret: 5,
      },
      {
        fingers: "x,4,2,3,1,x",
        notes: ["D", "F#", "B", "D"],
        baseFret: 5,
      },
      {
        fingers: "x,x,0,3,x,x",
        notes: ["D", "B"],
        baseFret: 1,
      },
      {
        fingers: "x,x,x,2,3,4",
        notes: ["D", "F#", "B"],
        baseFret: 1,
      },
      {
        fingers: "x,1,4,x,x,x",
        notes: ["D", "B"],
        baseFret: 1,
      },
      {
        fingers: "x,x,3,3,3,3",
        notes: ["A", "D", "F#", "B"],
        baseFret: 1,
      },
    ],
  },
  "D7(#5)": {
    root: "D",
    type: "7(#5)",
    structure: ["1", "3", "#5", "b7"],
    positions: [
      {
        fingers: "x,1,2,1,1,x",
        notes: ["C", "F#", "A#", "D"],
        baseFret: 5,
      },
      {
        fingers: "x,1,4,1,3,2",
        notes: ["D", "A#", "C", "F#", "A#"],
        baseFret: 5,
      },
      {
        fingers: "1,x,1,2,3,1",
        notes: ["D", "C", "F#", "A#", "D"],
        baseFret: 5,
      },
      {
        fingers: "x,x,1,2,3,1",
        notes: ["C", "F#", "A#", "D"],
        baseFret: 5,
      },
      {
        fingers: "1,x,2,3,4,x",
        notes: ["D", "C", "F#", "A#"],
        baseFret: 5,
      },
    ],
  },
  D7sus4: {
    root: "D",
    type: "7sus4",
    structure: ["1", "4", "5", "b7"],
    positions: [
      {
        fingers: "x,0,0,2,1,3",
        notes: ["A", "D", "A", "C", "G"],
        baseFret: 1,
      },
      {
        fingers: "x,1,3,1,4,1",
        notes: ["D", "A", "C", "G", "A"],
        baseFret: 5,
      },
      {
        fingers: "1,3,1,4,1,1",
        notes: ["D", "A", "C", "G", "A", "D"],
        baseFret: 5,
      },
    ],
  },
  Dmaj7: {
    root: "D",
    type: "maj7",
    structure: ["1", "3", "5", "7"],
    positions: [
      {
        fingers: "x,0,0,1,1,1",
        notes: ["A", "D", "A", "C#", "F#"],
        baseFret: 1,
      },
      {
        fingers: "x,1,3,2,4,1",
        notes: ["D", "A", "C#", "F#", "A"],
        baseFret: 5,
      },
      {
        fingers: "x,x,4,3,2,1",
        notes: ["D", "F#", "A", "C#"],
        baseFret: 5,
      },
      {
        fingers: "x,x,0,1,1,1",
        notes: ["D", "A", "C#", "F#"],
        baseFret: 1,
      },
      {
        fingers: "x,1,3,2,4,x",
        notes: ["D", "A", "C#", "F#"],
        baseFret: 5,
      },
      {
        fingers: "x,4,3,1,1,1",
        notes: ["D", "F#", "A", "C#", "F#"],
        baseFret: 5,
      },
      {
        fingers: "x,2,1,4,x,x",
        notes: ["D", "F#", "C#"],
        baseFret: 1,
      },
    ],
  },
  D5: {
    root: "D",
    type: "5",
    structure: ["1", "5"],
    positions: [
      {
        fingers: "x,1,3,x,x,x",
        notes: ["D", "A"],
        baseFret: 1,
      },
      {
        fingers: "1,3,x,x,x,x",
        notes: ["D", "A"],
        baseFret: 1,
      },
      {
        fingers: "x,1,3,4,x,x",
        notes: ["D", "A", "D"],
        baseFret: 1,
      },
      {
        fingers: "x,x,0,1,3,x",
        notes: ["D", "A", "D"],
        baseFret: 1,
      },
      {
        fingers: "x,x,x,x,1,3",
        notes: ["D", "A"],
        baseFret: 1,
      },
      {
        fingers: "1,3,4,x,x,x",
        notes: ["D", "A", "D"],
        baseFret: 1,
      },
      {
        fingers: "x,x,3,4,x,x",
        notes: ["A", "D"],
        baseFret: 1,
      },
      {
        fingers: "x,x,0,1,3,4",
        notes: ["D", "A", "D", "A"],
        baseFret: 1,
      },
      {
        fingers: "x,4,x,1,2,x",
        notes: ["D", "A", "D"],
        baseFret: 1,
      },
      {
        fingers: "x,x,0,1,x,x",
        notes: ["D", "A"],
        baseFret: 1,
      },
      {
        fingers: "x,0,0,1,3,x",
        notes: ["A", "D", "A", "D"],
        baseFret: 1,
      },
    ],
  },
  "D7(#11)": {
    root: "D",
    type: "7(#11)",
    structure: ["1", "3", "5", "b7", "#11"],
    positions: [
      {
        fingers: "x,1,3,1,x,x",
        notes: ["D", "G#", "C"],
        baseFret: 1,
      },
      {
        fingers: "x,x,x,1,3,2",
        notes: ["D", "G#", "C"],
        baseFret: 1,
      },
      {
        fingers: "2,x,3,4,1,x",
        notes: ["D", "C", "F#", "G#"],
        baseFret: 5,
      },
    ],
  },
  Dm6: {
    root: "D",
    type: "m6",
    structure: ["1", "b3", "5", "6"],
    positions: [
      {
        fingers: "x,0,0,2,0,1",
        notes: ["A", "D", "A", "B", "F"],
        baseFret: 1,
      },
      {
        fingers: "x,1,x,3,2,4",
        notes: ["D", "D", "F", "B"],
        baseFret: 5,
      },
      {
        fingers: "1,x,3,1,4,1",
        notes: ["D", "D", "F", "B", "D"],
        baseFret: 5,
      },
      {
        fingers: "x,x,0,2,0,1",
        notes: ["D", "A", "B", "F"],
        baseFret: 1,
      },
      {
        fingers: "x,3,1,2,1,x",
        notes: ["D", "F", "B", "D"],
        baseFret: 5,
      },
      {
        fingers: "x,3,1,2,4,x",
        notes: ["D", "F", "B", "F"],
        baseFret: 5,
      },
      {
        fingers: "2,x,1,3,3,3",
        notes: ["D", "B", "F", "A", "D"],
        baseFret: 5,
      },
      {
        fingers: "1,4,3,1,1,1",
        notes: ["D", "B", "D", "F", "A", "D"],
        baseFret: 5,
      },
      {
        fingers: "x,x,1,3,1,2",
        notes: ["D", "A", "B", "F"],
        baseFret: 5,
      },
      {
        fingers: "x,3,1,2,1,4",
        notes: ["D", "F", "B", "D", "A"],
        baseFret: 5,
      },
      {
        fingers: "x,x,3,1,2,x",
        notes: ["A", "B", "F"],
        baseFret: 1,
      },
    ],
  },
  "Dm6/9": {
    root: "D",
    type: "m6/9",
    structure: ["1", "b3", "5", "6", "9"],
    positions: [
      {
        fingers: "x,3,1,2,4,x",
        notes: ["D", "F", "B", "E"],
        baseFret: 5,
      },
    ],
  },
  "D7(b9)": {
    root: "D",
    type: "7(b9)",
    structure: ["1", "3", "5", "b7", "b9"],
    positions: [
      {
        fingers: "x,2,1,3,1,x",
        notes: ["D", "F#", "C", "Eb"],
        baseFret: 5,
      },
      {
        fingers: "3,2,4,1,x,x",
        notes: ["D", "F#", "C", "Eb"],
        baseFret: 5,
      },
      {
        fingers: "1,x,1,2,1,3",
        notes: ["D", "C", "F#", "A", "Eb"],
        baseFret: 5,
      },
      {
        fingers: "x,2,3,1,4,x",
        notes: ["F#", "C", "Eb", "A"],
        baseFret: 5,
      },
      {
        fingers: "x,2,1,3,1,4",
        notes: ["D", "F#", "C", "Eb", "A"],
        baseFret: 5,
      },
      {
        fingers: "2,x,1,3,1,x",
        notes: ["A", "F#", "C", "Eb"],
        baseFret: 5,
      },
      {
        fingers: "x,x,1,3,2,4",
        notes: ["C", "F#", "A", "Eb"],
        baseFret: 5,
      },
      {
        fingers: "x,x,1,3,2,4",
        notes: ["Eb", "A", "C", "F#"],
        baseFret: 5,
      },
      {
        fingers: "x,x,1,3,2,4",
        notes: ["A", "Eb", "F#", "C"],
        baseFret: 5,
      },
      {
        fingers: "x,x,1,3,2,4",
        notes: ["Eb", "A", "C", "F#"],
        baseFret: 5,
      },
      {
        fingers: "x,x,1,3,2,4",
        notes: ["F#", "C", "Eb", "A"],
        baseFret: 5,
      },
    ],
  },
  Dm9: {
    root: "D",
    type: "m9",
    structure: ["1", "b3", "5", "b7", "9"],
    positions: [
      {
        fingers: "x,0,x,2,1,0",
        notes: ["A", "A", "C", "E"],
        baseFret: 1,
      },
      {
        fingers: "x,2,1,3,4,x",
        notes: ["D", "F", "C", "E"],
        baseFret: 5,
      },
      {
        fingers: "1,3,1,1,1,4",
        notes: ["D", "A", "C", "F", "A", "E"],
        baseFret: 5,
      },
      {
        fingers: "x,x,1,3,3,3",
        notes: ["F", "C", "E", "A"],
        baseFret: 5,
      },
      {
        fingers: "x,x,1,1,1,3",
        notes: ["C", "F", "A", "E"],
        baseFret: 5,
      },
      {
        fingers: "x,x,2,4,1,3",
        notes: ["A", "E", "F", "C"],
        baseFret: 5,
      },
    ],
  },
  "D13(b9)": {
    root: "D",
    type: "13(b9)",
    structure: ["1", "3", "5", "b7", "b9", "11", "13"],
    positions: [
      {
        fingers: "x,2,1,3,1,4",
        notes: ["D", "F#", "C", "Eb", "B"],
        baseFret: 5,
      },
      {
        fingers: "3,x,4,2,1,1",
        notes: ["D", "C", "Eb", "F#", "B"],
        baseFret: 5,
      },
    ],
  },
  Dsus4: {
    root: "D",
    type: "sus4",
    structure: ["1", "4", "5"],
    positions: [
      {
        fingers: "x,0,0,1,3,4",
        notes: ["A", "D", "A", "D", "G"],
        baseFret: 1,
      },
      {
        fingers: "x,1,2,3,4,1",
        notes: ["D", "A", "D", "G", "A"],
        baseFret: 5,
      },
      {
        fingers: "1,1,3,4,1,1",
        notes: ["D", "G", "D", "G", "A", "D"],
        baseFret: 5,
      },
      {
        fingers: "x,x,0,1,3,4",
        notes: ["D", "A", "D", "G"],
        baseFret: 1,
      },
    ],
  },
  "D6/9": {
    root: "D",
    type: "6/9",
    structure: ["1", "3", "5", "6", "9"],
    positions: [
      {
        fingers: "x,2,1,1,3,4",
        notes: ["D", "F#", "B", "E", "A"],
        baseFret: 5,
      },
      {
        fingers: "2,1,1,1,3,4",
        notes: ["D", "F#", "B", "E", "A", "D"],
        baseFret: 5,
      },
      {
        fingers: "x,x,2,1,3,4",
        notes: ["D", "F#", "B", "E"],
        baseFret: 5,
      },
      {
        fingers: "1,3,4,2,0,0",
        notes: ["D", "A", "D", "F#", "B", "E"],
        baseFret: 1,
      },
      {
        fingers: "x,1,3,4,0,0",
        notes: ["D", "A", "D", "B", "E"],
        baseFret: 1,
      },
      {
        fingers: "x,1,x,2,3,0",
        notes: ["B", "A", "D", "E"],
        baseFret: 1,
      },
      {
        fingers: "x,x,0,2,0,0",
        notes: ["D", "A", "B", "E"],
        baseFret: 1,
      },
      {
        fingers: "x,2,3,1,0,0",
        notes: ["A", "D", "F#", "B", "E"],
        baseFret: 1,
      },
      {
        fingers: "2,x,0,3,0,0",
        notes: ["F#", "D", "A", "B", "E"],
        baseFret: 1,
      },
    ],
  },
  E13: {
    root: "E",
    type: "13",
    structure: ["1", "3", "5", "b7", "9", "11", "13"],
    positions: [
      {
        fingers: "0,x,0,1,2,3",
        notes: ["E", "D", "G#", "C#", "F#"],
        baseFret: 1,
      },
      {
        fingers: "0,x,1,2,3,4",
        notes: ["E", "G#", "D", "F#", "C#"],
        baseFret: 1,
      },
      {
        fingers: "0,x,4,3,1,1",
        notes: ["E", "D", "F#", "G#", "C#"],
        baseFret: 1,
      },
      {
        fingers: "0,2,0,1,3,0",
        notes: ["E", "B", "D", "G#", "C#", "E"],
        baseFret: 1,
      },
      {
        fingers: "x,2,1,3,3,4",
        notes: ["E", "G#", "D", "F#", "C#"],
        baseFret: 5,
      },
      {
        fingers: "x,1,3,4,2,x",
        notes: ["D", "G#", "C#", "E"],
        baseFret: 5,
      },
      {
        fingers: "x,x,1,3,3,4",
        notes: ["G#", "D", "F#", "C#"],
        baseFret: 5,
      },
      {
        fingers: "0,1,3,4,2,x",
        notes: ["E", "D", "G#", "C#", "E"],
        baseFret: 1,
      },
    ],
  },
  "E7(#9)": {
    root: "E",
    type: "7(#9)",
    structure: ["1", "3", "5", "b7", "#9"],
    positions: [
      {
        fingers: "0,x,2,1,3,4",
        notes: ["E", "E", "G#", "D", "F##"],
        baseFret: 1,
      },
      {
        fingers: "0,2,1,3,4,0",
        notes: ["E", "E", "G#", "D", "F##", "E"],
        baseFret: 1,
      },
      {
        fingers: "0,1,3,3,3,0",
        notes: ["E", "G#", "D", "F##", "B", "E"],
        baseFret: 1,
      },
      {
        fingers: "x,2,1,3,4,x",
        notes: ["E", "G#", "D", "F##"],
        baseFret: 5,
      },
      {
        fingers: "0,x,x,x,3,4",
        notes: ["E", "D", "F##"],
        baseFret: 1,
      },
      {
        fingers: "x,x,2,1,4,4",
        notes: ["E", "G#", "D", "F##"],
        baseFret: 5,
      },
      {
        fingers: "0,2,1,3,4,x",
        notes: ["E", "E", "G#", "D", "F##"],
        baseFret: 1,
      },
    ],
  },
  E9: {
    root: "E",
    type: "9",
    structure: ["1", "3", "5", "b7", "9"],
    positions: [
      {
        fingers: "0,2,0,1,4,3",
        notes: ["E", "B", "D", "G#", "D", "F#"],
        baseFret: 1,
      },
      {
        fingers: "0,2,1,3,4,0",
        notes: ["E", "E", "G#", "D", "F#", "E"],
        baseFret: 1,
      },
      {
        fingers: "0,1,3,2,4,0",
        notes: ["E", "G#", "D", "F#", "B", "E"],
        baseFret: 1,
      },
    ],
  },
  E9b5: {
    root: "E",
    type: "9b5",
    structure: ["1", "3", "b5", "b7", "9"],
    positions: [
      {
        fingers: "0,x,1,2,3,1",
        notes: ["E", "E", "Bb", "D", "F#"],
        baseFret: 1,
      },
      {
        fingers: "1,2,1,3,4,1",
        notes: ["Bb", "E", "G#", "D", "F#", "Bb"],
        baseFret: 5,
      },
      {
        fingers: "0,1,2,1,1,3",
        notes: ["E", "G#", "D", "F#", "Bb", "E"],
        baseFret: 1,
      },
    ],
  },
  E7: {
    root: "E",
    type: "7",
    structure: ["1", "3", "5", "b7"],
    positions: [
      {
        fingers: "0,2,0,1,4,0",
        notes: ["E", "B", "D", "G#", "D", "E"],
        baseFret: 1,
      },
      {
        fingers: "0,3,2,4,1,0",
        notes: ["E", "E", "G#", "D", "E", "E"],
        baseFret: 1,
      },
      {
        fingers: "0,1,3,1,4,1",
        notes: ["E", "E", "B", "D", "G#", "B"],
        baseFret: 1,
      },
      {
        fingers: "0,2,0,1,0,0",
        notes: ["E", "B", "D", "G#", "B", "E"],
        baseFret: 1,
      },
      {
        fingers: "x,1,3,1,4,1",
        notes: ["E", "B", "D", "G#", "B"],
        baseFret: 5,
      },
      {
        fingers: "0,2,3,1,4,0",
        notes: ["E", "B", "E", "G#", "D", "E"],
        baseFret: 1,
      },
      {
        fingers: "x,3,2,4,1,x",
        notes: ["E", "G#", "D", "E"],
        baseFret: 5,
      },
      {
        fingers: "0,2,1,3,0,4",
        notes: ["E", "E", "G#", "D", "B", "B"],
        baseFret: 1,
      },
      {
        fingers: "x,x,1,1,1,2",
        notes: ["B", "E", "G#", "D"],
        baseFret: 5,
      },
      {
        fingers: "x,x,x,2,1,3",
        notes: ["B", "D", "G#"],
        baseFret: 1,
      },
      {
        fingers: "x,2,1,3,x,x",
        notes: ["E", "G#", "D"],
        baseFret: 1,
      },
      {
        fingers: "x,x,1,3,2,4",
        notes: ["E", "B", "D", "G#"],
        baseFret: 5,
      },
      {
        fingers: "0,x,1,3,x,x",
        notes: ["E", "G#", "D"],
        baseFret: 1,
      },
      {
        fingers: "x,2,0,1,4,0",
        notes: ["B", "D", "G#", "D", "E"],
        baseFret: 1,
      },
      {
        fingers: "0,4,x,x,x,x",
        notes: ["E", "D"],
        baseFret: 1,
      },
      {
        fingers: "x,x,2,1,4,0",
        notes: ["E", "G#", "D", "E"],
        baseFret: 1,
      },
      {
        fingers: "x,x,x,1,1,2",
        notes: ["E", "G#", "D"],
        baseFret: 1,
      },
      {
        fingers: "x,1,x,2,4,0",
        notes: ["E", "D", "G#", "E"],
        baseFret: 1,
      },
      {
        fingers: "x,1,x,1,3,1",
        notes: ["E", "D", "G#", "B"],
        baseFret: 5,
      },
      {
        fingers: "x,2,1,3,x,4",
        notes: ["E", "G#", "D", "B"],
        baseFret: 5,
      },
    ],
  },
  Edim7: {
    root: "E",
    type: "dim7",
    structure: ["1", "b3", "b5", "bb7"],
    positions: [
      {
        fingers: "2,4,1,3,x,x",
        notes: ["G", "Db", "E", "Bb"],
        baseFret: 5,
      },
      {
        fingers: "x,2,3,1,4,x",
        notes: ["G", "Db", "E", "Bb"],
        baseFret: 5,
      },
      {
        fingers: "x,x,1,3,2,4",
        notes: ["Db", "G", "Bb", "E"],
        baseFret: 5,
      },
      {
        fingers: "x,2,3,1,4,x",
        notes: ["E", "Bb", "Db", "G"],
        baseFret: 5,
      },
      {
        fingers: "x,x,1,3,2,4",
        notes: ["E", "Bb", "Db", "G"],
        baseFret: 5,
      },
      {
        fingers: "x,x,x,2,1,3",
        notes: ["Bb", "Db", "G"],
        baseFret: 1,
      },
      {
        fingers: "x,3,1,2,x,x",
        notes: ["E", "G", "Db"],
        baseFret: 1,
      },
      {
        fingers: "0,x,1,3,2,4",
        notes: ["E", "E", "Bb", "Db", "G"],
        baseFret: 1,
      },
      {
        fingers: "0,x,x,2,1,3",
        notes: ["E", "Bb", "Db", "G"],
        baseFret: 1,
      },
    ],
  },
  Eaug: {
    root: "E",
    type: "aug",
    structure: ["1", "3", "#5"],
    positions: [
      {
        fingers: "x,3,2,1,1,x",
        notes: ["B#", "E", "G#", "B#"],
        baseFret: 5,
      },
      {
        fingers: "4,3,2,1,x,x",
        notes: ["G#", "B#", "E", "G#"],
        baseFret: 5,
      },
      {
        fingers: "0,x,4,2,3,1",
        notes: ["E", "B#", "E", "G#", "B#"],
        baseFret: 1,
      },
      {
        fingers: "x,3,2,1,1,x",
        notes: ["E", "G#", "B#", "E"],
        baseFret: 5,
      },
      {
        fingers: "0,3,2,1,1,x",
        notes: ["E", "E", "G#", "B#", "E"],
        baseFret: 1,
      },
    ],
  },
  "Em(maj9)": {
    root: "E",
    type: "m(maj9)",
    structure: ["1", "b3", "5", "7", "9"],
    positions: [
      {
        fingers: "0,4,3,2,1,1",
        notes: ["E", "G", "B", "D#", "F#", "B"],
        baseFret: 1,
      },
    ],
  },
  Emaj: {
    root: "E",
    type: "maj",
    structure: ["1", "3", "5"],
    positions: [
      {
        fingers: "0,2,3,1,0,0",
        notes: ["E", "B", "E", "G#", "B", "E"],
        baseFret: 1,
      },
      {
        fingers: "0,4,3,1,2,1",
        notes: ["E", "E", "G#", "B", "E", "G#"],
        baseFret: 1,
      },
      {
        fingers: "0,1,3,3,3,x",
        notes: ["E", "E", "B", "E", "G#"],
        baseFret: 1,
      },
      {
        fingers: "1,4,3,1,2,1",
        notes: ["G#", "E", "G#", "B", "E", "G#"],
        baseFret: 5,
      },
      {
        fingers: "x,x,x,1,3,2",
        notes: ["B", "E", "G#"],
        baseFret: 1,
      },
      {
        fingers: "x,1,2,3,4,1",
        notes: ["E", "B", "E", "G#", "B"],
        baseFret: 5,
      },
      {
        fingers: "x,1,3,3,3,x",
        notes: ["E", "B", "E", "G#"],
        baseFret: 5,
      },
      {
        fingers: "0,2,3,1,x,x",
        notes: ["E", "B", "E", "G#"],
        baseFret: 1,
      },
      {
        fingers: "x,4,3,1,2,1",
        notes: ["E", "G#", "B", "E", "G#"],
        baseFret: 5,
      },
      {
        fingers: "1,3,4,2,1,1",
        notes: ["E", "B", "E", "G#", "B", "E"],
        baseFret: 5,
      },
      {
        fingers: "x,x,1,1,1,x",
        notes: ["B", "E", "G#"],
        baseFret: 1,
      },
      {
        fingers: "x,x,x,3,4,1",
        notes: ["E", "G#", "B"],
        baseFret: 1,
      },
      {
        fingers: "x,x,1,1,1,4",
        notes: ["B", "E", "G#", "E"],
        baseFret: 5,
      },
      {
        fingers: "x,2,1,x,x,x",
        notes: ["E", "G#"],
        baseFret: 1,
      },
      {
        fingers: "x,x,1,2,4,3",
        notes: ["E", "B", "E", "G#"],
        baseFret: 5,
      },
      {
        fingers: "x,x,2,1,0,0",
        notes: ["E", "G#", "B", "E"],
        baseFret: 1,
      },
      {
        fingers: "x,2,3,1,0,0",
        notes: ["B", "E", "G#", "B", "E"],
        baseFret: 1,
      },
      {
        fingers: "0,x,x,1,3,2",
        notes: ["E", "B", "E", "G#"],
        baseFret: 1,
      },
      {
        fingers: "x,x,x,2,1,1",
        notes: ["G#", "B", "E"],
        baseFret: 1,
      },
      {
        fingers: "4,2,3,1,0,0",
        notes: ["G#", "B", "E", "G#", "B", "E"],
        baseFret: 1,
      },
      {
        fingers: "1,4,x,x,x,x",
        notes: ["G#", "E"],
        baseFret: 1,
      },
    ],
  },
  E11: {
    root: "E",
    type: "11",
    structure: ["1", "3", "5", "b7", "9", "11"],
    positions: [
      {
        fingers: "0,1,1,1,2,1",
        notes: ["E", "B", "E", "A", "D", "F#"],
        baseFret: 1,
      },
      {
        fingers: "0,1,1,1,1,1",
        notes: ["E", "E", "A", "D", "F#", "B"],
        baseFret: 1,
      },
      {
        fingers: "0,x,3,2,1,0",
        notes: ["E", "D", "F#", "A", "E"],
        baseFret: 1,
      },
    ],
  },
  Emaj9: {
    root: "E",
    type: "maj9",
    structure: ["1", "3", "5", "7", "9"],
    positions: [
      {
        fingers: "0,3,1,2,0,4",
        notes: ["E", "B", "D#", "G#", "B", "F#"],
        baseFret: 1,
      },
      {
        fingers: "0,4,1,1,1,1",
        notes: ["E", "E", "F#", "B", "D#", "G#"],
        baseFret: 1,
      },
      {
        fingers: "0,2,1,4,3,0",
        notes: ["E", "E", "G#", "D#", "F#", "E"],
        baseFret: 1,
      },
      {
        fingers: "0,2,1,4,3,x",
        notes: ["E", "E", "G#", "D#", "F#"],
        baseFret: 1,
      },
      {
        fingers: "0,3,4,2,0,0",
        notes: ["E", "F#", "B", "D#", "B", "E"],
        baseFret: 1,
      },
    ],
  },
  Esus2: {
    root: "E",
    type: "sus2",
    structure: ["1", "2", "5"],
    positions: [
      {
        fingers: "x,x,1,3,4,1",
        notes: ["E", "B", "E", "F#"],
        baseFret: 5,
      },
      {
        fingers: "0,1,1,3,4,1",
        notes: ["E", "B", "E", "B", "E", "F#"],
        baseFret: 1,
      },
      {
        fingers: "1,1,3,4,1,1",
        notes: ["B", "E", "B", "E", "F#", "B"],
        baseFret: 5,
      },
    ],
  },
  Em11: {
    root: "E",
    type: "m11",
    structure: ["1", "b3", "5", "b7", "9", "11"],
    positions: [
      {
        fingers: "2,x,3,4,1,x",
        notes: ["E", "D", "G", "A"],
        baseFret: 5,
      },
      {
        fingers: "x,1,1,1,2,x",
        notes: ["E", "A", "D", "G"],
        baseFret: 5,
      },
      {
        fingers: "x,1,1,1,1,x",
        notes: ["E", "A", "D", "F#"],
        baseFret: 5,
      },
      {
        fingers: "x,2,x,3,4,1",
        notes: ["E", "D", "G", "A"],
        baseFret: 5,
      },
      {
        fingers: "0,1,1,1,2,1",
        notes: ["E", "E", "A", "D", "G", "B"],
        baseFret: 1,
      },
      {
        fingers: "x,2,1,3,4,1",
        notes: ["E", "G", "D", "F#", "A"],
        baseFret: 5,
      },
      {
        fingers: "0,x,2,3,1,4",
        notes: ["E", "E", "A", "B", "F#"],
        baseFret: 1,
      },
      {
        fingers: "0,1,3,0,2,4",
        notes: ["E", "B", "F#", "G", "D", "A"],
        baseFret: 1,
      },
      {
        fingers: "0,3,1,0,0,0",
        notes: ["E", "F#", "A", "G", "B", "E"],
        baseFret: 1,
      },
      {
        fingers: "0,1,4,0,x,x",
        notes: ["E", "D", "A", "G"],
        baseFret: 1,
      },
      {
        fingers: "0,x,x,1,2,1",
        notes: ["E", "A", "D", "F#"],
        baseFret: 1,
      },
    ],
  },
  Eadd9: {
    root: "E",
    type: "add9",
    structure: ["1", "3", "5", "9"],
    positions: [
      {
        fingers: "0,2,4,1,0,0",
        notes: ["E", "B", "F#", "G#", "B", "E"],
        baseFret: 1,
      },
    ],
  },
  Em: {
    root: "E",
    type: "m",
    structure: ["1", "b3", "5"],
    positions: [
      {
        fingers: "0,2,3,0,0,0",
        notes: ["E", "B", "E", "G", "B", "E"],
        baseFret: 1,
      },
      {
        fingers: "0,x,3,2,4,1",
        notes: ["E", "G", "B", "E", "G"],
        baseFret: 1,
      },
      {
        fingers: "0,1,3,4,2,1",
        notes: ["E", "E", "B", "E", "G", "B"],
        baseFret: 1,
      },
      {
        fingers: "x,x,3,2,4,1",
        notes: ["G", "B", "E", "G"],
        baseFret: 5,
      },
      {
        fingers: "x,1,3,4,2,1",
        notes: ["E", "B", "E", "G", "B"],
        baseFret: 5,
      },
      {
        fingers: "0,2,3,0,x,x",
        notes: ["E", "B", "E", "G"],
        baseFret: 1,
      },
      {
        fingers: "0,x,x,x,2,1",
        notes: ["E", "G", "B"],
        baseFret: 1,
      },
      {
        fingers: "x,x,x,3,2,1",
        notes: ["E", "G", "B"],
        baseFret: 1,
      },
      {
        fingers: "x,3,1,x,x,x",
        notes: ["E", "G"],
        baseFret: 1,
      },
      {
        fingers: "x,1,3,2,4,x",
        notes: ["B", "G", "B", "E"],
        baseFret: 5,
      },
      {
        fingers: "x,x,3,4,2,1",
        notes: ["B", "E", "G", "B"],
        baseFret: 5,
      },
      {
        fingers: "x,2,x,0,4,x",
        notes: ["E", "G", "G"],
        baseFret: 1,
      },
      {
        fingers: "0,1,4,0,0,0",
        notes: ["E", "B", "G", "G", "B", "E"],
        baseFret: 1,
      },
      {
        fingers: "x,x,2,0,0,0",
        notes: ["E", "G", "B", "E"],
        baseFret: 1,
      },
      {
        fingers: "x,x,x,0,0,0",
        notes: ["G", "B", "E"],
        baseFret: 1,
      },
      {
        fingers: "x,x,2,1,3,0",
        notes: ["G", "B", "E", "E"],
        baseFret: 1,
      },
      {
        fingers: "0,2,3,0,0,4",
        notes: ["E", "B", "E", "G", "B", "G"],
        baseFret: 1,
      },
      {
        fingers: "4,2,3,0,0,0",
        notes: ["G", "B", "E", "G", "B", "E"],
        baseFret: 1,
      },
      {
        fingers: "1,1,3,4,2,1",
        notes: ["B", "E", "B", "E", "G", "B"],
        baseFret: 5,
      },
    ],
  },
  E7b5: {
    root: "E",
    type: "7b5",
    structure: ["1", "3", "b5", "b7"],
    positions: [
      {
        fingers: "0,1,0,2,x,0",
        notes: ["E", "Bb", "D", "G#", "E"],
        baseFret: 1,
      },
      {
        fingers: "0,1,2,1,3,x",
        notes: ["E", "E", "Bb", "D", "G#"],
        baseFret: 1,
      },
      {
        fingers: "0,x,2,4,1,3",
        notes: ["E", "D", "G#", "Bb", "E"],
        baseFret: 1,
      },
    ],
  },
  Em7: {
    root: "E",
    type: "m7",
    structure: ["1", "b3", "5", "b7"],
    positions: [
      {
        fingers: "0,2,0,0,4,0",
        notes: ["E", "B", "D", "G", "D", "E"],
        baseFret: 1,
      },
      {
        fingers: "0,x,3,2,1,0",
        notes: ["E", "G", "B", "D", "E"],
        baseFret: 1,
      },
      {
        fingers: "0,1,3,1,2,1",
        notes: ["E", "E", "B", "D", "G", "B"],
        baseFret: 1,
      },
      {
        fingers: "0,2,0,0,0,0",
        notes: ["E", "B", "D", "G", "B", "E"],
        baseFret: 1,
      },
      {
        fingers: "0,1,2,0,4,0",
        notes: ["E", "B", "E", "G", "D", "E"],
        baseFret: 1,
      },
      {
        fingers: "x,x,1,0,3,4",
        notes: ["E", "G", "D", "G"],
        baseFret: 1,
      },
      {
        fingers: "2,x,3,3,x,x",
        notes: ["E", "D", "G"],
        baseFret: 1,
      },
      {
        fingers: "2,x,3,3,3,x",
        notes: ["E", "D", "G", "B"],
        baseFret: 1,
      },
      {
        fingers: "x,2,1,3,x,x",
        notes: ["E", "G", "D"],
        baseFret: 1,
      },
      {
        fingers: "x,2,1,3,4,x",
        notes: ["E", "G", "D", "G"],
        baseFret: 5,
      },
      {
        fingers: "2,x,3,3,3,3",
        notes: ["E", "D", "G", "B", "E"],
        baseFret: 1,
      },
      {
        fingers: "1,3,1,1,1,1",
        notes: ["E", "B", "D", "G", "B", "E"],
        baseFret: 5,
      },
      {
        fingers: "x,1,3,1,2,1",
        notes: ["E", "B", "D", "G", "B"],
        baseFret: 5,
      },
      {
        fingers: "x,2,x,3,4,x",
        notes: ["E", "D", "G"],
        baseFret: 1,
      },
      {
        fingers: "x,x,1,1,1,1",
        notes: ["D", "G", "B", "E"],
        baseFret: 5,
      },
      {
        fingers: "x,x,1,3,2,2",
        notes: ["E", "B", "D", "G"],
        baseFret: 5,
      },
      {
        fingers: "0,1,0,0,3,4",
        notes: ["E", "B", "D", "G", "D", "G"],
        baseFret: 1,
      },
      {
        fingers: "0,x,x,1,3,2",
        notes: ["E", "D", "G", "B"],
        baseFret: 1,
      },
      {
        fingers: "x,x,2,0,4,0",
        notes: ["E", "G", "D", "E"],
        baseFret: 1,
      },
      {
        fingers: "x,x,1,3,1,4",
        notes: ["G", "D", "E", "B"],
        baseFret: 5,
      },
      {
        fingers: "2,x,1,4,3,x",
        notes: ["G", "E", "B", "D"],
        baseFret: 5,
      },
    ],
  },
  Edim: {
    root: "E",
    type: "dim",
    structure: ["1", "b3", "b5"],
    positions: [
      {
        fingers: "0,1,3,0,x,0",
        notes: ["E", "Bb", "E", "G", "E"],
        baseFret: 1,
      },
      {
        fingers: "x,x,1,2,4,3",
        notes: ["E", "Bb", "E", "G"],
        baseFret: 5,
      },
      {
        fingers: "x,1,2,4,3,x",
        notes: ["E", "Bb", "E", "G"],
        baseFret: 5,
      },
      {
        fingers: "x,x,3,1,4,x",
        notes: ["G", "Bb", "E"],
        baseFret: 1,
      },
      {
        fingers: "x,3,1,x,x,x",
        notes: ["E", "G"],
        baseFret: 1,
      },
      {
        fingers: "0,1,2,x,x,x",
        notes: ["E", "Bb", "E"],
        baseFret: 1,
      },
      {
        fingers: "x,1,2,3,x,x",
        notes: ["E", "Bb", "E"],
        baseFret: 1,
      },
    ],
  },
  E6: {
    root: "E",
    type: "6",
    structure: ["1", "3", "5", "6"],
    positions: [
      {
        fingers: "0,2,3,1,4,0",
        notes: ["E", "B", "E", "G#", "C#", "E"],
        baseFret: 1,
      },
      {
        fingers: "x,4,2,3,1,x",
        notes: ["E", "G#", "C#", "E"],
        baseFret: 5,
      },
      {
        fingers: "x,1,3,3,3,3",
        notes: ["E", "B", "E", "G#", "C#"],
        baseFret: 5,
      },
      {
        fingers: "x,1,4,x,x,x",
        notes: ["E", "C#"],
        baseFret: 1,
      },
      {
        fingers: "0,3,x,x,x,x",
        notes: ["E", "C#"],
        baseFret: 1,
      },
      {
        fingers: "0,2,3,1,4,x",
        notes: ["E", "B", "E", "G#", "C#"],
        baseFret: 1,
      },
      {
        fingers: "0,x,3,3,3,3",
        notes: ["E", "B", "E", "G#", "C#"],
        baseFret: 1,
      },
      {
        fingers: "x,x,3,2,4,1",
        notes: ["E", "G#", "C#", "E"],
        baseFret: 5,
      },
      {
        fingers: "x,x,3,3,3,3",
        notes: ["B", "E", "G#", "C#"],
        baseFret: 1,
      },
    ],
  },
  "E7(#5)": {
    root: "E",
    type: "7(#5)",
    structure: ["1", "3", "#5", "b7"],
    positions: [
      {
        fingers: "0,x,0,2,3,0",
        notes: ["E", "D", "G#", "B#", "E"],
        baseFret: 1,
      },
      {
        fingers: "0,1,2,1,1,x",
        notes: ["E", "D", "G#", "B#", "E"],
        baseFret: 1,
      },
      {
        fingers: "0,1,4,1,3,2",
        notes: ["E", "E", "B#", "D", "G#", "B#"],
        baseFret: 1,
      },
      {
        fingers: "0,x,0,1,1,x",
        notes: ["E", "D", "G#", "B#"],
        baseFret: 1,
      },
      {
        fingers: "0,x,1,3,4,2",
        notes: ["E", "D", "G#", "B#", "E"],
        baseFret: 1,
      },
      {
        fingers: "0,x,x,1,4,2",
        notes: ["E", "D", "G#", "B#"],
        baseFret: 1,
      },
    ],
  },
  E7sus4: {
    root: "E",
    type: "7sus4",
    structure: ["1", "4", "5", "b7"],
    positions: [
      {
        fingers: "0,2,0,3,0,0",
        notes: ["E", "B", "D", "A", "B", "E"],
        baseFret: 1,
      },
      {
        fingers: "0,x,1,3,2,4",
        notes: ["E", "E", "B", "D", "A"],
        baseFret: 1,
      },
      {
        fingers: "0,1,3,1,4,1",
        notes: ["E", "E", "B", "D", "A", "B"],
        baseFret: 1,
      },
    ],
  },
  Emaj7: {
    root: "E",
    type: "maj7",
    structure: ["1", "3", "5", "7"],
    positions: [
      {
        fingers: "0,3,1,2,0,0",
        notes: ["E", "B", "D#", "G#", "B", "E"],
        baseFret: 1,
      },
      {
        fingers: "0,4,3,1,1,1",
        notes: ["E", "E", "G#", "B", "D#", "G#"],
        baseFret: 1,
      },
      {
        fingers: "0,1,3,2,4,1",
        notes: ["E", "E", "B", "D#", "G#", "B"],
        baseFret: 1,
      },
      {
        fingers: "x,1,3,2,4,x",
        notes: ["E", "B", "D#", "G#"],
        baseFret: 5,
      },
      {
        fingers: "0,x,3,2,0,0",
        notes: ["E", "B", "D#", "B", "E"],
        baseFret: 1,
      },
      {
        fingers: "0,1,3,4,0,0",
        notes: ["E", "D#", "B", "E", "B", "E"],
        baseFret: 1,
      },
      {
        fingers: "x,1,1,4,4,4",
        notes: ["B", "E", "B", "D#", "G#"],
        baseFret: 5,
      },
      {
        fingers: "x,1,3,2,4,1",
        notes: ["E", "B", "D#", "G#", "B"],
        baseFret: 5,
      },
    ],
  },
  E5: {
    root: "E",
    type: "5",
    structure: ["1", "5"],
    positions: [
      {
        fingers: "x,1,3,x,x,x",
        notes: ["E", "B"],
        baseFret: 1,
      },
      {
        fingers: "1,3,x,x,x,x",
        notes: ["E", "B"],
        baseFret: 1,
      },
      {
        fingers: "x,1,3,4,x,x",
        notes: ["E", "B", "E"],
        baseFret: 1,
      },
      {
        fingers: "0,2,x,x,x,x",
        notes: ["E", "B"],
        baseFret: 1,
      },
      {
        fingers: "0,2,3,x,0,0",
        notes: ["E", "B", "E", "B", "E"],
        baseFret: 1,
      },
      {
        fingers: "0,2,2,x,x,x",
        notes: ["E", "B", "E"],
        baseFret: 1,
      },
      {
        fingers: "0,1,3,4,0,0",
        notes: ["E", "E", "B", "E", "B", "E"],
        baseFret: 1,
      },
      {
        fingers: "0,1,3,4,x,x",
        notes: ["E", "E", "B", "E"],
        baseFret: 1,
      },
      {
        fingers: "0,1,1,3,4,x",
        notes: ["E", "B", "E", "B", "E"],
        baseFret: 1,
      },
      {
        fingers: "x,x,1,1,x,x",
        notes: ["B", "E"],
        baseFret: 1,
      },
      {
        fingers: "x,x,1,3,4,x",
        notes: ["E", "B", "E"],
        baseFret: 1,
      },
      {
        fingers: "0,1,3,x,x,x",
        notes: ["E", "E", "B"],
        baseFret: 1,
      },
      {
        fingers: "1,3,4,x,x,x",
        notes: ["E", "B", "E"],
        baseFret: 1,
      },
      {
        fingers: "1,1,3,x,x,x",
        notes: ["B", "E", "B"],
        baseFret: 1,
      },
    ],
  },
  "E7(#11)": {
    root: "E",
    type: "7(#11)",
    structure: ["1", "3", "5", "b7", "#11"],
    positions: [
      {
        fingers: "x,1,3,1,x,x",
        notes: ["E", "A#", "D"],
        baseFret: 1,
      },
      {
        fingers: "x,x,x,1,3,2",
        notes: ["E", "A#", "D"],
        baseFret: 1,
      },
    ],
  },
  Em6: {
    root: "E",
    type: "m6",
    structure: ["1", "b3", "5", "6"],
    positions: [
      {
        fingers: "0,2,3,0,4,0",
        notes: ["E", "B", "E", "G", "C#", "E"],
        baseFret: 1,
      },
      {
        fingers: "0,3,1,2,1,x",
        notes: ["E", "E", "G", "C#", "E"],
        baseFret: 1,
      },
      {
        fingers: "0,1,x,3,2,4",
        notes: ["E", "E", "E", "G", "C#"],
        baseFret: 1,
      },
    ],
  },
  "Em6/9": {
    root: "E",
    type: "m6/9",
    structure: ["1", "b3", "5", "6", "9"],
    positions: [
      {
        fingers: "0,1,4,0,2,0",
        notes: ["E", "B", "F#", "G", "C#", "E"],
        baseFret: 1,
      },
    ],
  },
  "E7(b9)": {
    root: "E",
    type: "7(b9)",
    structure: ["1", "3", "5", "b7", "b9"],
    positions: [
      {
        fingers: "0,x,0,1,0,2",
        notes: ["E", "D", "G#", "B", "F"],
        baseFret: 1,
      },
      {
        fingers: "0,2,1,3,1,x",
        notes: ["E", "E", "G#", "D", "F"],
        baseFret: 1,
      },
      {
        fingers: "0,2,3,1,0,0",
        notes: ["E", "G#", "D", "F", "B", "E"],
        baseFret: 1,
      },
      {
        fingers: "x,2,1,3,1,x",
        notes: ["E", "G#", "D", "F"],
        baseFret: 5,
      },
      {
        fingers: "0,2,3,1,4,0",
        notes: ["E", "G#", "D", "F", "B", "E"],
        baseFret: 1,
      },
      {
        fingers: "0,x,1,3,2,x",
        notes: ["E", "G#", "D", "F"],
        baseFret: 1,
      },
    ],
  },
  Em9: {
    root: "E",
    type: "m9",
    structure: ["1", "b3", "5", "b7", "9"],
    positions: [
      {
        fingers: "0,1,2,0,4,3",
        notes: ["E", "B", "E", "G", "D", "F#"],
        baseFret: 1,
      },
      {
        fingers: "0,2,1,3,4,0",
        notes: ["E", "E", "G", "D", "F#", "E"],
        baseFret: 1,
      },
      {
        fingers: "0,1,3,2,4,0",
        notes: ["E", "G", "D", "F#", "B", "E"],
        baseFret: 1,
      },
      {
        fingers: "0,1,0,0,0,3",
        notes: ["E", "B", "D", "G", "B", "F#"],
        baseFret: 1,
      },
      {
        fingers: "x,2,1,3,4,x",
        notes: ["E", "G", "D", "F#"],
        baseFret: 5,
      },
      {
        fingers: "0,1,3,2,0,0",
        notes: ["E", "G", "D", "F#", "B", "E"],
        baseFret: 1,
      },
      {
        fingers: "0,1,3,0,2,0",
        notes: ["E", "B", "F#", "G", "D", "E"],
        baseFret: 1,
      },
    ],
  },
  "E13(b9)": {
    root: "E",
    type: "13(b9)",
    structure: ["1", "3", "5", "b7", "b9", "11", "13"],
    positions: [
      {
        fingers: "0,x,x,1,3,2",
        notes: ["E", "G#", "C#", "F"],
        baseFret: 1,
      },
    ],
  },
  Esus4: {
    root: "E",
    type: "sus4",
    structure: ["1", "4", "5"],
    positions: [
      {
        fingers: "0,1,2,3,0,0",
        notes: ["E", "B", "E", "A", "B", "E"],
        baseFret: 1,
      },
      {
        fingers: "0,3,4,1,2,0",
        notes: ["E", "E", "A", "B", "E", "E"],
        baseFret: 1,
      },
      {
        fingers: "0,x,1,1,2,4",
        notes: ["E", "B", "E", "A", "E"],
        baseFret: 1,
      },
      {
        fingers: "x,1,3,3,4,x",
        notes: ["E", "B", "E", "A"],
        baseFret: 5,
      },
      {
        fingers: "x,x,2,3,0,0",
        notes: ["E", "A", "B", "E"],
        baseFret: 1,
      },
      {
        fingers: "0,0,x,x,0,x",
        notes: ["E", "A", "B"],
        baseFret: 1,
      },
      {
        fingers: "0,0,x,x,0,0",
        notes: ["E", "A", "B", "E"],
        baseFret: 1,
      },
    ],
  },
  "E6/9": {
    root: "E",
    type: "6/9",
    structure: ["1", "3", "5", "6", "9"],
    positions: [
      {
        fingers: "0,x,2,1,3,4",
        notes: ["E", "E", "G#", "C#", "F#"],
        baseFret: 1,
      },
      {
        fingers: "0,2,1,1,3,4",
        notes: ["E", "E", "G#", "C#", "F#", "B"],
        baseFret: 1,
      },
      {
        fingers: "0,1,1,1,2,3",
        notes: ["E", "G#", "C#", "F#", "B", "E"],
        baseFret: 1,
      },
    ],
  },
  "F9(#5)": {
    root: "F",
    type: "9(#5)",
    structure: ["1", "3", "#5", "b7", "9"],
    positions: [
      {
        fingers: "x,x,1,2,2,4",
        notes: ["A", "Eb", "G", "C#"],
        baseFret: 5,
      },
    ],
  },
  F13: {
    root: "F",
    type: "13",
    structure: ["1", "3", "5", "b7", "9", "11", "13"],
    positions: [
      {
        fingers: "1,x,1,2,3,4",
        notes: ["F", "Eb", "A", "D", "G"],
        baseFret: 5,
      },
      {
        fingers: "x,2,1,3,3,4",
        notes: ["F", "A", "Eb", "G", "D"],
        baseFret: 5,
      },
      {
        fingers: "3,x,4,2,1,1",
        notes: ["F", "Eb", "G", "A", "D"],
        baseFret: 5,
      },
      {
        fingers: "1,x,2,3,4,x",
        notes: ["F", "Eb", "A", "D"],
        baseFret: 5,
      },
      {
        fingers: "x,1,2,3,4,x",
        notes: ["Eb", "A", "D", "G"],
        baseFret: 5,
      },
      {
        fingers: "x,1,3,4,2,x",
        notes: ["Eb", "A", "D", "F"],
        baseFret: 5,
      },
      {
        fingers: "x,x,1,3,3,4",
        notes: ["A", "Eb", "G", "D"],
        baseFret: 5,
      },
    ],
  },
  "F7(#9)": {
    root: "F",
    type: "7(#9)",
    structure: ["1", "3", "5", "b7", "#9"],
    positions: [
      {
        fingers: "1,3,1,2,1,4",
        notes: ["F", "C", "Eb", "A", "C", "G#"],
        baseFret: 5,
      },
      {
        fingers: "x,x,2,1,3,4",
        notes: ["F", "A", "Eb", "G#"],
        baseFret: 5,
      },
      {
        fingers: "x,2,1,3,4,x",
        notes: ["F", "A", "Eb", "G#"],
        baseFret: 5,
      },
      {
        fingers: "x,x,1,2,4,3",
        notes: ["A", "Eb", "G#", "C"],
        baseFret: 5,
      },
    ],
  },
  F9: {
    root: "F",
    type: "9",
    structure: ["1", "3", "5", "b7", "9"],
    positions: [
      {
        fingers: "1,0,2,0,3,4",
        notes: ["F", "A", "Eb", "G", "C", "F"],
        baseFret: 1,
      },
      {
        fingers: "x,x,1,3,2,1",
        notes: ["F", "C", "Eb", "G"],
        baseFret: 5,
      },
      {
        fingers: "x,2,1,3,4,x",
        notes: ["F", "A", "Eb", "G"],
        baseFret: 5,
      },
      {
        fingers: "x,2,1,3,3,3",
        notes: ["F", "A", "Eb", "G", "C"],
        baseFret: 5,
      },
      {
        fingers: "2,x,1,3,3,3",
        notes: ["C", "A", "Eb", "G", "C"],
        baseFret: 5,
      },
      {
        fingers: "2,x,1,3,4,x",
        notes: ["C", "A", "Eb", "G"],
        baseFret: 5,
      },
    ],
  },
  F9b5: {
    root: "F",
    type: "9b5",
    structure: ["1", "3", "b5", "b7", "9"],
    positions: [
      {
        fingers: "1,0,2,0,0,3",
        notes: ["F", "A", "Eb", "G", "Cb", "F"],
        baseFret: 1,
      },
      {
        fingers: "x,x,1,2,3,1",
        notes: ["F", "Cb", "Eb", "G"],
        baseFret: 5,
      },
      {
        fingers: "1,2,1,3,4,1",
        notes: ["Cb", "F", "A", "Eb", "G", "Cb"],
        baseFret: 5,
      },
    ],
  },
  Fmaj13: {
    root: "F",
    type: "maj13",
    structure: ["1", "3", "5", "7", "9", "11", "13"],
    positions: [
      {
        fingers: "1,x,2,3,4,x",
        notes: ["F", "E", "A", "D"],
        baseFret: 5,
      },
      {
        fingers: "x,1,3,2,1,4",
        notes: ["F", "C", "E", "G", "D"],
        baseFret: 5,
      },
    ],
  },
  F7: {
    root: "F",
    type: "7",
    structure: ["1", "3", "5", "b7"],
    positions: [
      {
        fingers: "1,3,1,2,4,1",
        notes: ["F", "C", "Eb", "A", "Eb", "F"],
        baseFret: 5,
      },
      {
        fingers: "x,3,2,4,1,x",
        notes: ["F", "A", "Eb", "F"],
        baseFret: 5,
      },
      {
        fingers: "x,1,3,1,4,1",
        notes: ["F", "C", "Eb", "A", "C"],
        baseFret: 5,
      },
      {
        fingers: "1,x,2,3,x,x",
        notes: ["F", "Eb", "A"],
        baseFret: 1,
      },
      {
        fingers: "1,3,1,2,1,1",
        notes: ["F", "C", "Eb", "A", "C", "F"],
        baseFret: 5,
      },
      {
        fingers: "x,x,3,2,4,1",
        notes: ["F", "A", "Eb", "F"],
        baseFret: 5,
      },
      {
        fingers: "x,x,x,2,1,3",
        notes: ["C", "Eb", "A"],
        baseFret: 1,
      },
      {
        fingers: "x,2,1,3,x,x",
        notes: ["F", "A", "Eb"],
        baseFret: 1,
      },
      {
        fingers: "x,2,1,3,x,4",
        notes: ["F", "A", "Eb", "C"],
        baseFret: 5,
      },
      {
        fingers: "x,1,3,1,x,x",
        notes: ["F", "C", "Eb"],
        baseFret: 1,
      },
      {
        fingers: "x,x,1,3,2,4",
        notes: ["F", "C", "Eb", "A"],
        baseFret: 5,
      },
    ],
  },
  Fdim7: {
    root: "F",
    type: "dim7",
    structure: ["1", "b3", "b5", "bb7"],
    positions: [
      {
        fingers: "2,4,1,3,x,x",
        notes: ["Ab", "Ebb", "F", "Cb"],
        baseFret: 5,
      },
      {
        fingers: "x,2,3,1,4,x",
        notes: ["Ab", "Ebb", "F", "Cb"],
        baseFret: 5,
      },
      {
        fingers: "x,x,1,3,2,4",
        notes: ["Ebb", "Ab", "Cb", "F"],
        baseFret: 5,
      },
      {
        fingers: "x,2,3,1,4,x",
        notes: ["F", "Cb", "Ebb", "Ab"],
        baseFret: 5,
      },
      {
        fingers: "x,x,1,3,2,4",
        notes: ["F", "Cb", "Ebb", "Ab"],
        baseFret: 5,
      },
    ],
  },
  Faug: {
    root: "F",
    type: "aug",
    structure: ["1", "3", "#5"],
    positions: [
      {
        fingers: "x,3,2,1,1,x",
        notes: ["C#", "F", "A", "C#"],
        baseFret: 5,
      },
      {
        fingers: "4,3,2,1,x,x",
        notes: ["A", "C#", "F", "A"],
        baseFret: 5,
      },
      {
        fingers: "x,x,4,2,3,1",
        notes: ["C#", "F", "A", "C#"],
        baseFret: 5,
      },
    ],
  },
  Fmaj: {
    root: "F",
    type: "maj",
    structure: ["1", "3", "5"],
    positions: [
      {
        fingers: "1,3,4,2,1,1",
        notes: ["F", "C", "F", "A", "C", "F"],
        baseFret: 5,
      },
      {
        fingers: "x,4,3,1,2,1",
        notes: ["F", "A", "C", "F", "A"],
        baseFret: 5,
      },
      {
        fingers: "x,1,3,3,3,x",
        notes: ["F", "C", "F", "A"],
        baseFret: 5,
      },
      {
        fingers: "x,x,3,2,1,1",
        notes: ["F", "A", "C", "F"],
        baseFret: 5,
      },
      {
        fingers: "x,3,4,2,1,1",
        notes: ["C", "F", "A", "C", "F"],
        baseFret: 5,
      },
      {
        fingers: "x,x,1,2,4,3",
        notes: ["F", "C", "F", "A"],
        baseFret: 5,
      },
      {
        fingers: "x,1,x,x,4,x",
        notes: ["F", "A"],
        baseFret: 1,
      },
      {
        fingers: "x,1,2,3,4,1",
        notes: ["F", "C", "F", "A", "C"],
        baseFret: 5,
      },
      {
        fingers: "x,x,x,2,1,1",
        notes: ["A", "C", "F"],
        baseFret: 1,
      },
      {
        fingers: "x,x,x,3,4,1",
        notes: ["F", "A", "C"],
        baseFret: 1,
      },
      {
        fingers: "2,x,1,3,4,x",
        notes: ["A", "F", "C", "F"],
        baseFret: 5,
      },
      {
        fingers: "x,x,3,2,1,x",
        notes: ["F", "A", "C"],
        baseFret: 1,
      },
      {
        fingers: "x,3,1,1,1,x",
        notes: ["A", "C", "F", "A"],
        baseFret: 5,
      },
      {
        fingers: "x,x,3,1,2,x",
        notes: ["A", "C", "F"],
        baseFret: 1,
      },
      {
        fingers: "1,3,4,2,x,x",
        notes: ["F", "C", "F", "A"],
        baseFret: 5,
      },
      {
        fingers: "x,x,x,1,3,2",
        notes: ["C", "F", "A"],
        baseFret: 1,
      },
    ],
  },
  F11: {
    root: "F",
    type: "11",
    structure: ["1", "3", "5", "b7", "9", "11"],
    positions: [
      {
        fingers: "x,x,1,1,2,1",
        notes: ["F", "Bb", "Eb", "G"],
        baseFret: 5,
      },
      {
        fingers: "x,1,1,1,1,1",
        notes: ["F", "Bb", "Eb", "G", "C"],
        baseFret: 5,
      },
      {
        fingers: "3,x,4,2,1,1",
        notes: ["F", "Eb", "G", "Bb", "Eb"],
        baseFret: 5,
      },
    ],
  },
  Fmaj9: {
    root: "F",
    type: "maj9",
    structure: ["1", "3", "5", "7", "9"],
    positions: [
      {
        fingers: "1,0,4,0,2,0",
        notes: ["F", "A", "F", "G", "C", "E"],
        baseFret: 1,
      },
      {
        fingers: "x,4,1,1,1,1",
        notes: ["F", "G", "C", "E", "A"],
        baseFret: 5,
      },
      {
        fingers: "x,2,1,4,3,x",
        notes: ["F", "A", "E", "G"],
        baseFret: 5,
      },
      {
        fingers: "x,3,2,0,1,0",
        notes: ["F", "A", "G", "F", "E"],
        baseFret: 1,
      },
      {
        fingers: "x,3,3,0,1,0",
        notes: ["C", "F", "G", "C", "E"],
        baseFret: 1,
      },
    ],
  },
  Fsus2: {
    root: "F",
    type: "sus2",
    structure: ["1", "2", "5"],
    positions: [
      {
        fingers: "x,1,3,4,1,1",
        notes: ["F", "C", "F", "G", "C"],
        baseFret: 5,
      },
      {
        fingers: "1,3,4,0,x,x",
        notes: ["F", "C", "F", "G"],
        baseFret: 1,
      },
      {
        fingers: "x,3,4,0,1,1",
        notes: ["C", "F", "G", "C", "F"],
        baseFret: 1,
      },
    ],
  },
  Fm11: {
    root: "F",
    type: "m11",
    structure: ["1", "b3", "5", "b7", "9", "11"],
    positions: [
      {
        fingers: "2,x,3,4,1,x",
        notes: ["F", "Eb", "Ab", "Bb"],
        baseFret: 5,
      },
      {
        fingers: "x,1,1,1,2,1",
        notes: ["F", "Bb", "Eb", "Ab", "C"],
        baseFret: 5,
      },
      {
        fingers: "x,2,1,3,4,1",
        notes: ["F", "Ab", "Eb", "G", "Bb"],
        baseFret: 5,
      },
      {
        fingers: "x,1,4,1,2,1",
        notes: ["C", "Ab", "Bb", "Eb", "G"],
        baseFret: 5,
      },
      {
        fingers: "x,x,1,3,2,4",
        notes: ["F", "C", "Eb", "Bb"],
        baseFret: 5,
      },
      {
        fingers: "x,2,1,3,1,1",
        notes: ["F", "Ab", "Eb", "F", "Bb"],
        baseFret: 5,
      },
    ],
  },
  Fadd9: {
    root: "F",
    type: "add9",
    structure: ["1", "3", "5", "9"],
    positions: [
      {
        fingers: "x,1,x,0,4,x",
        notes: ["F", "G", "A"],
        baseFret: 1,
      },
      {
        fingers: "x,3,4,0,1,1",
        notes: ["C", "F", "G", "C", "F"],
        baseFret: 1,
      },
      {
        fingers: "x,x,3,2,1,4",
        notes: ["F", "A", "C", "G"],
        baseFret: 5,
      },
    ],
  },
  Fm7b5: {
    root: "F",
    type: "m7b5",
    structure: ["1", "b3", "b5", "b7"],
    positions: [
      {
        fingers: "x,1,3,2,4,x",
        notes: ["F", "Cb", "Eb", "Ab"],
        baseFret: 5,
      },
      {
        fingers: "x,2,x,3,4,1",
        notes: ["F", "Eb", "Ab", "Cb"],
        baseFret: 5,
      },
      {
        fingers: "1,x,2,3,0,x",
        notes: ["F", "Eb", "Ab", "Cb"],
        baseFret: 1,
      },
    ],
  },
  Fm: {
    root: "F",
    type: "m",
    structure: ["1", "b3", "5"],
    positions: [
      {
        fingers: "1,3,4,1,1,1",
        notes: ["F", "C", "F", "Ab", "C", "F"],
        baseFret: 5,
      },
      {
        fingers: "x,x,1,3,4,2",
        notes: ["F", "C", "F", "Ab"],
        baseFret: 5,
      },
      {
        fingers: "x,1,3,4,2,1",
        notes: ["F", "C", "F", "Ab", "C"],
        baseFret: 5,
      },
      {
        fingers: "x,x,3,1,1,1",
        notes: ["F", "Ab", "C", "F"],
        baseFret: 5,
      },
      {
        fingers: "x,3,4,1,1,1",
        notes: ["C", "F", "Ab", "C", "F"],
        baseFret: 5,
      },
      {
        fingers: "x,x,x,3,2,1",
        notes: ["F", "Ab", "C"],
        baseFret: 1,
      },
      {
        fingers: "x,4,2,1,3,x",
        notes: ["F", "Ab", "C", "F"],
        baseFret: 5,
      },
      {
        fingers: "4,2,1,1,x,x",
        notes: ["F", "Ab", "C", "F"],
        baseFret: 5,
      },
      {
        fingers: "x,x,x,2,3,1",
        notes: ["C", "F", "Ab"],
        baseFret: 1,
      },
    ],
  },
  F7b5: {
    root: "F",
    type: "7b5",
    structure: ["1", "3", "b5", "b7"],
    positions: [
      {
        fingers: "1,3,2,4,x,x",
        notes: ["F", "Cb", "Eb", "A"],
        baseFret: 5,
      },
      {
        fingers: "x,x,1,2,3,4",
        notes: ["F", "Cb", "Eb", "A"],
        baseFret: 5,
      },
      {
        fingers: "x,1,2,1,3,x",
        notes: ["F", "Cb", "Eb", "A"],
        baseFret: 5,
      },
    ],
  },
  Fm7: {
    root: "F",
    type: "m7",
    structure: ["1", "b3", "5", "b7"],
    positions: [
      {
        fingers: "1,3,1,1,4,1",
        notes: ["F", "C", "Eb", "Ab", "Eb", "F"],
        baseFret: 5,
      },
      {
        fingers: "x,x,1,4,2,3",
        notes: ["F", "C", "Eb", "Ab"],
        baseFret: 5,
      },
      {
        fingers: "x,1,3,1,2,1",
        notes: ["F", "C", "Eb", "Ab", "C"],
        baseFret: 5,
      },
      {
        fingers: "2,x,3,3,3,x",
        notes: ["F", "Eb", "Ab", "C"],
        baseFret: 1,
      },
      {
        fingers: "2,x,3,3,x,x",
        notes: ["F", "Eb", "Ab"],
        baseFret: 1,
      },
      {
        fingers: "x,2,1,3,4,x",
        notes: ["F", "Ab", "Eb", "Ab"],
        baseFret: 5,
      },
      {
        fingers: "x,2,1,3,x,x",
        notes: ["F", "Ab", "Eb"],
        baseFret: 1,
      },
      {
        fingers: "x,1,x,2,3,x",
        notes: ["F", "Eb", "Ab"],
        baseFret: 1,
      },
    ],
  },
  Fdim: {
    root: "F",
    type: "dim",
    structure: ["1", "b3", "b5"],
    positions: [
      {
        fingers: "1,2,3,1,x,x",
        notes: ["F", "Cb", "F", "Ab"],
        baseFret: 5,
      },
      {
        fingers: "x,x,1,2,4,3",
        notes: ["F", "Cb", "F", "Ab"],
        baseFret: 5,
      },
      {
        fingers: "x,1,2,3,4,x",
        notes: ["F", "Cb", "F", "Ab"],
        baseFret: 5,
      },
      {
        fingers: "x,x,3,1,4,x",
        notes: ["Ab", "Cb", "F"],
        baseFret: 1,
      },
      {
        fingers: "3,1,x,x,x,x",
        notes: ["F", "Ab"],
        baseFret: 1,
      },
      {
        fingers: "1,2,x,x,x,x",
        notes: ["F", "Cb"],
        baseFret: 1,
      },
      {
        fingers: "1,2,3,x,x,x",
        notes: ["F", "Cb", "F"],
        baseFret: 1,
      },
    ],
  },
  F6: {
    root: "F",
    type: "6",
    structure: ["1", "3", "5", "6"],
    positions: [
      {
        fingers: "1,x,3,2,4,1",
        notes: ["F", "F", "A", "D", "F"],
        baseFret: 5,
      },
      {
        fingers: "x,4,2,3,1,x",
        notes: ["F", "A", "D", "F"],
        baseFret: 5,
      },
      {
        fingers: "x,1,3,3,3,3",
        notes: ["F", "C", "F", "A", "D"],
        baseFret: 5,
      },
      {
        fingers: "x,x,3,2,4,1",
        notes: ["F", "A", "D", "F"],
        baseFret: 5,
      },
      {
        fingers: "x,2,1,1,x,x",
        notes: ["F", "A", "D"],
        baseFret: 1,
      },
      {
        fingers: "x,x,3,3,3,3",
        notes: ["C", "F", "A", "D"],
        baseFret: 1,
      },
    ],
  },
  "F7(#5)": {
    root: "F",
    type: "7(#5)",
    structure: ["1", "3", "#5", "b7"],
    positions: [
      {
        fingers: "1,x,1,2,3,1",
        notes: ["F", "Eb", "A", "C#", "F"],
        baseFret: 5,
      },
      {
        fingers: "x,1,2,1,1,x",
        notes: ["Eb", "A", "C#", "F"],
        baseFret: 5,
      },
      {
        fingers: "x,1,4,1,3,2",
        notes: ["F", "C#", "Eb", "A", "C#"],
        baseFret: 5,
      },
      {
        fingers: "1,x,2,3,4,x",
        notes: ["F", "Eb", "A", "C#"],
        baseFret: 5,
      },
    ],
  },
  F7sus4: {
    root: "F",
    type: "7sus4",
    structure: ["1", "4", "5", "b7"],
    positions: [
      {
        fingers: "1,3,1,4,1,1",
        notes: ["F", "C", "Eb", "Bb", "C", "F"],
        baseFret: 5,
      },
      {
        fingers: "x,2,3,4,1,x",
        notes: ["F", "Bb", "Eb", "F"],
        baseFret: 5,
      },
      {
        fingers: "x,1,3,1,4,1",
        notes: ["F", "C", "Eb", "Bb", "C"],
        baseFret: 5,
      },
    ],
  },
  Fmaj7: {
    root: "F",
    type: "maj7",
    structure: ["1", "3", "5", "7"],
    positions: [
      {
        fingers: "1,x,4,3,2,0",
        notes: ["F", "F", "A", "C", "E"],
        baseFret: 1,
      },
      {
        fingers: "0,4,3,1,1,1",
        notes: ["E", "F", "A", "C", "E", "A"],
        baseFret: 1,
      },
      {
        fingers: "0,1,3,2,4,1",
        notes: ["E", "F", "C", "E", "A", "C"],
        baseFret: 1,
      },
      {
        fingers: "1,x,3,4,2,x",
        notes: ["F", "E", "A", "C"],
        baseFret: 5,
      },
      {
        fingers: "x,1,3,2,4,x",
        notes: ["F", "C", "E", "A"],
        baseFret: 5,
      },
      {
        fingers: "1,3,4,2,1,0",
        notes: ["F", "C", "F", "A", "C", "E"],
        baseFret: 1,
      },
      {
        fingers: "x,x,1,1,1,3",
        notes: ["C", "F", "A", "E"],
        baseFret: 5,
      },
      {
        fingers: "x,x,x,2,1,0",
        notes: ["A", "C", "E"],
        baseFret: 1,
      },
      {
        fingers: "x,x,3,2,1,0",
        notes: ["F", "A", "C", "E"],
        baseFret: 1,
      },
      {
        fingers: "x,1,3,2,x,x",
        notes: ["F", "C", "E"],
        baseFret: 1,
      },
      {
        fingers: "1,x,3,4,x,x",
        notes: ["F", "E", "A"],
        baseFret: 1,
      },
      {
        fingers: "x,1,3,2,4,1",
        notes: ["F", "C", "E", "A", "C"],
        baseFret: 5,
      },
      {
        fingers: "x,3,4,2,1,0",
        notes: ["C", "F", "A", "C", "E"],
        baseFret: 1,
      },
      {
        fingers: "x,1,1,4,4,4",
        notes: ["C", "F", "C", "E", "A"],
        baseFret: 5,
      },
      {
        fingers: "x,2,1,3,4,x",
        notes: ["F", "A", "E", "A"],
        baseFret: 5,
      },
    ],
  },
  F5: {
    root: "F",
    type: "5",
    structure: ["1", "5"],
    positions: [
      {
        fingers: "1,3,x,x,x,x",
        notes: ["F", "C"],
        baseFret: 1,
      },
      {
        fingers: "x,1,3,4,x,x",
        notes: ["F", "C", "F"],
        baseFret: 1,
      },
      {
        fingers: "1,3,4,x,x,x",
        notes: ["F", "C", "F"],
        baseFret: 1,
      },
      {
        fingers: "x,x,x,x,1,3",
        notes: ["F", "C"],
        baseFret: 1,
      },
      {
        fingers: "x,1,3,x,x,x",
        notes: ["F", "C"],
        baseFret: 1,
      },
      {
        fingers: "x,1,1,x,x,x",
        notes: ["C", "F"],
        baseFret: 1,
      },
      {
        fingers: "x,x,1,3,4,x",
        notes: ["F", "C", "F"],
        baseFret: 1,
      },
      {
        fingers: "x,x,x,1,2,4",
        notes: ["C", "F", "C"],
        baseFret: 1,
      },
      {
        fingers: "x,x,1,3,x,x",
        notes: ["F", "C"],
        baseFret: 1,
      },
      {
        fingers: "1,1,3,x,x,x",
        notes: ["C", "F", "C"],
        baseFret: 1,
      },
    ],
  },
  "F7(#11)": {
    root: "F",
    type: "7(#11)",
    structure: ["1", "3", "5", "b7", "#11"],
    positions: [
      {
        fingers: "x,1,3,1,x,x",
        notes: ["F", "B", "Eb"],
        baseFret: 1,
      },
      {
        fingers: "1,x,2,3,0,x",
        notes: ["F", "Eb", "A", "B"],
        baseFret: 1,
      },
    ],
  },
  Fm6: {
    root: "F",
    type: "m6",
    structure: ["1", "b3", "5", "6"],
    positions: [
      {
        fingers: "1,x,3,1,4,1",
        notes: ["F", "F", "Ab", "D", "F"],
        baseFret: 5,
      },
      {
        fingers: "x,3,1,2,1,x",
        notes: ["F", "Ab", "D", "F"],
        baseFret: 5,
      },
      {
        fingers: "x,1,x,3,2,4",
        notes: ["F", "F", "Ab", "D"],
        baseFret: 5,
      },
    ],
  },
  "F7(b9)": {
    root: "F",
    type: "7(b9)",
    structure: ["1", "3", "5", "b7", "b9"],
    positions: [
      {
        fingers: "1,x,1,2,1,3",
        notes: ["F", "Eb", "A", "C", "Gb"],
        baseFret: 5,
      },
      {
        fingers: "x,x,2,1,3,1",
        notes: ["F", "A", "Eb", "Gb"],
        baseFret: 5,
      },
      {
        fingers: "x,2,1,3,1,x",
        notes: ["F", "A", "Eb", "Gb"],
        baseFret: 5,
      },
      {
        fingers: "x,x,1,2,1,3",
        notes: ["A", "Eb", "Gb", "C"],
        baseFret: 5,
      },
      {
        fingers: "x,x,1,3,2,4",
        notes: ["C", "Gb", "A", "Eb"],
        baseFret: 5,
      },
      {
        fingers: "1,x,2,3,x,4",
        notes: ["F", "Eb", "A", "Gb"],
        baseFret: 5,
      },
    ],
  },
  Fm9: {
    root: "F",
    type: "m9",
    structure: ["1", "b3", "5", "b7", "9"],
    positions: [
      {
        fingers: "1,3,1,1,1,4",
        notes: ["F", "C", "Eb", "Ab", "C", "G"],
        baseFret: 5,
      },
      {
        fingers: "x,x,1,3,2,1",
        notes: ["F", "C", "Eb", "G"],
        baseFret: 5,
      },
      {
        fingers: "x,2,1,3,4,x",
        notes: ["F", "Ab", "Eb", "G"],
        baseFret: 5,
      },
    ],
  },
  "F13(b9)": {
    root: "F",
    type: "13(b9)",
    structure: ["1", "3", "5", "b7", "b9", "11", "13"],
    positions: [
      {
        fingers: "x,1,3,3,3,x",
        notes: ["Eb", "A", "D", "Gb"],
        baseFret: 5,
      },
    ],
  },
  Fsus4: {
    root: "F",
    type: "sus4",
    structure: ["1", "4", "5"],
    positions: [
      {
        fingers: "1,1,3,4,1,1",
        notes: ["F", "Bb", "F", "Bb", "C", "F"],
        baseFret: 5,
      },
      {
        fingers: "x,3,4,1,2,x",
        notes: ["F", "Bb", "C", "F"],
        baseFret: 5,
      },
      {
        fingers: "x,1,2,3,4,1",
        notes: ["F", "C", "F", "Bb", "C"],
        baseFret: 5,
      },
    ],
  },
  "F6/9": {
    root: "F",
    type: "6/9",
    structure: ["1", "3", "5", "6", "9"],
    positions: [
      {
        fingers: "1,0,0,0,2,3",
        notes: ["F", "A", "D", "G", "C", "F"],
        baseFret: 1,
      },
      {
        fingers: "x,x,2,1,3,4",
        notes: ["F", "A", "D", "G"],
        baseFret: 5,
      },
      {
        fingers: "x,2,1,1,3,4",
        notes: ["F", "A", "D", "G", "C"],
        baseFret: 5,
      },
      {
        fingers: "x,2,1,1,3,x",
        notes: ["F", "A", "D", "G"],
        baseFret: 5,
      },
      {
        fingers: "1,3,0,0,x,x",
        notes: ["F", "C", "D", "G"],
        baseFret: 1,
      },
      {
        fingers: "1,2,0,0,3,4",
        notes: ["F", "C", "D", "G", "D", "G"],
        baseFret: 1,
      },
    ],
  },
  G13: {
    root: "G",
    type: "13",
    structure: ["1", "3", "5", "b7", "9", "11", "13"],
    positions: [
      {
        fingers: "3,x,4,2,0,0",
        notes: ["G", "F", "A", "B", "E"],
        baseFret: 1,
      },
      {
        fingers: "1,x,1,2,3,4",
        notes: ["G", "F", "B", "E", "A"],
        baseFret: 5,
      },
      {
        fingers: "x,2,1,3,3,4",
        notes: ["G", "B", "F", "A", "E"],
        baseFret: 5,
      },
      {
        fingers: "1,x,2,3,4,x",
        notes: ["G", "F", "B", "E"],
        baseFret: 5,
      },
      {
        fingers: "1,3,1,2,4,1",
        notes: ["G", "D", "F", "B", "E", "G"],
        baseFret: 5,
      },
      {
        fingers: "1,3,1,2,4,4",
        notes: ["G", "D", "F", "B", "E", "A"],
        baseFret: 5,
      },
      {
        fingers: "x,x,1,2,3,4",
        notes: ["F", "B", "E", "A"],
        baseFret: 5,
      },
      {
        fingers: "x,x,1,2,3,1",
        notes: ["F", "B", "E", "G"],
        baseFret: 5,
      },
      {
        fingers: "x,x,1,2,2,4",
        notes: ["B", "F", "A", "E"],
        baseFret: 5,
      },
      {
        fingers: "x,1,3,4,2,x",
        notes: ["F", "B", "E", "G"],
        baseFret: 5,
      },
      {
        fingers: "x,x,3,0,0,0",
        notes: ["F", "G", "B", "E"],
        baseFret: 1,
      },
      {
        fingers: "x,1,3,2,4,0",
        notes: ["B", "F", "A", "D", "E"],
        baseFret: 1,
      },
    ],
  },
  "G7(#9)": {
    root: "G",
    type: "7(#9)",
    structure: ["1", "3", "5", "b7", "#9"],
    positions: [
      {
        fingers: "2,1,3,3,3,3",
        notes: ["G", "B", "F", "A#", "D", "G"],
        baseFret: 5,
      },
      {
        fingers: "1,3,1,2,1,4",
        notes: ["G", "D", "F", "B", "D", "A#"],
        baseFret: 5,
      },
      {
        fingers: "x,2,1,3,4,x",
        notes: ["G", "B", "F", "A#"],
        baseFret: 5,
      },
    ],
  },
  G9: {
    root: "G",
    type: "9",
    structure: ["1", "3", "5", "b7", "9"],
    positions: [
      {
        fingers: "x,1,3,2,4,x",
        notes: ["B", "F", "A", "D"],
        baseFret: 5,
      },
      {
        fingers: "x,x,2,1,3,4",
        notes: ["F", "A", "D", "G"],
        baseFret: 5,
      },
      {
        fingers: "x,2,1,3,4,x",
        notes: ["G", "B", "F", "A"],
        baseFret: 5,
      },
      {
        fingers: "x,2,1,3,3,3",
        notes: ["G", "B", "F", "A", "D"],
        baseFret: 5,
      },
      {
        fingers: "x,x,1,2,1,4",
        notes: ["F", "B", "D", "A"],
        baseFret: 5,
      },
      {
        fingers: "1,3,1,2,1,4",
        notes: ["G", "D", "F", "B", "D", "A"],
        baseFret: 5,
      },
      {
        fingers: "x,x,1,3,2,1",
        notes: ["G", "D", "F", "A"],
        baseFret: 5,
      },
      {
        fingers: "x,x,3,2,1,4",
        notes: ["F", "A", "B", "G"],
        baseFret: 5,
      },
      {
        fingers: "x,x,1,2,2,2",
        notes: ["B", "F", "A", "D"],
        baseFret: 5,
      },
      {
        fingers: "3,x,0,2,0,1",
        notes: ["G", "D", "A", "B", "F"],
        baseFret: 1,
      },
    ],
  },
  G9b5: {
    root: "G",
    type: "9b5",
    structure: ["1", "3", "b5", "b7", "9"],
    positions: [
      {
        fingers: "2,1,3,1,1,4",
        notes: ["G", "B", "F", "A", "Db", "G"],
        baseFret: 5,
      },
      {
        fingers: "x,x,1,2,3,1",
        notes: ["G", "Db", "F", "A"],
        baseFret: 5,
      },
      {
        fingers: "1,2,1,3,4,1",
        notes: ["Db", "G", "B", "F", "A", "Db"],
        baseFret: 5,
      },
    ],
  },
  G7: {
    root: "G",
    type: "7",
    structure: ["1", "3", "5", "b7"],
    positions: [
      {
        fingers: "3,2,0,0,0,1",
        notes: ["G", "B", "D", "G", "B", "F"],
        baseFret: 1,
      },
      {
        fingers: "1,3,1,2,4,1",
        notes: ["G", "D", "F", "B", "F", "G"],
        baseFret: 5,
      },
      {
        fingers: "x,3,2,4,1,x",
        notes: ["G", "B", "F", "G"],
        baseFret: 5,
      },
      {
        fingers: "x,2,3,0,4,x",
        notes: ["B", "F", "G", "D"],
        baseFret: 1,
      },
      {
        fingers: "2,1,3,0,0,4",
        notes: ["G", "B", "F", "G", "B", "G"],
        baseFret: 1,
      },
      {
        fingers: "3,2,0,0,4,1",
        notes: ["G", "B", "D", "G", "D", "F"],
        baseFret: 1,
      },
      {
        fingers: "3,2,4,0,0,1",
        notes: ["G", "B", "F", "G", "B", "F"],
        baseFret: 1,
      },
      {
        fingers: "x,x,x,2,1,3",
        notes: ["D", "F", "B"],
        baseFret: 1,
      },
      {
        fingers: "x,2,1,3,0,4",
        notes: ["G", "B", "F", "B", "D"],
        baseFret: 1,
      },
      {
        fingers: "x,x,3,2,4,1",
        notes: ["G", "B", "F", "G"],
        baseFret: 5,
      },
      {
        fingers: "1,3,1,2,1,1",
        notes: ["G", "D", "F", "B", "D", "G"],
        baseFret: 5,
      },
      {
        fingers: "x,x,1,3,2,4",
        notes: ["G", "D", "F", "B"],
        baseFret: 5,
      },
      {
        fingers: "1,x,2,3,x,x",
        notes: ["G", "F", "B"],
        baseFret: 1,
      },
      {
        fingers: "x,2,1,3,x,x",
        notes: ["G", "B", "F"],
        baseFret: 1,
      },
      {
        fingers: "x,x,x,0,0,1",
        notes: ["G", "B", "F"],
        baseFret: 1,
      },
      {
        fingers: "1,x,2,4,3,x",
        notes: ["G", "F", "B", "D"],
        baseFret: 5,
      },
      {
        fingers: "x,1,2,4,3,x",
        notes: ["B", "F", "B", "D"],
        baseFret: 5,
      },
      {
        fingers: "x,3,1,2,1,x",
        notes: ["D", "F", "B", "D"],
        baseFret: 5,
      },
      {
        fingers: "3,x,1,4,2,x",
        notes: ["B", "G", "D", "F"],
        baseFret: 5,
      },
      {
        fingers: "x,x,4,2,1,3",
        notes: ["B", "D", "F", "B"],
        baseFret: 5,
      },
    ],
  },
  Gdim7: {
    root: "G",
    type: "dim7",
    structure: ["1", "b3", "b5", "bb7"],
    positions: [
      {
        fingers: "2,4,1,3,x,x",
        notes: ["Bb", "Fb", "G", "Db"],
        baseFret: 5,
      },
      {
        fingers: "x,2,3,1,4,x",
        notes: ["G", "Db", "Fb", "Bb"],
        baseFret: 5,
      },
      {
        fingers: "x,x,1,3,2,4",
        notes: ["Fb", "Bb", "Db", "G"],
        baseFret: 5,
      },
      {
        fingers: "x,x,1,3,2,4",
        notes: ["G", "Db", "Fb", "Bb"],
        baseFret: 5,
      },
      {
        fingers: "x,3,1,2,x,x",
        notes: ["G", "Bb", "Fb"],
        baseFret: 1,
      },
      {
        fingers: "2,x,1,3,x,x",
        notes: ["G", "Fb", "Bb"],
        baseFret: 1,
      },
      {
        fingers: "x,x,1,3,2,4",
        notes: ["Fb", "Bb", "Db", "G"],
        baseFret: 5,
      },
      {
        fingers: "2,4,1,0,x,x",
        notes: ["G", "Db", "Fb", "G"],
        baseFret: 1,
      },
    ],
  },
  Gaug: {
    root: "G",
    type: "aug",
    structure: ["1", "3", "#5"],
    positions: [
      {
        fingers: "x,3,2,1,1,x",
        notes: ["D#", "G", "B", "D#"],
        baseFret: 5,
      },
      {
        fingers: "4,3,2,1,x,x",
        notes: ["B", "D#", "G", "B"],
        baseFret: 5,
      },
      {
        fingers: "x,x,4,2,3,1",
        notes: ["D#", "G", "B", "D#"],
        baseFret: 5,
      },
      {
        fingers: "x,x,x,2,3,1",
        notes: ["B", "D#", "G"],
        baseFret: 1,
      },
      {
        fingers: "x,x,2,1,1,x",
        notes: ["G", "B", "D#"],
        baseFret: 1,
      },
      {
        fingers: "x,3,2,1,x,x",
        notes: ["D#", "G", "B"],
        baseFret: 1,
      },
      {
        fingers: "3,2,1,x,x,x",
        notes: ["B", "D#", "G"],
        baseFret: 1,
      },
      {
        fingers: "x,x,x,2,3,1",
        notes: ["D#", "G", "B"],
        baseFret: 1,
      },
      {
        fingers: "x,x,2,1,1,x",
        notes: ["B", "D#", "G"],
        baseFret: 1,
      },
      {
        fingers: "x,3,2,1,x,x",
        notes: ["G", "B", "D#"],
        baseFret: 1,
      },
      {
        fingers: "x,x,x,2,3,1",
        notes: ["G", "B", "D#"],
        baseFret: 1,
      },
      {
        fingers: "x,x,2,1,1,x",
        notes: ["D#", "G", "B"],
        baseFret: 1,
      },
      {
        fingers: "x,3,2,1,x,x",
        notes: ["B", "D#", "G"],
        baseFret: 1,
      },
      {
        fingers: "3,2,1,x,x,x",
        notes: ["G", "B", "D#"],
        baseFret: 1,
      },
      {
        fingers: "3,2,1,x,x,x",
        notes: ["D#", "G", "B"],
        baseFret: 1,
      },
    ],
  },
  "Gm(maj9)": {
    root: "G",
    type: "m(maj9)",
    structure: ["1", "b3", "5", "7", "9"],
    positions: [
      {
        fingers: "x,x,2,1,1,4",
        notes: ["F#", "Bb", "D", "A"],
        baseFret: 5,
      },
    ],
  },
  Gmaj: {
    root: "G",
    type: "maj",
    structure: ["1", "3", "5"],
    positions: [
      {
        fingers: "2,1,0,0,0,3",
        notes: ["G", "B", "D", "G", "B", "G"],
        baseFret: 1,
      },
      {
        fingers: "1,3,4,2,1,1",
        notes: ["G", "D", "G", "B", "D", "G"],
        baseFret: 5,
      },
      {
        fingers: "x,4,3,1,2,1",
        notes: ["G", "B", "D", "G", "B"],
        baseFret: 5,
      },
      {
        fingers: "x,x,x,0,0,3",
        notes: ["G", "B", "G"],
        baseFret: 1,
      },
      {
        fingers: "2,1,0,0,3,4",
        notes: ["G", "B", "D", "G", "D", "G"],
        baseFret: 1,
      },
      {
        fingers: "x,x,x,1,2,1",
        notes: ["D", "G", "B"],
        baseFret: 1,
      },
      {
        fingers: "1,3,4,2,x,x",
        notes: ["G", "D", "G", "B"],
        baseFret: 5,
      },
      {
        fingers: "x,1,3,3,3,x",
        notes: ["G", "D", "G", "B"],
        baseFret: 5,
      },
      {
        fingers: "3,2,0,x,x,x",
        notes: ["G", "B", "D"],
        baseFret: 1,
      },
      {
        fingers: "2,x,0,0,0,4",
        notes: ["G", "D", "G", "B", "G"],
        baseFret: 1,
      },
      {
        fingers: "x,x,3,2,1,1",
        notes: ["G", "B", "D", "G"],
        baseFret: 5,
      },
      {
        fingers: "x,1,0,0,3,4",
        notes: ["B", "D", "G", "D", "G"],
        baseFret: 1,
      },
      {
        fingers: "2,1,x,x,x,x",
        notes: ["G", "B"],
        baseFret: 1,
      },
      {
        fingers: "x,1,4,x,x,x",
        notes: ["B", "G"],
        baseFret: 1,
      },
      {
        fingers: "x,1,0,0,0,4",
        notes: ["B", "D", "G", "B", "G"],
        baseFret: 1,
      },
      {
        fingers: "x,1,3,3,3,1",
        notes: ["G", "D", "G", "B", "D"],
        baseFret: 5,
      },
      {
        fingers: "x,x,3,1,2,x",
        notes: ["B", "D", "G"],
        baseFret: 1,
      },
    ],
  },
  G11: {
    root: "G",
    type: "11",
    structure: ["1", "3", "5", "b7", "9", "11"],
    positions: [
      {
        fingers: "3,x,4,2,1,1",
        notes: ["G", "F", "A", "C", "F"],
        baseFret: 5,
      },
      {
        fingers: "x,x,1,1,2,1",
        notes: ["G", "C", "F", "A"],
        baseFret: 5,
      },
      {
        fingers: "x,1,1,1,1,1",
        notes: ["G", "C", "F", "A", "D"],
        baseFret: 5,
      },
    ],
  },
  Gmaj9: {
    root: "G",
    type: "maj9",
    structure: ["1", "3", "5", "7", "9"],
    positions: [
      {
        fingers: "2,1,4,1,3,x",
        notes: ["G", "B", "F#", "A", "D"],
        baseFret: 5,
      },
      {
        fingers: "x,x,4,1,2,1",
        notes: ["G", "A", "D", "F#"],
        baseFret: 5,
      },
      {
        fingers: "x,2,1,4,3,x",
        notes: ["G", "B", "F#", "A"],
        baseFret: 5,
      },
    ],
  },
  Gsus2: {
    root: "G",
    type: "sus2",
    structure: ["1", "2", "5"],
    positions: [
      {
        fingers: "x,1,3,4,1,x",
        notes: ["G", "D", "G", "A"],
        baseFret: 5,
      },
      {
        fingers: "x,4,1,1,x,x",
        notes: ["G", "A", "D"],
        baseFret: 1,
      },
    ],
  },
  Gm11: {
    root: "G",
    type: "m11",
    structure: ["1", "b3", "5", "b7", "9", "11"],
    positions: [
      {
        fingers: "2,x,3,4,1,x",
        notes: ["G", "F", "Bb", "C"],
        baseFret: 5,
      },
      {
        fingers: "x,1,1,1,2,4",
        notes: ["G", "C", "F", "Bb", "F"],
        baseFret: 5,
      },
      {
        fingers: "x,1,1,1,2,1",
        notes: ["G", "C", "F", "Bb", "D"],
        baseFret: 5,
      },
      {
        fingers: "x,x,2,3,1,x",
        notes: ["F", "Bb", "C"],
        baseFret: 1,
      },
      {
        fingers: "x,2,1,3,4,1",
        notes: ["G", "Bb", "F", "Bb", "C"],
        baseFret: 5,
      },
      {
        fingers: "x,2,1,3,4,1",
        notes: ["G", "Bb", "F", "A", "C"],
        baseFret: 5,
      },
    ],
  },
  Gadd9: {
    root: "G",
    type: "add9",
    structure: ["1", "3", "5", "9"],
    positions: [
      {
        fingers: "x,x,3,2,1,4",
        notes: ["G", "B", "D", "A"],
        baseFret: 5,
      },
      {
        fingers: "2,x,0,1,0,x",
        notes: ["G", "D", "A", "B"],
        baseFret: 1,
      },
    ],
  },
  Gm: {
    root: "G",
    type: "m",
    structure: ["1", "b3", "5"],
    positions: [
      {
        fingers: "1,3,4,1,1,1",
        notes: ["G", "D", "G", "Bb", "D", "G"],
        baseFret: 5,
      },
      {
        fingers: "x,x,1,3,4,2",
        notes: ["G", "D", "G", "Bb"],
        baseFret: 5,
      },
      {
        fingers: "x,1,3,4,2,1",
        notes: ["G", "D", "G", "Bb", "D"],
        baseFret: 5,
      },
    ],
  },
  G7b5: {
    root: "G",
    type: "7b5",
    structure: ["1", "3", "b5", "b7"],
    positions: [
      {
        fingers: "1,3,2,4,x,x",
        notes: ["G", "Db", "F", "B"],
        baseFret: 5,
      },
      {
        fingers: "x,x,1,2,3,4",
        notes: ["G", "Db", "F", "B"],
        baseFret: 5,
      },
      {
        fingers: "x,1,2,1,3,x",
        notes: ["G", "Db", "F", "B"],
        baseFret: 5,
      },
    ],
  },
  Gm7: {
    root: "G",
    type: "m7",
    structure: ["1", "b3", "5", "b7"],
    positions: [
      {
        fingers: "1,3,1,1,4,1",
        notes: ["G", "D", "F", "Bb", "F", "G"],
        baseFret: 5,
      },
      {
        fingers: "x,x,1,4,2,3",
        notes: ["G", "D", "F", "Bb"],
        baseFret: 5,
      },
      {
        fingers: "x,1,3,1,2,1",
        notes: ["G", "D", "F", "Bb", "D"],
        baseFret: 5,
      },
      {
        fingers: "2,x,3,3,x,x",
        notes: ["G", "F", "Bb"],
        baseFret: 1,
      },
      {
        fingers: "2,x,3,3,3,x",
        notes: ["G", "F", "Bb", "D"],
        baseFret: 1,
      },
      {
        fingers: "1,3,1,1,1,1",
        notes: ["G", "D", "F", "Bb", "D", "G"],
        baseFret: 5,
      },
      {
        fingers: "x,2,1,3,4,x",
        notes: ["G", "Bb", "F", "Bb"],
        baseFret: 5,
      },
      {
        fingers: "2,x,x,3,4,1",
        notes: ["G", "Bb", "D", "F"],
        baseFret: 5,
      },
    ],
  },
  Gdim: {
    root: "G",
    type: "dim",
    structure: ["1", "b3", "b5"],
    positions: [
      {
        fingers: "x,x,4,3,1,2",
        notes: ["G", "Bb", "Db", "G"],
        baseFret: 5,
      },
      {
        fingers: "x,x,1,2,4,3",
        notes: ["G", "Db", "G", "Bb"],
        baseFret: 5,
      },
      {
        fingers: "x,1,2,4,3,x",
        notes: ["G", "Db", "G", "Bb"],
        baseFret: 5,
      },
      {
        fingers: "x,x,3,1,4,x",
        notes: ["Bb", "Db", "G"],
        baseFret: 1,
      },
      {
        fingers: "x,x,x,2,1,3",
        notes: ["Bb", "Db", "G"],
        baseFret: 1,
      },
      {
        fingers: "x,x,4,2,1,x",
        notes: ["G", "Bb", "Db"],
        baseFret: 1,
      },
      {
        fingers: "x,2,3,1,x,x",
        notes: ["Db", "G", "Bb"],
        baseFret: 1,
      },
      {
        fingers: "3,1,2,x,x,x",
        notes: ["Bb", "Db", "G"],
        baseFret: 1,
      },
      {
        fingers: "x,x,x,1,3,1",
        notes: ["Db", "G", "Bb"],
        baseFret: 1,
      },
      {
        fingers: "x,4,2,1,x,x",
        notes: ["G", "Bb", "Db"],
        baseFret: 1,
      },
      {
        fingers: "2,3,1,x,x,x",
        notes: ["Db", "G", "Bb"],
        baseFret: 1,
      },
      {
        fingers: "x,x,x,3,2,1",
        notes: ["G", "Bb", "Db"],
        baseFret: 1,
      },
      {
        fingers: "x,x,1,3,2,x",
        notes: ["Db", "G", "Bb"],
        baseFret: 1,
      },
      {
        fingers: "x,3,1,2,x,x",
        notes: ["Bb", "Db", "G"],
        baseFret: 1,
      },
      {
        fingers: "4,2,1,x,x,x",
        notes: ["G", "Bb", "Db"],
        baseFret: 1,
      },
    ],
  },
  G6: {
    root: "G",
    type: "6",
    structure: ["1", "3", "5", "6"],
    positions: [
      {
        fingers: "1,2,0,0,0,0",
        notes: ["G", "B", "D", "G", "B", "E"],
        baseFret: 1,
      },
      {
        fingers: "1,x,3,2,4,1",
        notes: ["G", "G", "B", "E", "G"],
        baseFret: 5,
      },
      {
        fingers: "x,4,2,3,1,x",
        notes: ["G", "B", "E", "G"],
        baseFret: 5,
      },
      {
        fingers: "x,x,x,2,1,0",
        notes: ["B", "D", "E"],
        baseFret: 1,
      },
      {
        fingers: "1,3,4,2,0,0",
        notes: ["G", "D", "G", "B", "B", "E"],
        baseFret: 1,
      },
      {
        fingers: "x,x,3,2,1,0",
        notes: ["G", "B", "D", "E"],
        baseFret: 1,
      },
      {
        fingers: "x,x,0,0,3,0",
        notes: ["D", "G", "D", "E"],
        baseFret: 1,
      },
      {
        fingers: "x,3,2,0,1,0",
        notes: ["G", "B", "G", "G", "E"],
        baseFret: 1,
      },
      {
        fingers: "x,x,3,2,3,1",
        notes: ["G", "B", "E", "G"],
        baseFret: 5,
      },
      {
        fingers: "x,x,x,0,0,0",
        notes: ["G", "B", "E"],
        baseFret: 1,
      },
      {
        fingers: "2,1,0,0,3,0",
        notes: ["G", "B", "D", "G", "D", "E"],
        baseFret: 1,
      },
      {
        fingers: "2,x,1,4,3,x",
        notes: ["G", "E", "B", "D"],
        baseFret: 5,
      },
      {
        fingers: "x,x,3,2,4,0",
        notes: ["G", "B", "E", "E"],
        baseFret: 1,
      },
      {
        fingers: "1,x,4,3,2,0",
        notes: ["G", "G", "B", "D", "E"],
        baseFret: 1,
      },
      {
        fingers: "x,2,3,1,0,0",
        notes: ["D", "G", "B", "B", "E"],
        baseFret: 1,
      },
      {
        fingers: "1,4,x,x,x,x",
        notes: ["G", "E"],
        baseFret: 1,
      },
      {
        fingers: "0,2,3,1,0,0",
        notes: ["E", "D", "G", "B", "B", "E"],
        baseFret: 1,
      },
      {
        fingers: "3,x,0,0,4,0",
        notes: ["G", "D", "G", "D", "E"],
        baseFret: 1,
      },
    ],
  },
  "G7(#5)": {
    root: "G",
    type: "7(#5)",
    structure: ["1", "3", "#5", "b7"],
    positions: [
      {
        fingers: "1,x,1,2,3,1",
        notes: ["G", "F", "B", "D#", "G"],
        baseFret: 5,
      },
      {
        fingers: "x,1,2,1,1,x",
        notes: ["F", "B", "D#", "G"],
        baseFret: 5,
      },
      {
        fingers: "x,1,4,1,3,2",
        notes: ["G", "D#", "F", "B", "D#"],
        baseFret: 5,
      },
      {
        fingers: "1,x,2,3,4,x",
        notes: ["G", "F", "B", "D#"],
        baseFret: 5,
      },
    ],
  },
  G7sus4: {
    root: "G",
    type: "7sus4",
    structure: ["1", "4", "5", "b7"],
    positions: [
      {
        fingers: "3,x,4,0,1,x",
        notes: ["G", "F", "G", "C"],
        baseFret: 1,
      },
      {
        fingers: "1,3,1,4,1,1",
        notes: ["G", "D", "F", "C", "D", "G"],
        baseFret: 5,
      },
      {
        fingers: "x,2,3,4,1,x",
        notes: ["G", "C", "F", "G"],
        baseFret: 5,
      },
    ],
  },
  Gmaj7: {
    root: "G",
    type: "maj7",
    structure: ["1", "3", "5", "7"],
    positions: [
      {
        fingers: "x,x,4,3,2,1",
        notes: ["G", "B", "D", "F#"],
        baseFret: 5,
      },
      {
        fingers: "1,4,2,3,1,x",
        notes: ["G", "D", "F#", "B", "D"],
        baseFret: 5,
      },
      {
        fingers: "x,4,3,1,1,1",
        notes: ["G", "B", "D", "F#", "B"],
        baseFret: 5,
      },
      {
        fingers: "1,x,3,4,2,x",
        notes: ["G", "F#", "B", "D"],
        baseFret: 5,
      },
      {
        fingers: "x,1,3,2,4,x",
        notes: ["G", "D", "F#", "B"],
        baseFret: 5,
      },
      {
        fingers: "x,1,0,0,3,2",
        notes: ["B", "D", "G", "D", "F#"],
        baseFret: 1,
      },
      {
        fingers: "3,x,0,0,0,2",
        notes: ["G", "D", "G", "B", "F#"],
        baseFret: 1,
      },
      {
        fingers: "x,1,x,0,3,2",
        notes: ["B", "G", "D", "F#"],
        baseFret: 1,
      },
      {
        fingers: "x,x,2,4,1,3",
        notes: ["B", "F#", "G", "D"],
        baseFret: 5,
      },
      {
        fingers: "x,1,3,2,4,1",
        notes: ["G", "D", "F#", "B", "D"],
        baseFret: 5,
      },
      {
        fingers: "x,x,1,4,4,4",
        notes: ["G", "D", "F#", "B"],
        baseFret: 5,
      },
      {
        fingers: "2,x,1,3,4,x",
        notes: ["B", "G", "D", "F#"],
        baseFret: 5,
      },
      {
        fingers: "x,x,0,0,0,2",
        notes: ["D", "G", "B", "F#"],
        baseFret: 1,
      },
      {
        fingers: "x,3,2,0,0,1",
        notes: ["D", "F#", "G", "B", "G"],
        baseFret: 1,
      },
      {
        fingers: "1,2,0,0,0,3",
        notes: ["F#", "B", "D", "G", "B", "F#"],
        baseFret: 1,
      },
      {
        fingers: "1,1,3,0,x,x",
        notes: ["F#", "B", "F#", "G"],
        baseFret: 1,
      },
      {
        fingers: "3,x,2,4,1,x",
        notes: ["D", "B", "F#", "G"],
        baseFret: 5,
      },
      {
        fingers: "3,x,1,1,1,x",
        notes: ["F#", "D", "G", "B"],
        baseFret: 5,
      },
      {
        fingers: "3,2,4,0,0,1",
        notes: ["G", "B", "F#", "G", "B", "F#"],
        baseFret: 1,
      },
      {
        fingers: "x,1,1,3,4,x",
        notes: ["D", "G", "D", "F#"],
        baseFret: 5,
      },
      {
        fingers: "3,2,0,0,0,1",
        notes: ["G", "B", "D", "G", "B", "F#"],
        baseFret: 1,
      },
    ],
  },
  G5: {
    root: "G",
    type: "5",
    structure: ["1", "5"],
    positions: [
      {
        fingers: "1,3,x,x,x,x",
        notes: ["G", "D"],
        baseFret: 1,
      },
      {
        fingers: "x,x,1,1,x,x",
        notes: ["D", "G"],
        baseFret: 1,
      },
      {
        fingers: "1,3,4,x,x,x",
        notes: ["G", "D", "G"],
        baseFret: 1,
      },
      {
        fingers: "x,1,3,4,x,x",
        notes: ["G", "D", "G"],
        baseFret: 1,
      },
      {
        fingers: "x,1,1,x,x,x",
        notes: ["D", "G"],
        baseFret: 1,
      },
      {
        fingers: "2,x,0,0,3,x",
        notes: ["G", "D", "G", "D"],
        baseFret: 1,
      },
      {
        fingers: "2,x,0,0,x,x",
        notes: ["G", "D", "G"],
        baseFret: 1,
      },
      {
        fingers: "x,x,1,3,x,x",
        notes: ["G", "D"],
        baseFret: 1,
      },
      {
        fingers: "x,1,4,x,x,x",
        notes: ["G", "D"],
        baseFret: 1,
      },
      {
        fingers: "x,x,1,3,4,x",
        notes: ["G", "D", "G"],
        baseFret: 1,
      },
      {
        fingers: "x,x,x,1,2,4",
        notes: ["D", "G", "D"],
        baseFret: 1,
      },
    ],
  },
  "G7(#11)": {
    root: "G",
    type: "7(#11)",
    structure: ["1", "3", "5", "b7", "#11"],
    positions: [
      {
        fingers: "2,x,3,4,1,x",
        notes: ["G", "F", "B", "C#"],
        baseFret: 5,
      },
      {
        fingers: "x,1,3,2,x,x",
        notes: ["G", "C#", "F"],
        baseFret: 1,
      },
    ],
  },
  Gm6: {
    root: "G",
    type: "m6",
    structure: ["1", "b3", "5", "6"],
    positions: [
      {
        fingers: "1,x,3,1,4,1",
        notes: ["G", "G", "Bb", "E", "G"],
        baseFret: 5,
      },
      {
        fingers: "x,3,1,2,1,x",
        notes: ["G", "Bb", "E", "G"],
        baseFret: 5,
      },
      {
        fingers: "x,1,x,3,2,4",
        notes: ["G", "G", "Bb", "E"],
        baseFret: 5,
      },
      {
        fingers: "2,x,0,3,4,0",
        notes: ["G", "D", "Bb", "D", "E"],
        baseFret: 1,
      },
    ],
  },
  "G7(b9)": {
    root: "G",
    type: "7(b9)",
    structure: ["1", "3", "5", "b7", "b9"],
    positions: [
      {
        fingers: "3,2,4,1,0,x",
        notes: ["G", "B", "F", "Ab", "B"],
        baseFret: 1,
      },
      {
        fingers: "1,x,1,2,1,3",
        notes: ["G", "F", "B", "D", "Ab"],
        baseFret: 5,
      },
      {
        fingers: "x,2,1,3,1,x",
        notes: ["G", "B", "F", "Ab"],
        baseFret: 5,
      },
      {
        fingers: "x,2,3,1,4,x",
        notes: ["B", "F", "Ab", "D"],
        baseFret: 5,
      },
      {
        fingers: "x,x,1,3,2,4",
        notes: ["Ab", "D", "F", "B"],
        baseFret: 5,
      },
      {
        fingers: "x,x,1,3,2,4",
        notes: ["F", "B", "D", "Ab"],
        baseFret: 5,
      },
      {
        fingers: "x,2,3,1,4,x",
        notes: ["Ab", "D", "F", "B"],
        baseFret: 5,
      },
      {
        fingers: "x,x,1,3,2,4",
        notes: ["B", "F", "Ab", "D"],
        baseFret: 5,
      },
      {
        fingers: "x,x,1,3,2,4",
        notes: ["D", "Ab", "B", "F"],
        baseFret: 5,
      },
      {
        fingers: "x,x,3,1,4,x",
        notes: ["B", "D", "Ab"],
        baseFret: 1,
      },
      {
        fingers: "3,1,2,x,4,x",
        notes: ["B", "D", "Ab", "G"],
        baseFret: 5,
      },
    ],
  },
  Gm9: {
    root: "G",
    type: "m9",
    structure: ["1", "b3", "5", "b7", "9"],
    positions: [
      {
        fingers: "3,1,4,2,x,x",
        notes: ["G", "Bb", "F", "A"],
        baseFret: 5,
      },
      {
        fingers: "1,3,1,1,1,4",
        notes: ["G", "D", "F", "Bb", "D", "A"],
        baseFret: 5,
      },
      {
        fingers: "x,2,1,3,4,x",
        notes: ["G", "Bb", "F", "A"],
        baseFret: 5,
      },
      {
        fingers: "2,x,3,3,3,4",
        notes: ["G", "F", "Bb", "D", "A"],
        baseFret: 1,
      },
    ],
  },
  "G13(b9)": {
    root: "G",
    type: "13(b9)",
    structure: ["1", "3", "5", "b7", "b9", "11", "13"],
    positions: [
      {
        fingers: "x,x,3,1,0,0",
        notes: ["F", "Ab", "B", "E"],
        baseFret: 1,
      },
      {
        fingers: "x,1,3,3,3,x",
        notes: ["F", "B", "E", "Ab"],
        baseFret: 5,
      },
      {
        fingers: "x,1,3,3,3,4",
        notes: ["F", "B", "E", "Ab", "D"],
        baseFret: 5,
      },
      {
        fingers: "x,x,1,2,4,3",
        notes: ["F", "B", "E", "Ab"],
        baseFret: 5,
      },
      {
        fingers: "3,x,4,1,0,0",
        notes: ["G", "F", "Ab", "B", "E"],
        baseFret: 1,
      },
    ],
  },
  Gsus4: {
    root: "G",
    type: "sus4",
    structure: ["1", "4", "5"],
    positions: [
      {
        fingers: "3,x,0,0,1,4",
        notes: ["G", "D", "G", "C", "G"],
        baseFret: 1,
      },
      {
        fingers: "1,1,3,4,1,1",
        notes: ["G", "C", "G", "C", "D", "G"],
        baseFret: 5,
      },
      {
        fingers: "x,1,2,3,4,1",
        notes: ["G", "D", "G", "C", "D"],
        baseFret: 5,
      },
      {
        fingers: "x,x,3,4,1,1",
        notes: ["G", "C", "D", "G"],
        baseFret: 5,
      },
    ],
  },
  "G6/9": {
    root: "G",
    type: "6/9",
    structure: ["1", "3", "5", "6", "9"],
    positions: [
      {
        fingers: "2,1,1,1,3,4",
        notes: ["G", "B", "E", "A", "D", "G"],
        baseFret: 5,
      },
      {
        fingers: "x,x,2,1,3,4",
        notes: ["G", "B", "E", "A"],
        baseFret: 5,
      },
      {
        fingers: "x,2,1,1,3,4",
        notes: ["G", "B", "E", "A", "D"],
        baseFret: 5,
      },
    ],
  },
};

type ChordPosition = {
  fingers: string;
  notes: string[];
  baseFret: number;
};

type ChordData = {
  root: string;
  type: string;
  structure: string[];
  positions: ChordPosition[];
};

type ChordFingers = {
  chord: string;
  root: string;
  type: string;
  structure: string[];
  positions: ChordPosition[];
};

const normalizeChordName = (name: string): string => {
  // A → Amaj
  if (/^[A-G](#|b)?$/.test(name)) {
    return `${name}maj`;
  }

  return name;
};

const getChordFingers = (chordNames: string[]): ChordFingers[] => {
  return chordNames
    .map((rawName) => {
      const name = normalizeChordName(rawName);
      const chord = chordFingers[name];

      if (!chord) return null;

      return {
        chord: rawName, // сохраняем исходное имя ("A")
        root: chord.root,
        type: chord.type,
        structure: chord.structure,
        positions: chord.positions,
      };
    })
    .filter(Boolean) as ChordFingers[];
};

export { chordFingers, getChordFingers };
