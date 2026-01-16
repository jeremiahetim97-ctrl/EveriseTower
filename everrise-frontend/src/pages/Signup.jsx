import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Eye, EyeOff } from 'lucide-react'; 

export default function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [isRedirecting, setIsRedirecting] = useState(false);
  const [showPassword, setShowPassword] = useState(false); 
  const navigate = useNavigate();

  const API_URL = "https://everisetower.onrender.com";

  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(`${API_URL}/api/signup`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });

      const data = await response.json();

      if (response.ok) {
        // 1. Establish the session immediately for Dashboard access
        localStorage.setItem("isLoggedIn", "true"); 
        localStorage.setItem("userEmail", email); 

        // 2. Clear visual cues and show success
        toast.success("✅ Account Established. Welcome, Chief Engineer.");
        
        setLoading(false);
        setIsRedirecting(true); 

        // 3. Direct referral to Dashboard (skipping the Login page)
        setTimeout(() => navigate('/dashboard'), 2000); 
      } else {
        toast.error("❌ " + (data.error || "Signup failed"));
        setLoading(false);
      }
    } catch (err) {
      console.error("Signup Fetch Error:", err);
      toast.warn("❌ The server is waking up. Please wait 30 seconds and try again.");
      setLoading(false);
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
              disabled={loading || isRedirecting}
              required 
            />
          </div>
          
          <div className="input-group" style={{ position: 'relative' }}>
            <i className="fas fa-lock"></i>
            <input 
              type={showPassword ? "text" : "password"} 
              placeholder="Create Password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={loading || isRedirecting}
              required 
              style={{ paddingRight: '45px' }} 
            />
            <button
              type="button" 
              onClick={() => setShowPassword(!showPassword)}
              style={{
                position: 'absolute',
                right: '15px',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                color: '#666',
                display: 'flex',
                alignItems: 'center',
                height: '100%'
              }}
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          <button 
            type="submit" 
            className="auth-btn" 
            disabled={loading || isRedirecting}
          >
            {loading && <span><i className="fas fa-spinner fa-spin"></i> Establishing Account...</span>}
            {isRedirecting && <span><i className="fas fa-circle-notch fa-spin"></i> Redirecting to Dashboard...</span>}
            {!loading && !isRedirecting && "Establish Account"}
          </button>
        </form>

        <p className="auth-footer">
          Already have access? <Link to="/login">Secure Login</Link>
        </p>
      </div>
    </div>
  );
}