import { combineReducers } from "redux";
import productsReducer from "./../redux/Products/productsReducer";
import imagesReducer from "./Images/images.reducer";

export const rootReducer = combineReducers({
  imagesData: imagesReducer,
});

export default rootReducer;
