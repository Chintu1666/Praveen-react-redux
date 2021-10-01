import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import categoryReducer from "../redux/reducer/category";
import productsReducer from "./reducer/products";

const rootReducer = combineReducers({
  category: categoryReducer,
  product: productsReducer,
});

const middleware = [thunk];

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
