// @@ combine into this reducer
import authReducer from "./authReducer";
import projectReducer from "./projectReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  // set property
  auth: authReducer,
  project: projectReducer
});

export default rootReducer;
