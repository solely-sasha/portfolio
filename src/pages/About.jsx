import React from "react";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../css/About.css";

export default function About() {
  return (
    <>
      <div className="about-container main">
        <div className="about-content">
          <h2 className="about-heading">About Me (Rhythmically)</h2>
          <p className="about-text">
            Hi, I'm Sasha, lover of <span className="highlight">puzzles</span>,{" "}
            <span className="highlight">words</span>, {""}
            <span className="highlight">math</span>, and {""}
            <span className="highlight">art</span> <br />
            with a life of experience not near the end, nor at the start <br />
            I'm happy in <span className="highlight">crafting</span>,{" "}
            <span className="highlight">adventures</span>, and{" "}
            <span className="highlight">writing</span> relatable verses
            <br />
            but <span className="highlight">web development</span> is where I
            find my mind immerses
            <br /> self-taught "Jane of all trades", always{" "}
            <span className="highlight">eager to learn</span> <br />
            <span className="highlight">focused</span> on a career, my full
            commitment is easy to earn <br />
            In my employment history, you'll notice a gap <br />
            but I've been steadily gaining skills as an{" "}
            <span className="highlight">active</span> mom <br />
            so don't worry about that <br />
            I'm <span className="highlight">grateful</span> for everything and
            every opportunity, <br />
            and appreciate the <span className="highlight">
              consistent
            </span>{" "}
            effort it takes <br />
            because nothing has ever been handed to me
            <br /> they say you become who you surround yourself with
            <br /> this a matter of <span className="highlight">value</span> for
            which I truly <span className="highlight">care</span>
            <br /> so I believe in building up the success of the company I
            share
            <br />
            here's a small reflection of the{" "}
            <span className="highlight">work</span> I can do <br />
            reach out to see how I can be the best{" "}
            <span className="highlight">for you</span>
          </p>

          <div className="projects-button-container">
            <Link to="/projects">
              <button>Projects</button>
            </Link>
          </div>
        </div>

        <div className="social-links-container">
          <div className="social-links-content">
            <h2 className="social-heading">
              You Can Find Me Around the Internet
            </h2>
            <div className="about-content-2">
              <div className="social-icons">
                <a
                  href="https://github.com/solely-sasha"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="icon" />
                </a>
                <a
                  href="https://linkedin.com/in/sasha-sims"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin className="icon" />
                </a>
                <a
                  href="https://www.facebook.com/ssasha86/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebook className="icon" />
                </a>

                <a
                  href="https://instagram.com/solely-sasha"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram className="icon" />
                </a>
              </div>
              <div className="contact-button-container">
                <Link to="/contact">
                  <button className="contact-button">Contact Me</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
