import React from "react";

export default function Header({ className }) {
  return (
    <div className={`menu ${className}`}>
      <a href="index.html" className="">
        Link 01
      </a>
      <a href="index.html" className="">
        Link 02
      </a>
      <a href="index.html" className="">
        Link 03
      </a>
      <a href="index.html" className="">
        Link 04
      </a>
      <a href="index.html" className="">
        Link 05
      </a>
    </div>
  );
}
