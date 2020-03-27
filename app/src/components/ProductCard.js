import React from "react";
import products from "../products.json";

export default function ProductCard(props) {
  const data = products.items;

  const productData = data.map(item => {
    return (
      <div className="card" key={item.sys.id}>
        <img src={item.fields.image.fields.file.url} alt="product" />
        <h1>{item.fields.title.toUpperCase()}</h1>
        <p>{props.createProduct().desc}</p>
        <div className="infoPanel">
          <div className="btnGrp">
            <button className="viewBtn">View</button>
            <button className="cartBtn">Add To Cart</button>
          </div>
          <span className="price">Price: ${item.fields.price}</span>
        </div>
      </div>
    );
  });

  return productData;
}
