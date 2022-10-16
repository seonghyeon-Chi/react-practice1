import {useState} from 'react'

function Square ({board, handleClick}) {
  return (
    <button className='square' onClick={handleClick}>
      {board}
    </button>
  )
}

export {Square}