import React, { useState } from 'react';
import './Projects.css';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment integration, and admin dashboard.",
      image: "fas fa-shopping-cart",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      category: "fullstack",
      demoLink: "#",
      codeLink: "#",
      featured: true
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      image: "fas fa-tasks",
      technologies: ["React", "Socket.io", "Express", "PostgreSQL"],
      category: "fullstack",
      demoLink: "#",
      codeLink: "#",
      featured: true
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "A responsive weather dashboard that displays current weather and forecasts using OpenWeather API with beautiful visualizations.",
      image: "fas fa-cloud-sun",
      technologies: ["JavaScript", "CSS3", "Chart.js", "API"],
      category: "frontend",
      demoLink: "#",
      codeLink: "#",
      featured: false
    },
    {
      id: 4,
      title: "REST API Server",
      description: "A robust REST API server with authentication, data validation, rate limiting, and comprehensive documentation.",
      image: "fas fa-server",
      technologies: ["Node.js", "Express", "JWT", "Swagger"],
      category: "backend",
      demoLink: "#",
      codeLink: "#",
      featured: false
    },
    {
      id: 5,
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website built with React and animated with CSS3 transitions and effects.",
      image: "fas fa-user",
      technologies: ["React", "CSS3", "Framer Motion"],
      category: "frontend",
      demoLink: "#",
      codeLink: "#",
      featured: false
    },
    {
      id: 6,
      title: "Chat Application",
      description: "Real-time chat application with multiple rooms, user authentication, and message history using Socket.io.",
      image: "fas fa-comments",
      technologies: ["React", "Socket.io", "Node.js", "MongoDB"],
      category: "fullstack",
      demoLink: "#",
      codeLink: "#",
      featured: true
    }
  ];

  const filters = [
    { key: 'all', label: 'All Projects' },
    { key: 'featured', label: 'Featured' },
    { key: 'fullstack', label: 'Full Stack' },
    { key: 'frontend', label: 'Frontend' },
    { key: 'backend', label: 'Backend' }
  ];

  const filteredProjects = projects.filter(project => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'featured') return project.featured;
    return project.category === activeFilter;
  });

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        
        <div className="projects-intro">
          <p>
            Here are some of the projects I've worked on. Each project represents 
            a unique challenge and learning opportunity that has helped me grow as a developer.
          </p>
        </div>
        
        <div className="project-filters">
          {filters.map(filter => (
            <button
              key={filter.key}
              className={`filter-btn ${activeFilter === filter.key ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter.key)}
            >
              {filter.label}
            </button>
          ))}
        </div>
        
        <div className="projects-grid">
          {filteredProjects.map(project => (
            <div key={project.id} className={`project-card ${project.featured ? 'featured' : ''}`}>
              {project.featured && <div className="featured-badge">Featured</div>}
              
              <div className="project-image">
                <div className="image-placeholder">
                  <i className={project.image}></i>
                </div>
                <div className="project-overlay">
                  <div className="project-links">
                    <a href={project.demoLink} className="project-link" target="_blank" rel="noopener noreferrer">
                      <i className="fas fa-external-link-alt"></i>
                      <span>Live Demo</span>
                    </a>
                    <a href={project.codeLink} className="project-link" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-github"></i>
                      <span>View Code</span>
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="projects-cta">
          <h3>Want to see more?</h3>
          <p>
            These are just a few highlights. I have many more projects on my GitHub 
            that showcase different technologies and approaches.
          </p>
          <a href="#" className="btn btn-outline" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;