import React, { useState, useEffect } from 'react';

const Internships = () => {
  const [internships, setInternships] = useState(['']); 

  useEffect(() => {
    const storedInternships = JSON.parse(localStorage.getItem('internships'));
    if (storedInternships) {
      setInternships(storedInternships);
    }
  }, []);

  const handleChange = (index, event) => {
    const newInternships = [...internships];
    newInternships[index] = event.target.value; 
    setInternships(newInternships); 
    localStorage.setItem('internships', JSON.stringify(newInternships)); 
  };

  const addInternship = () => {
    const newInternships = [...internships, '']; 
    setInternships(newInternships);
    localStorage.setItem('internships', JSON.stringify(newInternships)); 
  };

  return (
    <div>
      <h2>Internships</h2>
      {internships.map((internship, index) => (
        <div key={index}>
          <input
            type="text"
            value={internship} 
            onChange={(event) => handleChange(index, event)} 
            placeholder={`Internship ${index + 1}`}
          />
        </div>
      ))}
      <button onClick={addInternship}>Add Internship</button>
      <h3>Your Internships:</h3>
      <ul>
        {internships.map((internship, index) => (
          <li key={index}>{internship}</li> 
        ))}
      </ul>
    </div>
  );
};

export default Internships;
