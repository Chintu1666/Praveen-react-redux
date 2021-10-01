import actionTypes from "./actionType";
import axios from "axios";

export const fetchproductRequest = (loading) => {
  return {
    type: actionTypes.FETCH_PRODUCT_REQUEST,
    payload: loading,
  };
};

export const fetchproductSuccess = (data) => {
  return {
    type: actionTypes.FETCH_PRODUCT_SUCCESS,
    payload: data,
  };
};

export const fetchproductFailure = (error) => {
  return {
    type: actionTypes.FETCH_PRODUCT_FAILURE,
    payload: error,
  };
};

export function getproduct() {
  return function (dispatch) {
    return axios
      .get("https://aveosoft-react-assignment.herokuapp.com/products")
      .then(function (response) {
        if (response.data) {
          dispatch(fetchproductSuccess(response.data));
        }
      })
      .catch(function (error) {
        if (error) {
          // Do something if needed.
          dispatch(fetchproductFailure(error.message));
        }
      });
  };
}
