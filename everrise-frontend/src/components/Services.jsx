import React from 'react';

const servicesData = [
  {
    icon: "fas fa-city",
    title: "Skyscraper Construction",
    description: "Turnkey construction of commercial, residential, and mixed-use high-rise towers."
  },
  {
    icon: "fas fa-industry",
    title: "Structural Engineering",
    description: "Advanced reinforced concrete and steel systems engineered for height and resilience."
  },
  {
    icon: "fas fa-hard-hat",
    title: "Construction Management",
    description: "End-to-end oversight ensuring schedule control, budget discipline, and safety compliance."
  },
  {
    icon: "fas fa-ruler-combined",
    title: "Façade & Building Envelope",
    description: "High-performance curtain walls, glass façades, and architectural exterior systems."
  }
];

const Services = () => {
  return (
    <>
      <section className="services-intro">
        <div className="container">
          <h2>Engineering Vertical Excellence</h2>
          <p>
            At EverRise Towers, we manage the full lifecycle of skyscraper development — from
            structural engineering and foundation systems to steel frameworks, concrete cores,
            façade installations, and project delivery. Our team collaborates with developers,
            architects, and municipalities to deliver landmark towers that redefine urban skylines.
          </p>
        </div>
      </section>

      <section className="service-cards">
        {servicesData.map((service, index) => (
          <div className="service-card" key={index}>
            <i className={service.icon}></i>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            
          </div>
        ))}
      </section>
    </>
  );
};

export default Services;