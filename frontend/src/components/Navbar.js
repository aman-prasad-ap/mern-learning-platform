import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getCurrentUser, logout } from '../services/authService';
import './Navbar.css';
import logo from '../assets/logo.png';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const navigate = useNavigate();

  // Check if user is logged in on component mount and on route changes
  useEffect(() => {
    const currentUser = getCurrentUser();
    setUser(currentUser);
  }, [navigate]);

  const handleLogout = async () => {
    setIsLoggingOut(true);
    
    // Smooth transition with a small delay
    await new Promise(resolve => setTimeout(resolve, 150));
    
    logout();
    setUser(null);
    setIsOpen(false);
    navigate('/');
    setIsLoggingOut(false);
  };

  const closeMobileMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/" onClick={closeMobileMenu}>
          <img src={logo} alt="MERN Learning Platform Logo" />
        </Link>
        MERN Learning
      </div>

      <div className={`nav-right ${isOpen ? "open" : ""} ${isLoggingOut ? "logging-out" : ""}`}>
        <div className="nav-links">
          <Link to="/" onClick={closeMobileMenu}>Home</Link>
          <Link to="/courses" onClick={closeMobileMenu}>Courses</Link>
          <Link to="/about" onClick={closeMobileMenu}>About</Link>
          <Link to="/contact" onClick={closeMobileMenu}>Contact</Link>
        </div>

        <div className="auth-buttons">
          {user ? (
            <>
              <Link to="/dashboard" className="dashboard-btn" onClick={closeMobileMenu}>
                Dashboard
              </Link>
              <button 
                onClick={handleLogout} 
                className="logout-btn"
                disabled={isLoggingOut}
              >
                {isLoggingOut ? 'Logging out...' : 'Logout'}
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="login-btn" onClick={closeMobileMenu}>Login</Link>
              <Link to="/signup" className="signup-btn" onClick={closeMobileMenu}>Sign Up</Link>
            </>
          )}
        </div>
      </div>

      <div className={`hamburger ${isOpen ? "open" : ""}`} onClick={() => setIsOpen(!isOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </div>
    </nav>
  );
}

export default Navbar;