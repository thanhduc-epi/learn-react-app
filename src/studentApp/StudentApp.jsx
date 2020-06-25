import React, { useState } from "react";
import StudentList from "./studentList";
import StudentStats from "./studentStats";
import StudentEdit from "./studentEdit";
import { useEffect } from "react";

function StudentApp() {
  const [students, setStudents] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState({
    id: 0,
    name: "",
    age: 0,
    gender: true,
    location: "",
  });

  const loadDataFromStorage = () => {
    const data = localStorage.getItem("studentApp");
    let students = [];
    if (data != null) {
      students = JSON.parse(data);
      setStudents(students);
    }
  };

  const totalStudents = () => {
    if (students != null) {
      return students.length;
    } else {
      return 0;
    }
  };

  const handlePopulateDummyData = () => {
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

    setStudents(students);
  };

  const handleSaveToStorage = () => {
    localStorage.setItem("studentApp", JSON.stringify(students));
  };

  const handleRemoveStorage = () => {
    localStorage.removeItem("studentApp");
  };

  const handleDisplayAddPopup = () => {
    const selectedStudent = {
      id: 0,
      name: "",
      age: 0,
      gender: true,
      location: "",
    };
    setSelectedStudent(selectedStudent);
  };

  const handleDisplayEditPopup = (studentId) => {
    const selectedStudent = students.filter((s) => s.id === studentId)[0];
    setSelectedStudent(selectedStudent);
  };

  const handleUpdateStudent = (student) => {
    if (student.id === 0) {
      const newStudent = {
        id: generateId(),
        name: student.name,
        age: student.age,
        gender: student.gender,
        location: student.location,
      };
      students.push(newStudent);
      setStudents([...students]);
    } else {
      setStudents(
        students.map((x) => {
          if (x.id === student.id) return student;
          return x;
        })
      );
    }
  };

  const handleDeleteStudent = (studentId) => {
    setStudents(students.filter((x) => x.id !== studentId));
  };

  useEffect(() => {
    loadDataFromStorage();
  }, []);

  const generateId = () => {
    let id = 1;
    while (students.map((s) => s.id).includes(id)) {
      id++;
    }
    return id;
  };

  return (
    <div>
      <nav className="navbar navbar-light bg-light">
        <span className="navbar-brand mb-0 h1">Student Management</span>
      </nav>
      <div className="container">
        <button
          className="btn btn-success m-2"
          onClick={handlePopulateDummyData}
        >
          Populate dummy data
        </button>
        <button
          className="btn btn-primary m-2"
          data-toggle="modal"
          data-target="#studentEdit"
          onClick={handleDisplayAddPopup}
        >
          Add student
        </button>
        <button className="btn btn-primary m-2" onClick={handleSaveToStorage}>
          Save to storage
        </button>
        <button className="btn btn-danger m-2" onClick={handleRemoveStorage}>
          Remove data in storage
        </button>
        <StudentStats totalStudents={totalStudents()} />
        <StudentList
          students={students}
          onEditClick={(studentId) => handleDisplayEditPopup(studentId)}
          onDeleteClick={handleDeleteStudent}
        />
        <StudentEdit
          student={selectedStudent}
          updateStudent={handleUpdateStudent}
        />
      </div>
    </div>
  );
}

export default StudentApp;
