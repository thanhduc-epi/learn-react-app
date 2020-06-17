import React, { Component } from "react";
import StudentRecord from "./studentRecord";

class StudentList extends Component {
  render() {
    return (
      <div className="row">
        {this.props.students.map((student) => (
          <StudentRecord
            key={student.id}
            student={student}
            onEditClick={(id) => this.props.onEditClick(id)}
            onDeleteClick={(id) => this.props.onDeleteClick(id)}
          />
        ))}
      </div>
    );
  }
}

export default StudentList;
