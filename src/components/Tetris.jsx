import Display from "./Display"
import Stage from "./Stage"
import StarButton from "./StartButton"
import { useState } from "react"

import { usePlayer } from "../hooks/usePlayer"
import { useStage } from "../hooks/useStage"
import { useInterval } from "../hooks/useInterval"
import { useGameStatus } from "../hooks/useGameStatus"

import { checkCollision, createStage } from "../utils/gamehelper"

import "./styles/tetris.css"

const Tetris = () => {
    const [dropTime, setDropTime] = useState(null)
    const [gameOver, setGameOver] = useState(false)

    const [player, updatePlayerPos, resetPlayer, playerRotate] = usePlayer()
    const [stage, setStage, rowsCleared] = useStage(player, resetPlayer)
    const [score, setScore, rows, setRows, level, setLevel] = useGameStatus(rowsCleared)


    const movePlayer = (direction) => {
        if (!checkCollision(player, stage, { x: direction, y: 0 })) {
            updatePlayerPos({ x: direction, y: 0 })
        }
    }

    const startGame = () => {
        setStage(createStage())
        setDropTime(1000)
        resetPlayer()
        setGameOver(false)
        setScore(0)
        setRows(0)
        setLevel(0)
    }

    const drop = () => {
        // increase level when player has cleared 10 rows
        if (rows > (level + 1) * 10) {
            setLevel(prev => prev + 1)
            //increase drop speed
            setDropTime(1000 / (level + 1) + 200)
        }
        if (!checkCollision(player, stage, { x: 0, y: 1 })) {
            updatePlayerPos({ x: 0, y: 1, collided: false })
        } else {
            // game over 
            if (player.pos.y < 1) {
                setGameOver(true)
                setDropTime(null)


            }
            updatePlayerPos({ x: 0, y: 0, collided: true })
        }
    }

    const keyUp = ({ keyCode }) => {
        if (!gameOver) {
            if (keyCode === 40) {
                setDropTime(1000 / (level + 1) + 200)
            }
        }
    }

    const dropPlayer = () => {
        setDropTime(null)
        drop()
    }

    const move = ({ keyCode }) => {
        if (!gameOver) {
            //left arrow key
            if (keyCode === 37) {
                movePlayer(-1)
            }
            //right arrow key
            else if (keyCode === 39) {
                movePlayer(1)
            }
            //down arrow key
            else if (keyCode === 40) {
                dropPlayer()
            }
            //up arrow key 
            else if (keyCode === 38) {
                //rotate right
                playerRotate(stage, 1)
            }
            //z key
            else if (keyCode === 90) {
                //rotate left
                playerRotate(stage, -1)
            }
        }
    }

    useInterval(() => {
        drop()
    }, dropTime)


    return (
        <div className="tetrisWrapper" role="button" tabIndex={0} onKeyDown={e => move(e)} onKeyUp={keyUp}>
            <div className="stageWrapper">
                <Stage stage={stage} />
                <aside className="tetrisInfo">
                    {gameOver ? (
                        <Display text="Game Over" gameOver={gameOver} />) :
                        (
                            <div>
                                <Display text={`Score: ${score}`} />
                                <Display text={`Rows: ${rows}`} />
                                <Display text={`Level: ${level}`} />
                            </div>
                        )}
                    <StarButton onClick={startGame} />
                </aside>
            </div>
        </div>
    )
}

export default Tetris