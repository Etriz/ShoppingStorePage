import React, { useContext } from 'react';
import storeContext from '../contexts/StoreContext';

// import faker from "faker";
import ProductCard from './ProductCard';
import productsJSON from '../products.json';

export default function Main() {
  const { cartContents, setCartContents } = useContext(storeContext);

  const cardData = productsJSON.items.map((item) => (
    <ProductCard
      key={item.sys.id}
      product={item}
      cartContents={cartContents}
      setCartContents={setCartContents}
    />
  ));

  return <main className="container">{cardData}</main>;
}
