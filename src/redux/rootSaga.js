import { all, call } from "redux-saga/effects";
import productsSagas from "./Products/productsReducer";

export default function* rootSaga() {
  yield all([call(productsSagas)]);
}
