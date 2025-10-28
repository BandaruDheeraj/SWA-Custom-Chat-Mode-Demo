import React from 'react';
import './Skills.css';

function Skills() {
  const skills = [
    { name: 'React', level: 90 },
    { name: 'JavaScript', level: 95 },
    { name: 'Node.js', level: 85 },
    { name: 'Python', level: 80 },
    { name: 'CSS/SCSS', level: 90 },
    { name: 'Azure', level: 75 },
    { name: 'MongoDB', level: 70 },
    { name: 'Git', level: 85 }
  ];

  const categories = [
    {
      title: 'Frontend',
      icon: '🎨',
      skills: ['React', 'Vue.js', 'HTML5', 'CSS3', 'JavaScript', 'TypeScript']
    },
    {
      title: 'Backend',
      icon: '⚙️',
      skills: ['Node.js', 'Python', 'Express.js', 'REST APIs', 'GraphQL']
    },
    {
      title: 'Cloud & DevOps',
      icon: '☁️',
      skills: ['Azure', 'AWS', 'Docker', 'CI/CD', 'Kubernetes']
    },
    {
      title: 'Database',
      icon: '🗄️',
      skills: ['MongoDB', 'PostgreSQL', 'MySQL', 'Redis', 'CosmosDB']
    }
  ];

  return (
    <section id="skills" className="skills section-padding">
      <div className="container">
        <div className="text-center mb-8">
          <h2 className="section-title">Skills & Expertise</h2>
          <p className="section-subtitle">Technologies I work with</p>
        </div>
        
        <div className="skills-categories grid grid-cols-1 md:grid-cols-2 mb-8">
          {categories.map((category, index) => (
            <div key={index} className="skill-category card">
              <div className="category-header">
                <span className="category-icon">{category.icon}</span>
                <h3>{category.title}</h3>
              </div>
              <div className="category-skills">
                {category.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="skills-progress">
          <h3 className="text-center mb-4">Proficiency Levels</h3>
          <div className="progress-bars">
            {skills.map((skill, index) => (
              <div key={index} className="progress-item">
                <div className="progress-header">
                  <span>{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>
                <div className="progress-bar">
                  <div 
                    className="progress-fill" 
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;