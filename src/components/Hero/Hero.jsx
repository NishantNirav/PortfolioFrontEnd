import React from 'react';
import './Hero.css';
import TypedAnimation from '../TypedAnimation/TypedAnimation';
const RESUME_URL = '/Nishant_Nirav_CV.pdf';
const Hero = () => {
  return (
    <section className="hero-content" id='home'>
      <p className="greeting">Hi There 👋!</p>
      <h1 className="name-intro">I'M <span className="highlight">Nishant Nirav</span></h1>
      {/* <h2 className="role">Full Stack Developer | MERN Stack</h2> */}
      <TypedAnimation/>
      <div className="cta-buttons">
        {/* 🟢 1. VIEW RESUME/CV (Opens in a new tab) 🟢 */}
        <a 
          href={RESUME_URL}
          target="_blank" // Opens the PDF in a new browser tab/window
          rel="noopener noreferrer"
          className="cta-button primary" // Use your existing button styles
        >
          View Resume/CV
        </a>
        
        {/* 🟢 2. DOWNLOAD RESUME/CV (Forces a download) 🟢 */}
        <a
          href={RESUME_URL}
          download="" // Triggers the browser's download dialog
          className="cta-button secondary" // Use your existing button styles
        >
          Download Resume/CV
        </a>
      </div>
      
    </section>
  );
};

export default Hero;