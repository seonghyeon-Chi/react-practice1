import { combineReducers } from "redux";
import xIsNextReducer from "./xIsNextReducer";
import boardReducer from './boardReducer'


const rootReducer = combineReducers({
  boardReducer,
  xIsNextReducer
})

export default rootReducer;