import React from 'react';
import '../styles/StaffAugmentation.css';

interface Approach {
  title: string;
  description: string;
}

const StaffAugmentation: React.FC = () => {
  const whatSetsUsApart: Approach[] = [
    {
      title: "Precision Talent Matching",
      description: "We handpick professionals whose skills, experience, and mindset perfectly fit your project needs, not just your job description."
    },
    {
      title: "Seamless Integration",
      description: "Our augmented staff blend effortlessly into your team, following your processes and standards while bringing fresh perspectives."
    },
    {
      title: "Flexible & Agile",
      description: "Scale your team up or down instantly, without long-term commitments or overheads."
    },
    {
      title: "Innovation & Insight",
      description: "Our professionals bring creative problem-solving, industry expertise, and innovative ideas, helping you stay ahead of the curve."
    },
    {
      title: "Focus on Impact",
      description: "Success is measured by real business outcomes, faster delivery, and enhanced team efficiency, not just hours logged."
    },
    {
      title: "Cost-Effective Excellence",
      description: "Get top-tier talent at a fraction of the cost of full-time hiring, with none of the onboarding hassles."
    }
  ];

  const keyBenefits: string[] = [
    "Access to specialized talent you may not have in-house",
    "Faster scaling of teams without long-term hiring commitments",
    "Lower hiring and onboarding costs",
    "Enhanced flexibility—add or remove resources as needed",
    "Control over the project, unlike full outsourcing where the provider manages everything"
  ];

  const whenToUse: string[] = [
    "Tight deadlines requiring rapid team expansion",
    "Skill gaps in specific technologies",
    "One-time or short-term projects",
    "Need to avoid full-time hiring costs",
    "Scaling a product or development initiative"
  ];

  return (
    <section id="augmentation" className="staff-augmentation">
      <div className="container">
        <h2>Staff Augmentation</h2>
        <p className="intro">Staff augmentation is a flexible outsourcing strategy that allows organizations to hire skilled professionals on a temporary basis to fill talent gaps, accelerate projects, or scale teams up and down quickly.</p>

        <h3>How It Works</h3>
        <p>A company partners with a staffing or consulting provider to bring in external specialists—such as developers, designers, analysts, or project managers—who work alongside the internal team. These augmented staff members can be added for weeks, months, or longer depending on project needs.</p>

        <h3>Key Benefits</h3>
        <ul className="benefits-list">
          {keyBenefits.map((benefit: string, index: number) => (
            <li key={index}>{benefit}</li>
          ))}
        </ul>

        <h3>When to Use Staff Augmentation</h3>
        <ul className="benefits-list">
          {whenToUse.map((use: string, index: number) => (
            <li key={index}>{use}</li>
          ))}
        </ul>

        <div className="keirin-approach">
          <h3>Keirin's Unique Approach to Staff Augmentation</h3>
          <p>At Keirin, staff augmentation is more than just filling positions—it's about supercharging your team with the right talent, exactly when you need it. Our experts don't just plug in; they immerse themselves in your projects, adapt to your culture, and drive measurable results from day one.</p>
          
          <h4>What Sets Us Apart</h4>
          <div className="approach-grid">
            {whatSetsUsApart.map((item: Approach, index: number) => (
              <div key={index} className="approach-card">
                <h5>{item.title}</h5>
                <p>{item.description}</p>
              </div>
            ))}
          </div>

          <p className="conclusion">With Keirin, staff augmentation becomes a strategic advantage—empowering your projects, accelerating growth, and giving your team the boost it needs to win every deadline, every time.</p>
        </div>
      </div>
    </section>
  );
};

export default StaffAugmentation;
