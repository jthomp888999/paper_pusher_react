import React from 'react';
import Layout from './Layout/Layout';
import { BrowserRouter } from 'react-router-dom';

import Routes from './Routes/Routes';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Layout>
          <Routes />
        </Layout>
      </div>
    </BrowserRouter>
  );
}

export default App;
