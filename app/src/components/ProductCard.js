import React from "react";

export default function ProductCard(props) {
  const product = props.product;
  const cartContents = props.cartContents;
  const setCartContents = props.setCartContents;

  const productKey = product.sys.id;
  const productImage = product.fields.image.fields.file.url;
  const productTitle = product.fields.title.toUpperCase();
  const productPrice = product.fields.price;

  const addToCart = () => {
    const productToAdd = [productTitle, productPrice];
    setCartContents([...cartContents, productToAdd]);
    console.log("Added to cart");
  };

  return (
    <div className="card" key={productKey}>
      <img src={productImage} alt="product" />
      <h1>{productTitle}</h1>
      <div className="infoPanel">
        <div className="btnGrp">
          <button className="viewBtn">View</button>
          <button className="cartBtn" onClick={addToCart}>
            Add To Cart
          </button>
        </div>
        <div className="price">Price: ${productPrice}</div>
      </div>
    </div>
  );
}
