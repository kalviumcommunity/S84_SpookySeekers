import React from 'react';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      {/* Header Section */}
      <header className="header">
        <h1 className="flicker-text">🌌 SpookySeekers</h1>
        <p>Where the Paranormal Meets Technology</p>
      </header>

      {/* Main Content Section */}
      <main className="main-content">
        <section className="intro">
          <h2>Unlock the Secrets of the Unknown</h2>
          <p>Dive into a world of ghosts, spirits, and supernatural mysteries. Whether you're a pro or just curious, we’ve got your back!</p>
        </section>

        {/* Key Features Section */}
        <section className="features">
          <h2>What We Offer</h2>
          <div className="feature-cards">
            <div className="card">
              <h3>👻 Ghost Database</h3>
              <p>Explore a library of spooky entities and their stories.</p>
            </div>
            <div className="card">
              <h3>📖 Paranormal Stories</h3>
              <p>Read chilling tales from fellow ghost hunters.</p>
            </div>
            <div className="card">
              <h3>🕵️ Ghost Detector</h3>
              <p>Check if a ghost is nearby (just for fun!).</p>
            </div>
          </div>
        </section>

        {/* Call-to-Action Section */}
        <section className="cta">
          <h2>Ready to Explore?</h2>
          <a href="https://s84-spookyseekers.onrender.com" className="cta-button">
            Start Now
          </a>
        </section>
      </main>

      {/* Footer Section */}
      <footer className="footer">
        <p>© 2025 SpookySeekers. All rights reserved.</p>
        <p>Follow us: <a href="#">Twitter</a> | <a href="#">Instagram</a> | <a href="#">Facebook</a></p>
      </footer>
    </div>
  );
};

export default LandingPage;