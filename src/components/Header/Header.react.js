import React, { useState } from 'react';
import JakeIcon from '../JakeIcon/JakeIcon.react';
import './Header.css';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <div className="header-container"> {/* Add this container */}
        <div className="logo">
          <h1>Jake Lately</h1>
        </div>
        <button className="menu-button" onClick={toggleMenu}>☰</button>
        <nav className={`nav ${menuOpen ? 'open' : ''}`}>
          <ul className="nav-links">
            <li><a href="#about" onClick={toggleMenu}>About</a></li>
            <li><a href="#press" onClick={toggleMenu}>Press</a></li>
            <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;