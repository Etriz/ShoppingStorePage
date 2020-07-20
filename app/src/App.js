import React, { useState } from "react";
import { useLocalStorage } from "./hooks/useLocalStorage";
import StoreContext from "./contexts/StoreContext";

import Nav from "./components/Nav";
import Header from "./components/Header";
import Main from "./components/Main";
import Menu from "./components/Menu";
import Cart from "./components/Cart";

function App() {
  const [menuHidden, setMenuHidden] = useState(true);
  const [menuClass, setMenuClass] = useState("hide");

  const [cartHidden, setCartHidden] = useState(true);
  const [cartClass, setCartClass] = useState("hide");

  // const [cartContents, setCartContents] = useState([]);
  const [cartContents, setCartContents] = useLocalStorage("cartContents", []);

  const toggleMenu = () => {
    if (!menuHidden) {
      setMenuClass("hide");
      setMenuHidden(!menuHidden);
    } else {
      setMenuClass("");
      setMenuHidden(!menuHidden);
      setCartClass("hide");
      setCartHidden(true);
    }
  };

  const toggleCart = () => {
    if (!cartHidden) {
      setCartClass("hide");
      setCartHidden(!cartHidden);
    } else {
      setCartClass("");
      setCartHidden(!cartHidden);
      setMenuClass("hide");
      setMenuHidden(true);
    }
  };

  return (
    <StoreContext.Provider value={{ cartContents, setCartContents }}>
      <div>
        <Nav toggleMenu={toggleMenu} toggleCart={toggleCart} />
        <Menu className={menuClass} />
        <Cart className={cartClass} />
        <Header />
        <Main cartContents={cartContents} setCartContents={setCartContents} />
      </div>
    </StoreContext.Provider>
  );
}

export default App;
