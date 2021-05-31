import {
  FETCH_DETAILS_FAILURE,
  FETCH_DETAILS_REQUEST,
  FETCH_DETAILS_SUCCESS,
  FETCH_PRODUCTS_FAILURE,
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
} from "./images.types";

const INITIAL_STATE = {
  products: [],
  product: [],
  loading: false,
};

const productsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: action.payload,
        loading: false,
      };
    case FETCH_PRODUCTS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_PRODUCTS_FAILURE:
      return {
        ...state,
        loading: false,
        products: [],
      };
    case FETCH_DETAILS_SUCCESS:
      return {
        ...state,
        product: action.payload,
        loading: false,
      };
    case FETCH_DETAILS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_DETAILS_FAILURE:
      return {
        ...state,
        loading: false,
        product: [],
      };
    default:
      return state;
  }
};

export default productsReducer;
