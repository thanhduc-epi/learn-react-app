import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.css";
import "jquery/dist/jquery";
import "bootstrap/dist/js/bootstrap.bundle";
import { createStore } from "redux";
import { Provider } from "react-redux";
import StudentApp from "./studentApp/components/StudentApp";
import AllReducers from "./studentApp/reducers/index";

const store = createStore(AllReducers);

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <StudentApp />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
