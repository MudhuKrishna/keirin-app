import React from 'react';
import '../styles/WhyKeirin.css';

interface Highlight {
  title: string;
  description: string;
}

const WhyKeirin: React.FC = () => {
  const highlights: Highlight[] = [
    {
      title: "Structured, Smart Approach",
      description: "We use the globally recognized Rational Unified Process (RUP) to deliver projects that are efficient, predictable, and impactful."
    },
    {
      title: "Talent That Excels",
      description: "Our team combines deep expertise with creative thinking to deliver solutions that meet international standards."
    },
    {
      title: "Solutions You Can Rely On",
      description: "From robust applications to seamless performance, we build technology that works when you need it most."
    },
    {
      title: "Understanding Matters",
      description: "We take the time to analyze your true business needs and design solutions that actually solve problems."
    },
    {
      title: "Creativity Meets Strategy",
      description: "Our brainstorming sessions and collaborative ideation generate innovative ideas that elevate your business."
    },
    {
      title: "Quality at the Core",
      description: "For us, quality isn't a checkpoint—it's a mindset woven into every project phase."
    },
    {
      title: "Staying Ahead of Risks",
      description: "By spotting potential roadblocks early, we provide smart contingency plans so your projects stay on track and stress-free."
    }
  ];

  return (
    <section id="why-keirin" className="why-keirin">
      <div className="container">
        <h2>Why Keirin Stands Out</h2>
        <div className="highlights-grid">
          {highlights.map((item: Highlight, index: number) => (
            <div key={index} className="highlight-card">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyKeirin;
