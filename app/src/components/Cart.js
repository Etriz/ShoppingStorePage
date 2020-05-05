import React from "react";

export default function Cart(props) {
  const cart = props.cartContents;

  const noItems = (
    <div className="cartItem">
      <p>You have no items in your cart</p>
    </div>
  );

  const displayCart = cart.map((item, index) => (
    <div className="cartItem" key={index}>
      <p>{item.title}</p>
      <p>{item.price}</p>
      <hr />
    </div>
  ));
  const cartTotal = () => {
    let total = 0;
    cart.forEach((item) => {
      total += item.price;
    });
    return (
      <div className="cartItem">
        <p>Your total is ${total}</p>
      </div>
    );
  };

  return (
    <div className={`cart ${props.className}`}>
      <h1>Shopping Cart</h1>
      <hr />
      {cart.length === 0 ? noItems : displayCart}
      {cartTotal()}
    </div>
  );
}
