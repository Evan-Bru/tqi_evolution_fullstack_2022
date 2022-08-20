import React from 'react';
import alexandriaLogo from '../../logo.svg';
import './footer.css';

const Footer = () => (
  <div className="alexandria__footer section__padding">
    <div className="alexandria__footer-heading">
      <h1 className="gradient__text">Do you want to step in right now?</h1>
    </div>

    <div className="alexandria__footer-btn">
      <p>Request Access</p>
    </div>

    <div className="alexandria__footer-links">
      <div className="alexandria__footer-links_logo">
        <img src={alexandriaLogo} alt="alexandria_logo" />
        <p>Alexandria Library, <br /> All Rights Reserved</p>
      </div>
      <div className="alexandria__footer-links_div">
        <h4>Links</h4>
        <p>Overons</p>
        <p>Social Media</p>
        <p>Counters</p>
        <p>Contact</p>
      </div>
      <div className="alexandria__footer-links_div">
        <h4>Company</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </div>
      <div className="alexandria__footer-links_div">
        <h4>Get in touch</h4>
        <p>https://github.com/Evan-Bru</p>
        <p>+55(71)99306-4923</p>
        <p>nunuluck@gmail.com</p>
      </div>
    </div>

    <div className="alexandria__footer-copyright">
      <p>@2022 Alexandria. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;