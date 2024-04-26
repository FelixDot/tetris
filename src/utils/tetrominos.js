export const TETROMINOS = {
  0: { shape: [[0]], color: "0,0,0" },
  I: {
    shape: [
      [0, "I", 0, 0],
      [0, "I", 0, 0],
      [0, "I", 0, 0],
      [0, "I", 0, 0],
    ],
    //blue
    color: "80,227,230",
  },
  J: {
    shape: [
      [0, "J", 0],
      [0, "J", 0],
      ["J", "J", 0],
    ],
    //pink
    color: "245, 30, 240",
  },
  L: {
    shape: [
      [0, "L", 0],
      [0, "L", 0],
      [0, "L", "L"],
    ],
    //orange
    color: "245, 160, 30",
  },
  O: {
    shape: [
      ["O", "O"],
      ["O", "O"],
    ],
    //green
    color: "60, 179, 113",
  },
  S: {
    shape: [
      [0, "S", "S"],
      ["S", "S", 0],
      [0, 0, 0],
    ],
    //red
    color: "225, 25, 25",
  },
  Z: {
    shape: [
      ["Z", "Z", 0],
      [0, "Z", "Z"],
      [0, 0, 0],
    ],
    // yellow
    color: "250, 235, 25",
  },
  T: {
    shape: [
      ["T", "T", "T"],
      [0, "T", 0],
      [0, 0, 0],
    ],

    // purple
    color: "90, 15, 155",
  },
}

export const getRandomTetromino = () => {
  const tetrominos = "IOJLSZT"
  const randomTetromino =
    tetrominos[Math.floor(Math.random() * tetrominos.length)]

  return TETROMINOS[randomTetromino]
}
