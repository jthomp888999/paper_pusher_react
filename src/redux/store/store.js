import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { allReducers } from '../Reducers/';
import { loadState, saveState } from './localStorage';

const persistedState = loadState();

const myMiddleware = [thunk];

export const store = createStore(
  allReducers,
  persistedState,
  compose(
    applyMiddleware(...myMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

store.subscribe(() => {
  saveState({
    auth: store.getState().auth
  });
});
