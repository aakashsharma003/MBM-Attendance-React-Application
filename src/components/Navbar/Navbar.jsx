import { NavLink } from "react-router-dom";
import Logo_icon from "../../assets/logo.png";
import "./Navbar.css";
export const Navbar = () => {
  return (
    <>
      <header>
        <div className="nav-container">
          <div className="logo-box list-items">
            <img className="logo-icon" src={Logo_icon} alt="small-logo" />
            <NavLink to="/" className="items">
              Attendee
            </NavLink>
          </div>

          <nav className="navbar">
            <ul className="navlist">
              <li className="list-items">
                <NavLink to="/" className="items">
                  Login
                </NavLink>
              </li>
              <li className="list-items">
                <NavLink to="/teacher/mark-Attendence" className="items">
                  Attendence
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};
