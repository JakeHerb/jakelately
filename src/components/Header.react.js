import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './css/Header.css';

const Header = ({ logoText, navigation }) => {
  const [isSticky, setIsSticky] = useState(false);

  const handleScroll = () => {
    setIsSticky(window.scrollY > 100);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={isSticky ? 'sticky' : ''}>
      <Link to="/" className="logo">{logoText}</Link>
      <ul>
        {navigation.map((item, index) => (
          <li key={index}><Link to={item.link}>{item.name}</Link></li>
        ))}
      </ul>
    </header>
  );
};

export default Header;