import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // 1. Added useNavigate

export default function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // 2. Initialize the navigate function

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/api/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });

      const data = await response.json();

      if (response.ok) {
        alert("✅ Account Established: Welcome to EverRise!");
        // 3. Automatically send user to the login page
        navigate('/login'); 
      } else {
        alert("❌ Error: " + data.error);
      }
    } catch (err) {
      alert("❌ Server is offline. Make sure 'node server.js' is running!");
    }
  };

  return (
    <div className="page-container">
      <div className="login-box">
        <h1 className="accent-text">Join EverRise</h1>
        <p className="login-subtitle">Register to begin your high-rise development journey</p>

        <form className="auth-form" onSubmit={handleSignup}>
          <div className="input-group">
            <i className="fas fa-envelope"></i>
            <input 
              type="email" 
              placeholder="Email address" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required 
            />
          </div>
          
          <div className="input-group">
            <i className="fas fa-lock"></i>
            <input 
              type="password" 
              placeholder="Create Password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required 
            />
          </div>

          <button type="submit" className="auth-btn">Establish Account</button>
        </form>

        <p className="auth-footer">
          Already have access? <Link to="/login">Secure Login</Link>
        </p>
      </div>
    </div>
  );
}