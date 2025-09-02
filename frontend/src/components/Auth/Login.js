import React from 'react';
import './Login.css';
import SocialLogin from './SocialLogin';

const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
  };

  return (
    <div className="login-container">
      <form id="login-form" onSubmit={handleSubmit}>
        <h2>Welcome Back</h2>
        
        <div className="form-group">
          <label htmlFor="login-email">Email</label>
          <input type="email" id="login-email" placeholder="Enter your email" required />
        </div>
        
        <div className="form-group">
          <label htmlFor="login-password">Password</label>
          <input type="password" id="login-password" placeholder="Enter your password" required />
        </div>
        
        <div className="checkbox">
          <input type="checkbox" id="remember-me" />
          <label htmlFor="remember-me">Remember me</label>
        </div>
        
        <button type="submit" className="btn">Login</button>
        
        <div className="form-footer">
          <a href="/forgot-password">Forgot your password?</a>
        </div>
      </form>

      <div className="divider">
        <span>Or continue with</span>
      </div>

      <SocialLogin />
    </div>
  );
};

export default Login;