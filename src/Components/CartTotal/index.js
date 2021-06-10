import React from "react";
import "./styles.scss";
import { createStructuredSelector } from "reselect";
import { useSelector } from "react-redux";
import lock from "./../../Assets/lock.png";

// Redux
import { selectCartTotal } from "./../../redux/Cart/cart.selectors";
import { removeCartItem, addProduct } from "./../../redux/Cart/cart.actions";

const mapState = createStructuredSelector({
  total: selectCartTotal,
});

const CartTotal = () => {
  const { total } = useSelector(mapState);

  return (
    <div className="cart_wrap">
      <div className="cart_summary">
        <h2>Order Summary</h2>

        <hr />
      </div>
      <div className="cart_main">
        <div className="cart_subtotal">
          <p>Subtotal</p>
          <p>${total}</p>
        </div>
        <div className="cart_shipping">
          <p>Shipping</p>
          <p>FREE</p>
        </div>
        <div className="cart_tax">
          <p>GST/HST</p>
          <p>$1,000</p>
        </div>
        <hr />
        <div className="cart_total">
          <p>Total</p>
          <p>$8,700</p>
        </div>
        <btn className="checkout_stripe">
          <img src={lock} alt="lock" />
          <p>Checkout</p>
        </btn>
        <btn className="checkout_paypal">
          <p>
            Pay with <span className="checkout_paypal_pay">Pay</span>
            <span className="checkout_paypal_pal">Pal</span>
          </p>
        </btn>
      </div>
    </div>
  );
};

export default CartTotal;
