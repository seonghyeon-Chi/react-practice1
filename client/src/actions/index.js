// action types
export const SET_XISNEXT = 'SET_XISNEXT';

//actions creator functions
export const setState = (xIsNext) => {
  return {
    type: SET_XISNEXT,
    payload: {
      xIsNext
    }
  }
}