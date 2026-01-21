import React from 'react';
import '../styles/Industries.css';

const Industries: React.FC = () => {
  const industries = [
    { name: 'Healthcare', icon: '🏥' },
    { name: 'Telecommunications', icon: '📡' },
    { name: 'Enterprise IT', icon: '🏢' },
    { name: 'Financial Services', icon: '🏦' },
    { name: 'Software Development', icon: '💻' },
    { name: 'Digital Transformation', icon: '🚀' }
  ];

  return (
    <section className="industries" id="industries">
      <div className="industries-container">
        <h2>Industries We Serve</h2>
        <p className="industries-subtitle">Operating across global markets with specialized expertise</p>
        <div className="industries-grid">
          {industries.map((industry, index) => (
            <div key={index} className="industry-card">
              <div className="industry-icon">{industry.icon}</div>
              <h3>{industry.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
