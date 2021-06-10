import { ADD_TO_CART, REDUCE_CART_ITEM, REMOVE_CART_ITEM } from "./cart.types";

export const addProduct = (nextCartItem) => ({
  type: ADD_TO_CART,
  payload: nextCartItem,
});

export const removeCartItem = (cartItem) => ({
  type: REMOVE_CART_ITEM,
  payload: cartItem,
});

export const reduceCartItem = (cartItem) => ({
  type: REDUCE_CART_ITEM,
  payload: cartItem,
});
