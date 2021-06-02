import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import "./styles.scss";

const mapState = (state) => ({
  cartItems: state.cartData.cartItems,
});

const CartItems = () => {
  const { cartItems } = useSelector(mapState);
  let price;

  return (
    <div className="checkout">
      {cartItems.length === 0 ? (
        <div className="checkout_empty">
          <h3>
            Your Cart is Empty <br /> Head back to the shop to browse our
            collections
          </h3>
          <Link to="/shop">
            <btn className="checkout_empyt_btn">Back to Shop</btn>
          </Link>
        </div>
      ) : (
        <div className="checkout_wrap">
          <div className="checkout_products">
            <div className="checkout_products_header">
              <h4>My Cart</h4>
              <p>Continue Shopping</p>
            </div>
            <hr />
            <div className="checkout_products_product">
              <ul>
                {cartItems.map((cartItem) => (
                  <li>
                    <div className="checkout_products_product_left">
                      <img src={cartItem.imageUrl} alt="Cart Items" />
                      <div className="checkout_products_product_details">
                        <p className="checkout_products_product_details_name">
                          {cartItem.imageName}
                        </p>
                        <p className="checkout_products_product_details_price">
                          C${cartItem.imagePrice}
                        </p>
                      </div>
                    </div>

                    <div className="checkout_products_product_right">
                      <div className="checkout_products_product_right_quantity">
                        <p>-</p>
                        <p>{cartItem.quantity}</p>
                        <p>+</p>
                      </div>

                      <p className="price">
                        C$
                        {(price = cartItem.quantity * 3850)
                          .toString()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                        .00
                      </p>
                      <p className="delete">X</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartItems;
