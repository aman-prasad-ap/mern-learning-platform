import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getCurrentUser, logout } from '../services/authService'; // Import auth functions
import './Navbar.css';
import logo from '../assets/logo.png';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  // Check if user is logged in on component mount
  useEffect(() => {
    const currentUser = getCurrentUser();
    setUser(currentUser);
  }, []);

  const handleLogout = () => {
    logout(); // Clear localStorage
    setUser(null); // Update state
    setIsOpen(false); // Close mobile menu
    navigate('/'); // Redirect to home
    window.location.reload(); // Refresh to update UI
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/" onClick={() => setIsOpen(false)}>
          <img src={logo} alt="MERN Learning Platform Logo" />
        </Link>
        MERN Learning
      </div>

      <div className={`nav-right ${isOpen ? "open" : ""}`}>
        <div className="nav-links">
          <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/courses" onClick={() => setIsOpen(false)}>Courses</Link>
          <Link to="/about" onClick={() => setIsOpen(false)}>About</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
        </div>

        <div className="auth-buttons">
          {user ? (
            // Show Dashboard and Logout if user is logged in
            <>
              <Link to="/dashboard" className="dashboard-btn">Dashboard</Link>
              <button onClick={handleLogout} className="logout-btn">Logout</button>
            </>
          ) : (
            // Show Login and Signup if user is not logged in
            <>
              <Link to="/login" className="login-btn">Login</Link>
              <Link to="/signup" className="signup-btn">Sign Up</Link>
            </>
          )}
        </div>
      </div>

      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </div>
    </nav>
  );
}

export default Navbar;