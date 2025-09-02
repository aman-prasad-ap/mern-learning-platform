import React from 'react';
import './SocialLogin.css';

const SocialLogin = () => {
  return (
    <div className="social-login">
      <div className="social-btn google">
        <i className="fab fa-google"></i>
      </div>
      <div className="social-btn facebook">
        <i className="fab fa-facebook-f"></i>
      </div>
      <div className="social-btn github">
        <i className="fab fa-github"></i>
      </div>
    </div>
  );
};

export default SocialLogin;