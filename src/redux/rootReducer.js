import { combineReducers } from "redux";
import imagesReducer from "./Images/images.reducer";

export const rootReducer = combineReducers({
  imagesData: imagesReducer,
});

export default rootReducer;
