import React from 'react';
import './Certifications.css';

const Certifications = () => {
    const certifications = [
        {
            title: 'Full Stack Web Development',
            issuer: 'Coursera',
            date: '2025',
            icon: '🎓',
            credential: '#'
        },
        {
            title: 'JavaScript Algorithms and Data Structures',
            issuer: 'freeCodeCamp',
            date: '2024',
            icon: '💻',
            credential: '#'
        },
        {
            title: 'React - The Complete Guide',
            issuer: 'Udemy',
            date: '2024',
            icon: '⚛️',
            credential: '#'
        },
        {
            title: 'Python Programming',
            issuer: 'Coursera',
            date: '2024',
            icon: '🐍',
            credential: '#'
        }
    ];

    const achievements = [
        {
            title: 'Hackathon Winner',
            description: 'First place in University Tech Fest 2025',
            icon: '🏆'
        },
        {
            title: 'Open Source Contributor',
            description: 'Contributed to 5+ open source projects',
            icon: '🌟'
        },
        {
            title: 'Dean\'s List',
            description: 'Academic excellence award for 3 consecutive semesters',
            icon: '📚'
        }
    ];

    return (
        <section id="certifications" className="section certifications-section">
            <div className="container">
                <h2 className="section-title">Certifications & Achievements</h2>

                <div className="certifications-content">
                    <div className="certifications-grid">
                        <h3 className="subsection-title">Certifications</h3>
                        <div className="certs-list">
                            {certifications.map((cert, index) => (
                                <div
                                    key={index}
                                    className="cert-card glass-card fade-in"
                                    style={{ animationDelay: `${index * 0.1}s` }}
                                >
                                    <div className="cert-icon">{cert.icon}</div>
                                    <div className="cert-content">
                                        <h4 className="cert-title">{cert.title}</h4>
                                        <p className="cert-issuer">{cert.issuer}</p>
                                        <div className="cert-footer">
                                            <span className="cert-date">{cert.date}</span>
                                            <a href={cert.credential} className="cert-link" target="_blank" rel="noopener noreferrer">
                                                View Credential →
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="achievements-grid">
                        <h3 className="subsection-title">Achievements</h3>
                        <div className="achievements-cards">
                            {achievements.map((achievement, index) => (
                                <div
                                    key={index}
                                    className="achievement-card glass-card scale-in"
                                    style={{ animationDelay: `${index * 0.15}s` }}
                                >
                                    <div className="achievement-icon">{achievement.icon}</div>
                                    <h4 className="achievement-title">{achievement.title}</h4>
                                    <p className="achievement-description">{achievement.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Certifications;
