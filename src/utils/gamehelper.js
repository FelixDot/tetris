export const STAGE_WIDTH = 12
export const STAGE_HEIGHT = 20

//creates a new, shallow-copied Array instance from an iterable or array-like object.
export const createStage = () => {
  return Array.from(Array(STAGE_HEIGHT), () => {
    //for each row create a new array cell that has no tetromino [0,"clear"]
    return new Array(STAGE_WIDTH).fill([0, "clear"])
  })
}

export const checkCollision = (player, stage, { x: moveX, y: moveY }) => {
  for (let y = 0; y < player.tetromino.length; y++) {
    for (let x = 0; x < player.tetromino[0].length; x++) {
      // check that player is on an actual tetromino cell
      if (player.tetromino[y][x] !== 0) {
        //1. check that tetromino is inside the game area height(y)
        //2. check that tetromino is inside the game area width(x)
        //3. check that the cell the player is moving to is not set to clear

        if (
          !stage[y + player.pos.y + moveY] ||
          !stage[y + player.pos.y + moveY][x + player.pos.x + moveX] ||
          stage[y + player.pos.y + moveY][x + player.pos.x + moveX][1] !==
            "clear"
        ) {
          return true
        }
      }
    }
  }
}
