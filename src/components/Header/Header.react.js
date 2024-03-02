import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Toggle menu open state
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            <h1>Jake Lately</h1>
          </Link>
        </div>
        <button className="menu-button" onClick={toggleMenu}>☰</button>
        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
          <li><Link to="/about" onClick={toggleMenu}>About</Link></li>
          <li><Link to="/projects" onClick={toggleMenu}>Projects</Link></li>
          <li><Link to="/contact" onClick={toggleMenu}>Contact</Link></li>
        </ul>
      </div>
    </header>
  );
}

export default Header;