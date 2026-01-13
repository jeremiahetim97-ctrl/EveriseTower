import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Projects from './pages/Projects';
import Dashboard from './components/Dashboard'; 
import ServicesPage from './pages/Services';

import About from './components/About';
import ServiceHighlights from './components/ServiceHighlights';
import CoreValues from './components/CoreValues'; 

import "./App.css";

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem("isLoggedIn");
  return isAuthenticated ? children : <Navigate to="/" />;
};

function App() {
  return (
    <div className="App">
      <Navbar />
      
      <ToastContainer 
        position="top-right" 
        autoClose={3000} 
        hideProgressBar={false} 
        newestOnTop={false} 
        closeOnClick 
        rtl={false} 
        pauseOnFocusLoss 
        draggable 
        pauseOnHover 
      />

      <Routes>
        {/* 1. LANDING PAGE: Strictly Signup only */}
        <Route path="/" element={<Signup />} />
        
        {/* 2. LOGIN PAGE */}
        <Route path="/login" element={<Login />} />
        
        {/* 3. CONSOLIDATED ABOUT PAGE 
             Includes: Visual Intro (Hero), Story (About), 
             Technical Execution (Highlights), and Standards (CoreValues) 
        */}
        <Route path="/about" element={
          <>
            <Hero />
            <About />
            <ServiceHighlights />
            <CoreValues />
          </>
        } />

        <Route path="/services" element={<ServicesPage />} />
        <Route path="/projects" element={<Projects />} />
        
        {/* 4. HOME REDIRECT
             Since everything from the old home/landing is now in /about,
             we redirect users there so they don't see a blank page. 
        */}
        <Route path="/home" element={<Navigate to="/about" />} />
        <Route path="/signup" element={<Navigate to="/" />} />
        
        <Route 
          path="/dashboard" 
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          } 
        />

        {/* Catch-all sends lost users back to the Signup landing page */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;