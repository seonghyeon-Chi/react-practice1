import { Square } from "./Square";
import { useDispatch, useSelector } from 'react-redux'
import { setXIsNext, setBoard } from '../actions'

function Board () {
  const xIsNextState = useSelector(state => state.xIsNextReducer)
  const boardState = useSelector(state => state.boardReducer)
  const { xIsNext } = xIsNextState
  const { board } = boardState
  const dispatch = useDispatch();

  const status = 'Next player: ' + (xIsNext ? 'X' : 'O')

  const handleClick = (i) => {
    const squares = board.slice();
    squares[i] = xIsNext ? 'X' : 'O'
    dispatch(setBoard(squares))
    dispatch(setXIsNext(!xIsNext))
  }
  
  const renderSquare = (i) => {
    return (
      <Square 
        board={board[i]}
        handleClick={() => handleClick(i)}
      />
    )
  }

  return (
    <div>
      <div className='status'>{status}</div>
      <div className='board-row'>
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className='board-row'>
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className='board-row'>
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  )
}

export default Board