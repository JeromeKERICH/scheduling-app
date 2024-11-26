// src/components/Header.js
import React, { useState } from 'react';
import './Header.css';  // Add the CSS file for Header

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  return (
    <header className="header">
      <div className="container">
        <h1 className="logo">My Scheduling App</h1>
        <nav>
          {/* Hamburger menu */}
          <div className="hamburger-menu" onClick={toggleMenu}>
            <div></div>
            <div></div>
            <div></div>
          </div>
          
          {/* Navigation Links */}
          <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/schedule">Schedule</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
