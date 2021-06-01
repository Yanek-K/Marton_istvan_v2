import { combineReducers } from "redux";
import imagesReducer from "./Images/images.reducer";
import cartReducer from "./Cart/cart.reducer";

export const rootReducer = combineReducers({
  imagesData: imagesReducer,
  cartData: cartReducer,
});

export default rootReducer;
