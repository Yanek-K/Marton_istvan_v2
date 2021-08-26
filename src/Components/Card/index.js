import React from "react";

const Card = ({ img, name }) => {
  return (
    <div styles={styles.card}>
      <div style={styles.card_wrapper}>
        <img src={img} alt="Gallery Images" style={styles.image} />
      </div>
      <p style={styles.name}>{name}</p>
    </div>
  );
};

const styles = {
  card_wrapper: {
    width: "433px",
    height: "586px",
    boxSizing: "border-box",
    border: "2px solid black",
    marginLeft: "61px",
    marginRight: "61px",
  },

  image: {
    width: "90%",
    height: "90%",
    margin: "0 auto",
  },
  name: {
    width: "90%",
    marginTop: "-2.8rem",
    textAlign: "center",
    fontSize: "2.1rem",
  },
};
export default Card;
