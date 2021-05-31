import { firestore } from "../../firebase";
import {
  FETCH_DETAILS_FAILURE,
  FETCH_DETAILS_REQUEST,
  FETCH_DETAILS_SUCCESS,
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

export const fetchDetails = (productId) => async (dispatch) => {
  dispatch({ type: FETCH_DETAILS_REQUEST, payload: productId });
  firestore
    .collection("gallery")
    .doc(productId)
    .get()
    .then((snapshot) => {
      let image = [];
      image.push(snapshot.data());
      dispatch({ type: FETCH_DETAILS_SUCCESS, payload: image });
    })
    .catch((err) => {
      dispatch({ type: FETCH_DETAILS_FAILURE, payload: [] });
      console.log(err);
    });
};
