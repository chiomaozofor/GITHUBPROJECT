import React from 'react';

import "./Footer.css"; 
import Herofooter from '../Herofooter/Herofooter';

const Footer = () => {
  return (
    <div>
    <Herofooter/>
    <footer className="footer">
      <div className="footer-section-subscribe-section">
        <h2>GitHub</h2>
        <div className='footer-section-writeup'>
        <h4>Subscribe to our developer newsletter</h4>
        <p>Get tips, technical guides, and best practices. Twice a month. Right in your inbox.</p>
        </div>
        <button className="subscribe-button">Subscribe</button>
      </div>
      <div className="footer-section product">
        <h4>Product</h4>
        <ul>
          <li>Features</li>
          <li>Enterprise</li>
          <li>Copilot</li>
          <li>Security</li>
          <li>Pricing</li>
          <li>Team</li>
          <li>Resources</li>
          <li>Roadmap</li>
          <li>Compare GitHub</li>
        </ul>
      </div>
      <div className="footer-section platform">
        <h4>Platform</h4>
        <ul>
          <li>Developer API</li>
          <li>Partners</li>
          <li>Education</li>
          <li>GitHub CLI</li>
          <li>GitHub Desktop</li>
          <li>GitHub Mobile</li>
        </ul>
      </div>
      <div className="footer-section support">
        <h4>Support</h4>
        <ul>
          <li>Docs</li>
          <li>Community Forum</li>
          <li>Professional Services</li>
          <li>Premium Support</li>
          <li>Skills</li>
          <li>Status</li>
          <li>Contact GitHub</li>
        </ul>
      </div>
      <div className="footer-section company">
        <h4>Company</h4>
        <ul>
          <li>About</li>
          <li>Customer stories</li>
          <li>Blog</li>
          <li>The ReadME Project</li>
          <li>Careers</li>
          <li>Newsroom</li>
          <li>Inclusion</li>
          <li>Social Impact</li>
          <li>Shop</li>
        </ul>
      </div>
      
    </footer>
    </div> 
  );
};

export default Footer;