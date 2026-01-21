import React from 'react';
import '../styles/Hero.css';

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1>Welcome to Keirin</h1>
        <p>Keirin Software Technologies stands as a global force in Software Development, IT Services, IT Skills Training, and IT Staffing. We empower organizations with intelligent, future-ready solutions built on innovation, precision, and unwavering reliability.</p>
        <button className="cta-button">Explore Our Services</button>
      </div>
    </section>
  );
};

export default Hero;
