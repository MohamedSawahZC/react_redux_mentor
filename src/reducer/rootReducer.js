import { combineReducers } from "redux";
import { reducerCounter } from "./reducer";
import { reducerAuth } from "./reducerAuth";
export const rootReducer = combineReducers({
  Counter: reducerCounter,
  Auth: reducerAuth,
});
