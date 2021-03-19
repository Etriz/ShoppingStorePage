import React, { useState, useEffect, useContext } from 'react';
import { useParams, useHistory, Link } from 'react-router-dom';
import StoreContext from '../contexts/StoreContext';
import allProducts from '../products/allProducts.json';

export default function ViewProduct() {
  const [isAdded, setIsAdded] = useState(false);
  const { hideAll, cartContents, setCartContents } = useContext(StoreContext);

  const history = useHistory();
  const { productId } = useParams();

  const product = allProducts.items.find((item) => item.sys.id === productId);

  useEffect(
    () => {
      hideAll();
    },
    // eslint-disable-next-line
    []
  );

  const addToCart = () => {
    const productToAdd = {
      id: product.sys.id,
      title: product.title.toUpperCase(),
      price: product.price,
    };
    setCartContents([...cartContents, productToAdd]);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 1000);
  };

  return (
    <main className="container">
      <div className="view">
        <Link onClick={() => history.goBack()}>{'❮ Back To Browsing'}</Link>
        <img src={`../${product.image.url}`} alt={product.title} />
        <div>
          <div className="title">{product.title.toUpperCase()}</div>
          <div className="price">${product.price}</div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam placerat urna eu nibh
            faucibus lacinia. Aliquam ac efficitur orci. Etiam mattis, nisl non finibus dapibus,
            justo nunc accumsan lacus, non luctus risus mauris ut urna. Etiam sagittis volutpat nibh
            non semper. Sed sit amet hendrerit neque. Vestibulum rhoncus quis dolor.
          </p>
          <button className="cartBtn" onClick={addToCart}>
            Add To Cart
          </button>
          {isAdded ? <span className="confirm">added to cart</span> : null}
        </div>
      </div>
    </main>
  );
}
