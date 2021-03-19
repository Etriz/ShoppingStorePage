import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import StoreContext from '../contexts/StoreContext';

import Menu from './Menu';
import Cart from './Cart';

export default function Layout({ children }) {
  const { menuHidden, setMenuHidden, cartHidden, setCartHidden } = useContext(StoreContext);

  const [menuClass, setMenuClass] = useState('hide');
  const [cartClass, setCartClass] = useState('hide');

  useEffect(() => {
    menuHidden ? setMenuClass('hide') : setMenuClass('');
    cartHidden ? setCartClass('hide') : setCartClass('');
  }, [menuHidden, cartHidden]);

  const toggleMenu = () => {
    if (!menuHidden) {
      setMenuHidden(!menuHidden);
    } else {
      setMenuHidden(!menuHidden);
      setCartHidden(true);
    }
  };

  const toggleCart = () => {
    if (!cartHidden) {
      setCartHidden(!cartHidden);
    } else {
      setCartHidden(!cartHidden);
      setMenuHidden(true);
    }
  };

  return (
    <>
      <nav>
        <div className="container">
          <span className="fas fa-bars fa-2x menuBtn" onClick={toggleMenu}></span>
          <Link to="/" className="homeLink">
            <h1 className="logo">
              Home<span>Hideaway</span>
            </h1>
          </Link>
          <span className="fas fa-shopping-cart fa-2x cartBtn" onClick={toggleCart}></span>
        </div>
      </nav>
      <Menu className={menuClass} />
      <Cart className={cartClass} />
      {children}
    </>
  );
}
