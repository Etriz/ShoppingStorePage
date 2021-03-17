import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Menu from './Menu';
import Cart from './Cart';

const Layout = ({ children }) => {
  const [menuHidden, setMenuHidden] = useState(true);
  const [menuClass, setMenuClass] = useState('hide');

  const [cartHidden, setCartHidden] = useState(true);
  const [cartClass, setCartClass] = useState('hide');

  const toggleMenu = () => {
    if (!menuHidden) {
      setMenuClass('hide');
      setMenuHidden(!menuHidden);
    } else {
      setMenuClass('');
      setMenuHidden(!menuHidden);
      setCartClass('hide');
      setCartHidden(true);
    }
  };

  const toggleCart = () => {
    if (!cartHidden) {
      setCartClass('hide');
      setCartHidden(!cartHidden);
    } else {
      setCartClass('');
      setCartHidden(!cartHidden);
      setMenuClass('hide');
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
};

export default Layout;
