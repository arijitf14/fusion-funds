import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "@redux/auth";

export default combineReducers({
  //   combine the reducers through this root reducer
  authDetails: authReducer,
});
