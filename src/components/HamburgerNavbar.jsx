import "./HamburgerNavbar.css";

import { NavLink } from "react-router-dom";
const HamburgerNavbar = () => {
  return (
    <nav className="hamburger-navbar">
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
    </nav>
  );
};

export default HamburgerNavbar;
