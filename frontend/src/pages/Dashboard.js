import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { getCurrentUser } from '../services/authService';
import { coursesAPI } from '../services/api';
import './Dashboard.css';

const Dashboard = () => {
  const [enrolledCourses, setEnrolledCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const { user: authUser } = useAuth();
  
  // Use user from auth context or fall back to localStorage
  const user = authUser || getCurrentUser();

  useEffect(() => {
    const fetchEnrolledCourses = async () => {
      try {
        const response = await coursesAPI.getEnrolled();
        
        // Handle different response structures
        let coursesData = [];
        
        if (Array.isArray(response.data)) {
          // If response.data is already an array
          coursesData = response.data;
        } else if (response.data.courses && Array.isArray(response.data.courses)) {
          // If response.data has a courses array
          coursesData = response.data.courses;
        } else if (response.data.data && Array.isArray(response.data.data)) {
          // If response.data has a data array
          coursesData = response.data.data;
        } else if (response.data.enrollments && Array.isArray(response.data.enrollments)) {
          // If response.data has an enrollments array
          coursesData = response.data.enrollments;
        }
        
        console.log('Enrolled courses data:', coursesData);
        setEnrolledCourses(coursesData);
      } catch (error) {
        console.error('Error fetching enrolled courses:', error);
        setError('Failed to load enrolled courses');
      } finally {
        setLoading(false);
      }
    };

    if (user) {
      fetchEnrolledCourses();
    } else {
      setLoading(false);
    }
  }, [user]);

  // Safe filtering function
  const getCompletedCourses = () => {
    if (!Array.isArray(enrolledCourses)) return 0;
    
    return enrolledCourses.filter(course => {
      // Handle different course object structures
      const progress = course.progress || 
                       (course.enrollment && course.enrollment.progress) || 
                       (course.course && course.course.progress) || 
                       0;
      return progress === 100;
    }).length;
  };

  if (loading) {
    return (
      <div className="dashboard-loading">
        <div className="loading-spinner"></div>
        <p>Loading your dashboard...</p>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="dashboard-container">
        <div className="not-authenticated">
          <h2>Please log in to view your dashboard</h2>
          <a href="/login" className="btn-primary">Login</a>
        </div>
      </div>
    );
  }

  return (
    <div className="dashboard-container">
      {/* Header */}
      <div className="dashboard-header">
        <div className="header-content">
          <h1>Welcome back, {user?.name}!</h1>
          <p>Here's your learning progress and upcoming activities</p>
        </div>
        <div className="header-actions">
          <button className="btn-primary">
            <i className="fas fa-plus"></i>
            New Course
          </button>
        </div>
      </div>

      {error && (
        <div className="error-banner">
          <i className="fas fa-exclamation-triangle"></i>
          {error}
        </div>
      )}

      {/* Stats Cards */}
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon" style={{background: '#ff6b6b'}}>
            <i className="fas fa-book"></i>
          </div>
          <div className="stat-content">
            <h3>{Array.isArray(enrolledCourses) ? enrolledCourses.length : 0}</h3>
            <p>Courses Enrolled</p>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon" style={{background: '#4ecdc4'}}>
            <i className="fas fa-check-circle"></i>
          </div>
          <div className="stat-content">
            <h3>{getCompletedCourses()}</h3>
            <p>Courses Completed</p>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon" style={{background: '#45b7d1'}}>
            <i className="fas fa-clock"></i>
          </div>
          <div className="stat-content">
            <h3>24h</h3>
            <p>Learning Time</p>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon" style={{background: '#f9a826'}}>
            <i className="fas fa-trophy"></i>
          </div>
          <div className="stat-content">
            <h3>8</h3>
            <p>Achievements</p>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon" style={{background: '#9b59b6'}}>
            <i className="fas fa-certificate"></i>
          </div>
          <div className="stat-content">
            <h3>3</h3>
            <p>Certificates</p>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon" style={{background: '#e74c3c'}}>
            <i className="fas fa-star"></i>
          </div>
          <div className="stat-content">
            <h3>92%</h3>
            <p>Completion Rate</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="dashboard-content">
        {/* Left Column */}
        <div className="content-main">
          {/* Courses Progress */}
          <div className="card">
            <div className="card-header">
              <h3>Course Progress</h3>
              <button className="btn-link">View All</button>
            </div>
            <div className="progress-list">
              {!Array.isArray(enrolledCourses) || enrolledCourses.length === 0 ? (
                <p className="no-courses">You haven't enrolled in any courses yet.</p>
              ) : (
                enrolledCourses.map(course => {
                  // Extract course data based on different possible structures
                  const courseData = course.course || course;
                  const progress = course.progress || 
                                 (course.enrollment && course.enrollment.progress) || 
                                 0;
                  
                  return (
                    <div key={courseData._id || courseData.id} className="progress-item">
                      <div className="progress-info">
                        <h4>{courseData.title || 'Untitled Course'}</h4>
                        <p>{courseData.category || 'General'}</p>
                      </div>
                      <div className="progress-bar">
                        <div 
                          className="progress-fill" 
                          style={{width: `${progress}%`}}
                        ></div>
                      </div>
                      <span className="progress-percent">{progress}%</span>
                    </div>
                  );
                })
              )}
            </div>
          </div>

          {/* Recent Activity */}
          <div className="card">
            <div className="card-header">
              <h3>Recent Activity</h3>
            </div>
            <div className="activity-list">
              <div className="activity-item">
                <div className="activity-icon completed">
                  <i className="fas fa-check"></i>
                </div>
                <div className="activity-content">
                  <p>Completed <strong>React Components</strong> lesson</p>
                  <span className="activity-time">2 hours ago</span>
                </div>
              </div>

              <div className="activity-item">
                <div className="activity-icon quiz">
                  <i className="fas fa-question"></i>
                </div>
                <div className="activity-content">
                  <p>Scored 85% on <strong>JavaScript Basics</strong> quiz</p>
                  <span className="activity-time">1 day ago</span>
                </div>
              </div>

              <div className="activity-item">
                <div className="activity-icon enrolled">
                  <i className="fas fa-book"></i>
                </div>
                <div className="activity-content">
                  <p>Enrolled in <strong>Node.js Fundamentals</strong></p>
                  <span className="activity-time">2 days ago</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="content-sidebar">
          {/* Quick Actions */}
          <div className="card">
            <div className="card-header">
              <h3>Quick Actions</h3>
            </div>
            <div className="quick-actions">
              <button className="action-btn">
                <i className="fas fa-search"></i>
                Browse Courses
              </button>
              <button className="action-btn">
                <i className="fas fa-target"></i>
                Set Goals
              </button>
              <button className="action-btn">
                <i className="fas fa-users"></i>
                Join Community
              </button>
              <button className="action-btn">
                <i className="fas fa-cog"></i>
                Settings
              </button>
            </div>
          </div>

          {/* Upcoming Events */}
          <div className="card">
            <div className="card-header">
              <h3>Upcoming Events</h3>
            </div>
            <div className="events-list">
              <div className="event-item">
                <div className="event-date">
                  <span className="event-day">15</span>
                  <span className="event-month">SEP</span>
                </div>
                <div className="event-content">
                  <h4>Live Q&A Session</h4>
                  <p>React Advanced Patterns</p>
                  <span className="event-time">2:00 PM - 3:30 PM</span>
                </div>
              </div>

              <div className="event-item">
                <div className="event-date">
                  <span className="event-day">18</span>
                  <span className="event-month">SEP</span>
                </div>
                <div className="event-content">
                  <h4>Webinar: MongoDB Best Practices</h4>
                  <p>Database Management</p>
                  <span className="event-time">11:00 AM - 12:30 PM</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;