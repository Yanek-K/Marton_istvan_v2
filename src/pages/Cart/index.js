import React from "react";
import "./styles.scss";
import CartTotal from "../../components/CartTotal";
import CartItems from "../../components/CartItems";

const Cart = () => {
  return (
    <div className="cart">
      <div className="cart_cartItems">
        <CartItems />
      </div>
      <div className="cart_cartTotal">
        <CartTotal />
      </div>
    </div>
  );
};

export default Cart;
