import React from "react";
// import Cart from "../components/Cart";

export default function Nav(props) {
  return (
    <nav>
      <div className="container">
        <span className="menuBtn" onClick={props.toggleMenu}>
          Menu
        </span>
        <h1 className="logo">HomeHideaway</h1>
        <span className="cartBtn">Cart</span>
      </div>
    </nav>
  );
}
