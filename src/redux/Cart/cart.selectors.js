import { createSelector } from "reselect";

const selectCartData = (state) => state.cartData;
const selectCartItems = createSelector(
  [selectCartData],
  (cartData) => cartData.cartItems
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce((quantity, cartItem) => quantity + cartItem.quantity, 0)
);

export const selectCartTotal = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce(
    (quantity, cartItem) => quantity + cartItem.quantity * 3850.0,
    0
  )
);
