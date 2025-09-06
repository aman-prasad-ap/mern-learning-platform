import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Courses.css';
import fullStack from "../assets/full-stack.png";
import dsaImg from "../assets/DSA.png";
import pythonImg from "../assets/python.png";
import reactImg from "../assets/react.png";
import javaImg from "../assets/java.png";
const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      const response = await fetch('http://localhost:4000/api/courses');
      const data = await response.json();
      
      if (data.success) {
        setCourses(data.data);
      }
    } catch (error) {
      console.error('Error fetching courses:', error);
    } finally {
      setLoading(false);
    }
  };

  const filteredCourses = courses.filter(course => {
    const matchesFilter = filter === 'all' || course.category === filter;
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const categories = ['all', 'Web Development', 'Data Science', 'AI & ML', 'Mobile Development', 'Cloud Computing'];

  if (loading) {
    return (
      <div className="courses-loading">
        <div className="loading-spinner"></div>
        <p>Loading courses...</p>
      </div>
    );
  }

  return (
    <div className="courses-container">
      {/* Header Section */}
      <section className="courses-hero">
        <div className="hero-content">
          <h1>Discover Your Path to Mastery</h1>
          <p>Join thousands of students learning with our expert-led courses</p>
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-number">{courses.length}+</span>
              <span className="stat-label">Courses</span>
            </div>
            <div className="stat">
              <span className="stat-number">10,000+</span>
              <span className="stat-label">Students</span>
            </div>
            <div className="stat">
              <span className="stat-number">50+</span>
              <span className="stat-label">Instructors</span>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="courses-controls">
        <div className="search-box">
          <i className="fas fa-search"></i>
          <input
            type="text"
            placeholder="Search courses..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>

        <div className="filter-buttons">
          {categories.map(category => (
            <button
              key={category}
              className={`filter-btn ${filter === category ? 'active' : ''}`}
              onClick={() => setFilter(category)}
            >
              {category === 'all' ? 'All Courses' : category}
            </button>
          ))}
        </div>
      </section>


      {/* Featured Courses Section */}
      <section className="featured-courses">
        <div className="courses-header">
          <h2>Featured Courses</h2>
          <p className="section-subtitle">{filteredCourses.length} courses available</p>
        </div>

        {filteredCourses.length > 0 ? (
          <div className="courses-grid">
            {filteredCourses.map(course => (
              <div key={course._id} className="course-card">
                <div className="course-image">
                  <img src={reactImg} alt={course.title} className="course-img" />
                </div>

                <div className="course-content">
                  <h3>{course.title}</h3>
                  <p>{course.description}</p>

                  <div className="course-meta">
                    <span className="course-category">{course.category}</span>
                    <span className="course-level">{course.level}</span>
                  </div>

                  <div className="course-rating">⭐⭐⭐⭐☆ (4.5)</div>

                  <div className="course-footer">
                    <span className="price">
                      {course.price === 0 ? 'Free' : `₹${course.price}`}
                    </span>
                    <button className="enroll-btn">Enroll Now</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="no-courses">
            <i className="fas fa-book-open"></i>
            <h3>No courses found</h3>
            <p>Try adjusting your search or filter criteria</p>
          </div>
        )}
      </section>

      {/* Popular Courses Section */}
      <section className="popular-courses">
        <h2>Popular Courses</h2>
        <p className="section-subtitle">Choose from our most in-demand courses</p>

        <div className="courses-grid">
          <div className="course-card">
            <img src={fullStack} alt="Full Stack Development" className="course-img" />
            <h3>Full Stack Web Development</h3>
            <p>Master MERN stack with real-world projects and job-ready skills.</p>
            <div className="course-rating">⭐⭐⭐⭐☆ (4.5)</div>
            <div className="course-footer">
              <span className="price">₹4999</span>
              <button className="enroll-btn">Enroll Now</button>
            </div>
          </div>

          <div className="course-card">
            <img src={dsaImg} alt="DSA Course" className="course-img" />
            <h3>Data Structures & Algorithms</h3>
            <p>Master problem-solving and coding interviews.</p>
            <div className="course-rating">⭐⭐⭐⭐☆ (4.5)</div>
            <div className="course-footer">
              <span className="price">₹4999</span>
              <a href="/courses/dsa" className="enroll-btn">Enroll Now</a>
            </div>
          </div>

          <div className="course-card">
            <img src={pythonImg} alt="Python for Data Science" className="course-img" />
            <h3>Python for Data Science</h3>
            <p>Learn Python, Pandas, NumPy, and ML basics for Data Science career.</p>
            <div className="course-rating">⭐⭐⭐⭐☆ (4.3)</div>
            <div className="course-footer">
              <span className="price">₹4499</span>
              <button className="enroll-btn">Enroll Now</button>
            </div>
          </div>

          <div className="course-card">
              <img src={javaImg} alt="Java with Spring Boot" className="course-img" />
              <h3>Java with Spring Boot</h3>
              <p>Build enterprise-grade applications using Java, Spring Boot, and REST APIs.</p>
              <div className="course-rating">⭐⭐⭐⭐⭐ (4.7)</div>
              <div className="course-footer">
                <span className="price">₹5999</span>
                <button className="enroll-btn">Enroll Now</button>
              </div>
            </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="courses-cta">
        <div className="cta-content">
          <h2>Ready to Start Your Learning Journey?</h2>
          <p>Join thousands of students who are transforming their careers with our courses</p>
          <Link to="/signup" className="explore-btn">
            Get Started Today
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Courses; 