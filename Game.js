const Board = () => {
    const [player, setPlayer] = React.useState(1) //x
    let status = `Player: ${player}`
    return (
        <div className="game-board" 
        onClick = {()=>{
            if (player == 0){setPlayer(1)}
            else {setPlayer(0)}
            
            status = `Player ${player}`
        }}
        >
            <div id="info">
                <h1> {status} </h1>
            </div>
        </div>
    )
}

ReactDOM.render(<Board />, document.getElementById('root'))