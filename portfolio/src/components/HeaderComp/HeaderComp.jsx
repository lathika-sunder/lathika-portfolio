import React, { useEffect, useRef, useState } from "react";
import "./HeaderComp.css";
import { FaBars, FaTimes } from "react-icons/fa";

const HeaderComp = () => {

  
  const [showResponsiveNav, setShowResponsiveNav] = useState(false);

  const showNavbar = () => {
    setShowResponsiveNav(!showResponsiveNav);
  };

  return (
    <>
      <div className="header-container">
      <h1 className="title">Lathika Sunder</h1>

        <nav className="navbar"  style={{ display: showResponsiveNav ? "none" : "" }}>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#project">Project</a>
          <a href="#contact">Contact me</a>
        </nav>

        <div className="responsive-navbar-container">
        <button onClick={showNavbar} className="menubar-icon">
            {showResponsiveNav ? <FaTimes /> : <FaBars />}
          </button>
        <nav
          className="responsive-navbar"
          style={{ display: showResponsiveNav ? "flex" : "none" }}
        >
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#project">Project</a>
          <a href="#contact">Contact me</a>
          
        </nav>
       
        </div>
      </div>
    </>
  );
};

export default HeaderComp;
