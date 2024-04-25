import Display from "./Display"
import Stage from "./Stage"
import StarButton from "./StartButton"
import { useState } from "react"
import { usePlayer } from "../hooks/usePlayer"
import { useStage } from "../hooks/useStage"
import { createStage } from "../utils/gamehelper"

import "./styles/tetris.css"
import { getRandomTetromino } from "../utils/tetrominos"

const Tetris = () => {
    const [dropTime, setDropTime] = useState(null)
    const [gameOver, setGameOver] = useState(false)

    const [player, updatePlayerPos, resetPlayer] = usePlayer()
    console.log(getRandomTetromino())
    const [stage, setStage] = useStage(player)


    const movePlayer = (direction) => {
        updatePlayerPos({ x: direction, y: 0 })
    }

    const startGame = () => {
        setStage(createStage())
        console.log('start')
        resetPlayer()
    }

    const drop = () => {
        updatePlayerPos({ x: 0, y: 1, collided: false })

    }

    const dropPlayer = () => {
        drop()
    }

    const move = ({ keyCode }) => {
        if (!gameOver) {
            if (keyCode === 37) {
                movePlayer(-1)
            } else if (keyCode === 39) {
                movePlayer(1)
            } else if (keyCode === 40) {
                dropPlayer()
            }
        }
    }
    return (
        <div className="tetrisWrapper" role="button" tabIndex={0} onKeyDown={e => move(e)}>
            <div className="stageWrapper">
                <Stage stage={stage} />
                <aside className="tetrisInfo">
                    {gameOver ? (
                        <Display text="Game Over" gameOver={gameOver} />) :
                        (
                            <div>
                                <Display text="Score" />
                                <Display text="Rows" />
                                <Display text="Level" />
                            </div>
                        )}
                    <StarButton onClick={startGame} />
                </aside>
            </div>
        </div>
    )
}

export default Tetris