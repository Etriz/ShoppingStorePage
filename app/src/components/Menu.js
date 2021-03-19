import React from 'react';
import { Link } from 'react-router-dom';

export default function Menu({ className }) {
  return (
    <div className={`menu ${className}`}>
      <Link to="/all">All products</Link>
      <Link to="/bedroom">Bedroom Collection</Link>
      <Link to="/furniture">Furniture Collection</Link>
      <Link to="/">Link 04</Link>
      <Link to="/">Link 05</Link>
    </div>
  );
}
