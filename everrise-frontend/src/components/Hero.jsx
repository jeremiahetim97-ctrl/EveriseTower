import React from 'react';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Rising America’s Skyline</h1>
        <p className="hero-description">
          <strong>EverRise Towers</strong> is a United States–based skyscraper construction firm
          specializing in high-rise commercial towers, mixed-use developments, and complex urban
          structures. We deliver iconic buildings engineered for performance, safety, and longevity.
        </p>
        <div className="hero-stats">
          <div><h2>35+</h2><p>High-Rise Projects</p></div>
          <div><h2>25+</h2><p>Years of Expertise</p></div>
          <div><h2>USA</h2><p>Nationwide Operations</p></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;