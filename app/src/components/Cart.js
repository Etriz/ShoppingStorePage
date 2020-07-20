import React, { useContext } from "react";
import storeContext from "../contexts/StoreContext";

export default function Cart(props) {
  const { cartContents } = useContext(storeContext);

  const noItems = (
    <div className="cartItem">
      <p>You have no items in your cart</p>
    </div>
  );

  const deleteItem = (id) => {
    cartContents.filter((item) => item.sys.id !== id);
  };

  const displayCart = cartContents.map((item) => (
    <div className="cartItem" key={item.sys.id}>
      <p>{item.title}</p>
      <p>{item.price}</p>
      <span onClick={() => deleteItem(item.sys.id)}>X</span>
      <hr />
    </div>
  ));
  const cartTotal = () => {
    let total = 0;
    cartContents.forEach((item) => {
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
      {cartContents.length === 0 ? noItems : displayCart}
      {cartTotal()}
    </div>
  );
}
