import React from "react";

function StudentAbout({ match }) {
  return (
    <div class="jumbotron jumbotron-fluid">
      <div class="container">
        <h1 class="display-4">Hello, {match.params.user}</h1>
        <p class="lead">Happiness is a journey, not a destination.</p>
      </div>
    </div>
  );
}

export default StudentAbout;
