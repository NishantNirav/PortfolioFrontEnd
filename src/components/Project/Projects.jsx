import React from 'react';
import ProjectCard from '../ProjectCard/ProjectCard';
import './Projects.css';

const projectsData = [
  {
    id: 1,
    title: 'CodeBuddy',
    image: '/assets/projects/CodeBuddy.png', // REPLACE with actual image path
    description: 'AI-powered code review tool built with React.js, Node.js, Express.js, and Gemini API. Features a custom multi-language code editor, secure REST APIs, and real-time AI feedback. Used by various students to improve coding skills.',
    techStack: ['React.js', 'Node.js', 'Express.js', 'Gemini API', 'REST APIs'],
    type: 'Full Stack Development',
    liveLink: '#',
    githubLink: 'https://github.com/NishantNirav/CodeBuddy',
  },
  {
    id: 2,
    title: 'React Dashboard UI',
    image: '/assets/projects/examsDotNet.png', // REPLACE with actual image path
    description: 'Developed a backend-focused online exam portal supporting concurrent students with role-based logins and dashboards for students and teachers. Integrated anti-cheating features like tab detection and dev tools blocking, cutting malpractice, and automated grading to save teacher effort.',
    techStack: ['HTML', 'CSS', 'JS', 'SQL Lite', 'Django', 'Django ORM'],
    type: 'Full Stack Developmen',
    liveLink: '#',
    githubLink: 'https://github.com/NishantNirav/Exams.net',
  },
  {
    id: 3,
    title: 'Node.js API Service',
    image: '/assets/projects/chatApplication.png', // REPLACE with actual image path
    description: 'Created a full-stack real-time chat app using the MERN stack with private and group messaging. Utilized Socket.io for live updates, JWT authentication for security, and RESTful APIs for data exchange. Achieved maximum uptime in testing and securely hosted data on MongoDB Atlas.',
    techStack: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Socket.io', 'JWT Authentication', 'REST APIs'],
    type: 'Full Stack Developmen',
    liveLink: '#',
    githubLink: 'https://github.com/NishantNirav/ChatApplication',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title">My Projects 🛠️</h2>
      <p className="section-subtitle">A collection of my best work, demonstrating my full-stack capabilities.</p>
      
      <div className="projects-grid">
        {projectsData.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;