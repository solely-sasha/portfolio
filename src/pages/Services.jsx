import React from "react";
import { Link } from "react-router-dom";
import { FaCode, FaDesktop, FaMobileAlt } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";
import "../css/Services.css";

export default function Services() {
  return (
    <div className="services-container">
      <div className="services-list-container">
        <div className="services-description-container">
          <h1>
            My <span>Services</span>
          </h1>
          <p>
            As someone relatively new to the world of web development, I'm eager
            to offer my skills to help businesses and individuals establish
            their online presence. With a focus on the MERN stack, I'm here to
            provide simple yet effective solutions for your digital needs.
          </p>
          <Link to="/contact">
            <button> Let's Chat! </button>
          </Link>
        </div>
        <div className="services-item-container">
          <div className="services-item">
            <FaCode className="services-icon" />
            <div className="item-description">
              <h3>Web Development</h3>
              <p>
                I specialize in crafting custom web applications that cater to
                your unique requirements. Using modern technologies like
                React.js, Node.js, and MongoDB, I strive to create user-friendly
                interfaces and robust back-end solutions to help your online
                presence shine.
              </p>
            </div>
          </div>
          <div className="services-item">
            <FaDesktop className="services-icon" />
            <FaMobileAlt className="services-icon" />
            <div className="item-description">
              <h3>Desktop and Mobile Development</h3>
              <p>
                With a growing passion for both desktop and mobile development,
                I'm dedicated to building intuitive applications that seamlessly
                adapt to various devices. Whether it's a desktop software
                solution or a mobile app, I'm committed to delivering
                exceptional user experiences.
              </p>
            </div>
          </div>
          <div className="services-item">
            <CgWebsite className="services-icon" />
            <div className="item-description">
              <h3>U/X Design</h3>
              <p>
                While I'm still honing my skills in user experience (U/X)
                design, I recognize its importance in creating successful
                digital products. By following U/X design principles, I aim to
                craft visually appealing interfaces that enhance usability and
                engagement, ensuring a seamless experience for your website or
                application.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
