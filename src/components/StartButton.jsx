import "./styles/startButton.css"
const StarButton = ({ callback }) => {
    return (
        <button className='startButton' onClick={callback}>
            Start Game
        </button>
    )
}

export default StarButton