import React from "react";

export default function ProductCard(props) {
  const product = props.product;
  const cartContents = props.cartContents;
  const setCartContents = props.setCartContents;

  const addToCart = () => {
    const productToAdd = [product.fields.title.toUpperCase(), product.fields.price];
    setCartContents([...cartContents, productToAdd]);
    console.log("Added to cart");
  };

  return (
    <div className="card" key={product.sys.id}>
      <img src={product.fields.image.fields.file.url} alt="product" />
      <h1>{product.fields.title.toUpperCase()}</h1>
      <div className="infoPanel">
        <div className="btnGrp">
          <button className="viewBtn">View</button>
          <button className="cartBtn" onClick={addToCart}>
            Add To Cart
          </button>
        </div>
        <div className="price">Price: ${product.fields.price}</div>
      </div>
    </div>
  );
}
