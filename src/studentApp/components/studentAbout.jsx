import React from "react";

function StudentAbout({ match }) {
  return (
    <div className="jumbotron jumbotron-fluid">
      <div className="container">
        <h1 className="display-4">Hello, {match.params.user}</h1>
        <p className="lead">Happiness is a journey, not a destination.</p>
      </div>
    </div>
  );
}

export default StudentAbout;
