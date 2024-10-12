import React, { useState, useEffect } from 'react';

const CoverLetterAndResume = () => {
  const [coverLetter, setCoverLetter] = useState('');
  const [resume, setResume] = useState(null);
  const [additionalInfo, setAdditionalInfo] = useState('');
  const [resumePreview, setResumePreview] = useState(null);
  
  const [savedCoverLetter, setSavedCoverLetter] = useState('');
  const [savedResume, setSavedResume] = useState('No file uploaded');
  const [savedAdditionalInfo, setSavedAdditionalInfo] = useState('');

  useEffect(() => {
    const loadedCoverLetter = localStorage.getItem('coverLetter') || '';
    const loadedResume = localStorage.getItem('resume') || 'No file uploaded';
    const loadedAdditionalInfo = localStorage.getItem('additionalInfo') || '';

    setSavedCoverLetter(loadedCoverLetter);
    setSavedResume(loadedResume);
    setSavedAdditionalInfo(loadedAdditionalInfo);
  }, []);

  const handleResumeUpload = (event) => {
    const file = event.target.files[0];
    setResume(file);
    
    if (file) {
      const fileURL = URL.createObjectURL(file);
      setResumePreview(fileURL);
    }
  };

  const handleSave = () => {
    localStorage.setItem('coverLetter', coverLetter);
    localStorage.setItem('resume', resume ? resume.name : 'No file uploaded');
    localStorage.setItem('additionalInfo', additionalInfo);

    setSavedCoverLetter(coverLetter);
    setSavedResume(resume ? resume.name : 'No file uploaded');
    setSavedAdditionalInfo(additionalInfo);

    alert('Cover Letter and Additional Information Saved!');
  };

  return (
    <div>
      <h2>Cover Letter and Resume</h2>
      
      {/* Cover Letter Input */}
      <textarea
        placeholder="Write your cover letter here..."
        value={coverLetter}
        onChange={(e) => setCoverLetter(e.target.value)}
        rows="10"
        style={{ width: '100%', padding: '10px' }}
      />

      {/* Resume Upload */}
      <div className="upload-section">
        <label htmlFor="resume-upload">Upload Resume (PDF or Image):</label>
        <input type="file" id="resume-upload" onChange={handleResumeUpload} />
      </div>

      {resume && <p>Uploaded: {resume.name}</p>}

      {/* Preview resume if it's an image */}
      {resumePreview && (
        <div>
          <h3>Resume Preview:</h3>
          {resume.type.includes('image') ? (
            <img src={resumePreview} alt="Resume Preview" style={{ width: '100%', height: 'auto' }} />
          ) : (
            <a href={resumePreview} target="_blank" rel="noopener noreferrer">Download Resume</a>
          )}
        </div>
      )}

      {/* Additional Information Input */}
      <div className="additional-content">
        <h3>Additional Information</h3>
        <textarea
          placeholder="Type any additional information here..."
          value={additionalInfo}
          onChange={(e) => setAdditionalInfo(e.target.value)}
          rows="5"
          style={{ width: '100%', padding: '10px' }}
        />
      </div>

      <button className="button" onClick={handleSave}>Save Cover Letter</button>

      {/* Display Saved Information */}
      <div>
        <h2>Saved Information</h2>
        <p><strong>Cover Letter:</strong> {savedCoverLetter}</p>
        <p><strong>Resume:</strong> {savedResume}</p>
        <p><strong>Additional Information:</strong> {savedAdditionalInfo}</p>
      </div>
    </div>
  );
};

export default CoverLetterAndResume;
