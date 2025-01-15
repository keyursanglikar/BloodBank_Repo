// Footer.js
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h4>Blood Services</h4>
        <ul>
          <li><a href="#">Looking for Blood</a></li>
          <li><a href="#">Blood Availability</a></li>
          <li><a href="#">Blood Bank Directory</a></li>
          <li><a href="#">Thalassemia Request</a></li>
        </ul>
      </div>

      <div className="footer-section">
        <h4>Donor Services</h4>
        <ul>
          <li><a href="#">Blood Donation Camp</a></li>
          <li><a href="#">Donor Login</a></li>
          <li><a href="#">Register VBD Camp</a></li>
          <li><a href="#">Add your Blood Bank</a></li>
        </ul>
      </div>

      <div className="footer-section">
        <h4>About Us</h4>
        <ul>
          <li><a href="#">About Blood Donation</a></li>
          <li><a href="#">About Rakt-Setu</a></li>
          <li><a href="#">Notifications</a></li>
          <li><a href="#">Rakt-Setu FAQs</a></li>
        </ul>
      </div>

      <div className="footer-section">
        <h4>Media</h4>
        <ul>
          <li><a href="#">Gallery</a></li>
          <li><a href="#">Video Gallery</a></li>
        
        </ul>
      </div>

      <div className="footer-section">
        <h4>Contact Us</h4>
        <ul>
          <li><a href="#">Contact Us</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
