import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <section>
      <div className="bedroom">
        <div className="shop">
          <h1>Bedroom Collection</h1>
          <Link to="/bedroom" className="btn">
            Shop Now
          </Link>
        </div>
      </div>
      {/* <div className="jumbo shop">
        <h1>Furniture Collection</h1>
        <Link to="/shop" className="btn">
          Shop Now
        </Link>
      </div> */}
    </section>
  );
}
