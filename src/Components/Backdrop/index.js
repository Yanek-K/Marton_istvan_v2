import React from "react";
import "./styles.scss";

const Backdrop = ({ setOpen }) => {
  return <div className="backdrop" onClick={() => setOpen(false)}></div>;
};

export default Backdrop;
