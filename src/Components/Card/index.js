import React from "react";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

const Card = ({ img, name }) => {
  return (
    <div styles={styles.card}>
      <div style={styles.card_wrapper}>
        <img src={img} style={styles.image} />
      </div>
      <p style={styles.name}>{name}</p>
    </div>
  );
};

const styles = {
  // card: {
  //   height: "626px",
  //   textAlign: "center",
  // },
  card_wrapper: {
    width: "433px",
    height: "586px",
    boxSizing: "border-box",
    border: "2px solid black",
    marginLeft: "61px",
    marginRight: "61px",
  },

  image: {
    width: "100%",
    height: "100%",
  },
  name: {
    marginTop: "2.3rem",
    textAlign: "center",
    fontSize: "2.1rem",
  },
};
export default Card;
