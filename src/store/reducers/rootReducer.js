// @@ combine into this reducer
import authReducer from "./authReducer";
import projectReducer from "./projectReducer";
import { combineReducers } from "redux";
import { firestoreReducer } from "redux-firestore";

const rootReducer = combineReducers({
  // set property
  auth: authReducer,
  project: projectReducer,
  firestore: firestoreReducer // @@ ①Resposible for sycing our data
});

export default rootReducer;
