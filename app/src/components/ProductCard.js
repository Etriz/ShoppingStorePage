import React from "react";

export default function ProductCard(props) {
  const data = props.product;

  return (
    <div className="card" key={data.sys.id}>
      <img src={data.fields.image.fields.file.url} alt="product" />
      <h1>{data.fields.title.toUpperCase()}</h1>
      {/* <p>{props.createProduct().desc}</p> */}
      <div className="infoPanel">
        <div className="btnGrp">
          <button className="viewBtn">View</button>
          <button className="cartBtn">Add To Cart</button>
        </div>
        <span className="price">Price: ${data.fields.price}</span>
      </div>
    </div>
  );
}
