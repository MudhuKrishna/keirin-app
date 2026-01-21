import React from 'react';
import '../styles/Navbar.css';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="logo">Keirin</div>
        <ul className="nav-menu">
          <li><a href="#services">Services</a></li>
          <li><a href="#why-keirin">Why Keirin</a></li>
          <li><a href="#industries">Industries</a></li>
          <li><a href="#gaming">Gaming</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <button className="contact-btn">Contact Us</button>
      </div>
    </nav>
  );
};

export default Navbar;
