import { SET_BOARD } from "../actions"; 
import { initialState } from "./initialState";

const boardReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_BOARD:
      return Object.assign({}, state, {
        board: action.payload.board
      });
    default:
      return state;
  }
};

export default boardReducer;