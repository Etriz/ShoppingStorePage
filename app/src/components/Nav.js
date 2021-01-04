import React, { useContext } from "react";
import storeContext from "../contexts/StoreContext";

export default function Nav() {
  const { toggleCart } = useContext(storeContext);
  // const {  toggleMenu } = useContext(storeContext);

  return (
    <nav>
      <div className="container">
        {/* <span className="fas fa-bars fa-2x menuBtn" onClick={toggleMenu}></span> */}
        <h1 className="logo">
          Home<span>Hideaway</span>
        </h1>
        <span className="fas fa-shopping-cart fa-2x cartBtn" onClick={toggleCart}></span>
      </div>
    </nav>
  );
}
