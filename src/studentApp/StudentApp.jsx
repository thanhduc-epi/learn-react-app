import React, { Component } from "react";
import StudentList from "./studentList";
import StudentStats from "./studentStats";
import StudentEdit from "./studentEdit";

class StudentApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [],
      // avoid transforming uncontrolled to controlled component
      selectedStudent: {
        id: 0,
        name: "",
        age: 0,
        gender: true,
        location: "",
      },
    };

    this.handlePopulateDummyData = this.handlePopulateDummyData.bind(this);
    this.handleSaveToStorage = this.handleSaveToStorage.bind(this);
    this.handleRemoveStorage = this.handleRemoveStorage.bind(this);

    this.handleDisplayAddPopup = this.handleDisplayAddPopup.bind(this);
    this.handleDisplayEditPopup = this.handleDisplayEditPopup.bind(this);
    this.handleUpdateStudent = this.handleUpdateStudent.bind(this);
    this.handleDeleteStudent = this.handleDeleteStudent.bind(this);
  }

  loadDataFromStorage = () => {
    const data = localStorage.getItem("studentApp");
    let students = {};
    if (data != null) {
      students = JSON.parse(data);
      this.setState({ students });
    }
  };

  totalStudents() {
    if (this.state.students != null) {
      return this.state.students.length;
    } else {
      return 0;
    }
  }

  handlePopulateDummyData() {
    const students = [
      { id: 1, name: "Donal Trump", age: 20, gender: true, location: "LA" },
      { id: 2, name: "Marry Drews", age: 19, gender: false, location: "LA" },
      { id: 3, name: "Joe Biden", age: 22, gender: true, location: "NY" },
      { id: 4, name: "Geroge McFly", age: 19, gender: true, location: "TX" },
      { id: 5, name: "Emily Osman", age: 21, gender: false, location: "NY" },
      { id: 6, name: "John Louis", age: 22, gender: true, location: "LA" },
      { id: 7, name: "Marry Jane", age: 19, gender: false, location: "LA" },
      { id: 8, name: "Hilary Duff", age: 19, gender: false, location: "WA" },
      { id: 9, name: "Lucky Luke", age: 22, gender: true, location: "TX" },
      { id: 10, name: "AJ Hoge", age: 22, gender: true, location: "CA" },
    ];

    this.setState({ students: students });
  }

  handleSaveToStorage() {
    localStorage.setItem("studentApp", JSON.stringify(this.state.students));
  }

  handleRemoveStorage() {
    localStorage.removeItem("studentApp");
  }

  handleDisplayAddPopup() {
    const selectedStudent = {
      id: 0,
      name: "",
      age: 0,
      gender: true,
      location: "",
    };
    this.setState({ selectedStudent });
  }

  handleDisplayEditPopup(studentId) {
    const selectedStudent = this.state.students.filter(
      (s) => s.id === studentId
    )[0];
    this.setState({ selectedStudent });
  }

  handleUpdateStudent(student) {
    if (student.id === 0) {
      const newStudent = {
        id: this.generateId(),
        name: student.name,
        age: student.age,
        gender: student.gender,
        location: student.location,
      };
      this.state.students.push(newStudent);
      this.setState({
        students: this.state.students,
      });
    } else {
      this.setState({
        students: this.state.students.map((x) => {
          if (x.id === student.id) return student;
          return x;
        }),
      });
    }
  }

  handleDeleteStudent(studentId) {
    this.setState({
      students: this.state.students.filter((x) => x.id !== studentId),
    });
  }

  componentDidMount() {
    this.loadDataFromStorage();
  }

  generateId() {
    let id = 1;
    while (this.state.students.map((s) => s.id).includes(id)) {
      id++;
    }
    return id;
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-light bg-light">
          <span className="navbar-brand mb-0 h1">Student Management</span>
        </nav>
        <div className="container">
          <button
            className="btn btn-success m-2"
            onClick={this.handlePopulateDummyData}
          >
            Populate dummy data
          </button>
          <button
            className="btn btn-primary m-2"
            data-toggle="modal"
            data-target="#studentEdit"
            onClick={this.handleDisplayAddPopup}
          >
            Add student
          </button>
          <button
            className="btn btn-primary m-2"
            onClick={this.handleSaveToStorage}
          >
            Save to storage
          </button>
          <button
            className="btn btn-danger m-2"
            onClick={this.handleRemoveStorage}
          >
            Remove data in storage
          </button>
          <StudentStats totalStudents={this.totalStudents()} />
          <StudentList
            students={this.state.students}
            onEditClick={(studentId) => this.handleDisplayEditPopup(studentId)}
            onDeleteClick={this.handleDeleteStudent}
          />
          <StudentEdit
            student={this.state.selectedStudent}
            updateStudent={this.handleUpdateStudent}
          />
        </div>
      </div>
    );
  }
}

export default StudentApp;
