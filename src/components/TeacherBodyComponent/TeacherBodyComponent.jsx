import React from "react";
import "./TeacherBodyComponent.css";
import Attendence from "../Attendence/Attendence.jsx";

const TeacherBodyComponent = ({ dashboard, attendence }) => {
  return (
    <div className="teacherbodycontainer">
      {dashboard && <div className="dashboard">hello to teacher dashboard</div>}
      {attendence && (
        <div className="attendence-Container">
          <Attendence />
        </div>
      )}
    </div>
  );
};

export default TeacherBodyComponent;
