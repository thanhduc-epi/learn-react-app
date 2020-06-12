import React, { Component } from "react";
import StudentRecord from "./studentRecord";

class StudentList extends Component {
  render() {
    console.log("student list props", this.props.students);
    return (
      <div className="row">
        {this.props.students.map((student) => (
          <StudentRecord
            key={student.id}
            student={student}
            onEditClick={(id) => this.props.onEditClick(id)}
          />
        ))}
      </div>
    );
  }
}

export default StudentList;
