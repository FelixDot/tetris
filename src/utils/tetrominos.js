export const TETROMINOS = {
  0: { shape: [[0]], color: "0,0,0" },
  I: {
    shape: [
      [0, "I", 0, 0],
      [0, "I", 0, 0],
      [0, "I", 0, 0],
      [0, "I", 0, 0],
    ],
    color: "80,227,230",
  },
  J: {
    shape: [
      [0, "J", 0, 0],
      [0, "J", 0, 0],
      ["J", "J", 0, 0],
    ],
    color: "245, 30, 240",
  },
  L: {
    shape: [
      [0, "L", 0, 0],
      [0, "L", 0, 0],
      [0, "L", "L", 0],
    ],
    color: "245, 160, 30",
  },
  O: {
    shape: [
      [0, "O", "O", 0],
      [0, "O", "O", 0],
    ],
    color: "0,0,0",
  },
  S: {
    shape: [
      [0, 0, "S", 0],
      [0, "S", "S", 0],
      ["S", "S", 0, 0],
    ],
    color: "225, 25, 25",
  },
  Z: {
    shape: [
      [0, 0, "Z", 0],
      [0, "Z", "Z", 0],
      ["Z", "Z", 0, 0],
    ],
    color: "250, 235, 25",
  },
  T: {
    shape: [
      [0, 0, "T", 0],
      [0, "T", "T", 0],
      ["T", "T", 0, 0],
    ],
    color: "90, 15, 155",
  },
}

export const getRandomTetromino = () => {
  const tetrominos = "IOJLSZT"
  const randomTetromino =
    tetrominos[Math.floor(Math.random() * tetrominos.length)]

  return randomTetromino
}
