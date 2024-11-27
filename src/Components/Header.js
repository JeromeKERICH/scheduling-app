import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';  

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  // Close the menu when a link is clicked
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="container">
        <h1 className="logo">My Scheduling App</h1>
        <nav>
          <div className={`hamburger-menu ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
            <li><a href="/" onClick={closeMenu}>Home</a></li>
            <li><Link to="/about" onClick={closeMenu}>About</Link></li>
            <li><a href="https://wa.me/254729353537" target="_blank" rel="noopener noreferrer" onClick={closeMenu}>Chat with me</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
