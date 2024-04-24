import { createStage } from "../utils/gamehelper"
import Display from "./Display"
import Stage from "./Stage"
import StarButton from "./StartButton"
import "./styles/tetris.css"

const Tetris = () => {
    const stage = createStage()
    return (
        <div className="tetrisWrapper">
            <div className="stageWrapper">
                <Stage stage={stage} />
                <aside className="tetrisInfo">
                    <div>
                        <Display text="Score" />
                        <Display text="Rows" />
                        <Display text="Level" />
                    </div>
                    <StarButton />
                </aside>
            </div>
        </div>)
}

export default Tetris