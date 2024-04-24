import "./styles/display.css"

const Display = ({ gameOver, text }) => {


    const displayStyle = {
        color: gameOver ? "red" : "#999"
    }

    return (
        <div className="display" style={displayStyle}>
            {text}
        </div>
    )
}

export default Display