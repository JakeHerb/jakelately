import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';
import astronautImage from '../Hero/spaceman.png';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  // Close menu when route changes
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const navLinks = [
    { to: '/', label: 'Home', subtitle: 'Back to base' },
    { to: '/about', label: 'About', subtitle: 'The mission' },
    { to: '/projects', label: 'Projects', subtitle: 'Explore the work' },
    { to: '/blog', label: 'Blog', subtitle: 'Thoughts & updates' },
    { to: '/now', label: 'Now', subtitle: 'Current status' },
    { to: '/uses', label: 'Uses', subtitle: 'My toolkit' },
    { to: '/contact', label: 'Contact', subtitle: 'Send a signal' },
  ];

  return (
    <header className="header">
      <div className="header-inner">
        <Link to="/" className="logo" onClick={closeMenu}>
          Jake Lately
        </Link>

        <nav className="desktop-nav">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/now">Now</Link>
          <Link to="/uses">Uses</Link>
          <Link to="/contact">Contact</Link>
        </nav>

        <button
          className={`hamburger ${menuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>
      </div>

      {/* Mobile Navigation */}
      <div className={`mobile-nav-overlay ${menuOpen ? 'open' : ''}`} onClick={closeMenu}></div>

      <nav className={`mobile-nav ${menuOpen ? 'open' : ''}`}>
        {/* Decorative elements */}
        <div className="nav-stars"></div>
        <div className="nav-glow"></div>

        {/* Floating astronaut */}
        <img
          src={astronautImage}
          alt=""
          className="nav-astronaut"
        />

        {/* Navigation links */}
        <div className="nav-links-container">
          {navLinks.map((link, index) => (
            <Link
              key={link.to}
              to={link.to}
              className="nav-link"
              onClick={closeMenu}
              style={{ animationDelay: `${0.1 + index * 0.08}s` }}
            >
              <span className="nav-link-number">0{index + 1}</span>
              <div className="nav-link-content">
                <span className="nav-link-label">{link.label}</span>
                <span className="nav-link-subtitle">{link.subtitle}</span>
              </div>
              <span className="nav-link-arrow">→</span>
            </Link>
          ))}
        </div>

        {/* Bottom decoration */}
        <div className="nav-footer">
          <div className="nav-line"></div>
          <span className="nav-tagline">Explore the universe</span>
        </div>
      </nav>
    </header>
  );
}

export default Header;
