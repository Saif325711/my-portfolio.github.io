import React from 'react';
import './Skills.css';

const Skills = () => {
    const skillCategories = [
        {
            title: 'Frontend Development',
            icon: '🎨',
            skills: ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Tailwind CSS', 'Bootstrap']
        },
        {
            title: 'Backend Development',
            icon: '⚙️',
            skills: ['Node.js', 'Express.js', 'REST APIs', 'MongoDB', 'MySQL']
        },
        {
            title: 'Programming Languages',
            icon: '💻',
            skills: ['JavaScript', 'Python', 'C++', 'Java', 'C']
        },
        {
            title: 'Tools & Technologies',
            icon: '🛠️',
            skills: ['Git', 'GitHub', 'VS Code', 'Postman', 'Figma', 'npm']
        }
    ];

    return (
        <section id="skills" className="section skills-section">
            <div className="container">
                <h2 className="section-title">Skills & Technologies</h2>

                <div className="skills-grid">
                    {skillCategories.map((category, index) => (
                        <div
                            key={index}
                            className="skill-category glass-card fade-in"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="category-header">
                                <span className="category-icon">{category.icon}</span>
                                <h3 className="category-title">{category.title}</h3>
                            </div>

                            <div className="skills-list">
                                {category.skills.map((skill, skillIndex) => (
                                    <div key={skillIndex} className="skill-tag">
                                        {skill}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="skills-additional">
                    <h3 className="additional-title">Additional Competencies</h3>
                    <div className="competencies-list">
                        <span className="competency-tag">Problem Solving</span>
                        <span className="competency-tag">Data Structures & Algorithms</span>
                        <span className="competency-tag">Responsive Design</span>
                        <span className="competency-tag">Version Control</span>
                        <span className="competency-tag">Agile Methodology</span>
                        <span className="competency-tag">Team Collaboration</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
