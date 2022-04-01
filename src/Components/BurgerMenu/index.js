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
      <a href="/">Gallery</a>
      <a href="/">The Series</a>
      <a href="/">The Szünets</a>
      <a href="/">The Artist</a>
      <a href="/">The Artist's Statement</a>
      <a href="/">Legal Notice</a>
    </div>
  );
};

export default BurgerMenu;
