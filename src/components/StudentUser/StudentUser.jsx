import React from "react";
import { NavLink } from "react-router-dom";
import "./StudentUser.css";
const StudentUser = (props) => {
  return (
    <>
      <div className="lower-box">
        <div className="buttons">
          <div className="box-container">
            <div className="button-container">
              <div onClick={props.switchUsertoStudent} className="s-btn btn">
                Student
              </div>
              <div onClick={props.switchUsertoTeacher} className="t-btn btn">
                Teacher
              </div>
            </div>
          </div>
        </div>
        <div className="inputs">
          <div className="input">
            <input
              id="username"
              type="text"
              name="username"
              placeholder="Roll No."
            />
          </div>
          <div className="input">
            <input
              id="password"
              type="password"
              name="password"
              placeholder="Password"
            />
          </div>
        </div>

        <div className="login-btn btn">
          <NavLink to="/student/dashboard" className="items">
            Login
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default StudentUser;
