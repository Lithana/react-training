import React, { useState } from 'react';
import Header from './components/Header';
import Photography from './components/Photography';
import CoverLetterAndResume from './components/CoverLetterAndResume';
import Internships from './components/Internships';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import AboutMe from './components/AboutMe';
import Portfolio from './components/portfolio';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './app.css';

const App = () => {
  const [coverLetter, setCoverLetter] = useState('');
  const [resume, setResume] = useState(null);
  const [additionalInfo, setAdditionalInfo] = useState('');
  const [photography, setPhotography] = useState('');
  const [internships, setInternships] = useState('');
  const [projects, setProjects] = useState('');
  const [certifications, setCertifications] = useState('');
  const [aboutMe, setAboutMe] = useState('');

  return (
    <Router>
      <div className="container">
        <Header />
        <main>
          <div className="content">
            <Routes>
              <Route path="/photography" element={<Photography setPhotography={setPhotography} />} />
              <Route path="/resume" element={<CoverLetterAndResume setCoverLetter={setCoverLetter} setResume={setResume} setAdditionalInfo={setAdditionalInfo} />} />
              <Route path="/internships" element={<Internships setInternships={setInternships} />} />
              <Route path="/projects" element={<Projects setProjects={setProjects} />} />
              <Route path="/certifications" element={<Certifications setCertifications={setCertifications} />} />
              <Route path="/about" element={<AboutMe setAboutMe={setAboutMe} />} />
              <Route path="/portfolio" 
                     element={<Portfolio 
                       coverLetter={coverLetter} 
                       resume={resume ? resume : 'No file uploaded'} 
                       additionalInfo={additionalInfo} 
                       photography={photography} 
                       internships={internships} 
                       projects={projects} 
                       certifications={certifications} 
                       aboutMe={aboutMe} />} 
              />
              <Route path="/" element={<Photography />} /> {/* Default Route */}
            </Routes>
          </div>
        </main>
      </div>
    </Router>
  );
};

export default App;
