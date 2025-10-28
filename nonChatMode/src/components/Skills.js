import React from 'react';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: "fas fa-laptop-code",
      skills: [
        { name: "HTML/CSS", level: 90, icon: "fab fa-html5" },
        { name: "JavaScript", level: 85, icon: "fab fa-js-square" },
        { name: "React", level: 80, icon: "fab fa-react" },
        { name: "Vue.js", level: 70, icon: "fab fa-vuejs" },
        { name: "TypeScript", level: 75, icon: "fab fa-js-square" }
      ]
    },
    {
      title: "Backend",
      icon: "fas fa-server",
      skills: [
        { name: "Node.js", level: 80, icon: "fab fa-node-js" },
        { name: "Python", level: 75, icon: "fab fa-python" },
        { name: "Express.js", level: 85, icon: "fas fa-code" },
        { name: "MongoDB", level: 70, icon: "fas fa-database" },
        { name: "PostgreSQL", level: 65, icon: "fas fa-database" }
      ]
    },
    {
      title: "Tools & Others",
      icon: "fas fa-tools",
      skills: [
        { name: "Git", level: 85, icon: "fab fa-git-alt" },
        { name: "Docker", level: 70, icon: "fab fa-docker" },
        { name: "AWS", level: 65, icon: "fab fa-aws" },
        { name: "Figma", level: 75, icon: "fab fa-figma" },
        { name: "Photoshop", level: 70, icon: "fas fa-paint-brush" }
      ]
    }
  ];

  return (
    <section id="skills" className="section skills">
      <div className="container">
        <h2 className="section-title">My Skills</h2>
        
        <div className="skills-intro">
          <p>
            Here are some of the technologies and tools I work with. I'm always learning 
            and expanding my skill set to stay current with industry trends.
          </p>
        </div>
        
        <div className="skills-grid">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="skill-category">
              <div className="category-header">
                <div className="category-icon">
                  <i className={category.icon}></i>
                </div>
                <h3>{category.title}</h3>
              </div>
              
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="skill-header">
                      <div className="skill-info">
                        <i className={skill.icon}></i>
                        <span className="skill-name">{skill.name}</span>
                      </div>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress"
                        style={{ 
                          width: `${skill.level}%`,
                          animationDelay: `${skillIndex * 0.1}s`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="skills-highlight">
          <div className="highlight-content">
            <h3>Always Learning</h3>
            <p>
              Technology evolves rapidly, and I believe in continuous learning. 
              I regularly take courses, attend workshops, and work on personal projects 
              to stay updated with the latest trends and best practices.
            </p>
            <div className="learning-badges">
              <div className="badge">
                <i className="fas fa-graduation-cap"></i>
                <span>10+ Certifications</span>
              </div>
              <div className="badge">
                <i className="fas fa-book"></i>
                <span>Continuous Learning</span>
              </div>
              <div className="badge">
                <i className="fas fa-users"></i>
                <span>Community Involvement</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;