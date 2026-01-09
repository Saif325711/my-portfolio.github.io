import React from 'react';
import './About.css';

const About = () => {
    return (
        <section id="about" className="section about-section">
            <div className="container">
                <h2 className="section-title">About Me</h2>

                <div className="about-content">
                    <div className="about-text fade-in">
                        <p className="about-intro">
                            I'm a passionate <strong>Computer Science Engineering student</strong> with a deep love for
                            coding and problem-solving. My journey in tech started with curiosity and has evolved into
                            a commitment to building innovative solutions.
                        </p>

                        <p>
                            Currently pursuing my degree in CSE, I'm focused on mastering web development technologies
                            and expanding my knowledge in software engineering principles. I believe in continuous learning
                            and staying updated with the latest industry trends.
                        </p>

                        <div className="about-highlights">
                            <div className="highlight-item glass-card">
                                <div className="highlight-icon">🎓</div>
                                <div className="highlight-content">
                                    <h4>Education</h4>
                                    <p>B.Tech in Computer Science Engineering</p>
                                </div>
                            </div>

                            <div className="highlight-item glass-card">
                                <div className="highlight-icon">💡</div>
                                <div className="highlight-content">
                                    <h4>Focus</h4>
                                    <p>Web Development & Programming</p>
                                </div>
                            </div>

                            <div className="highlight-item glass-card">
                                <div className="highlight-icon">🎯</div>
                                <div className="highlight-content">
                                    <h4>Goal</h4>
                                    <p>Building impactful digital solutions</p>
                                </div>
                            </div>
                        </div>

                        <div className="about-stats">
                            <div className="stat-item">
                                <div className="stat-number text-gradient">10+</div>
                                <div className="stat-label">Projects Completed</div>
                            </div>
                            <div className="stat-item">
                                <div className="stat-number text-gradient">5+</div>
                                <div className="stat-label">Technologies Mastered</div>
                            </div>
                            <div className="stat-item">
                                <div className="stat-number text-gradient">100%</div>
                                <div className="stat-label">Dedication</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
