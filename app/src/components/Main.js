import React from 'react';

// import faker from "faker";
import ProductCard from './ProductCard';
import productsJSON from '../products.json';

export default function Main() {
  const cardData = productsJSON.items.map((item) => (
    <ProductCard key={item.sys.id} product={item} />
  ));

  return <main className="container">{cardData}</main>;
}
