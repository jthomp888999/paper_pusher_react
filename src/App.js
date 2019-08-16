import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store/store';
import AppLayout from './Layout/Layout';
import { BrowserRouter } from 'react-router-dom';

import Routes from './Routes/Routes';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <AppLayout>
            <Routes />
          </AppLayout>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
