import React from "react";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Main from "./components/Main";
import Menu from "./components/Menu";
import className from "classnames";

function App() {
  const toggleMenu = () => {
    const menuClass = className("hide");
    console.log(`Menu button clicked!`);
    return menuClass;
  };

  return (
    <div>
      <Nav toggleMenu={toggleMenu} />
      <Menu toggleMenu={toggleMenu} />
      <Header />
      <Main />
    </div>
  );
}

export default App;
