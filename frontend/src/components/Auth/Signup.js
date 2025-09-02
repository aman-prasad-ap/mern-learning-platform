import React from 'react';
import './Signup.css';
import SocialLogin from './SocialLogin';

const Signup = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle signup logic here
  };

  return (
    <div className="signup-container">
      <form id="signup-form" onSubmit={handleSubmit}>
        <h2>Create Account</h2>
        
        <div className="form-group">
          <label htmlFor="signup-name">Full Name</label>
          <input type="text" id="signup-name" placeholder="Enter your full name" required />
        </div>
        
        <div className="form-group">
          <label htmlFor="signup-email">Email</label>
          <input type="email" id="signup-email" placeholder="Enter your email" required />
        </div>
        
        <div className="form-group">
          <label htmlFor="signup-password">Password</label>
          <input type="password" id="signup-password" placeholder="Create a password" required />
        </div>
        
        <div className="form-group">
          <label htmlFor="signup-confirm">Confirm Password</label>
          <input type="password" id="signup-confirm" placeholder="Confirm your password" required />
        </div>
        
        <div className="checkbox">
          <input type="checkbox" id="terms" />
          <label htmlFor="terms">I agree to the Terms & Conditions</label>
        </div>
        
        <button type="submit" className="btn">Create Account</button>
      </form>

      <div className="divider">
        <span>Or continue with</span>
      </div>

      <SocialLogin />
    </div>
  );
};

export default Signup;