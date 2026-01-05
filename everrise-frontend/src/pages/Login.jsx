import React, { useState } from 'react'; 
import { Link, useNavigate } from 'react-router-dom'; 

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); 

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });

      const data = await response.json();

      if (response.ok) {
        // --- UPDATED STEPS ---
        // 1. Save login state for ProtectedRoute
        localStorage.setItem("isLoggedIn", "true"); 

        // 2. Save the email address for the Dashboard greeting
        localStorage.setItem("userEmail", email); 

        // 3. Alert the user
        alert("✅ Welcome back to EverRise!");

        // 4. Move the user to the dashboard
        navigate('/dashboard'); 
      } else {
        alert("❌ " + (data.error || "Login failed"));
      }
    } catch (err) {
      alert("❌ Cannot reach server. Is node server.js running?");
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