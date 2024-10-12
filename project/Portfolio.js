import React, { useEffect, useState } from 'react';

const Portfolio = () => {
  const [internships, setInternships] = useState([]);
  const [projects, setProjects] = useState([]);
  const [certifications, setCertifications] = useState([]);
  const [aboutMe, setAboutMe] = useState('');

  useEffect(() => {
    const storedInternships = JSON.parse(localStorage.getItem('internships'));
    const storedProjects = JSON.parse(localStorage.getItem('projects'));
    const storedCertifications = JSON.parse(localStorage.getItem('certifications'));
    const storedAboutMe = localStorage.getItem('aboutMe');

    setInternships(storedInternships || []);
    setProjects(storedProjects || []);
    setCertifications(storedCertifications || []);
    setAboutMe(storedAboutMe || '');
  }, []);

  return (
    <div>
      <h1>Your Portfolio</h1>

      <h2>About Me</h2>
      <p>{aboutMe}</p>

      <h2>Internships</h2>
      <ul>
        {internships.length > 0 ? (
          internships.map((internship, index) => (
            <li key={index}>{internship}</li>
          ))
        ) : (
          <li>No internships added</li>
        )}
      </ul>

      <h2>Projects</h2>
      <ul>
        {projects.length > 0 ? (
          projects.map((project, index) => (
            <li key={index}>{project}</li>
          ))
        ) : (
          <li>No projects added</li>
        )}
      </ul>

      <h2>Certifications</h2>
      <ul>
        {certifications.length > 0 ? (
          certifications.map((certification, index) => (
            <li key={index}>{certification}</li>
          ))
        ) : (
          <li>No certifications added</li>
        )}
      </ul>
    </div>
  );
};

export default Portfolio;
