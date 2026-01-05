import React from 'react';
import project1 from '../assets/Project1.jpg';
import project2 from '../assets/project2.jpg';
import project3 from '../assets/project3.jpg';

const Projects = () => {
  const projects = [
    { id: 1, name: "The Zenith Spire", location: "New York | 104 Floors", img: project1, tag: "Residential" },
    { id: 2, name: "Horizon Plaza", location: "Chicago | Mixed-Use", img: project2, tag: "Commercial" },
    { id: 3, name: "EverRise HQ", location: "Miami | Sustainable Tech", img: project3, tag: "Innovation" },
  ];

  return (
    <div className="page-container">
      <section className="projects-section" id="projects">
        <div className="container">
          
          {/* --- SEO Header --- */}
          <header className="projects-header-central">
            <h1 className="red-title-small">Iconic Developments</h1>
            <p className="about-text-central">
              EverRise Towers is at the forefront of <strong>global skyscraper construction</strong>. 
              Our engineering teams utilize <strong>generative design alignment</strong> and 
              advanced structural modeling to deliver high-performance vertical assets 
              that redefine the limits of urban architecture.
            </p>
          </header>

          {/* --- Project Spotlight --- */}
          <div className="project-spotlight">
            <div className="spotlight-content">
              <span className="accent-label">Featured Development</span>
              <h2>The Zenith Spire: A New Standard</h2>
              <p>
                Located in the heart of Manhattan, The Zenith Spire represents a breakthrough 
                in <strong>wind-load resilience</strong> and <strong>structural damping technology</strong>. 
                Rising over 1,400 feet, it utilizes a proprietary concrete core system engineered 
                for maximum stability in high-velocity environments.
              </p>
              <ul className="spotlight-specs">
                <li><strong>Height:</strong> 432 Meters</li>
                <li><strong>Status:</strong> Completed 2025</li>
                <li><strong>Innovation:</strong> Tuned Mass Damper System</li>
              </ul>
            </div>
            <div className="spotlight-image">
              <img src={project1} alt="Zenith Spire Manhattan Engineering" />
            </div>
          </div>

          {/* --- Horizontal & Bold Stats Bar --- */}
          <div className="project-stats-horizontal">
            <div className="stat-block">
              <span className="stat-value">15+</span>
              <p className="stat-label"><b>Skyscrapers</b> Delivered</p>
            </div>
            <div className="stat-block">
              <span className="stat-value">420m</span>
              <p className="stat-label">Average <b>Peak Height</b></p>
            </div>
            <div className="stat-block">
              <span className="stat-value">22</span>
              <p className="stat-label"><b>States</b> Reached</p>
            </div>
            <div className="stat-block">
              <span className="stat-value">100%</span>
              <p className="stat-label"><b>Safety</b> Compliance</p>
            </div>
            <div className="stat-block">
              <span className="stat-value">95%</span>
              <p className="stat-label"><b>Customer</b> Satisfaction</p>
            </div>
          </div>

          {/* --- Project Grid --- */}
          <div className="project-grid">
            {projects.map((proj) => (
              <div key={proj.id} className="project-card">
                <div className="project-tag">{proj.tag}</div>
                <img src={proj.img} alt={`${proj.name} ${proj.location}`} />
                <div className="project-overlay">
                  <h3>{proj.name}</h3>
                  <p>{proj.location}</p>
                </div>
              </div>
            ))}
          </div>

          {/* --- SEO Technical Footer --- */}
          <article className="projects-seo-content">
            <h3>Leading the Future of Vertical Growth</h3>
            <p>
              Our portfolio is a testament to <strong>sustainable urban density</strong>. 
              By integrating <strong>LEED-certified materials</strong> and <strong>smart-grid 
              automation</strong> into our skyscrapers, EverRise Towers ensures that every 
              project is an investment in both the skyline and the environment. We specialize 
              in complex foundation systems and high-strength steel frameworks designed 
              to withstand the challenges of the 21st-century climate.
            </p>
          </article>

        </div>
      </section>
    </div>
  );
};

export default Projects;