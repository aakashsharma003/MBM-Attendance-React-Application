import React from "react";
import "./Login.css";
import StudentUser from "../StudentUser/StudentUser";
import SideBar from "../Sidebar/SideBar";
import TeacherUser from "../TeacherUser/TeacherUser";
import { useState } from "react";

const Login = () => {
  const [userstudent, setUserStudent] = useState(true);
  const [userteacher, setUserTeacher] = useState(false);
  function switchUsertoStudent() {
    const studentButton = document.querySelector(".s-btn");
    const teacherButton = document.querySelector(".t-btn");
    studentButton.style.backgroundColor = "#1c2e50";
    teacherButton.style.backgroundColor = "#f8f7f6";
    studentButton.style.color = "#f8f7f6";
    teacherButton.style.color = "#1c2e50";
    setUserTeacher(false);
    setUserStudent(true);
  }
  function switchUsertoTeacher() {
    const studentButton = document.querySelector(".s-btn");
    const teacherButton = document.querySelector(".t-btn");
    teacherButton.style.backgroundColor = "#1c2e50";
    studentButton.style.backgroundColor = "#f8f7f6";
    teacherButton.style.color = "#f8f7f6";
    studentButton.style.color = "#1c2e50";
    setUserTeacher(true);
    setUserStudent(false);
  }
  return (
    <div className="s-container">
      <div className="s-box">
        <SideBar />
        <div className="login-container">
          <div className="login-heading">
            <h1>Enter Login Credential</h1>
          </div>
          {userteacher && (
            <div className="render-Teacherbox">
              <TeacherUser
                switchUsertoStudent={switchUsertoStudent}
                switchUsertoTeacher={switchUsertoTeacher}
              />
            </div>
          )}
          {userstudent && (
            <div className="render-Studentbox">
              <StudentUser
                switchUsertoStudent={switchUsertoStudent}
                switchUsertoTeacher={switchUsertoTeacher}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
