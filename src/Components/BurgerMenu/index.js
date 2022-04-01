import React from "react";
import "./styles.scss";

const BurgerMenu = ({ open }) => {
  let burgerClasses = "burgerMenu";
  if (open) {
    burgerClasses = "burgerMenu open";
  }
  return (
    <div className={burgerClasses}>
      <a href="/">Home</a>
      <a href="/the_series">The Series</a>
      <a href="/the_szünets">The Szünets</a>
      <a href="/the_artist">The Artist</a>
      <a href="/the_artist's_statment">The Artist's Statement</a>
      <a href="/legal_notice">Legal Notice</a>
    </div>
  );
};

export default BurgerMenu;
