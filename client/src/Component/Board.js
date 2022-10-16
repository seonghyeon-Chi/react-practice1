import {useState} from 'react';
import {Square} from "./Square";
import { useDispatch, useSelector } from 'react-redux'
import { setState } from '../actions'

function Board () {
  const [board, setBoard] = useState(Array(9).fill(null))
  const xIsNextState = useSelector(state => state.xIsNextReducer)
  const { xIsNext } = xIsNextState
  const dispatch = useDispatch();

  const status = 'Next player: ' + (xIsNext ? 'X' : 'O')

  const handleClick = (i) => {
    const squares = board.slice();
    squares[i] = xIsNext ? 'X' : 'O'
    setBoard(squares)
    dispatch(setState(!xIsNext))
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