import React, { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import StoreContext from '../contexts/StoreContext';

export default function Home() {
  const { hideAll } = useContext(StoreContext);

  useEffect(
    () => {
      hideAll();
    },
    // eslint-disable-next-line
    []
  );

  return (
    <section>
      <div className="all products">
        <div className="shop">
          <h1>All Products</h1>
          <Link to="/all" className="btn">
            Shop Now
          </Link>
        </div>
      </div>{' '}
      <div className="bedroom products">
        <div className="shop">
          <h1>Bedroom Collection</h1>
          <Link to="/bedroom" className="btn">
            Shop Now
          </Link>
        </div>
      </div>
      <div className="furniture products">
        <div className="shop">
          <h1>Furniture Collection</h1>
          <Link to="/furniture" className="btn">
            Shop Now
          </Link>
        </div>
      </div>
    </section>
  );
}
