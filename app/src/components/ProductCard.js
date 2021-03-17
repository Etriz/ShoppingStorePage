import React, { useContext } from 'react';
import storeContext from '../contexts/StoreContext';

// import Modal from "../components/Modal";

export default function ProductCard({ product }) {
  const { cartContents, setCartContents } = useContext(storeContext);

  const productKey = product.sys.id;
  const productImage = product.fields.image.fields.file.url;
  const productTitle = product.fields.title.toUpperCase();
  const productPrice = product.fields.price;

  const viewProduct = () => {};
  const addToCart = () => {
    const productToAdd = { id: productKey, title: productTitle, price: productPrice };
    setCartContents([...cartContents, productToAdd]);
    console.log(`Added ${productTitle} to cart`);
  };

  return (
    <div className="card" key={productKey}>
      <img src={productImage} alt="product" />
      <h1>{productTitle}</h1>
      <div className="infoPanel">
        <div className="btnGrp">
          <button className="viewBtn" onClick={viewProduct}>
            View
          </button>
          <button className="cartBtn" onClick={addToCart}>
            Add To Cart
          </button>
        </div>
        <div className="price">Price: ${productPrice}</div>
      </div>
    </div>
  );
}
