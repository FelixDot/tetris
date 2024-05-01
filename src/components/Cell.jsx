import { React } from 'react';

import { TETROMINOS } from "../utils/tetrominos";

const Cell = ({ type }) => {
    const cellColor = TETROMINOS[type].color;

    const cellStyle = {
        width: "auto",
        backgroundColor: `rgba(${cellColor}, 0.8)`,
        border: type === 0 ? "0px" : "4px solid",
        borderBottom: `4px solid rgba(${cellColor}, 0.1)`,
        borderRight: `4px solid rgba(${cellColor}, 1)`,
        borderLeft: `4px solid rgba(${cellColor}, 1)`,
        borderTop: `4px solid rgba(${cellColor}, 0.3)`,
    }

    return (
        <div className="cell" style={cellStyle}>
        </div>
    )
}

export default Cell