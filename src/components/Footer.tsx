import React from 'react';
import '../styles/Footer.css';

const Footer: React.FC = () => {
  const handleSocialClick = (platform: string) => {
    // Replace with your actual social media URLs
    const links: { [key: string]: string } = {
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
      facebook: 'https://facebook.com',
      instagram: 'https://instagram.com'
    };
    window.open(links[platform], '_blank');
  };

  const handleNavClick = (section: string) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Keirin</h3>
            <p>Making experiences better with technology</p>
          </div>
          <div className="footer-section">
            <h4>Services</h4>
            <ul>
              <li><button onClick={() => handleNavClick('services')} className="link-btn">Consulting</button></li>
              <li><button onClick={() => handleNavClick('services')} className="link-btn">Engineering</button></li>
              <li><button onClick={() => handleNavClick('services')} className="link-btn">Optimization</button></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Company</h4>
            <ul>
              <li><button onClick={() => handleNavClick('hero')} className="link-btn">About</button></li>
              <li><button onClick={() => {}} className="link-btn">Careers</button></li>
              <li><button onClick={() => handleNavClick('insights')} className="link-btn">Insights</button></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Legal</h4>
            <ul>
              <li><button onClick={() => {}} className="link-btn">Privacy Policy</button></li>
              <li><button onClick={() => {}} className="link-btn">Terms of Use</button></li>
              <li><button onClick={() => {}} className="link-btn">Cookie Policy</button></li>
            </ul>
          </div>
        </div>
        <div className="footer-divider"></div>
        <div className="footer-bottom">
          <p>&copy; 2026 Keirin Corp. All rights reserved.</p>
          <div className="social-links">
            <button onClick={() => handleSocialClick('linkedin')} title="LinkedIn" className="social-btn">LinkedIn</button>
            <button onClick={() => handleSocialClick('twitter')} title="Twitter" className="social-btn">Twitter</button>
            <button onClick={() => handleSocialClick('facebook')} title="Facebook" className="social-btn">Facebook</button>
            <button onClick={() => handleSocialClick('instagram')} title="Instagram" className="social-btn">Instagram</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
