import React from "react";
import { connect } from "react-redux";
import StudentRecord from "../containers/studentRecord";

const StudentList = (props) => {
  return (
    <div className="row">
      {props.students.map((student) => (
        <StudentRecord key={student.id} student={student} />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return { students: state.students };
};

export default connect(mapStateToProps)(StudentList);
