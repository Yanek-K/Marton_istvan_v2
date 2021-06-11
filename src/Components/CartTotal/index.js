import React from "react";
import "./styles.scss";
import { createStructuredSelector } from "reselect";
import { useSelector } from "react-redux";
import lock from "./../../Assets/lock.png";
import Modal from "@material-ui/core/Modal";

// Redux
import { selectCartTotal } from "./../../redux/Cart/cart.selectors";

const mapState = createStructuredSelector({
  total: selectCartTotal,
});

const CartTotal = () => {
  const [open, setOpen] = React.useState(false);
  const { total } = useSelector(mapState);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="cart_wrap">
      <div className="cart_summary">
        <h2>Order Summary</h2>

        <hr />
      </div>
      <div className="cart_main">
        <div className="cart_subtotal">
          <p>Subtotal</p>
          <p>${total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}.00</p>
        </div>
        <div className="cart_shipping">
          <p>Shipping</p>
          <p>FREE</p>
        </div>
        <div className="cart_tax">
          <p>GST/HST</p>
          <p>Calculated at Checkout</p>
        </div>
        <hr />
        <div className="cart_total">
          <p>Total (Before applicable taxes)</p>
          <p>${total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}.00</p>
        </div>
        <btn className="checkout_stripe" onClick={handleOpen}>
          <img src={lock} alt="lock" />
          <p>Checkout</p>
        </btn>
        <btn className="checkout_paypal" onClick={handleOpen}>
          <p>
            Pay with <span className="checkout_paypal_pay">Pay</span>
            <span className="checkout_paypal_pal">Pal</span>
          </p>
        </btn>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          className="checkout_modal"
        >
          <div>
            <h2 id="simple-modal-title">
              {" "}
              We are not able to accept payments yet.
            </h2>
            <p id="simple-modal-description">
              Please send us an email to speak to us about your order.
            </p>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default CartTotal;
