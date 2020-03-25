import React from "react";
import Menu from "../components/Menu";
import Cart from "../components/Cart";

export default function Header() {
  return (
    <nav>
      <div className="container">
        <span className="menuBtn">Menu</span>
        <h1 className="logo">HomeHideaway</h1>
        <span className="cartBtn">Cart</span>
      </div>
    </nav>
  );
}