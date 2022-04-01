import React from "react";
import "./styles.scss";

function BurgerMenu() {
  return (
    <div className="burgerMenu">
      <div className="logo">
        <h1>Márton István</h1>
        <h3>FINE ART - TORONTO</h3>
      </div>

      <a href="/">Home</a>
      <a href="/">Gallery</a>
      <a href="/">The Series</a>
      <a href="/">The Szünets</a>
      <a href="/">The Artist</a>
      <a href="/">The Artist's Statement</a>
      <a href="/">Legal Notice</a>
    </div>
  );
}

export default BurgerMenu;
