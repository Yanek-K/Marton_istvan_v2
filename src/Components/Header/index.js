import React from "react";
import "./styles.scss";
import { Link } from "react-router-dom";

// State not in use without cart

// import { selectCartItemsCount } from "./../../redux/Cart/cart.selectors";
// import { useSelector } from "react-redux";
// const mapState = (state) => ({
//   totalNumCartItems: selectCartItemsCount(state),
// });

const Header = () => {
  // const { totalNumCartItems } = useSelector(mapState);

  return (
    <header className="header">
      <div className="header_wrap">
        <div className="logo">
          <h1>Márton István</h1>
          <h3>FINE ART - TORONTO</h3>
        </div>

        <nav className="header_nav">
          <ul>
            <li>
              <Link to="/" exact="true" className="nav">
                Home
              </Link>
            </li>
            <li>
              <Link to="/gallery" className="nav">
                Gallery
              </Link>
            </li>
            {/* <li>
              <Link to="/sales" className="nav">
                Sales
              </Link>
            </li> */}
            <li>
              <Link to="/the_series" className="nav">
                The Series
              </Link>
            </li>
            <li>
              <Link to="/the_szünets" className="nav">
                The Szünets
              </Link>
            </li>
            <li>
              <Link to="/the_artist" className="nav">
                The Artist
              </Link>
            </li>

            <li>
              <Link to="/the_artist's_statment" className="nav">
                The Artist's Statement
              </Link>
            </li>
            <li>
              <Link to="/legal_notice" className="nav">
                Legal Notice
              </Link>
            </li>
            {/* <li>
              <Link to="/cart" className="nav" id="cart">
                Cart ({totalNumCartItems})
              </Link> */}
            {/* </li> */}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
