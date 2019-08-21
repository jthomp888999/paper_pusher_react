<<<<<<< HEAD
import React from "react";
import { Provider } from "react-redux";
import { store } from "./redux/store/store";
import { BrowserRouter } from "react-router-dom";
=======
import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store/store';
import { BrowserRouter } from 'react-router-dom';
>>>>>>> c0a9425ea8813aaa30c6902b3d042750154b7a38

import Routes from "./Routes/Routes";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
<<<<<<< HEAD
          <Routes />
=======
            <Routes />
>>>>>>> c0a9425ea8813aaa30c6902b3d042750154b7a38
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
