import React from 'react';
import './Experience.css';

const Experience = () => {
    const experiences = [
        {
            title: 'Web Development Intern',
            company: 'Tech Company XYZ',
            period: 'June 2025 - August 2025',
            description: 'Developed responsive web applications using React and collaborated with the design team to implement user-friendly interfaces.',
            achievements: [
                'Built 3 major features for the company website',
                'Improved page load time by 40%',
                'Collaborated with a team of 5 developers'
            ]
        },
        {
            title: 'Academic Project - Student Portal',
            company: 'University Project',
            period: 'January 2025 - May 2025',
            description: 'Led a team of 4 students to develop a comprehensive student portal with course management and grade tracking.',
            achievements: [
                'Designed and implemented database schema',
                'Created RESTful APIs for data management',
                'Deployed application on cloud platform'
            ]
        },
        {
            title: 'Freelance Web Developer',
            company: 'Self-Employed',
            period: '2024 - Present',
            description: 'Providing web development services to small businesses and startups, creating custom websites and web applications.',
            achievements: [
                'Completed 5+ client projects',
                'Maintained 100% client satisfaction rate',
                'Specialized in React and modern web technologies'
            ]
        }
    ];

    return (
        <section id="experience" className="section experience-section">
            <div className="container">
                <h2 className="section-title">Experience & Projects</h2>

                <div className="timeline">
                    {experiences.map((exp, index) => (
                        <div
                            key={index}
                            className="timeline-item fade-in"
                            style={{ animationDelay: `${index * 0.2}s` }}
                        >
                            <div className="timeline-marker"></div>
                            <div className="timeline-content glass-card">
                                <div className="experience-header">
                                    <div>
                                        <h3 className="experience-title">{exp.title}</h3>
                                        <h4 className="experience-company">{exp.company}</h4>
                                    </div>
                                    <span className="experience-period">{exp.period}</span>
                                </div>

                                <p className="experience-description">{exp.description}</p>

                                <ul className="achievements-list">
                                    {exp.achievements.map((achievement, achIndex) => (
                                        <li key={achIndex} className="achievement-item">
                                            <span className="achievement-icon">✓</span>
                                            {achievement}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
