import React from "react";

const StudentStats = (props) => {
  return (
    <div className="alert alert-primary m-2" role="alert">
      Total students <span className="alert-link">{props.totalStudents}</span>.
    </div>
  );
};

export default StudentStats;
