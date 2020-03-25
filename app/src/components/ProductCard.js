import React from "react";

export default function ProductCard(props) {
  return (
    <div className="card">
      <h1>{props.createProduct().name}</h1>
      <img src={props.createProduct().src} alt="product" />
      <p>{props.createProduct().desc}</p>
      <div className="infoPanel">
        <div className="btnGrp">
          <button>View</button>
          <button>Add To Cart</button>
        </div>
        <span>Price:{props.createProduct().price}</span>
      </div>
    </div>
  );
}
