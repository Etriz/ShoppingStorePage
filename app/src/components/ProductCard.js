import React, { useContext } from 'react';
import storeContext from '../contexts/StoreContext';
import { useHistory } from 'react-router-dom';

export default function ProductCard({ product }) {
  const { cartContents, setCartContents } = useContext(storeContext);
  const history = useHistory();

  const productId = product.sys.id;
  const productImage = product.image.url;
  const productTitle = product.title.toUpperCase();
  const productPrice = product.price;

  const viewProduct = () => {
    history.push(`/products/${productId}`);
  };
  const addToCart = () => {
    const productToAdd = { id: productId, title: productTitle, price: productPrice };
    setCartContents([...cartContents, productToAdd]);
    console.log(`Added ${productTitle} to cart`);
  };

  return (
    <div className="card" key={productId}>
      <img src={productImage} alt={productTitle} />
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
