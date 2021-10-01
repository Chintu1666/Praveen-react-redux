import actionTypes from "../Action/actionType";

const initialState = {
  category: [],
  loading: false,
  error: "",
};

const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_CATEGORY_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.FETCH_CATEGORY_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case actionTypes.FETCH_CATEGORY_SUCCESS:
      return {
        ...state,
        category: action.payload,
        loading: false,
        error: "",
      };
    case actionTypes.RESET_STORE:
      return initialState;
    default:
      return state;
  }
};

export default categoryReducer;
