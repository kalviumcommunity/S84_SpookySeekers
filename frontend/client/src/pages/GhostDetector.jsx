import React, { useState, useEffect } from 'react';
import './GhostDetector.css';

const spookyPhrases = [
    "A spirit is nearby...",
  "Unusual energy levels detected.",
  "You are not alone.",
  "Entity detected! Stay calm.",
  "There's a presence watching you...",
  "I feel a cold chill... Do you?",
  "Something just moved behind you.",
  "Whispers are coming through the static.",
  "The veil is thin here.",
  "Ghostly aura detected — proceed with caution.",
  "They're trying to communicate...",
  "Footsteps... but no one is there.",
  "The room temperature just dropped.",
  "It knows you're here.",
  "Don't look behind you.",
  "Something is not right here.",
  "High ectoplasmic readings.",
  "Anomaly in the electromagnetic field.",
  "Spectral interference increasing.",
  "You’ve been marked by a wandering soul...",
  "The silence is too loud...",
  "Shadow spotted in your area.",
  "They remember you...",
  "Your presence has awakened something...",
  "It’s watching. It’s waiting."
];

const GhostDetector = () => {
  const [ghostLevel, setGhostLevel] = useState(0);
  const [message, setMessage] = useState("Scanning...");
  const [detected, setDetected] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomLevel = Math.floor(Math.random() * 101); // 0 - 100
      setGhostLevel(randomLevel);

      if (randomLevel > 70) {
        setDetected(true);
        setMessage(spookyPhrases[Math.floor(Math.random() * spookyPhrases.length)]);
      } else {
        setDetected(false);
        setMessage("All clear... for now.");
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`ghost-container ${detected ? 'alert' : ''}`}>
      <h2>👻 Ghost Detector 3000</h2>
      <div className="meter">
        <div className="level" style={{ width: `${ghostLevel}%` }}></div>
      </div>
      <p>Ghost Signal Strength: {ghostLevel}%</p>
      <h3>{message}</h3>
    </div>
  );
};

export default GhostDetector;
