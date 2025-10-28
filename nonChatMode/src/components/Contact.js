import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Clear success message after 3 seconds
      setTimeout(() => setSubmitStatus(''), 3000);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: 'fas fa-envelope',
      title: 'Email',
      value: 'your.email@example.com',
      link: 'mailto:your.email@example.com'
    },
    {
      icon: 'fas fa-phone',
      title: 'Phone',
      value: '+1 (555) 123-4567',
      link: 'tel:+15551234567'
    },
    {
      icon: 'fas fa-map-marker-alt',
      title: 'Location',
      value: 'New York, NY',
      link: '#'
    }
  ];

  const socialLinks = [
    {
      icon: 'fab fa-github',
      name: 'GitHub',
      url: 'https://github.com',
      color: '#333'
    },
    {
      icon: 'fab fa-linkedin',
      name: 'LinkedIn',
      url: 'https://linkedin.com',
      color: '#0077b5'
    },
    {
      icon: 'fab fa-twitter',
      name: 'Twitter',
      url: 'https://twitter.com',
      color: '#1da1f2'
    },
    {
      icon: 'fab fa-instagram',
      name: 'Instagram',
      url: 'https://instagram.com',
      color: '#e4405f'
    }
  ];

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        
        <div className="contact-intro">
          <p>
            I'm always interested in hearing about new opportunities and interesting projects. 
            Whether you have a question or just want to say hi, feel free to reach out!
          </p>
        </div>
        
        <div className="contact-content">
          <div className="contact-info">
            <div className="info-card">
              <h3>Let's Connect</h3>
              <p>
                I'm currently available for freelance work and full-time opportunities. 
                Let's discuss how we can work together to bring your ideas to life.
              </p>
              
              <div className="contact-details">
                {contactInfo.map((info, index) => (
                  <a key={index} href={info.link} className="contact-item">
                    <div className="contact-icon">
                      <i className={info.icon}></i>
                    </div>
                    <div className="contact-text">
                      <h4>{info.title}</h4>
                      <p>{info.value}</p>
                    </div>
                  </a>
                ))}
              </div>
              
              <div className="social-links">
                <h4>Follow Me</h4>
                <div className="social-icons">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      className="social-link"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ '--social-color': social.color }}
                    >
                      <i className={social.icon}></i>
                      <span>{social.name}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div className="contact-form">
            <form onSubmit={handleSubmit} className="form">
              {submitStatus === 'success' && (
                <div className="success-message">
                  <i className="fas fa-check-circle"></i>
                  <p>Thank you! Your message has been sent successfully.</p>
                </div>
              )}
              
              <div className="form-group">
                <label htmlFor="name">Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  placeholder="Your full name"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="subject">Subject *</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  placeholder="What's this about?"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows="6"
                  placeholder="Tell me about your project or just say hello!"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className={`btn btn-primary submit-btn ${isSubmitting ? 'submitting' : ''}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <i className="fas fa-spinner fa-spin"></i>
                    Sending...
                  </>
                ) : (
                  <>
                    <i className="fas fa-paper-plane"></i>
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;