import { takeLatest, all, call } from "redux-saga/effects";
import { setProducts } from "./productsAction";
import productsTypes from "./productsTypes";
import { handleFetchProducts } from "./productsHelpers";

export function* fetchProducts() {
  try {
    const products = yield handleFetchProducts();
    yield put(setProducts(products));
  } catch (err) {
    console.log(err);
  }
}

export function* onFetchProductsStart() {
  yield takeLatest(productsTypes.FETCH_PRODUCTS_START, fetchProducts);
}

export default function* productsSagas() {
  yield all([call(onFetchProductsStart)]);
}
