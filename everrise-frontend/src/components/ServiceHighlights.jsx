import React from 'react';

const ServiceHighlights = () => {
  return (
    <section className="service-highlight-section">
      <div className="container dual-grid">
        {/* Left Card - Dark/Red Theme */}
        <div className="service-card-item dark-card">
          <i className="fas fa-building"></i>
          <h3>Pre-Construction Planning</h3>
          <p>From site analysis to structural feasibility studies, we ensure the foundation of your skyscraper is logically and financially sound before the first stone is laid.</p>
        </div>

        {/* Right Card - White Theme */}
        <div className="service-card-item white-card">
          <i className="fas fa-crane"></i>
          <h3>Vertical Execution</h3>
          <p>Utilizing advanced steel-frame engineering and high-performance concrete cores, we manage the vertical ascent of America's most complex architectural designs.</p>
        </div>
      </div>
    </section>
  );
};

export default ServiceHighlights;