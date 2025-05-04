import "./NavbarIcons.css";
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
    </nav>
  );
};

export default NavbarIcons;
