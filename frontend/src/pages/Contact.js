import React, { useState } from "react";
import "./Contact.css";
import { FaUser, FaEnvelope, FaCommentDots } from "react-icons/fa";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div>
      <div className="home">
       <section className="hero">
         <h1>Welcome to MERN Learning Platform</h1>
         <p>Learn Full Stack Development with structured courses and real projects.</p>
         <button className="explore-btn">Explore Courses</button>
       </section>
     </div>
      <div className="contact-container">
      <div className="contact-card">
        <h2>Contact Us</h2>
        <form className="contact-form" onSubmit={handleSubmit}>
          {/* Name Field */}
          <div className="input-group">
            <FaUser className="input-icon" />
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder=" "
            />
            <label>Name</label>
          </div>

          {/* Email Field */}
          <div className="input-group">
            <FaEnvelope className="input-icon" />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder=" "
            />
            <label>Email</label>
          </div>

          {/* Message Field */}
          <div className="input-group">
            <div className="input-message">
                <FaCommentDots className="input-icon" />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder=" "
            />
            <label>Message</label>
            </div>
          </div>

          <button type="submit">Send Message</button>
          {submitted && (
            <p className="success-msg">Thank you! Your message has been sent.</p>
          )}
        </form>
      </div>
    </div>
    </div>
    
  );
}

export default Contact;
