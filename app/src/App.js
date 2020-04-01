import React, { useState } from "react";
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

  const toggleMenu = () => {
    console.log(`Menu button clicked!`, menuHidden);
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
    console.log(`Cart button clicked!`, cartHidden);
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
    <div>
      <Nav toggleMenu={toggleMenu} toggleCart={toggleCart} />
      <Menu className={menuClass} />
      <Cart className={cartClass} />
      <Header />
      <Main />
    </div>
  );
}

export default App;
