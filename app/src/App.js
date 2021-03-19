import React, { useState } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { useLocalStorage } from './hooks/useLocalStorage';
import StoreContext from './contexts/StoreContext';

import Layout from './components/Layout';
import Home from './components/Home';
import Bedroom from './components/Bedroom';
import Furniture from './components/Furniture';
import AllProducts from './components/AllProducts';

function App() {
  const [menuHidden, setMenuHidden] = useState(true);
  const [cartHidden, setCartHidden] = useState(true);

  const [cartContents, setCartContents] = useLocalStorage('cartContents', []);

  const hideAll = () => {
    setMenuHidden(true);
    setCartHidden(true);
  };

  return (
    <StoreContext.Provider
      value={{
        hideAll,
        cartContents,
        setCartContents,
        menuHidden,
        setMenuHidden,
        cartHidden,
        setCartHidden,
      }}>
      <BrowserRouter>
        <Layout>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/bedroom">
            <Bedroom />
          </Route>
          <Route path="/furniture">
            <Furniture />
          </Route>
          <Route path="/all">
            <AllProducts />
          </Route>
        </Layout>
      </BrowserRouter>
    </StoreContext.Provider>
  );
}

export default App;
