import { combineReducers } from "@reduxjs/toolkit";
import rocketsReducer from "./rocketsReducer";

const rootReducer = combineReducers({
  rockets: rocketsReducer,
});

export default rootReducer;
