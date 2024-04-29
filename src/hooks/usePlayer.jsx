import { useCallback, useState } from "react";
import { TETROMINOS, getRandomTetromino } from "../utils/tetrominos";
import { STAGE_WIDTH, checkCollision } from "../utils/gamehelper";

export const usePlayer = () => {
    const [player, setPlayer] = useState({
        pos: { x: 0, y: 0 },
        tetromino: TETROMINOS[0].shape,
        collided: false,
    })

    const updatePlayerPos = ({ x, y, collided }) => {
        setPlayer(prev => ({
            ...prev,
            pos: { x: prev.pos.x + x, y: prev.pos.y + y },
            collided
        }))
    }

    const rotate = (tetrominoMatrix, direction) => {
        /*
          The outer .map() function iterates over each row of the array
          A new array representing the transposed column is created for each row
        */
        const rotateTetro = tetrominoMatrix.map((_, rowIndex) => tetrominoMatrix.map(col => {
            /* 
              col is the current column (an array of values)
              col[rowIndex] selects the element at the position rowIndex from the current column
              Since rowIndex is the current row number, in the first iteration of the outer .map() function we select
              the first element of each column, in the second iteration the second element of each column and so on
              This results in a transposition of the array, where rows become columns and columns become rows
            */
            return col[rowIndex]
        }
        ))
        if (direction > 0) return rotateTetro.map(row => row.reverse())
        return rotateTetro.reverse()
    }

    const playerRotate = (stage, direction) => {
        //get deep copy of player
        const clonedPlayer = JSON.parse(JSON.stringify(player))
        clonedPlayer.tetromino = rotate(clonedPlayer.tetromino, direction)

        //check collision when rotating 
        const pos = clonedPlayer.pos.x
        let offset = 1
        while (checkCollision(clonedPlayer, stage, { x: 0, y: 0 })) {
            clonedPlayer.pos.x += offset
            // make left and right movement to check for possible collision on rotation
            offset = -(offset + (offset > 0 ? 1 : -1))
            if (offset > clonedPlayer.tetromino[0].length) {
                //rotate back
                rotate(clonedPlayer.tetromino, -direction)
                clonedPlayer.pos.x = pos
                return
            }
        }
        setPlayer(clonedPlayer)

    }

    const resetPlayer = useCallback(() => {
        setPlayer({
            pos: { x: STAGE_WIDTH / 2 - 2, y: 0 },
            tetromino: getRandomTetromino().shape,
            collided: false
        })
    }, [])

    return [player, updatePlayerPos, resetPlayer, playerRotate]
}