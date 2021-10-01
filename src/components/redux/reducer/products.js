import actionTypes from "../Action/actionType";

const initialState = {
  products: [],
  loading: false,
  error: "",
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_PRODUCT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.FETCH_PRODUCT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case actionTypes.FETCH_PRODUCT_SUCCESS:
      return {
        ...state,
        products: action.payload,
        loading: false,
        error: "",
      };
    case actionTypes.RESET_STORE:
      return initialState;
    default:
      return state;
  }
};

export default productsReducer;
