import { useState, useEffect } from "react";
import { createStage } from "../utils/gamehelper"

export const useStage = (player, resetPlayer) => {
    const [stage, setStage] = useState(createStage())
    const [rowsCleared, setRowsCleared] = useState(0)

    useEffect(() => {
        setRowsCleared(0)
        const spweepRows = newStage => {
            return newStage.reduce((ack, row) => {
                //check if a row contains cells that are "merged" by checking if cell doesn't contains 0 
                if (row.findIndex(cell => cell[0] === 0) === -1) {
                    setRowsCleared(prev => prev + 1)

                    //add new empty rows  
                    ack.unshift(new Array(newStage[0].length).fill([0, "clear"]))
                    return ack
                }
                ack.push(row)
                return ack
            }, [])
        }
        const updateStage = prev => {
            //flush the stage
            const newStage = prev.map(row =>
                row.map(cell => (cell[1] === 'clear' ? [0, 'clear'] : cell))
            )

            //draw tetromino
            player.tetromino.forEach((row, y) => {
                row.forEach((value, x) => {
                    if (value !== 0) {
                        newStage[y + player.pos.y][x + player.pos.x] = [
                            value,
                            `${player.collided ? 'merged' : 'clear'}`,
                        ]
                    }
                })
            });
            //check collison
            if (player.collided) {
                resetPlayer()
                return spweepRows(newStage)
            }
            return newStage
        }
        setStage(prev => updateStage(prev))
    }, [player, resetPlayer])

    return [stage, setStage]
}