import React, { useState } from 'react';
import './StoryForm.css';

const StoryForm = ({ onClose }) => {
  const [title, setTitle] = useState('');
  const [location, setLocation] = useState('');
  const [eyeWitness, setEyeWitness] = useState('');
  const [story, setStory] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newStory = { title, location, Eye_witness: eyeWitness, story };
    console.log('Story submitted:', newStory);
    // TODO: POST to backend here
    try {
        const response = await fetch('http://localhost:3000/api/entities/ghost_stories', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newStory),
        });
  
        if (response.ok) {
          alert('👻 Your spooky story was added!');
          onClose(); // Close modal
        } else {
          alert('Failed to submit your story.');
        }
      } catch (error) {
        console.error('Error submitting story:', error);
        alert('Something went wrong.');
      }  
    onClose(); // Close form after submit
  };

  return (
    <div className="story-form-overlay">
      <div className="story-form-container">
        <h2>Submit Your Ghost Story</h2>
        <form onSubmit={handleSubmit} className='form'>
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Eye Witness"
            value={eyeWitness}
            onChange={(e) => setEyeWitness(e.target.value)}
            required
          />
          <textarea
            placeholder="Your Story..."
            value={story}
            onChange={(e) => setStory(e.target.value)}
            rows={5}
            required
          />
          <div className="form-actions">
            <button type="submit">Submit</button>
            <button type="button" onClick={onClose} className="cancel-btn">
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default StoryForm;
