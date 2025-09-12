import React, { createContext, useState, useContext, useEffect } from 'react';
import { getCurrentUser, getProfile, logout as authLogout } from '../services/authService';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const initializeAuth = async () => {
      const token = localStorage.getItem('token');
      if (token) {
        try {
          // Try to get fresh user data from the server
          const userData = await getProfile();
          setUser(userData);
        } catch (error) {
          console.error('Token verification failed:', error);
          // If server verification fails, fall back to localStorage
          const localUser = getCurrentUser();
          if (localUser) {
            setUser(localUser);
          } else {
            authLogout();
          }
        }
      }
      setLoading(false);
    };

    initializeAuth();
  }, []);

  const login = (userData) => {
    setUser(userData);
  };

  const register = (userData) => {
    setUser(userData);
  };

  const logout = () => {
    authLogout();
    setUser(null);
  };

  const value = {
    user,
    login,
    register,
    logout,
    loading,
    isAuthenticated: !!user
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};