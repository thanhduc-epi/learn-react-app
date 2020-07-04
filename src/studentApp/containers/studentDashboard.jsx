import React from "react";
import StudentList from "./studentList";
import StudentStats from "../components/studentStats";
import StudentEdit from "./studentEdit";
import { bindActionCreators } from "redux";
import * as actions from "../actions/actions";
import { connect } from "react-redux";

const StudentDashboard = (props) => {
  console.log("StudentDashboard", props);
  return (
    <div>
      <div className="container">
        <button
          className="btn btn-success m-2"
          onClick={() => {
            props.handlePopulateData();
          }}
        >
          Populate dummy data
        </button>
        <button
          className="btn btn-primary m-2"
          data-toggle="modal"
          data-target="#studentEdit"
          onClick={() => {
            props.handleDisplayPopup({
              id: 0,
              name: "",
              age: "",
              gender: true,
              location: "",
            });
          }}
        >
          Add student
        </button>
        <button
          className="btn btn-primary m-2"
          onClick={() => {
            props.handleSaveToStorage(props.students);
          }}
        >
          Save to storage
        </button>
        <button
          className="btn btn-danger m-2"
          onClick={() => {
            props.handleRemoveStorage();
          }}
        >
          Remove data in storage
        </button>
        <StudentStats totalStudents={props.students.length} />
        <StudentList />
        <StudentEdit />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { students: state.students };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      handlePopulateData: actions.populateData,
      handleSaveToStorage: actions.saveStorage,
      handleRemoveStorage: actions.removeStorage,
      handleDisplayPopup: actions.displayPopup,
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(StudentDashboard);
