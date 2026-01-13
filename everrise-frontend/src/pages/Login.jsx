import React, { useState } from 'react'; 
import { Link, useNavigate } from 'react-router-dom'; 
// 1. Import toast
import { toast } from 'react-toastify';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false); // Added loading state for button feedback
  const navigate = useNavigate(); 

  const API_URL = "https://everisetower.onrender.com";

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(`${API_URL}/api/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("isLoggedIn", "true"); 
        localStorage.setItem("userEmail", email); 
        
        // 2. Success Notification
        toast.success("✅ Welcome back to EverRise!");
        
        // Small delay to let the toast be seen before navigating
        setTimeout(() => navigate('/dashboard'), 1500); 
      } else {
        // 3. Error Notification
        toast.error("❌ " + (data.error || "Login failed"));
      }
    } catch (err) {
      console.error("Login Error:", err);
      // 4. Warning Notification
      toast.warn("❌ Cannot reach the cloud server. Please try again in a moment.");
    } finally {
      setLoading(false);
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
              disabled={loading}
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
              disabled={loading}
              required 
            />
          </div>

          <button type="submit" className="auth-btn" disabled={loading}>
            {loading ? "Verifying..." : "Authorize Entry"}
          </button>
        </form>

        <p className="auth-footer">
          Don't have an account? <Link to="/signup">Request Access</Link>
        </p>
      </div>
    </div>
  );
}