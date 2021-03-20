import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import storeContext from '../contexts/StoreContext';

export default function Menu(props) {
  const { setMenuHidden } = useContext(storeContext);

  return (
    <div className={`menuBg ${props.className}`} onClick={() => setMenuHidden(true)}>
      <div className={`menu ${props.className}`}>
        <Link to="/all">All products</Link>
        <Link to="/bedroom">Bedroom Collection</Link>
        <Link to="/furniture">Furniture Collection</Link>
        <Link to="/">Link 04</Link>
        <Link to="/">Link 05</Link>
      </div>
    </div>
  );
}
