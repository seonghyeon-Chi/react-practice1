
function Square ({board, handleClick}) {
  return (
    <button className='square' onClick={handleClick}>
      {board}
    </button>
  )
}

export {Square}