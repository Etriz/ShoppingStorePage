import React from "react";

export default function Cart(props) {
  const cart = props.cartContents;

  const displayCart = cart.map(item => (
    <div className="cartItem">
      <p>{item[0]}</p>
      <p>{item[1]}</p>
      <hr></hr>
    </div>
  ));

  return (
    <div className={`cart ${props.className}`}>
      <h1>Shopping Cart</h1>
      <hr></hr>
      {displayCart}
    </div>
  );
}
