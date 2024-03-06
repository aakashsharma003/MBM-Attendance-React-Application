import React from "react";
import Attendence from "../Attendence/Attendence.jsx";

const StudentBodyComponent = ({ dashboard, attendence }) => {
  return (
    <div className="studentbodycontainer">
      {dashboard && <div className="dashboard">hello to teacher dashboard</div>}
      {attendence && (
        <div className="attendence-Container">
          <Attendence />
        </div>
      )}
    </div>
  );
};

export default StudentBodyComponent;
