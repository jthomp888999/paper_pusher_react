import { combineReducers } from "redux";
import auth from "./authReducer";

export const allReducers = combineReducers({
  auth
});
