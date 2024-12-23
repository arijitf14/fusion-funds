import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "@redux/auth";
import dummyReducer from "@redux/dummy";


export default combineReducers({
  //   combine the reducers through this root reducer
  authDetails: authReducer,
  dummyDetails: dummyReducer,

});
