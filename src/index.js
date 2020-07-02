import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.css";
import "jquery/dist/jquery";
import "bootstrap/dist/js/bootstrap.bundle";
// import App from "./counterApp/App";
// import StudentApp from "./studentApp/StudentApp";
import BugTrackerApp from "./bugTrackerApp/BugTrackerApp";

ReactDOM.render(
  <React.StrictMode>
    <BugTrackerApp />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
