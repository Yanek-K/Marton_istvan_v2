import React from "react";
import "./styles.scss";
import { Link } from "react-router-dom";

import { selectCartItemsCount } from "./../../redux/Cart/cart.selectors";
import { useSelector, useDispatch } from "react-redux";

const mapState = (state) => ({
  totalNumCartItems: selectCartItemsCount(state),
});

const Header = () => {
  const { totalNumCartItems } = useSelector(mapState);

  return (
    <header className="header">
      <div className="logo">
        <h1>Márton István</h1>
        <h3>FINE ART - TORONTO</h3>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/" exact className="nav">
              Home
            </Link>
          </li>
          <li>
            <Link to="/gallery" className="nav">
              Gallery
            </Link>
          </li>
          <li>
            <Link to="/sales" className="nav">
              Sales
            </Link>
          </li>
          <li>
            <Link to="/shop" className="nav">
              Shop
            </Link>
          </li>
          <li>
            <Link to="/the_artist" className="nav">
              The Artist
            </Link>
          </li>
          <li>
            <Link to="/the_szünets" className="nav">
              The Szünets
            </Link>
          </li>
          <li>
            <Link to="/the_series" className="nav">
              The Series
            </Link>
          </li>
          <li>
            <Link to="/cart" className="nav" id="cart">
              Cart ({totalNumCartItems})
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
