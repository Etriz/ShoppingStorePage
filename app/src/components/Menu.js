import React from "react";

export default function Menu(props) {
  return (
    <div className={`menu ${props.className}`}>
      <a href="index.html">Link 01</a>
      <a href="index.html">Link 02</a>
      <a href="index.html">Link 03</a>
      <a href="index.html">Link 04</a>
      <a href="index.html">Link 05</a>
    </div>
  );
}
