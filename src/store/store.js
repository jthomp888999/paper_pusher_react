import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import { allReducers } from '../Reducers/';

const myMiddleware = [thunk];

export const store = createStore(
  allReducers,
  compose(
    applyMiddleware(...myMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
