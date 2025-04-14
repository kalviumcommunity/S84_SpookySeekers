import React from 'react';
import './HomePage.css';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {

    const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token'); // remove JWT or auth token
    navigate('/login'); // redirect to login
  };
  const handleDetector = () => {
    navigate('/detector'); // redirect to login
  };

  return (
    <div className="homepage">
        <nav className="navbar">
      <div className="logo">SpookySeekers</div>
      <ul className="nav-links">
        <li><a href="/posts">Paranormal Stories</a></li>
        <li><a href="#events">Upcoming Events</a></li>
        <li><a href="/about">About Us</a></li>
        <li><a href="/contact">Contact Us</a></li>
      </ul>
      <button className="logout-btn" onClick={handleLogout}>👻 Logout</button>
    </nav>
      {/* Hero Section */}
      <section className="hero">
        <div className="overlay"></div>
        <div className="hero-content">
          <h1>Welcome to Spooky Seekers</h1>
          <p>Your gateway to the unknown...</p>
        </div>
      </section>

      {/* Ghost Detector */}
      <section className="ghost-detector">
        <h2>Ghost Detector</h2>
        <p>Click below to scan for paranormal entities around you.</p>
        <button className="button" onClick={handleDetector}>Start Scanning</button>
      </section>

      {/* Haunted Locations */}
      <section className="haunted-locations">
        <h2>Haunted Locations</h2>
        <div className="location-container">
          <div className="location-card">The Abandoned Asylum</div>
          <div className="location-card">The Phantom Lake</div>
        </div>
      </section>

      {/* Spooky Events */}
      <section className="spooky-events" id='events'>
        <h2>Upcoming Spooky Events</h2>
        <div className="event-card">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMmN35dRL-ZcszM4xtDAT30Il1xmZXs0RP-w&s" alt="Haunted House Tour" className="event-image" />
          <div className="event-info">
            <h3>Haunted House Tour</h3>
            <p className='event-date'>Date: October 31, 2025</p>
            <p>Location: Old Manor, Darkwood</p>
            <p>Experience a spine-chilling night in one of the most haunted locations!</p>
          </div>
        </div>
        <div className="event-card">
          <img src="https://www.haunted-houses.co.uk/wp-content/uploads/2019/03/fgh12.jpg" alt="Ghost Hunting Night" className="event-image" />
          <div className="event-info">
            <h3>Ghost Hunting Night</h3>
            <p className='event-date'>Date: November 13, 2025</p>
            <p>Location: Abandoned Asylum</p>
            <p>Join experts in a night of real paranormal investigations.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
