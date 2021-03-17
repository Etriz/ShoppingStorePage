import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { useLocalStorage } from './hooks/useLocalStorage';
import StoreContext from './contexts/StoreContext';

import Layout from './components/Layout';
import Home from './components/Home';
import Main from './components/Main';

function App() {
  const [cartContents, setCartContents] = useLocalStorage('cartContents', []);

  return (
    <StoreContext.Provider value={{ cartContents, setCartContents }}>
      <BrowserRouter>
        <Layout>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/bedroom">
            <Main />
          </Route>
        </Layout>
      </BrowserRouter>
    </StoreContext.Provider>
  );
}

export default App;
