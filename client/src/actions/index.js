// action types
export const SET_XISNEXT = 'SET_XISNEXT';
export const SET_BOARD = 'SET_BOARD'

//actions creator functions
export const setXIsNext = (xIsNext) => {
  return {
    type: SET_XISNEXT,
    payload: {
      xIsNext
    }
  }
}
export const setBoard = (board) => {
  return {
    type: SET_BOARD,
    payload: {
      board
    }
  }
}