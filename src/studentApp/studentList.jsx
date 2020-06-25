import React from "react";
import StudentRecord from "./studentRecord";

function StudentList(props) {
  return (
    <div className="row">
      {props.students.map((student) => (
        <StudentRecord
          key={student.id}
          student={student}
          onEditClick={(id) => props.onEditClick(id)}
          onDeleteClick={(id) => props.onDeleteClick(id)}
        />
      ))}
    </div>
  );
}

export default StudentList;
