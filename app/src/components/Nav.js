import React from "react";
// import Cart from "../components/Cart";

export default function Nav(props) {
  return (
    <nav>
      <div className="container">
        <span className="fas fa-bars fa-2x menuBtn" onClick={props.toggleMenu}></span>
        <h1 className="logo">
          Home<span>Hideaway</span>
        </h1>
        <span className="fas fa-shopping-cart fa-2x cartBtn" onClick={props.toggleCart}></span>
      </div>
    </nav>
  );
}
