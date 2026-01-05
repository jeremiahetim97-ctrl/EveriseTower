import React from 'react';

const Services = () => {
  const technicalSpecs = [
    { title: "Structural Engineering", desc: "Advanced load-bearing analysis and wind-tunnel testing for super-tall structures." },
    { title: "Foundation Systems", desc: "Deep-pile and raft foundations engineered for complex urban geologies." },
    { title: "Steel Frameworks", desc: "Precision assembly of high-strength structural skeletons for maximum verticality." },
    { title: "Concrete Cores", desc: "High-performance slip-form construction ensuring centralized stability." },
    { title: "Façade Installation", desc: "Custom curtain walls and climate-controlled glazing for high-altitude resilience." },
    { title: "Project Delivery", desc: "Integrated management systems from groundbreaking to final certification." }
  ];

  return (
    <div className="page-container">
      <div className="container">
        
        
       
        <header className="services-header-central">
          <h1 className="red-title-small">Technical Capabilities</h1>
          <p className="about-text-central">
            EverRise Towers is a premier vertical development firm specializing in the 
            complex engineering of super-tall structures. We manage the full lifecycle 
            of skyscraper development, transforming architectural visions into 
            permanent urban landmarks through rigorous precision.
          </p>
        </header>

        
        <section className="dual-identity-grid">
          <div className="transparent-card">
            <h4>Our Vision</h4>
            <p>To redefine urban density by creating sustainable, iconic landmarks that stand as a testament to human ingenuity.</p>
          </div>
          <div className="transparent-card">
            <h4>Our Mission</h4>
            <p>To deliver excellence in vertical construction through rigorous safety standards and cutting-edge structural technology.</p>
          </div>
        </section>

       
        <div className="capabilities-grid">
          {technicalSpecs.map((spec, index) => (
            <div key={index} className="capability-item">
              <h4>{spec.title}</h4>
              <p>{spec.desc}</p>
              
            </div>
            
          ))}
        </div>

      </div>
    </div>
  );
};

export default Services;