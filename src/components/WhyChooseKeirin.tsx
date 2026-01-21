import React from 'react';
import '../styles/WhyChooseKeirin.css';

const WhyChooseKeirin: React.FC = () => {
  const reasons = [
    {
      title: 'Smart, Proven Process',
      description: 'We follow the globally trusted Rational Unified Process (RUP) to deliver projects efficiently, predictably, and with real impact.'
    },
    {
      title: 'Expert Team, Global Standards',
      description: 'Our skilled professionals craft solutions that meet international benchmarks while bringing fresh perspectives to every project.'
    },
    {
      title: 'Reliable & High-Impact Solutions',
      description: 'We build robust, real-world applications that perform seamlessly and drive measurable results.'
    },
    {
      title: 'Understanding Your Business',
      description: 'We dig deep to grasp your goals, constraints, and opportunities, ensuring every solution fits like a glove.'
    },
    {
      title: 'Innovation at Work',
      description: 'Through collaborative brainstorming and creative problem-solving, we generate ideas that push your business forward.'
    },
    {
      title: 'Quality as a Lifestyle',
      description: 'Quality isn\'t an afterthought—it\'s embedded in everything we do, from design to delivery.'
    },
    {
      title: 'Proactive Risk Management',
      description: 'We identify challenges early and plan smart solutions, so your projects stay on track with minimal surprises.'
    }
  ];

  return (
    <section className="why-choose-keirin" id="why-keirin">
      <div className="why-container">
        <h2>Why Choose Keirin?</h2>
        <p className="why-subtitle">We deliver enterprise-grade expertise at competitive costs while maintaining world-class standards</p>
        
        <div className="reasons-grid">
          {reasons.map((reason, index) => (
            <div key={index} className="reason-card">
              <div className="reason-number">{index + 1}</div>
              <h3>{reason.title}</h3>
              <p>{reason.description}</p>
            </div>
          ))}
        </div>

        <div className="why-cta">
          <p>Operating across global markets and serving industries such as healthcare, telecom, and enterprise IT, Keirin continues to expand its footprint by helping businesses innovate, transform, and succeed in the digital age.</p>
          <button className="cta-button">Get in Touch</button>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseKeirin;
