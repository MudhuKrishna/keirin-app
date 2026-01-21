import React from 'react';
import '../styles/Gaming.css';

interface GamingService {
  title: string;
  description: string;
}

const Gaming: React.FC = () => {
  const gamingServices: GamingService[] = [
    {
      title: "AI & Smart Content",
      description: "We leverage AI to generate dynamic game worlds, create adaptive NPCs, and automate repetitive testing. This speeds up production while making gameplay smarter and more engaging."
    },
    {
      title: "VR, AR & Metaverse",
      description: "We design immersive VR and AR experiences and persistent metaverse-style worlds. Players can explore, socialize, create, and trade in highly interactive environments."
    },
    {
      title: "Cross-Platform & Cloud Gaming",
      description: "Our solutions ensure smooth gameplay across devices, with cloud streaming and 5G reducing latency. Players can carry progress seamlessly across consoles, PC, and mobile."
    },
    {
      title: "Esports & Competitive Play",
      description: "Keirin creates games built for pros, spectators, and hybrid events. We integrate analytics, scalable modes, and competitive features that make every match exciting."
    },
    {
      title: "User-Generated Content & Creator Economy",
      description: "Players become creators with tools to design levels, skins, and mods. This builds vibrant communities and enables monetization opportunities within the game ecosystem."
    },
    {
      title: "Blockchain, Web3 & GameFi",
      description: "We help developers experiment with decentralized economies, NFTs, play-to-earn mechanics, and AI + DeFi integrations—safely and strategically."
    },
    {
      title: "Sustainability & Accessibility",
      description: "Our games are energy-efficient, inclusive, and cross-platform. We ensure accessibility features so all players can enjoy high-quality experiences."
    },
    {
      title: "Ethics & Strategy",
      description: "We address IP, labor, and compliance challenges while guiding monetization, growth strategies, and market positioning for long-term success."
    }
  ];

  return (
    <section id="gaming" className="gaming">
      <div className="gaming-container">
        <h2>Keirin: Powering the Future of Gaming</h2>
        <p className="gaming-intro">At Keirin, we bring next-gen technologies to life, helping studios and developers create immersive, intelligent, and scalable games. Gaming isn't just about play—it's about innovation, inclusion, and building experiences that scale globally.</p>

        <div className="gaming-grid">
          {gamingServices.map((service, index) => (
            <div key={index} className="gaming-card">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gaming;

