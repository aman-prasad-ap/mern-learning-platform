import React from "react";
import "./Home.css";
import fullStack from "../assets/full-stack.png";
import dsaImg from "../assets/DSA.png";
import pythonImg from "../assets/python.png";
import javaImg from "../assets/java.png";
import student1 from "../assets/Bstudent1.png";
import student2 from "../assets/Gstudent.png";
import student3 from "../assets/Bstudent2.png";
function Home() {
  return (
    <div className="home">

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-text">
          <h1>Learn From the Experts, Anytime, Anywhere</h1>
          <p>
            Learn Full Stack Development with structured courses and real projects.
          </p>
          <div className="hero-buttons">
            <button className="explore-btn">Explore Courses</button>
            <button className="join-btn">Join Now</button>
          </div>
        </div>
      </section>

      {/*why choose us*/}
        <section className="why-choose-us">
        <h2>Why Choose Us</h2>
        <p className="section-subtitle">
          We provide the best resources, mentors, and community to accelerate your learning journey.
        </p>
        <div className="choose-grid">
          <div className="choose-card">
            <div className="icon-wrapper">
              <i className="fas fa-chalkboard-teacher"></i>
            </div>
            <h3>Expert Mentors</h3>
            <p>
              Learn directly from professionals working in top tech companies who guide you with
              real-world insights.
            </p>
          </div>

          <div className="choose-card">
            <div className="icon-wrapper">
              <i className="fas fa-laptop-code"></i>
            </div>
            <h3>Hands-on Learning</h3>
            <p>
              Build real-world projects and strengthen your portfolio with practical coding experience.
            </p>
          </div>

          <div className="choose-card">
            <div className="icon-wrapper">
              <i className="fas fa-certificate"></i>
            </div>
            <h3>Recognized Certification</h3>
            <p>
              Gain certificates that are industry-recognized and give your resume a strong advantage.
            </p>
          </div>

          <div className="choose-card">
            <div className="icon-wrapper">
              <i className="fas fa-users"></i>
            </div>
            <h3>Vibrant Community</h3>
            <p>
              Collaborate, learn, and grow with peers in our thriving developer community.
            </p>
          </div>

          <div className="choose-card">
            <div className="icon-wrapper">
              <i className="fas fa-clock"></i>
            </div>
            <h3>Flexible Schedule</h3>
            <p>
              Learn at your own pace with structured self-paced lessons and mentor-led sessions.
            </p>
          </div>

          <div className="choose-card">
            <div className="icon-wrapper">
              <i className="fas fa-briefcase"></i>
            </div>
            <h3>Career Support</h3>
            <p>
              Get resume reviews, mock interviews, and job placement assistance to kickstart your career.
            </p>
          </div>
        </div>
      </section>

      {/* Popular Courses Section */}
      <section className="popular-courses">
        <h2>Popular Courses</h2>
        <p className="section-subtitle">Choose from our most in-demand courses</p>
        
        <div className="courses-grid-container">
          <div className="courses-grid">
            
            <div className="course-card">
              <img src={fullStack} alt="Full Stack Development" className="course-img" />
              <h3>Full Stack Web Development</h3>
              <p>Master MERN stack with real-world projects, job-ready skills, and portfolio development.</p>
              <div className="course-rating">⭐⭐⭐⭐☆ (4.5)</div>
              <div className="course-footer">
                <span className="price">₹4999</span>
                <button className="enroll-btn">Enroll Now</button>
              </div>
            </div>

            <div className="course-card">
              <img src={dsaImg} alt="DSA Course" className="course-img" />
              <h3>Data Structures & Algorithms</h3>
              <p>Master problem-solving and coding interviews with algorithms and data structures.</p>
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
        </div>
      </section>




      {/* What Our Students Say */}
      <section className="testimonials">
        <h2>What Our Students Say</h2>
        <p className="section-subtitle">
          Hear from our learners who transformed their careers with us
        </p>

        <div className="testimonials-grid">
          <div className="testimonial-card">
            <p>
              “This platform completely changed my career. The MERN stack course was very practical and the mentors guided me personally.”
            </p>
            <div className="student-info">
              <img src={student1} alt="student" />
              <div>
                <h4>Rohit Sharma</h4>
                <span>Full Stack Developer @ TCS</span>
              </div>
            </div>
          </div>

          <div className="testimonial-card">
            <p>
              “Best learning experience! The DSA course helped me crack my interview at a product-based company.”
            </p>
            <div className="student-info">
              <img src={student2} alt="student" />
              <div>
                <h4>Priya Verma</h4>
                <span>Software Engineer @ Amazon</span>
              </div>
            </div>
          </div>

          <div className="testimonial-card">
            <p>
              “I loved the hands-on projects. The certification gave my resume an edge, and I landed my first internship easily.”
            </p>
            <div className="student-info">
              <img src={student3} alt="student" />
              <div>
                <h4>Arjun Mehta</h4>
                <span>Data Analyst @ Infosys</span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="stats-grid">
          <div className="stat-box">
            <h3>11K+</h3>
            <p>Total Students</p>
          </div>
          <div className="stat-box">
            <h3>300+</h3>
            <p>Courses Available</p>
          </div>
          <div className="stat-box">
            <h3>90+</h3>
            <p>Expert Mentors</p>
          </div>
          <div className="stat-box">
            <h3>373+</h3>
            <p>Certifications Awarded</p>
          </div>
        </div>
      </section>


      {/* Newsletter */}
      <section className="newsletter">
        <h2>Subscribe to our Newsletter</h2>
        <div className="newsletter-form">
          <input type="email" placeholder="Enter your email" />
          <button className="explore-btn">Subscribe</button>
        </div>
      </section>
    </div>
  );
}

export default Home;