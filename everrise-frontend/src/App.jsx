import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
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
  return isAuthenticated ? children : <Navigate to="/login" />;
};

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <About />
            <ServiceHighlights />
            <CoreValues />
          </>
        } />
        
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        
        <Route 
          path="/dashboard" 
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          } 
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;