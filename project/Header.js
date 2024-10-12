import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; 

const Header = () => {
  const [name, setName] = useState("Your's Name"); 

  const handleChange = (event) => {
    setName(event.target.innerText); 
  };

  return (
    <header className="header">
      <h1 
        className="header-title" 
        contentEditable 
        suppressContentEditableWarning 
        onBlur={handleChange} 
        style={{ display: 'inline', cursor: 'text' }} 
      >
        {name}
      </h1>
      <nav className="header-nav">
        <Link to="/photography"><button className="nav-button">PHOTOGRAPHY</button></Link>
        <Link to="/resume"><button className="nav-button">COVER LETTER AND RESUME</button></Link>
        <Link to="/internships"><button className="nav-button">INTERNSHIPS</button></Link>
        <Link to="/projects"><button className="nav-button">PROJECTS</button></Link>
        <Link to="/certifications"><button className="nav-button">CERTIFICATIONS</button></Link>
        <Link to="/about"><button className="nav-button">ABOUT ME</button></Link>
        <Link to="/portfolio"><button className="nav-button">PORTFOLIO</button></Link>
      </nav>
    </header>
  );
};

export default Header;
