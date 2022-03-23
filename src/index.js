import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
//added thunk
import thunkMiddleware from "redux-thunk";
//composeWithDevTools
import { composeWithDevTools } from "redux-devtools-extension";
import App from "./App";
import rootReducer from "./reducer";

//
const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware));

const store = createStore(
  rootReducer,
  // applyMiddleware(thunkMiddleware)
  composedEnhancer
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
