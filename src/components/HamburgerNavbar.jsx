import "./HamburgerNavbar.css";
import { NavLink } from "react-router-dom";
import Hamburger from "hamburger-react";
const HamburgerNavbar = ({ isOpen, setIsOpen }) => {
  return (
    <nav className={`hamburger-navbar ${isOpen ? "open" : ""}`}>
      <ul className="hamburger-navbar__ul">
        <li className="hamburger-navbar__li">
          <NavLink className="hamburger-navbar_link" to="/">
            HOME
          </NavLink>
        </li>
        <li className="hamburger-navbar__li">
          <NavLink className="hamburger-navbar_link" to="/about">
            ABOUT
          </NavLink>
        </li>
        <li className="hamburger-navbar__li">
          <NavLink className="hamburger-navbar_link" to="/projects">
            PROJECTS
          </NavLink>
        </li>
        <li className="hamburger-navbar__li">
          <NavLink className="hamburger-navbar_link" to="/contact">
            CONTACT
          </NavLink>
        </li>
      </ul>

      <div className="hamburger-navbar__hamburger-react">
        <Hamburger
          toggled={isOpen}
          toggle={setIsOpen}
          // className="hamburger-navbar__hamburger-react"
        />
      </div>
    </nav>
  );
};

export default HamburgerNavbar;
