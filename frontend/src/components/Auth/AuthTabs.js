import React, { useState } from 'react';
import './AuthTabs.css';
import Login from './Login';
import Signup from './Signup';

const AuthTabs = () => {
  const [activeTab, setActiveTab] = useState('login');

  return (
    <div className="auth-tabs-container">
      <div className="auth-tabs">
        <div 
          className={`auth-tab ${activeTab === 'login' ? 'active' : ''}`}
          onClick={() => setActiveTab('login')}
        >
          Login
        </div>
        <div 
          className={`auth-tab ${activeTab === 'signup' ? 'active' : ''}`}
          onClick={() => setActiveTab('signup')}
        >
          Sign Up
        </div>
      </div>

      {activeTab === 'login' ? <Login /> : <Signup />}
    </div>
  );
};

export default AuthTabs;