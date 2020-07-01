import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import StudentDashboard from "./studentDashboard";
import StudentAbout from "./studentAbout";

function StudentApp() {
  return (
    <div>
      <BrowserRouter>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link className="navbar-brand" to="/">
            Student Management
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link className="nav-item nav-link active" to="/">
                Dashboard <span className="sr-only">(current)</span>
              </Link>
              <Link className="nav-item nav-link" to="/about/admin">
                About
              </Link>
            </div>
          </div>
        </nav>
        <Route exact path="/" component={StudentDashboard}></Route>
        <Route exact path="/about/:user" component={StudentAbout}></Route>
      </BrowserRouter>
    </div>
  );
}

export default StudentApp;
