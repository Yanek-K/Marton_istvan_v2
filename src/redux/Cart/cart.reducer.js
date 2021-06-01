import { ADD_TO_CART } from "./cart.types";
import { handleAddToCart } from "./cart.utils";

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
    default:
      return state;
  }
};

export default cartReducer;
