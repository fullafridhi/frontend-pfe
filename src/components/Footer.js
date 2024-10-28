// Footer.js
import React from 'react';
import './Footer.css'; 

import ScrollToTopButton from './ScrollToTopButton'; 


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>About Us</h3>
          <p>We are dedicated to providing quality education through innovative online courses.</p>
        </div>
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/home">Courses</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/faq">FAQs</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Connect with Us</h3>
          <div className="social-media">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </div>
        <div className="footer-section">
          <h3>Subscribe to Our Newsletter</h3>
          <form className="subscribe-form">
            <input type="email" placeholder="Your email" required />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Your eLearning Platform. All rights reserved.</p>
      </div>
      <ScrollToTopButton /> 
    </footer>
  );
};

export default Footer;
