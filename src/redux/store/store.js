import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { allReducers } from "../Reducers/";
import { loadState, saveState } from "./localStorage";

const persistedState = loadState();

const myMiddleware = [thunk];

export const store = createStore(
  allReducers,
  persistedState,
  composeWithDevTools(applyMiddleware(...myMiddleware))
);

store.subscribe(() => {
  saveState({
    auth: store.getState().auth
  });
});
