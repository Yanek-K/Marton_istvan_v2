import React from "react";
import "./styles.scss";
const CartTotal = () => {
  return (
    <div className="cart_wrap">
      <div className="cart_summary">
        <h2>Order Summary</h2>
        <hr />
      </div>
      <div className="cart_main">
        <div className="cart_subtotal">
          <p>Subtotal</p>
          <p>$7,500</p>
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
          <p>Checkout</p>
        </btn>
        <btn className="checkout_paypal">
          <p>Checkout with PayPal</p>
        </btn>
      </div>
    </div>
  );
};

export default CartTotal;
