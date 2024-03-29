import React from "react";
import { Link } from "react-router-dom";

import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import "../css/Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-links social-links">
          <ul>
            <li>
              <a
                href="https://www.linkedin.com/in/sasha-sims/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="linkedin" />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/solely.sasha/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="instagram" />
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-links">
          <ul>
            <li>
              <Link to="/contact">Contact Me</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
