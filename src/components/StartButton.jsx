import "./styles/startButton.css"
const StarButton = ({ onClick }) => {
    return (
        <button className='startButton' onClick={onClick}>
            Start Game
        </button>
    )
}

export default StarButton