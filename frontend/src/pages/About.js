import React from "react";
import "./About.css";
import aboutHero from "../assets/about-hero.jpg";

function About() {
  return (
    <div className="about">
      {/* Intro Section */}
      <section className="about-intro">
        <div className="about-text">
          <h1>About MERN Learning Platform</h1>
          <p>
            Our platform helps students and developers learn Full Stack
            Development with real-world projects and step-by-step guidance.
          </p>
        </div>
        <div className="about-image">
            <img src={aboutHero} alt="About MERN Learning Platform" />
        </div>
      </section>

      {/* Mission, Vision, Why Choose Us */}
      <section className="about-cards">
        <div className="card">
          <h2>Our Mission</h2>
          <p>
            To make learning Full Stack Development simple, structured, and
            accessible for everyone.
          </p>
        </div>
        <div className="card">
          <h2>Our Vision</h2>
          <p>
            To empower learners to become job-ready developers with practical
            skills.
          </p>
        </div>
        <div className="card">
          <h2>Why Choose Us?</h2>
          <p>
            Hands-on projects, experienced mentors, and a supportive community.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="about-features">
        <h2>What Makes Us Different?</h2>
        <div className="features-grid">
          <div className="feature">
            <span>🚀</span>
            <h3>Practical Learning</h3>
            <p>Work on real projects to build job-ready skills.</p>
          </div>
          <div className="feature">
            <span>👨‍🏫</span>
            <h3>Expert Mentorship</h3>
            <p>Get guidance from industry professionals.</p>
          </div>
          <div className="feature">
            <span>🌍</span>
            <h3>Community Support</h3>
            <p>Join a network of learners and developers.</p>
          </div>
          <div className="feature">
            <span>📈</span>
            <h3>Career Growth</h3>
            <p>Prepare for interviews and career opportunities.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta">
        <h2>Ready to start your journey?</h2>
        <button>Join Now</button>
      </section>
    </div>
  );
}

export default About;
