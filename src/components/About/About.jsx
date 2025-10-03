import React from 'react';
import './About.css';
import './ResponsiveAboutSection.css';

const About = () => {
  // Define data for the timeline/milestones
  const timelineData = [
    { year: 'Present', title: 'Masters in Computer Applications (MCA)', description: "Currently enrolled in the 3rd semester, pursuing a Master's degree in Computer Applications. Achieved a CGPA of 7.69/10 as of the latest semester. Expected completion in July 2026." },
    { year: '2024', title: 'Bachelors in Computer Applications (BCA)', description: "Completed a Bachelor's degree in Computer Applications. Graduated with a percentage of 62.68% in July 2024." },
    { year: '2021', title: 'Higher Secondary Certificate (HSC) / Class XII', description: "Completed Higher Secondary Education (Class XII) with a focus on Science. Achieved a percentage of 59.80% in April 2021." },
    { year: '2019', title: 'Secondary School Certificate (SSC) / Class X', description: "Completed Secondary Education (Class X). Scored a percentage of 64.20% in April 2019." },
  ];

  // const skillsData = [
  //   'React.js', 'Node.js', 'Express.js', 'MongoDB', 'JavaScript (ES6+)',
  //   'TypeScript', 'REST APIs', 'Git/GitHub', 'SASS/CSS3', 'Figma'
  // ];

const skillsData = [
  // Frontend
  'HTML5',
  'CSS3',
  'SASS',
  'Tailwind CSS',
  'Bootstrap',
  'Responsive Web Design',
  'JavaScript (ES6+)',
  'TypeScript',
  'React.js',
  'Redux',

  // Backend
  'Node.js',
  'Express.js',
  'Django',
  'Spring Boot',
  'REST APIs',
  'Socket.io',
  'JWT Authentication',

  // Databases
  'MongoDB',
  'MySQL',

  // Programming Languages
  'JavaScript',
  'TypeScript',
  'Python',
  'Java',

  // Tools & Platforms
  'Git',
  'GitHub',
  'VS Code',
  'Postman',
  'NPM',
  'Webpack',
  'CI/CD (GitHub Actions)',

  // Design & UI
  'Figma',

  // Concepts & Practices
  'OOP',
  'Data Structures & Algorithms',
  'MVC Architecture',
  'Agile (Scrum)',
  'Operating Systems',
  'Networking',
  'DBMS'
];

  return (
    <section id="about" className="about-section">
      <h2 className="about-title">About Me & My Journey</h2>
      <div className="about-container">
        {/* Left Side: Personal Narrative */}
        <div className="about-narrative">
          <p className="about-greeting">Hello, I'm Nishant Nirav,</p>
          <p>
            a Full Stack Developer from Pune, India, with a passion for building scalable and efficient web applications. I specialize in technologies like JavaScript, React.js, Node.js, and MongoDB, and have successfully developed projects such as an AI-powered code review platform and an online exam portal. My focus is on creating user-friendly interfaces, developing robust backend systems, and ensuring seamless integration across the full stack.          </p>
          <p>
            I have hands-on experience designing and implementing RESTful APIs, securing user authentication, and integrating advanced features like real-time messaging and anti-cheating mechanisms. I’ve also contributed to the development of multiple projects, honing my skills in agile workflows, CI/CD practices, and database management with both MongoDB and MySQL.
          </p>
          <p>
            Beyond coding, I’m committed to continuous learning and sharing knowledge with others. I’ve conducted workshops on Full Stack Development and consistently seek opportunities to improve through certifications and practical projects. Feel free to explore my work on GitHub or connect with me on LinkedIn!
          </p>

          <p className="quote">
            "Every line of code is an opportunity to improve."
          </p>
        </div>
        {/* Right Side: Timeline/Milestones */}
        <div className="about-timeline">
          <h3 className="timeline-header">Key Milestones</h3>
          <div className="timeline">
            {timelineData.map((item, index) => (
              <div className="timeline-item" key={index}>
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <span className="timeline-year">{item.year}</span>
                  <h4 className="timeline-title">{item.title}</h4>
                  <p className="timeline-description">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div className="skills-expertise">
        <h3 className="skills-header">Core Expertise</h3>
        <div className="skills-grid">
          {skillsData.map((skill, index) => (
            <span key={index} className="skill-chip">{skill}</span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;