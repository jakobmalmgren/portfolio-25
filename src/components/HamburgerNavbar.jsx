import "./HamburgerNavbar.css";
import { LuGithub } from "react-icons/lu";
import { RiLinkedinLine } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import Hamburger from "hamburger-react";
const HamburgerNavbar = ({ isOpen, setIsOpen }) => {
  return (
    // <nav className="hamburger-navbar">
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
        <section className="hamburger-navbar__icons">
          <div className="hamburger-navbar__label">Follow</div>
          <img
            className="hamburger-navbar__divider"
            src="/images/dividerChanged.svg"
            alt=""
          />

          <div className="hamburger-navbar__icons-wrapper">
            <div className="hamburger-navbar__icon-item">
              <NavLink
                target="_blank"
                to="https://github.com/jakobmalmgren"
                className="hamburger-navbar__icon-link"
              >
                <LuGithub className="hamburger-navbar__icon" />
              </NavLink>
            </div>

            <div className="hamburger-navbar__icon-item">
              <NavLink
                target="_blank"
                to="https://www.linkedin.com/in/jakob-malmgren-832062226/"
                className="hamburger-navbar__icon-link"
              >
                <RiLinkedinLine className="hamburger-navbar__icon" />
              </NavLink>
            </div>
          </div>

          <img
            className="hamburger-navbar__divider"
            src="/images/dividerChanged.svg"
            alt=""
          />
          <h1 className="hamburger-navbar__label">Me</h1>
        </section>
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
