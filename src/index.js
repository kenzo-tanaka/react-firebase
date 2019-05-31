import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { createStore, applyMiddleware } from "redux";
import rooteReducer from "./store/reducers/rootReducer";
import { Provider } from "react-redux"; // @@ enable application to access the store
import thunk from "redux-thunk";

const store = createStore(rooteReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
serviceWorker.unregister();
