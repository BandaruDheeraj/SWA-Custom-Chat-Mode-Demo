import React from 'react';
import './About.css';

function About() {
  return (
    <section id="about" className="about section-padding">
      <div className="container">
        <div className="text-center mb-8">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">Get to know me better</p>
        </div>
        <div className="about-content">
          <div className="about-text">
            <h3>Hello! I'm a passionate developer</h3>
            <p>
              I'm a full-stack developer with a passion for creating beautiful,
              functional, and user-centered digital experiences. With expertise in
              modern web technologies, I love turning complex problems into simple,
              beautiful, and intuitive solutions.
            </p>
            <p>
              When I'm not coding, you can find me exploring new technologies,
              contributing to open source projects, or sharing my knowledge with
              the developer community.
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
                <h4>100%</h4>
                <p>Client Satisfaction</p>
              </div>
            </div>
          </div>
          <div className="about-image">
            <div className="image-placeholder">
              <p>Your Photo Here</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;