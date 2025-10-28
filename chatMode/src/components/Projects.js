import React from 'react';
import './Projects.css';

function Projects() {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution built with React, Node.js, and MongoDB. Features include user authentication, payment processing, and admin dashboard.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      github: '#',
      demo: '#',
      image: 'project1'
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time features. Built using React, Express.js, and Socket.io for real-time communication.',
      technologies: ['React', 'Express.js', 'Socket.io', 'PostgreSQL'],
      github: '#',
      demo: '#',
      image: 'project2'
    },
    {
      title: 'Weather Dashboard',
      description: 'A responsive weather dashboard that displays current weather and forecasts for multiple cities. Integrates with multiple weather APIs.',
      technologies: ['Vue.js', 'TypeScript', 'Chart.js', 'Weather API'],
      github: '#',
      demo: '#',
      image: 'project3'
    },
    {
      title: 'Social Media Analytics',
      description: 'An analytics dashboard for social media metrics with data visualization and reporting features. Built with Python backend and React frontend.',
      technologies: ['React', 'Python', 'D3.js', 'Azure'],
      github: '#',
      demo: '#',
      image: 'project4'
    }
  ];

  return (
    <section id="projects" className="projects section-padding">
      <div className="container">
        <div className="text-center mb-8">
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">Some of my recent work</p>
        </div>
        <div className="projects-grid grid grid-cols-1 md:grid-cols-2">
          {projects.map((project, index) => (
            <div key={index} className="project-card card">
              <div className="project-image">
                <div className={`image-placeholder ${project.image}`}>
                  <p>Project Screenshot</p>
                </div>
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tech">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.github} className="btn btn-outline">GitHub</a>
                  <a href={project.demo} className="btn btn-primary">Live Demo</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;