import React from 'react';
import './About.css';

const About = () => {
    const skills = [
        'Flutter & Cross-Platform App Development',
        'Fullstack Engineering (APIs, Databases, Auth, Deployment)',
        'Modern Web Development (Next.js, React)',
        'Microsoft Azure (App Services, Functions, Storage)',
        'AI / ML Integration (practical product-focused use-cases)'
    ];

    const focusAreas = [
        'Building platforms that solve real regional needs',
        'Optimizing performance & DX in multi-module apps',
        'Product thinking + clean maintainable architecture'
    ];

    return (
        <section id="about" className="section about-section">
            <div className="container">
                <h2 className="section-title">About</h2>

                <div className="about-content">
                    <div className="about-text fade-in">
                        <p className="about-intro">
                            I'm <strong>Saiful Islam</strong>, a BTech CSE (2027) student and passionate fullstack & Flutter
                            developer focused on building reliable, scalable, and user-centered digital products. I enjoy
                            architecting end-to-end solutions—from intuitive interfaces to robust backend systems and cloud
                            infrastructure.
                        </p>

                        <p className="about-description">
                            My toolset spans Web Development, Flutter, API design, databases, and Microsoft Azure cloud
                            services. I'm also expanding into practical AI integrations that add real value to products.
                        </p>
                    </div>

                    <div className="about-columns">
                        <div className="about-card glass-card fade-in">
                            <h3 className="about-card-title">
                                <span className="card-icon">⚡</span> Skills
                            </h3>
                            <ul className="about-list">
                                {skills.map((skill, index) => (
                                    <li key={index}>{skill}</li>
                                ))}
                            </ul>
                        </div>

                        <div className="about-card glass-card fade-in">
                            <h3 className="about-card-title">
                                <span className="card-icon">🎯</span> Focus Areas
                            </h3>
                            <ul className="about-list">
                                {focusAreas.map((area, index) => (
                                    <li key={index}>{area}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
