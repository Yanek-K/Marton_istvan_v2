import React from "react";
import "./styles.scss";
import CartTotal from "../../Components/CartTotal";
import CartItems from "../../Components/CartItems";

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
