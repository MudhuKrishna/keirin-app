import React from 'react';
import '../styles/SoftwareConsulting.css';

interface ServiceItem {
  title: string;
  items: string[];
}

const SoftwareConsulting: React.FC = () => {
  const services: ServiceItem[] = [
    {
      title: "Technology Strategy & Roadmapping",
      items: ["Assess current systems", "Recommend future-state architecture", "Create a multi-year technology plan", "Align IT strategy with business goals"]
    },
    {
      title: "Software Architecture & Design",
      items: ["System architecture planning", "Microservices vs. monolith evaluation", "Cloud-native design", "Scalability, reliability, and security planning"]
    },
    {
      title: "Custom Software Development Consulting",
      items: ["Requirements gathering", "Tech stack selection", "Prototype or MVP planning", "Project scoping and estimation"]
    },
    {
      title: "Cloud & Infrastructure Consulting",
      items: ["AWS, Azure, Google Cloud strategy", "Hybrid/cloud migration", "DevOps and CI/CD pipeline design", "Infrastructure automation"]
    },
    {
      title: "Data & AI Consulting",
      items: ["Data architecture & analytics", "Database optimization", "Machine learning implementation guidance", "AI strategy and integration"]
    },
    {
      title: "Cybersecurity Consulting",
      items: ["Security audits", "Compliance guidance (SOC2, HIPAA, GDPR, etc.)", "Identity, access, and threat management"]
    },
    {
      title: "Software Modernization",
      items: ["Legacy system modernization", "Codebase audit", "System performance tuning"]
    },
    {
      title: "Project Rescue & Quality Assurance",
      items: ["Troubled project assessment", "Code reviews", "Process improvements", "Testing strategies"]
    }
  ];

  const benefits: string[] = [
    "Reduce risk and cost",
    "Make informed technology decisions",
    "Improve performance and scalability",
    "Accelerate time-to-market",
    "Gain expert guidance without long-term hiring"
  ];

  return (
    <section id="consulting" className="software-consulting">
      <div className="container">
        <h2>What Are Software Consulting Services?</h2>
        <p className="intro">Software consulting services help organizations plan, design, build, and optimize software solutions. Consultants analyze a company's needs and recommend the best technologies, architectures, tools, and processes to achieve its goals.</p>
        
        <h3>Common Areas of Software Consulting</h3>
        <div className="services-grid">
          {services.map((service: ServiceItem, index: number) => (
            <div key={index} className="service-card">
              <h4>{service.title}</h4>
              <ul>
                {service.items.map((item: string, idx: number) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <h3>Benefits of Software Consulting</h3>
        <ul className="benefits-list">
          {benefits.map((benefit: string, index: number) => (
            <li key={index}>{benefit}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default SoftwareConsulting;
