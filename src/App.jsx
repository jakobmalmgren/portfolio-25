import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import NavbarIcons from "./components/NavbarIcons";
import About from "./components/About";

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
    </div>
  );
}

export default App;
