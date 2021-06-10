import { ADD_TO_CART, REDUCE_CART_ITEM, REMOVE_CART_ITEM } from "./cart.types";
import {
  handleAddToCart,
  handleReduceCartItem,
  handleRemoveCartItem,
} from "./cart.utils";

const initialState = {
  cartItems: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        // Allows us to add a quantity to items in the cart (i.e. + 1)
        cartItems: handleAddToCart({
          prevCartItems: state.cartItems,
          nextCartItem: action.payload,
        }),
      };
    case REMOVE_CART_ITEM:
      return {
        ...state,
        cartItems: handleRemoveCartItem({
          prevCartItems: state.cartItems,
          cartItemToRemove: action.payload,
        }),
      };
    case REDUCE_CART_ITEM:
      return {
        ...state,
        cartItems: handleReduceCartItem({
          prevCartItems: state.cartItems,
          cartItemToReduce: action.payload,
        }),
      };
    default:
      return state;
  }
};

export default cartReducer;
