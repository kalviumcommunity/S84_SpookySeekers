import React, { useState } from 'react';
import './ContactUs.css';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Contact form data:', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="contact-us">
      <h1>📨 Contact Us</h1>
      <p>If you’ve got a spooky story to share, feedback to whisper, or just want to say hi from the other side—drop us a message!</p>

      {submitted ? (
        <div className="thank-you">👻 Thank you! We’ll haunt you back soon.</div>
      ) : (
        <form onSubmit={handleSubmit} className="contact-form">
          <label>
            Your Name
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="Eg: Casper"
            />
          </label>

          <label>
            Your Email
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="Eg: ghostlover@mail.com"
            />
          </label>

          <label>
            Your Message
            <textarea
              name="message"
              rows="5"
              required
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us something spooky..."
            />
          </label>

          <button type="submit">Send Message 👻</button>
        </form>
      )}
    </div>
  );
};

export default ContactUs;
