import React, { useContext, useEffect } from 'react';
import StoreContext from '../contexts/StoreContext';

import ProductCard from './ProductCard';
import products from '../products/bedroomProducts.json';

export default function Bedroom() {
  const { hideAll } = useContext(StoreContext);

  useEffect(
    () => {
      hideAll();
    },
    // eslint-disable-next-line
    []
  );

  const cardData = products.items.map((item) => <ProductCard key={item.sys.id} product={item} />);

  return <main className="container">{cardData}</main>;
}
