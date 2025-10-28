import React from 'react';
import './Hero.css';

function Hero() {
  return (
    <section id="home" className="hero gradient-bg">
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">
            Hi, I'm <span className="highlight">Your Name</span>
          </h1>
          <p className="hero-subtitle">
            Full Stack Developer & UI/UX Designer
          </p>
          <p className="hero-description">
            I create beautiful, responsive web applications with modern technologies
            and best practices. Let's build something amazing together!
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">View My Work</a>
            <a href="#contact" className="btn btn-outline">Get In Touch</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;