import React, { useState } from "react";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! We will get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="contact-container">
      {/* Left - Contact Info */}
      <div className="contact-info">
        <h2>Contact Us</h2>
        <p>We’d love to hear from you! Reach out to us with your questions, feedback, or booking inquiries.</p>

        <div className="info-box">
          <h4>📍 Address</h4>
          <p>123 Travel Street, Mumbai, India</p>
        </div>
        <div className="info-box">
          <h4>📧 Email</h4>
          <p>info@tourismwebsite.com</p>
        </div>
        <div className="info-box">
          <h4>📞 Phone</h4>
          <p>+91 98765 43210</p>
        </div>
      </div>

      {/* Right - Contact Form */}
      <div className="contact-form">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
