import React from "react";
import Logo_icon from "../../assets/logo.png";
import "./SideBar.css";

const SideBar = () => {
  return (
    <>
      <div className="sidebar-container">
        <div className="logo">
          <img className="logo-icon" src={Logo_icon} alt="" />
        </div>
        <div className="heading">
          <div className="first-heading">
            <span style={{ color: "#cc0c1e" }}>M.B.M</span> UNIVERSITY
          </div>
          <div className="second-heading">
            State University Govt. of Rajasthan
          </div>
        </div>
        <div className="para">
          A Real-time interactive attendance web-application.
        </div>
      </div>
    </>
  );
};

export default SideBar;
