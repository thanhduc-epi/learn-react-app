import React, { Component } from "react";

class StudentStats extends Component {
  render() {
    return (
      <div className="alert alert-primary m-2" role="alert">
        Total students{" "}
        <span className="alert-link">{this.props.totalStudents}</span>.
      </div>
    );
  }
}

export default StudentStats;
