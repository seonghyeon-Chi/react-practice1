import { SET_XISNEXT } from "../actions/index";
import { initialState } from "./initialState";

const xIsNextReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_XISNEXT:
      return Object.assign({}, state, {
        xIsNext: action.payload.xIsNext
      });
    default:
      return state;
  }
};

export default xIsNextReducer;