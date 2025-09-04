import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/logo.png"; // replace with your logo path

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">

      {/* Logo - left (clickable) */}
      <div className="logo">
        <Link to="/" onClick={() => setIsOpen(false)}>
          <img src={logo} alt="Logo" />
        </Link>
        MERN Learning
      </div>

      {/* Right side: links + buttons */}
      <div className={`nav-right ${isOpen ? "open" : ""}`}>
        <div className="nav-links">
          <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/about" onClick={() => setIsOpen(false)}>About</Link>
          <Link to="/courses" onClick={() => setIsOpen(false)}>Courses</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
        </div>

        <div className="auth-buttons">
          <Link to="/login" className="login-btn">Login</Link>
          <Link to="/signup" className="signup-btn">Sign Up</Link>
        </div>
      </div>

      {/* Hamburger (mobile) */}
      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </div>
    </nav>
  );
}

export default Navbar;
