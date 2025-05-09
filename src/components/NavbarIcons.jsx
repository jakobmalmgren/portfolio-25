import "./NavbarIcons.css";
import { LuGithub } from "react-icons/lu";
import { RiLinkedinLine } from "react-icons/ri";
import Hamburger from "hamburger-react";
import { IoIosMail } from "react-icons/io";
import { useEffect } from "react";
import { ImHome3 } from "react-icons/im";
import { IoPersonSharp } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import logoNavbar from "../images/logoJM.png";
import Zoom from "@mui/material/Zoom";
import { VscTools } from "react-icons/vsc";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import Tooltip from "@mui/material/Tooltip";
import HamburgerNavbar from "./HamburgerNavbar";
const NavbarIcons = () => {
  const location = useLocation();
  useEffect(() => {
    setIsOpen(false);
  }, [location]);
  const [isOpen, setIsOpen] = useState(false);

  const NavlinkStyles = ({ isActive }) => {
    return {
      backgroundColor: isActive ? "rgb(38 77 32)" : "",
      color: isActive ? "white" : "",
    };
  };

  return (
    <nav className="navbar">
      <Hamburger
        toggled={isOpen}
        toggle={setIsOpen}
        className="hamburger-react"
      />
      <NavLink to="/">
        <img src={logoNavbar} alt="" className="navbar__icon" />
      </NavLink>
      {isOpen && <HamburgerNavbar />}

      <ul className="navbar__ul">
        <Tooltip
          componentsProps={{
            tooltip: {
              sx: {
                bgcolor: "common.black", // Bakgrundsfärg
                color: "white", // Textfärg
                fontFamily: '"Delius Swash Caps", cursive', // Typsnitt
              },
            },
            arrow: {
              sx: {
                color: "common.black", // Pilarna matchar bakgrunden
              },
            },
          }}
          title="Home"
          arrow
          slots={{
            transition: Zoom,
          }}
        >
          <li>
            <NavLink style={NavlinkStyles} to="/">
              <ImHome3 />
            </NavLink>
          </li>
        </Tooltip>

        <Tooltip
          componentsProps={{
            tooltip: {
              sx: {
                bgcolor: "common.black", // Bakgrundsfärg
                color: "white", // Textfärg
                fontFamily: '"Delius Swash Caps", cursive', // Typsnitt
              },
            },
            arrow: {
              sx: {
                color: "common.black", // Pilarna matchar bakgrunden
              },
            },
          }}
          title="About"
          arrow
          slots={{
            transition: Zoom,
          }}
        >
          <li>
            <NavLink style={NavlinkStyles} to="/about">
              <IoPersonSharp />
            </NavLink>
          </li>
        </Tooltip>

        <Tooltip
          componentsProps={{
            tooltip: {
              sx: {
                bgcolor: "common.black", // Bakgrundsfärg
                color: "white", // Textfärg
                fontFamily: '"Delius Swash Caps", cursive', // Typsnitt
              },
            },
            arrow: {
              sx: {
                color: "common.black", // Pilarna matchar bakgrunden
              },
            },
          }}
          title="Projects"
          arrow
          slots={{
            transition: Zoom,
          }}
        >
          <li>
            <NavLink style={NavlinkStyles} to="/projects">
              <VscTools />
            </NavLink>
          </li>
        </Tooltip>
        <Tooltip
          componentsProps={{
            tooltip: {
              sx: {
                bgcolor: "common.black", // Bakgrundsfärg
                color: "white", // Textfärg
                fontFamily: '"Delius Swash Caps", cursive', // Typsnitt
              },
            },
            arrow: {
              sx: {
                color: "common.black", // Pilarna matchar bakgrunden
              },
            },
          }}
          title="Contact"
          arrow
          slots={{
            transition: Zoom,
          }}
        >
          <li>
            <NavLink style={NavlinkStyles} to="/contact">
              <IoIosMail />
            </NavLink>
          </li>
        </Tooltip>
      </ul>

      {/* <section className="navbar-icons">
        <div className="navbar-icons__label">Follow</div>

        <img
          className="navbar-icons__divider"
          src="../../public/images/divider.svg"
          alt=""
        />

        <div className="navbar-icons__wrapper">
          <section className="navbar-icons__item">
            <NavLink target="_blank" to="https://github.com/jakobmalmgren">
              <LuGithub className="navbar-icons__icon" />
            </NavLink>
          </section>

          <section className="navbar-icons__item">
            <NavLink
              target="_blank"
              to="https://www.linkedin.com/in/jakob-malmgren-832062226/"
            >
              <RiLinkedinLine className="navbar-icons__icon" />
            </NavLink>
          </section>
        </div>

        <img
          className="navbar-icons__divider"
          src="../../public/images/divider.svg"
          alt=""
        />

        <h1 className="navbar-icons__label">Me</h1>
      </section> */}
    </nav>
  );
};

export default NavbarIcons;
