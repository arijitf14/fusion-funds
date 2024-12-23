import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "@redux/auth";
import signUpConfirmationReducer from "@redux/signUpConfirmation";


export default combineReducers({
  //   combine the reducers through this root reducer
  authDetails: authReducer,
  signUpConfirmationDetails: signUpConfirmationReducer,

});
