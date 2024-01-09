import React from 'react';
import './css/Footer.css'; // Create a separate CSS file for Footer styles

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>Contact: jake@example.com</p>
        <ul className="footer-links">
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/playground">Playground</a></li>
        </ul>
        <div className="social-media">
          {/* Add social media icons here */}
        </div>
        <p className="about-text">Exploring the intersections of technology and music.</p>
      </div>
    </footer>
  );
};

export default Footer;