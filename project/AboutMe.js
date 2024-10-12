import React, { useState, useEffect } from 'react';
import './aboutMe.css'; 

const AboutMe = () => {
  const [aboutMe, setAboutMe] = useState(''); 
  const [linkedin, setLinkedin] = useState(''); 
  const [github, setGithub] = useState(''); 

  useEffect(() => {
    const savedAboutMe = localStorage.getItem('aboutMe') || '';
    const savedLinkedin = localStorage.getItem('linkedin') || '';
    const savedGithub = localStorage.getItem('github') || '';

    setAboutMe(savedAboutMe);
    setLinkedin(savedLinkedin);
    setGithub(savedGithub);
  }, []);

  const handleAboutChange = (event) => {
    setAboutMe(event.target.value); 
  };

  const handleLinkedinChange = (event) => {
    setLinkedin(event.target.value); 
  };

  const handleGithubChange = (event) => {
    setGithub(event.target.value); 
  };

  const handleSave = () => {
    localStorage.setItem('aboutMe', aboutMe);
    localStorage.setItem('linkedin', linkedin);
    localStorage.setItem('github', github);
    alert('Information Saved!');
  };

  return (
    <div className="about-me-container">
      <h2>About Me</h2>
      <textarea
        className="about-me-textarea"
        value={aboutMe} 
        onChange={handleAboutChange} 
        rows="5"
        placeholder="Type about yourself..."
      />

      <h3>Social Media Links</h3>
      <div className="social-links">
        <label>
          LinkedIn:
          <input
            type="url"
            value={linkedin}
            onChange={handleLinkedinChange} 
            placeholder="https://www.linkedin.com/in/your-profile"
          />
        </label>
        <label>
          GitHub:
          <input
            type="url"
            value={github}
            onChange={handleGithubChange} 
            placeholder="https://github.com/your-username"
          />
        </label>
      </div>

      <button onClick={handleSave}>Save Information</button>

      <h3>Your Input:</h3>
      <p className="about-me-output">{aboutMe}</p> {/* Display the typed content */}
      <h4>Links:</h4>
      <p>
        {linkedin && <span className="link-label">LinkedIn Profile: </span>}
        {linkedin && (
          <a className="link" href={linkedin} target="_blank" rel="noopener noreferrer">
            {linkedin}
          </a>
        )}
      </p>
      <p>
        {github && <span className="link-label">GitHub Profile: </span>}
        {github && (
          <a className="link" href={github} target="_blank" rel="noopener noreferrer">
            {github}
          </a>
        )}
      </p>
    </div>
  );
};

export default AboutMe;
