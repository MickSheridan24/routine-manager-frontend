import { combineReducers } from "redux";
import routinesReducer from "./routinesReducer";

const rootReducer = combineReducers({
  routines: routinesReducer,
});
export default rootReducer;
