import React from "react";

const StudentRecord = (props) => {
  return (
    <div className="col-md-4">
      <div className="card m-2">
        <h6 className="card-header">#{props.student.id}</h6>
        <div className="card-body">
          <h5 className="card-title">{props.student.name}</h5>
          <p className="card-text">Age: {props.student.age}</p>
          <p className="card-text">
            Gender: {props.student.gender ? "Male" : "Female"}
          </p>
          <p className="card-text">Location: {props.student.location}</p>
          <button
            className="btn btn-primary"
            data-toggle="modal"
            data-target="#studentEdit"
            onClick={() => props.onEditClick(props.student.id)}
          >
            Edit
          </button>
          <button
            className="btn btn-primary m-2"
            onClick={() => props.onDeleteClick(props.student.id)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default StudentRecord;
