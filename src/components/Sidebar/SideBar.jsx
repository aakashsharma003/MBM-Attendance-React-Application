import React from "react";
import Logo_icon from "../../assets/logo.png";
import "./SideBar.css";

const SideBar = () => {
  return (
    <>
      <div className="sidebar-container">
        <div className="logo">
          <img src={Logo_icon} alt="" />
        </div>
        <div className="heading">
          <h1>
            <span style={{ color: "#cc0c1e" }}>M.B.M</span> UNIVERSITY
          </h1>
          <h5>State University Govt. of Rajasthan</h5>
        </div>
        <div className="para">
          A Real-time interactive attendance web-application.
        </div>
      </div>
    </>
  );
};

export default SideBar;
