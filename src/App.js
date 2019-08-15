import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store/store';
import Layout from './Layout/Layout';
import { BrowserRouter } from 'react-router-dom';

import Routes from './Routes/Routes';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <Layout>
            <Routes />
          </Layout>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
