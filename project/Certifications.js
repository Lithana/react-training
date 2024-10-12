import React, { useState, useEffect } from 'react';

const Certifications = () => {
  const [certifications, setCertifications] = useState(['']); 

  useEffect(() => {
    const storedCertifications = JSON.parse(localStorage.getItem('certifications'));
    if (storedCertifications) {
      setCertifications(storedCertifications);
    }
  }, []);

  const handleChange = (index, event) => {
    const newCertifications = [...certifications];
    newCertifications[index] = event.target.value; 
    setCertifications(newCertifications); 
    localStorage.setItem('certifications', JSON.stringify(newCertifications)); 
  };

  const addCertification = () => {
    const newCertifications = [...certifications, '']; 
    setCertifications(newCertifications);
    localStorage.setItem('certifications', JSON.stringify(newCertifications)); 
  };

  return (
    <div>
      <h2>Certifications</h2>
      {certifications.map((certification, index) => (
        <div key={index}>
          <input
            type="text"
            value={certification} 
            onChange={(event) => handleChange(index, event)} 
            placeholder={`Certification ${index + 1}`}
          />
        </div>
      ))}
      <button onClick={addCertification}>Add Certification</button>
      <h3>Your Certifications:</h3>
      <ul>
        {certifications.map((certification, index) => (
          <li key={index}>{certification}</li> 
        ))}
      </ul>
    </div>
  );
};

export default Certifications;
