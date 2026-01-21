import React from 'react';
import '../styles/Navbar.css';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="navbar-logo">
          <span className="logo">Keirin</span>
        </div>
        
        <ul className="nav-menu">
          <li 
            className="nav-item"
          >
            <a href="#services" className="nav-link">Services</a>
          </li>
          
          <li className="nav-item">
            <a href="#why-keirin" className="nav-link">Why Keirin</a>
          </li>
          
          <li className="nav-item">
            <a href="#industries" className="nav-link">Industries</a>
          </li>
          
          <li className="nav-item">
            <a href="#insights" className="nav-link">Insights</a>
          </li>
          
          <li className="nav-item">
            <a href="#gaming" className="nav-link">Gaming</a>
          </li>
           <li className="nav-item">
            <a href="#contact" className="nav-link">Contact Us</a>
          </li>
        </ul>
{/* 
        <div className="nav-right">
          <button className="contact-btn">Contact Us</button>
        </div> */}
      </div>
    </nav>
  );
};

export default Navbar;
