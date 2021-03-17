import React, { useContext } from 'react';
import storeContext from '../contexts/StoreContext';

export default function Cart(props) {
  const { cartContents, setCartContents } = useContext(storeContext);

  const noItems = (
    <div className="cartItem">
      <p>You have no items in your cart</p>
    </div>
  );

  const deleteItem = (index) => {
    // console.log("delete click, index:", index);
    const cart = cartContents;
    cart.splice(index, 1);
    setCartContents([...cart]);
  };

  const displayCart = cartContents.map((item, index) => (
    <div className="cartItem" key={index}>
      <p className="itemTitle">{item.title}</p>
      <p className="itemText">${item.price}</p>
      <button className="cartBtn" onClick={() => deleteItem(index)}>
        X
      </button>
    </div>
  ));
  const cartTotal = () => {
    let total = 0;
    cartContents.forEach((item) => {
      total += item.price;
    });
    return (
      <div className="cartItem" style={{ border: 0 }}>
        {/* <p>Your total is ${Number(total).toFixed(2)}</p> */}
        <p className="itemTitle">Total</p>
        <p className="itemText">${Number(total).toFixed(2)}</p>
      </div>
    );
  };

  return (
    <div className={`cart ${props.className}`}>
      <h1>Shopping Cart</h1>
      <hr />
      {cartContents.length === 0 ? noItems : displayCart}
      {cartTotal()}
      <button className="checkoutBtn">Checkout Now</button>
    </div>
  );
}
