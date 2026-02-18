import React from "react";
import "../css/Header.css";
import profile from "../assets/images/profile.png";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="header-container">
      <div className="header-content">
        <h1>Hi, I'm </h1>
        <h2 className="span">Sasha Sims </h2>
        <h2>
          I'm a MERN stack developer <span>and</span> ...
        </h2>
        <p>
          a lover of puzzles, words, math, and art <br />
          with a life of experience not near the end, nor at the start <br />
          I'm happy in crafting, adventures and writing relatable verses <br />
          but web development is where I find my mind immerses <br />
          self-taught "Jane of all trades", always eager to learn <br />
          focused on a career, my full commitment is easy to earn...
        </p>
        <div className="header-button-container">
          <Link to="/about">
            <button>Read More</button>
          </Link>
          <a
            href="https://docs.google.com/document/d/1yJYrp1OWhIUwXwYNgcWMiGYmWgk-wML_oh4YnvPt6iY/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button>Resume</button>
          </a>
        </div>
      </div>
      <div className="profile-img-container">
        <img src={profile} alt="profile" />
      </div>
    </div>
  );
}
