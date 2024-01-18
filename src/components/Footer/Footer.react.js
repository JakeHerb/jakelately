import React from 'react';
import './Footer.css'; // Path to your Footer.css file

function Footer() {
  return (
    <footer className="footer-container">
      <p className="footer-text">© {new Date().getFullYear()} Jake Lately. All rights reserved.</p>
      {/* Add any additional footer content here */}
    </footer>
  );
}

export default Footer;