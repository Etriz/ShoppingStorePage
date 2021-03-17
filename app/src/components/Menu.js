import React from 'react';

export default function Menu({ className }) {
  return (
    <div className={`menu ${className}`}>
      <a href="index.html">Bedroom Collection</a>
      <a href="index.html">Furniture Collection</a>
      <a href="index.html">Link 03</a>
      <a href="index.html">Link 04</a>
      <a href="index.html">Link 05</a>
    </div>
  );
}
