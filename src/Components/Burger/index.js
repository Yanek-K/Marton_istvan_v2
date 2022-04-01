import React from "react";
import "./styles.scss";

const Burger = ({ open, setOpen }) => {
  return (
    <header className="burger" open={open} onClick={() => setOpen(!open)}>
      <div />
      <div />
      <div />
    </header>
  );
};

export default Burger;
