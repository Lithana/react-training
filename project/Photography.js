import React, { useState, useEffect } from 'react';

const Photography = () => {
  const [photo, setPhoto] = useState(null); 

  useEffect(() => {
    const savedPhoto = localStorage.getItem('uploadedPhoto');
    if (savedPhoto) {
      setPhoto(savedPhoto); 
    }
  }, []);

  const handlePhotoChange = (event) => {
    const file = event.target.files[0]; 
    if (file) {
      const reader = new FileReader(); 
      reader.onloadend = () => {
        setPhoto(reader.result); 
        localStorage.setItem('uploadedPhoto', reader.result); 
      };
      reader.readAsDataURL(file); 
    }
  };

  return (
    <div>
      <h2>Photography</h2>
      <div className="upload-section">
        <label htmlFor="photo-upload">Upload your photo:</label>
        <input
          type="file"
          id="photo-upload"
          accept="image/*" 
          onChange={handlePhotoChange} 
        />
      </div>

      {photo && (
        <div className="photo-preview">
          <h3>Your Uploaded Photo:</h3>
          <img src={photo} alt="Uploaded" style={{ maxWidth: '100%', borderRadius: '10px' }} />
        </div>
      )}
    </div>
  );
};

export default Photography;
