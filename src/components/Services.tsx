import React from 'react';
import '../styles/Services.css';

const Services: React.FC = () => {
  const services = [
    {
      title: 'Software Consulting',
      description: 'Expert guidance on technology strategy, system architecture, custom development, cloud migration, data & AI solutions, and software modernization.',
      icon: '💡'
    },
    {
      title: 'Staff Augmentation',
      description: 'Access specialized talent on-demand. Scale your team instantly with expert developers, designers, and analysts tailored to your project needs.',
      icon: '👥'
    },
    {
      title: 'Next-Gen Gaming',
      description: 'AI-powered content generation, VR/AR experiences, cross-platform gaming, esports solutions, and blockchain integration for immersive play.',
      icon: '🎮'
    }
  ];

  return (
    <section className="services" id="services">
      <div className="services-container">
        <h2>Our Services</h2>
        <p className="services-subtitle">We make technology less complicated and a lot more fun</p>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <a href="#" className="service-link">Learn more →</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
