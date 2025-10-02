import React from 'react';
import '../Project/Projects.css'; // Uses the same CSS file

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <div className="project-image-container">
        {/* Placeholder for project image */}
        <img src={project.image} alt={project.title} className="project-img" />
        <div className="project-type-chip">{project.type}</div>
      </div>
      <div className="project-info">
        <h4 className="project-title">{project.title}</h4>
        <p className="project-description">{project.description}</p>
        <div className="project-tech-stack">
          {project.techStack.map((tech, index) => (
            <span key={index} className="tech-chip">{tech}</span>
          ))}
        </div>
        <div className="project-links">
          <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="project-link primary-link">
            Live Demo
          </a>
          <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="project-link secondary-link">
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;