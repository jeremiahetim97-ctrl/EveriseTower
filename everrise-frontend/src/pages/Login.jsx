import React, { useState } from 'react'; 
import { Link, useNavigate } from 'react-router-dom'; 

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); 

  // --- ADD THIS LINE ---
  // Replace this with your actual Render URL
  const API_URL = "https://everisetower.onrender.com";

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // --- UPDATED FETCH URL ---
      const response = await fetch(`${API_URL}/api/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("isLoggedIn", "true"); 
        localStorage.setItem("userEmail", email); 
        alert("✅ Welcome back to EverRise!");
        navigate('/dashboard'); 
      } else {
        alert("❌ " + (data.error || "Login failed"));
      }
    } catch (err) {
      // Updated error message to reflect the cloud status
      alert("❌ Cannot reach the cloud server. Please try again in a moment.");
    }
  };

  return (
    <div className="page-container">
      <div className="login-box">
        <h1 className="accent-text">Member Login</h1>
        <p className="login-subtitle">Access your skyscraper project dashboard</p>

        <form className="auth-form" onSubmit={handleLogin}>
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
              placeholder="Password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required 
            />
          </div>

          <button type="submit" className="auth-btn">Authorize Entry</button>
        </form>

        <p className="auth-footer">
          Don't have an account? <Link to="/signup">Request Access</Link>
        </p>
      </div>
    </div>
  );
}