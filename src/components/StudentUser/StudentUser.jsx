import React from "react";
import { NavLink } from "react-router-dom";
import "./StudentUser.css";
const StudentUser = () => {
  return (
    <>
      <div className="lower-box">
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

        <NavLink to="/student/dashboard" className="login-btn btn">
          Login
        </NavLink>
      </div>
    </>
  );
};

export default StudentUser;
