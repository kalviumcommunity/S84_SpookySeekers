import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-container">
      <h1>👻 About SpookySeekers</h1>
      <p>
        Welcome to <strong>SpookySeekers</strong> – your paranormal playground where haunted whispers become real stories. We’re a community of curious souls, ghost hunters, and midnight storytellers keeping the spirit world alive one spooky tale at a time.
      </p>

      <h2>🌙 Our Mission</h2>
      <p>
        To create a safe and spine-chilling space where believers and skeptics alike can share, explore, and investigate paranormal phenomena from around the world.
      </p>

      <h2>🕯️ What You Can Do Here</h2>
      <ul>
        <li>📖 Read spine-tingling real-life ghost stories</li>
        <li>✍️ Share your own supernatural experiences</li>
        <li>💬 Comment, react, and connect with fellow seekers</li>
        <li>🧭 Discover haunted places and local legends</li>
      </ul>

      <h2>🧙‍♀️ Meet the Makers</h2>
      <p>
        This project was built by dreamers who love code, caffeine, and the occasional poltergeist. We combine design, development, and storytelling to bring haunted narratives to life through the web.
      </p>

      <p className="closing-quote">✨ Stay spooky. Stay curious. And whatever you do... don’t turn around.</p>
    </div>
  );
};

export default AboutUs;
