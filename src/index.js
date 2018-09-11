import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import App from "./App";
import configureStore from "./store/configureStore";
import { loadState, saveState } from "./store/localStorage";

import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

const initialState = loadState();
const store = configureStore(initialState);

store.subscribe(() => saveState({ todoList: store.getState().todoList }));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
