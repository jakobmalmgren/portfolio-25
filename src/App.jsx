import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import NavbarIcons from "./components/NavbarIcons";
import About from "./components/About";
import { LuGithub } from "react-icons/lu";
import { RiLinkedinLine } from "react-icons/ri";
import { NavLink } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <NavbarIcons />
      <div className="app-wrapper">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
      <Footer></Footer>
      <section className="home__icon-section">
        <div className="divider-text">Follow</div>
        <img className="divider" src="../../public/images/divider.svg" alt="" />
        <div className="home-icon-wrapper">
          <section className="home__icon-section__container">
            <NavLink target="_blank" to="https://github.com/jakobmalmgren">
              <LuGithub className="home__icon-section__icon" />
            </NavLink>
          </section>
          <section className="home__icon-section__container">
            <NavLink
              target="_ blank"
              to="https://www.linkedin.com/in/jakob-malmgren-832062226/"
            >
              <RiLinkedinLine className="home__icon-section__icon" />
            </NavLink>
          </section>
        </div>

        <img className="divider" src="../../public/images/divider.svg" alt="" />
        <h1 className="divider-text">Me</h1>
      </section>
    </div>
  );
}

export default App;
