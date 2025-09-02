import React from "react";
import "./Footer.css";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import logo from "../assets/logo.png"; // Your logo import

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Brand Info with Logo */}
        <div className="footer-col">
          <div className="footer-brand">
            <img src={logo} alt="MERN Learning Platform Logo" className="footer-logo-img" />
          </div>
          <p>
            Empowering learners to become job-ready developers with structured
            learning paths, hands-on projects, and expert mentorship.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-col">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/courses">Courses</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-col">
          <h3>Contact Us</h3>
          <p><FaMapMarkerAlt /> Noida, India</p>
          <p><FaPhoneAlt /> +91 98765 43210</p>
          <p><FaEnvelope /> support@mernlearning.com</p>
        </div>

        {/* Social Media */}
        <div className="footer-col">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
              <FaFacebookF />
            </a>
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn />
            </a>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} MERN Learning Platform. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;