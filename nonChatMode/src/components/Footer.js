import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: "Quick Links",
      links: [
        { name: "Home", href: "#home" },
        { name: "About", href: "#about" },
        { name: "Skills", href: "#skills" },
        { name: "Projects", href: "#projects" },
        { name: "Contact", href: "#contact" }
      ]
    },
    {
      title: "Services",
      links: [
        { name: "Web Development", href: "#" },
        { name: "Frontend Design", href: "#" },
        { name: "Backend Development", href: "#" },
        { name: "API Development", href: "#" },
        { name: "Consulting", href: "#" }
      ]
    },
    {
      title: "Technologies",
      links: [
        { name: "React & Vue.js", href: "#" },
        { name: "Node.js & Python", href: "#" },
        { name: "MongoDB & PostgreSQL", href: "#" },
        { name: "AWS & Docker", href: "#" },
        { name: "REST APIs", href: "#" }
      ]
    }
  ];

  const socialLinks = [
    { icon: 'fab fa-github', url: 'https://github.com', name: 'GitHub' },
    { icon: 'fab fa-linkedin', url: 'https://linkedin.com', name: 'LinkedIn' },
    { icon: 'fab fa-twitter', url: 'https://twitter.com', name: 'Twitter' },
    { icon: 'fab fa-instagram', url: 'https://instagram.com', name: 'Instagram' },
    { icon: 'fab fa-dribbble', url: 'https://dribbble.com', name: 'Dribbble' }
  ];

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId.replace('#', ''));
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer-background">
        <div className="footer-particles"></div>
      </div>
      
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3>Your Name</h3>
            <p>
              Full Stack Developer passionate about creating beautiful, 
              functional web applications that make a difference.
            </p>
            <div className="footer-social">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  className="social-icon"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                >
                  <i className={social.icon}></i>
                </a>
              ))}
            </div>
          </div>
          
          <div className="footer-links">
            {footerLinks.map((section, index) => (
              <div key={index} className="footer-section">
                <h4>{section.title}</h4>
                <ul>
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <button
                        onClick={() => link.href.startsWith('#') ? scrollToSection(link.href) : window.open(link.href, '_blank')}
                        className="footer-link"
                      >
                        {link.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        
        <div className="footer-newsletter">
          <div className="newsletter-content">
            <h4>Stay Updated</h4>
            <p>Subscribe to get notified about my latest projects and articles.</p>
          </div>
          <div className="newsletter-form">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="newsletter-input"
            />
            <button className="newsletter-btn">
              <i className="fas fa-paper-plane"></i>
              Subscribe
            </button>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-copyright">
            <p>&copy; {currentYear} Your Name. All rights reserved.</p>
            <p>Made with <i className="fas fa-heart"></i> using React</p>
          </div>
          
          <button className="back-to-top" onClick={scrollToTop}>
            <i className="fas fa-arrow-up"></i>
            <span>Back to top</span>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;