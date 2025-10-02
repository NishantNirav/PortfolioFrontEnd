import React from 'react';
import './ProfileCard.css';
// import ac from ''
// 🎯 Data Structure for your Skill Images
const skillIconsData = [
  { index: 0, name: 'MongoDB', imageUrl: '/assets/skills/mongo.png' },
  { index: 1, name: 'Express', imageUrl: '/assets/skills/express.png' },
  { index: 2, name: 'React', imageUrl: '/assets/skills/react.png' },      // Example path (make sure your image path is correct)
  { index: 3, name: 'Node.js', imageUrl: '/assets/skills/node.png' },
  { index: 5, name: 'JavaScript', imageUrl: '/assets/skills/js.png' },
  { index: 6, name: 'Java', imageUrl: '/assets/skills/java.webp' },
  { index: 7, name: 'Python', imageUrl: '/assets/skills/python.jpeg' },
  { index: 8, name: 'Django', imageUrl: '/assets/skills/django.png' },
  // Add more as needed!
];

const ProfileCard = ({ imageUrl }) => {
  // Sort the data by index just in case (though it should maintain order from the array)
  const sortedSkills = skillIconsData.sort((a, b) => a.index - b.index);

  return (
    <div className="profile-card">
      <div className="image-circle">
        <img 
          src={imageUrl || 'path/to/placeholder.jpg'} 
          alt="Nishant Nirav" 
          className="profile-img" 
        />
      </div>
      <div className="profile-details">
        <h3 className="profile-name">Nishant Nirav</h3>
        <p className="profile-role">Full Stack Developer</p>
      </div>
      <div className="skill-icons-row">
        {/* Map the sorted data to render the images */}
        {sortedSkills.map((skill) => (
          <div 
            key={skill.index} 
            className="skill-icon-container" 
            title={skill.name}
          >
            {/* 🎯 Using standard <img> tag */}
            <img 
              src={skill.imageUrl} 
              alt={skill.name} // Alt text is the skill name
              className="skill-icon-image"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfileCard;