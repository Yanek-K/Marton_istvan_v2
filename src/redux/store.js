import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "./rootReducer";

// const sagaMiddleware = createSagaMiddle();
export const middlewares = [thunk];

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middlewares))
);
// sagaMiddleware.run(rootSaga);

export default store;
