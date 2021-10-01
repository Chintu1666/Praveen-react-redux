import actionTypes from "./actionType";
import axios from "axios";

export const fetchcategoryRequest = (loading) => {
  return {
    type: actionTypes.FETCH_CATEGORY_REQUEST,
    payload: loading,
  };
};

export const fetchcategorySuccess = (data) => {
  return {
    type: actionTypes.FETCH_CATEGORY_SUCCESS,
    payload: data,
  };
};

export const fetchcategoryFailure = (error) => {
  return {
    type: actionTypes.FETCH_CATEGORY_FAILURE,
    payload: error,
  };
};

export function getCategory() {
  return function (dispatch) {
    return axios
      .get("https://aveosoft-react-assignment.herokuapp.com/categories")
      .then(function (response) {
        console.log(response);
        if (response.data) {
          dispatch(fetchcategorySuccess(response.data));
          console.log(response.data);
        }
      })
      .catch(function (error) {
        if (error) {
          // Do something if needed.
          dispatch(fetchcategoryFailure(error.message));
        }
      });
  };
}
