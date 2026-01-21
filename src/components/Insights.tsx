import React from 'react';
import '../styles/Insights.css';

const Insights: React.FC = () => {
  const insights = [
    {
      type: 'EXPERTISE',
      title: 'Software Consulting Excellence',
      description: 'From technology strategy and system architecture to custom development and cloud migration, we guide organizations through digital transformation.'
    },
    {
      type: 'CAPABILITY',
      title: 'Flexible Staff Augmentation',
      description: 'Access specialized talent on-demand. Scale your team with expert developers, designers, and analysts precisely matched to your project needs.'
    },
    {
      type: 'INNOVATION',
      title: 'Gaming & Next-Gen Tech',
      description: 'AI-powered game development, VR/AR experiences, esports solutions, and blockchain integration for immersive gaming experiences.'
    }
  ];

  return (
    <section className="insights" id="insights">
      <div className="insights-container">
        <h2>Our Core Competencies</h2>
        <p className="insights-subtitle">Enterprise-grade expertise delivered with precision and reliability</p>
        <div className="insights-grid">
          {insights.map((insight, index) => (
            <div key={index} className="insight-card">
              <span className="insight-badge">{insight.type}</span>
              <h3>{insight.title}</h3>
              <p>{insight.description}</p>
            </div>
          ))}
        </div>
        <div className="insights-footer">
          <a href="#" className="view-all-link">Explore all capabilities →</a>
        </div>
      </div>
    </section>
  );
};

export default Insights;
