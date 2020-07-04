import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../actions/actions";

const StudentEdit = (props) => {
  const [student, setStudent] = useState(props.currentStudent);

  useEffect(() => {
    setStudent(props.currentStudent);
  }, [props.currentStudent]);

  return (
    <div
      className="modal fade"
      id="studentEdit"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="studentEditLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="studentEditLabel">
              {student.id !== 0 ? "Edit student" : "Add new student"}
            </h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <form>
              <div className="form-group row">
                <label htmlFor="name" className="col-sm-2 col-form-label">
                  Name
                </label>
                <div className="col-sm-10">
                  <input
                    type="input"
                    className="form-control"
                    id="name"
                    value={student.name}
                    onChange={(e) => {
                      setStudent({ ...student, name: e.target.value });
                    }}
                  />
                </div>
              </div>
              <div className="form-group row">
                <label htmlFor="age" className="col-sm-2 col-form-label">
                  Age
                </label>
                <div className="col-sm-10">
                  <input
                    type="input"
                    className="form-control"
                    id="age"
                    value={student.age}
                    onChange={(e) => {
                      setStudent({ ...student, age: e.target.value });
                    }}
                  />
                </div>
              </div>
              <fieldset className="form-group">
                <div className="row">
                  <legend className="col-form-label col-sm-2 pt-0">
                    Gender
                  </legend>
                  <div className="col-sm-10">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="genderRadio"
                        id="maleRadio"
                        value="Male"
                        checked={student.gender === true}
                        onChange={(e) => {
                          setStudent({
                            ...student,
                            gender: e.target.value === "Male" ? true : false,
                          });
                        }}
                      />
                      <label className="form-check-label" htmlFor="maleRadio">
                        Male
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="genderRadio"
                        id="femaleRadio"
                        value="Female"
                        checked={student.gender === false}
                        onChange={(e) => {
                          setStudent({
                            ...student,
                            gender: e.target.value === "Male" ? true : false,
                          });
                        }}
                      />
                      <label className="form-check-label" htmlFor="femaleRadio">
                        Female
                      </label>
                    </div>
                  </div>
                </div>
              </fieldset>
              <div className="form-group row">
                <label htmlFor="gender" className="col-sm-2 col-form-label">
                  Location
                </label>
                <div className="col-sm-10">
                  <input
                    type="input"
                    className="form-control"
                    id="gender"
                    value={student.location}
                    onChange={(e) => {
                      setStudent({ ...student, location: e.target.value });
                    }}
                  />
                </div>
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
            <button
              type="button"
              className="btn btn-primary"
              data-dismiss="modal"
              onClick={() => props.handleUpdateStudent(student)}
            >
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { currentStudent: state.currentStudent };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    { handleUpdateStudent: actions.updateStudent },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(StudentEdit);
