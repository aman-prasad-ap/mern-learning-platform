import React from 'react';
import './AuthPage.css';
import AuthTabs from './AuthTabs';

const AuthPage = () => {
  return (
    <div className="auth-container">
      <div className="auth-left-panel">
        <h2>Welcome to MERN Learning</h2>
        <p>Join our community of learners and enhance your skills with our comprehensive courses and AI-powered learning tools.</p>
        
        <div className="auth-features">
          <div className="auth-feature">
            <i className="fas fa-check-circle"></i>
            <span>Access to 100+ courses</span>
          </div>
          <div className="auth-feature">
            <i className="fas fa-check-circle"></i>
            <span>AI-powered learning assistant</span>
          </div>
          <div className="auth-feature">
            <i className="fas fa-check-circle"></i>
            <span>Personalized learning paths</span>
          </div>
          <div className="auth-feature">
            <i className="fas fa-check-circle"></i>
            <span>Certificate upon completion</span>
          </div>
        </div>
      </div>

      <div className="auth-right-panel">
        <AuthTabs />
      </div>
    </div>
  );
};

export default AuthPage;