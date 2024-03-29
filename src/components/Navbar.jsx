import React, { useState } from "react";
import logo from "../assets/images/logo.png";
import { FaTimes, FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../css/Navbar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar-container">
      <div className="nav-logo">
        <img src={logo} alt="logo" />
      </div>
      <div className={`nav-links ${isOpen ? "open" : ""}`}>
        <ul>
          <li>
            <Link to="/" onClick={closeMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={closeMenu}>
              About
            </Link>
          </li>
          <li>
            <Link to="/services" onClick={closeMenu}>
              Services
            </Link>
          </li>
          <li>
            <Link to="/projects" onClick={closeMenu}>
              Projects
            </Link>
          </li>
        </ul>
      </div>
      <div className="hamburger-menu" onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>
    </nav>
  );
}
