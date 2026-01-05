import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  // --- CLOUD API CONFIG ---
  // This points to your live Render backend instead of your local computer
  const API_URL = "https://everisetower.onrender.com";

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      // Updated fetch to use the cloud API_URL
      const response = await fetch(`${API_URL}/api/signup`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });

      const data = await response.json();

      if (response.ok) {
        alert("✅ Account Established: Welcome to EverRise!");
        navigate('/login'); 
      } else {
        alert("❌ Error: " + (data.error || "Signup failed"));
      }
    } catch (err) {
      // Updated error message for the cloud environment
      alert("❌ The server is currently waking up or offline. Please try again in 30 seconds.");
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