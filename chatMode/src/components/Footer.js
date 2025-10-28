import React from 'react';
import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/yourusername',
      icon: '💙' // GitHub icon alternative
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/yourusername',
      icon: '🔗' // LinkedIn icon alternative
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/yourusername',
      icon: '🐦' // Twitter icon alternative
    },
    {
      name: 'Email',
      url: 'mailto:your.email@example.com',
      icon: '📧' // Email icon
    }
  ];

  return (
    <footer className="footer gradient-bg">
      <div className="container">
        <div className="footer-content">
          <div className="footer-info">
            <h3>Let's Connect!</h3>
            <p>
              Thank you for visiting my portfolio. I'm always excited to connect
              with fellow developers and potential collaborators.
            </p>
          </div>
          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div className="footer-social">
            <h4>Follow Me</h4>
            <div className="social-links">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={social.name}
                  className="social-link"
                >
                  <span>{social.icon}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {currentYear} Your Name. All rights reserved.</p>
          <p>Built with React ❤️ and deployed on Azure Static Web Apps</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;