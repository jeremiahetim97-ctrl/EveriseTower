import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Helper to close mobile menu when a link is clicked
  const closeMenu = () => setIsOpen(false);

  return (
    <nav>
      <div className="logo-container">
        <Link to="/" className="logo-link" onClick={closeMenu}>
          <img src={logo} alt="EverRise Logo" />
          <span className="logo-text">EVERRISE <span className="red-text">TOWERS</span></span>
        </Link>
      </div>

      <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
        <i className={isOpen ? "fas fa-times" : "fas fa-bars"}></i>
      </div>

      <ul className={isOpen ? "nav-links active" : "nav-links"}>
        {/* Updated: Home now goes to the Brand/Highlights page */}
        <li><Link to="/home" onClick={closeMenu}>Home</Link></li>
        
        {/* New: About link leads to the Hero + About combined page */}
        <li><Link to="/about" onClick={closeMenu}>About</Link></li>
        
        <li><Link to="/services" onClick={closeMenu}>Services</Link></li>
        <li><Link to="/projects" onClick={closeMenu}>Projects</Link></li>
        
        <li><Link to="/login" onClick={closeMenu}>Login</Link></li>
        
        {/* CTA: Still points to root (/) since Signup is your landing page */}
        <li><Link to="/" className="nav-cta" onClick={closeMenu}>Join Now</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;