import React, { useState } from "react";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Main from "./components/Main";
import Menu from "./components/Menu";

function App() {
  const [menuHidden, setMenuHidden] = useState(true);
  const [menuClass, setMenuClass] = useState("hide");
  // const [cartHidden, setCartHidden] = useState(true);

  const toggleMenu = () => {
    console.log(`Menu button clicked!`, menuHidden);
    if (!menuHidden) {
      setMenuClass("hide");
      setMenuHidden(!menuHidden);
    } else {
      setMenuClass("");
      setMenuHidden(!menuHidden);
    }
  };

  return (
    <div>
      <Nav toggleMenu={toggleMenu} />
      <Menu className={menuClass} />
      <Header />
      <Main />
    </div>
  );
}

export default App;
