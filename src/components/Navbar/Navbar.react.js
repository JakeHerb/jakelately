import React from 'react';
import './Navbar.css';

function Navbar() {
  // Function to handle click event on navigation tabs
  const handleNavClick = (targetId) => {
    const targetElement = document.getElementById(targetId);
    targetElement.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="nav">
      <h1>FRONTEND TRENDS</h1>
      <div className="nav-container">
        {/* List of navigation tabs */}
        <a className="nav-tab" onClick={() => handleNavClick('tab-svelte')}>SVELTE</a>
        <a className="nav-tab" onClick={() => handleNavClick('tab-esbuild')}>ESBUILD</a>
        <a className="nav-tab" onClick={() => handleNavClick('tab-next')}>NEXT.JS</a>
        <a className="nav-tab" onClick={() => handleNavClick('tab-typescript')}>TYPESCRIPT</a>
        <a className="nav-tab" onClick={() => handleNavClick('tab-vite')}>VITE</a>
        <span className="nav-tab-slider"></span>
      </div>
    </nav>
  );
}

export default Navbar;