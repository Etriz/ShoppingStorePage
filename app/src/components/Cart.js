import React from "react";

export default function Cart(props) {
  return (
    <div className={`cart ${props.className}`}>
      <a href="index.html">Link 01</a>
      <a href="index.html">Link 02</a>
      <a href="index.html">Link 03</a>
    </div>
  );
}
