import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { login } from '../../services/authService'; // Import the login function
import './Login.css';
import SocialLogin from './SocialLogin';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const { email, password } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    try {
      await login({ email, password });
      navigate('/dashboard'); // Redirect to dashboard after login
      window.location.reload(); // Refresh to update navbar
    } catch (error) {
      setError(error.message || 'Login failed. Please try again.');
    }
    
    setLoading(false);
  };

  return (
    <div className="login-container">
      <form id="login-form" onSubmit={onSubmit}>
        <h2>Welcome Back</h2>
        
        {/* Error message display */}
        {error && <div className="error-message">{error}</div>}
        
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={onChange}
            placeholder="Enter your email"
            required
            disabled={loading}
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={onChange}
            placeholder="Enter your password"
            required
            disabled={loading}
          />
        </div>
        
        <div className="checkbox">
          <input type="checkbox" id="remember-me" />
          <label htmlFor="remember-me">Remember me</label>
        </div>
        
        <button type="submit" className="btn" disabled={loading}>
          {loading ? 'Logging in...' : 'Login'}
        </button>
        
        <div className="form-footer">
          <Link to="/forgot-password">Forgot your password?</Link>
          <p>Don't have an account? <Link to="/signup">Sign up here</Link></p>
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