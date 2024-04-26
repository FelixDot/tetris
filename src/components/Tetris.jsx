import Display from "./Display"
import Stage from "./Stage"
import StarButton from "./StartButton"
import { useState } from "react"
import { usePlayer } from "../hooks/usePlayer"
import { useStage } from "../hooks/useStage"
import { checkCollision, createStage } from "../utils/gamehelper"

import "./styles/tetris.css"
import { getRandomTetromino } from "../utils/tetrominos"

const Tetris = () => {
    const [dropTime, setDropTime] = useState(null)
    const [gameOver, setGameOver] = useState(false)

    const [player, updatePlayerPos, resetPlayer] = usePlayer()
    console.log(getRandomTetromino())
    const [stage, setStage] = useStage(player, resetPlayer)


    const movePlayer = (direction) => {
        if (!checkCollision(player, stage, { x: direction, y: 0 })) {
            updatePlayerPos({ x: direction, y: 0 })
        }
    }

    const startGame = () => {
        setStage(createStage())
        resetPlayer()
        setGameOver(false)
    }

    const drop = () => {
        if (!checkCollision(player, stage, { x: 0, y: 1 })) {
            updatePlayerPos({ x: 0, y: 1, collided: false })
        } else {
            // game over 
            if (player.pos.y < 1) {
                console.log(gameOver)
                setGameOver(true)
                setDropTime(null)


            }
            updatePlayerPos({ x: 0, y: 0, collided: true })
        }
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