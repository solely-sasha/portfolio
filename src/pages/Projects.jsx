import React, { useState } from "react";
import { FaGithub } from "react-icons/fa";
import project1 from "../assets/images/healthy-habits-hero.png";
import project2 from "../assets/images/GRACE.png";
import project3 from "../assets/images/vision-drawing.png";
import project1mobile from "../assets/images/healthy-habits-hero-mobile.png";
import project2mobile from "../assets/images/GRACE-mobile.png";
import project3mobile from "../assets/images/vision-drawing-mobile.png";
import "../css/Projects.css";

const projectsData = [
  {
    image: project1,
    mobileImage: project1mobile,
    title: "Healthy Habits Hero",
    description:
      "Transforms chores and healthy habits into adventures to encourage good behavior, conquer tasks, and earn badges of honor in a fun-filled chore chart app for families.",
    link: "/projects/healthy-habits-hero",
    technologies: [
      "React",
      "Express",
      "MongoDB",
      "Node.js",
      "Axios",
      "Tailwind CSS",
    ],
    githubLink: "https://github.com/solely-sasha/Healthy-Habits-Hero",
  },
  {
    image: project2,
    mobileImage: project2mobile,
    title: "GRACE: Grocery Resources And Community Exchange",
    description:
      "app designed to facilitate help between individuals and local food pantries. Users can access resources, connect with food pantries, and contribute to building a supportive community",
    link: "/projects/grace",
    technologies: [
      "MongoDB",
      "React",
      "Tailwind CSS",
      "Axios",
      "Express",
      "Mongoose",
    ],
    githubLink:
      "https://github.com/solely-sasha/level-5-VSchool/tree/master/GRACE",
  },

  {
    image: project3,
    mobileImage: project3mobile,
    title: "Vision Drawing",
    description:
      "prompts for creative inspiraton blending random words and images sourced from different APIs, users are presented with an endless array of imaginative prompts. With the ability to save these creations in a personal gallery, users can revisit and draw inspiration from their favorite combinations. Additionally, Vision Drawing integrates Firebase functionality, empowering users to contribute their own images and further enrich the creative community.",
    link: "/projects/vision-drawing",
    technologies: ["Axios", "Firebase", "React", "CSS"],
    githubLink:
      "https://github.com/solely-sasha/level-4-VSchool/tree/master/VisionDrawing/vision-drawing",
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  return (
    <div className="projects-container ">
      <h1 className="projects-title">
        My Recent <span className="span">Projects</span>
      </h1>
      <div className="projects-list-container">
        {projectsData.map((project, index) => (
          <div
            key={index}
            className="project-item"
            onClick={() => handleProjectClick(project)}
          >
            <img src={project.image} alt={project.title} />
            <div className="project-details">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="technologies">
                {project.technologies.map((tech, index) => (
                  <span key={index}>{tech}</span>
                ))}
              </div>
              <div className="project-links">
                <a href={project.githubLink} className="github-button">
                  <FaGithub className="project-link" />
                  GitHub
                </a>
                <button
                  className="mobile-button"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleProjectClick(project);
                  }}
                >
                  Mobile View
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {selectedProject && (
        <div className="mobile-view">
          <button
            className="close-button"
            onClick={() => setSelectedProject(null)}
          >
            Close
          </button>
          <img
            src={selectedProject.mobileImage}
            alt={`${selectedProject.title} Mobile View`}
            className="mobile-image"
          />
        </div>
      )}
    </div>
  );
}
