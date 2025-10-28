import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="section about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        
        <div className="about-content">
          <div className="about-text">
            <div className="about-card">
              <h3>Hello! I'm a passionate developer</h3>
              <p>
                With over 3 years of experience in web development, I specialize in creating 
                modern, responsive applications using the latest technologies. I have a strong 
                background in both front-end and back-end development.
              </p>
              <p>
                I'm passionate about writing clean, efficient code and creating user experiences 
                that are both beautiful and functional. I love learning new technologies and 
                staying up-to-date with industry trends.
              </p>
              
              <div className="about-stats">
                <div className="stat">
                  <h4>50+</h4>
                  <p>Projects Completed</p>
                </div>
                <div className="stat">
                  <h4>3+</h4>
                  <p>Years Experience</p>
                </div>
                <div className="stat">
                  <h4>20+</h4>
                  <p>Happy Clients</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="about-image">
            <div className="image-card">
              <div className="image-placeholder">
                <i className="fas fa-code"></i>
              </div>
              <div className="floating-elements">
                <div className="floating-element element-1">
                  <i className="fab fa-react"></i>
                </div>
                <div className="floating-element element-2">
                  <i className="fab fa-js-square"></i>
                </div>
                <div className="floating-element element-3">
                  <i className="fab fa-node-js"></i>
                </div>
                <div className="floating-element element-4">
                  <i className="fab fa-python"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="journey">
          <h3>My Journey</h3>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h4>2021 - Started Learning</h4>
                <p>Began my journey with HTML, CSS, and JavaScript</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h4>2022 - First Job</h4>
                <p>Landed my first developer role and learned React & Node.js</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h4>2023 - Freelancing</h4>
                <p>Started freelancing and working on diverse projects</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h4>2024 - Present</h4>
                <p>Continuing to grow and learn new technologies</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;