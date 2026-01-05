import React from 'react';
import { Link } from 'react-router-dom'; // Keep navigation smooth

export default function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-col">
          <h3>EverRise Towers</h3>
          <p>
            Delivering iconic skyscrapers across the United States through
            innovation and engineering excellence.
          </p>
        </div>

        <div className="footer-col">
          <h3>Quick Links</h3>
          {/* Using Link instead of <a> for instant transitions */}
          <Link to="/">Home</Link><br />
          <Link to="/projects">Projects</Link><br />
          <Link to="/services">Services</Link><br />
          <Link to="/contact">Contact</Link>
        </div>

        <div className="footer-col">
          <h3>Contact</h3>
          <p>Email: info@everrisetowers.com<br />United States</p>
          <div className="footer-social">
            <a href="#"><i className="fab fa-linkedin-in"></i></a>
            <a href="#"><i className="fas fa-envelope"></i></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        © 2025 EverRise Towers. All rights reserved.
      </div>
    </footer>
  );
}