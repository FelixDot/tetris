import Cell from "./Cell"


const Stage = ({ stage }) => {
    const width = stage[0].length;
    const height = stage.length
    const stageStyle = {
        display: "grid",
        gridTemplateRows: `repeat(${height}, calc(25vw / ${width}))`,
        gridTemplateColumns: `repeat( ${width}, 1fr)`,
        border: "2px solid #333",
        gridGap: "1px",
        width: "100%",
        maxWidth: "25vw",
        background: "#111"
    }

    return (
        <div style={stageStyle}>
            {stage.map(row => row.map((cell, x) => <Cell key={x} type={cell[0]}></Cell>))}
        </div>
    )
}

export default Stage