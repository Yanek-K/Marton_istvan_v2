import { ADD_TO_CART } from "./cart.types";

export const addProduct = (nextCartItem) => ({
  type: ADD_TO_CART,
  payload: nextCartItem,
});
