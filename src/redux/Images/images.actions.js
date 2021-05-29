import { firestore } from "../../firebase";
import {
  FETCH_PRODUCTS_FAILURE,
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
} from "./images.types";

export const fetchImages = () => (dispatch) => {
  dispatch({ type: FETCH_PRODUCTS_REQUEST });
  firestore
    .collection("gallery")
    .orderBy("createdDate", "asc")
    .get()
    .then((res) => {
      let images = [];
      res.forEach((doc) => {
        images.push(doc.data());
      });
      dispatch({
        type: FETCH_PRODUCTS_SUCCESS,
        payload: images,
      });
    })
    .catch((err) => {
      console.log(err);
      dispatch({
        type: FETCH_PRODUCTS_FAILURE,
        payload: [],
      });
    });
};
