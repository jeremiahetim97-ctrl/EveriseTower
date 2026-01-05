import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav>
      <div className="logo-container">
        <Link to="/" className="logo-link">
          <img src={logo} alt="EverRise Logo" />
          <span className="logo-text">EVERRISE <span className="red-text">TOWERS</span></span>
        </Link>
      </div>

      <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
        <i className={isOpen ? "fas fa-times" : "fas fa-bars"}></i>
      </div>

      <ul className={isOpen ? "nav-links active" : "nav-links"}>
        <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
        <li><Link to="/services" onClick={() => setIsOpen(false)}>Services</Link></li>
        <li><Link to="/projects" onClick={() => setIsOpen(false)}>Projects</Link></li>
        <li><Link to="/login" onClick={() => setIsOpen(false)}>Login</Link></li>
        <li><Link to="/signup" className="nav-cta" onClick={() => setIsOpen(false)}>Join Now</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;