import React, { Component } from "react";
import "./styles.scss";
import Card from "./../Card/index.js";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

class Carousel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      current_card: 1,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      let first_card_clone = this.card_container.children[0].cloneNode(true);
      let last_card_clone = this.card_container.children[
        this.card_container.children.length - 1
      ].cloneNode(true);
      console.log(first_card_clone);
      this.card_container.insertBefore(
        last_card_clone,
        this.card_container.children[0]
      );
      this.card_container.append(first_card_clone);
      this.card_container.style.transitionDuration = "0s";
      this.card_container.style.transform = `translate(-${555}px)`;
    }, 1000);
  }

  handleNext = () => {
    if (this.state.current_card < this.card_container.children.length - 1) {
      let new_current_card = this.state.current_card + 1;

      this.setState({ current_card: new_current_card }, () => {
        this.card_container.style.transitionDuration = "1s";
        this.card_container.style.transform = `translate(-${
          555 * this.state.current_card
        }px)`;

        if (
          this.state.current_card ===
          this.card_container.children.length - 1
        ) {
          setTimeout(() => {
            this.card_container.style.transitionDuration = "0s";
            this.card_container.style.transform = `translate(-${555}px)`;

            this.setState({ current_card: 0 });
          }, 1002);
        }
      });
    } else return;
  };

  handlePrev = () => {
    if (this.state.current_card > 0) {
      let new_current_card = this.state.current_card - 1;

      this.setState({ current_card: new_current_card }, () => {
        this.card_container.style.transitionDuration = "1s";
        this.card_container.style.transform = `translate(-${
          555 * this.state.current_card
        }px)`;

        if (this.state.current_card === 0) {
          setTimeout(() => {
            this.card_container.style.transitionDuration = "0s";
            this.card_container.style.transform = `translate(-${
              555 * (this.card_container.children.length - 2)
            }px)`;

            this.setState({
              current_card: this.card_container.children.length - 2,
            });
          }, 1002);
        }
      });
    } else return;
  };

  render() {
    return (
      <div className="page-wrap">
        <ArrowBackIosIcon
          onClick={this.handlePrev}
          style={styles.buttonsPrev}
          className={"buttonsPrev"}
        >
          Previous
        </ArrowBackIosIcon>
        <div className="carousel-wrap" style={styles.carousel_wrap}>
          <div
            ref={(ref_id) => (this.card_container = ref_id)}
            className="card-container"
            style={styles.card_container}
          >
            {this.props.ImageData.map((image, index) => (
              <Card
                img={image.imageUrl}
                name={image.imageName}
                key={index}
                className="card-image"
              />
            ))}
          </div>
        </div>
        <ArrowForwardIosIcon
          onClick={this.handleNext}
          style={styles.buttonsNext}
          className={"buttonsNext"}
        >
          Next
        </ArrowForwardIosIcon>
      </div>
    );
  }
}

const styles = {
  carousel_wrap: {
    position: "absolute",
    // top: "50%",
    left: "51%",
    width: "555px",
    height: "680px",
    transform: "translate(-50%)",
    overflow: "hidden",
    marginTop: "6rem",
  },
  card_container: {
    display: "flex",
    flexDirection: "row",
    width: "fit-content",
  },
};

export default Carousel;
