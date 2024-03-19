import React from "react";
import './footer.css';
import CompanyLogo from '../../assets/no-bg-blueprint-logo.png';

const Footer = () => {
  return( <footer className="footer-page">

      <section className="footer-section">
        <div className="location-services-newsletter-container">
          <div className="footer-location-container">
            <a href="#" className="footer-logo-link"><img src={CompanyLogo} alt="" className="blue-print-logo" /></a>
            <div className="contact-container">
              <p className="company-location">San Francisco, California</p>
              <h1 className="company-phone-number">+13054149307</h1>
              <p className="company-email">mail@blueprintM6.com</p>
            </div>
          </div>
          <div className="footer-services-container">
            <h3 className="service-title">Services</h3>
            <p className="service-link-paragraph">
              <a href="" className="service-link">Cryptocurrency Recovery</a>
            </p>
            <p className="service-link-paragraph">
              <a href="" className="service-link">Blackmail and Extortion</a>
            </p>
            <p className="service-link-paragraph">
              <a href="" className="service-link">Account Activation</a>
            </p>
            <p className="service-link-paragraph">
              <a href="" className="service-link">Device Hack</a>
            </p>
            <p className="service-link-paragraph">
              <a href="" className="service-link">Social Media Hack</a>
            </p>
            <p className="service-link-paragraph">
              <a href="" className="service-link">Scores and Records</a>
            </p>
          </div>
          <div className="footer-newsletter-container">
            <h3 className="newsletter-title">Newsletter</h3>
            <p className="newsletter-paragraph">Stay up to date with our insights and analysis in the world of Information Technology,
             Cryptocurrency and much more. Just sign up with your email.</p>
             <input type="email" placeholder="Your email address" className="email-input"/>
            <input type="button" value="Subscribe" className="subscribe-btn" />
          </div>
        </div>

        <p className="footer-text">Copyright © 2012-2024 BlueprintM6.com All Rights Reserved.</p>
        
      </section>

      </footer>)
}

export default Footer