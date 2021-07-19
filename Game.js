const Square = ({id, player, setPlayer}) => {
    const [symbol, setSymbol] = React.useState()

    return (
        <button onClick={(e)=>{
            setPlayer((player+1)%2)
            if (player == 1) {setSymbol('X')}
            else {setSymbol('O')}
            
        }}>
            <h1>{symbol}</h1>
        </button>
    )
}


const Board = () => {
    const [player, setPlayer] = React.useState(1) //x
    const [mounted, setMounted] = React.useState(true)
    let status = `Player: ${player}`
    const toggle = () => setMounted(!mounted)
    function renderSquare(i){
        return <Square id={i} player={player} setPlayer={setPlayer}></Square>
    }
    return (
        <div className="game-board">
            <div className="grid-row">
                {mounted && renderSquare(0)}
                {mounted && renderSquare(1)}
                {mounted && renderSquare(2)}
            </div>
            <div id="info">
            <button onClick={toggle}>Show/Hide Row</button>
                <h1> {status} </h1>
            </div>
        </div>
    )
}

ReactDOM.render(<Board />, document.getElementById('root'))

// onClick = {(e)=>{
//     setPlayer((player + 1)%2)
//     status = `Player ${player}`

// }}