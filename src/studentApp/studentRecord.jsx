import React, { Component } from "react";

class StudentRecord extends Component {
  render() {
    return (
      <div className="col-md-4">
        <div className="card m-2">
          <h6 className="card-header">#{this.props.student.id}</h6>
          <div className="card-body">
            <h5 className="card-title">{this.props.student.name}</h5>
            <p className="card-text">Age: {this.props.student.age}</p>
            <p className="card-text">
              Age: {this.props.student.gender ? "Male" : "Female"}
            </p>
            <p className="card-text">Location: {this.props.student.location}</p>
            <button
              className="btn btn-primary"
              onClick={() => this.props.onEditClick(this.props.student.id)}
            >
              Edit
            </button>
            <button className="btn btn-primary m-2">Delete</button>
          </div>
        </div>
      </div>
    );
  }
}

export default StudentRecord;
