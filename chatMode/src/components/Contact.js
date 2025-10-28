import React, { useState } from 'react';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I\'ll get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: '📧',
      title: 'Email',
      content: 'your.email@example.com',
      link: 'mailto:your.email@example.com'
    },
    {
      icon: '📱',
      title: 'Phone',
      content: '+1 (555) 123-4567',
      link: 'tel:+15551234567'
    },
    {
      icon: '📍',
      title: 'Location',
      content: 'Your City, Country',
      link: '#'
    },
    {
      icon: '🔗',
      title: 'LinkedIn',
      content: 'linkedin.com/in/yourname',
      link: 'https://linkedin.com/in/yourname'
    }
  ];

  return (
    <section id="contact" className="contact section-padding">
      <div className="container">
        <div className="text-center mb-8">
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">Let's work together on your next project</p>
        </div>
        <div className="contact-content">
          <div className="contact-info">
            <h3>Let's talk!</h3>
            <p>
              I'm always open to discussing new opportunities, interesting projects,
              or just having a friendly chat about technology and development.
            </p>
            <div className="contact-items">
              {contactInfo.map((item, index) => (
                <a key={index} href={item.link} className="contact-item">
                  <span className="contact-icon">{item.icon}</span>
                  <div>
                    <h4>{item.title}</h4>
                    <p>{item.content}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                placeholder="Your Message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary btn-block">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;