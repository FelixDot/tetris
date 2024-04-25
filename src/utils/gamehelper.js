export const STAGE_WIDTH = 12
export const STAGE_HEIGHT = 20

//creates a new, shallow-copied Array instance from an iterable or array-like object.
export const createStage = () => {
  return Array.from(Array(STAGE_HEIGHT), () => {
    //for each row create a new array cell that has no tetromino [0,"clear"]
    return new Array(STAGE_WIDTH).fill([0, "clear"])
  })
}
