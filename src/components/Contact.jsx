import React from 'react';
import './Contact.css';

const Contact = () => {
    const contactMethods = [
        {
            icon: '📧',
            title: 'Email',
            value: 'your.email@example.com',
            link: 'mailto:your.email@example.com'
        },
        {
            icon: '💼',
            title: 'LinkedIn',
            value: 'linkedin.com/in/yourprofile',
            link: 'https://linkedin.com/in/yourprofile'
        },
        {
            icon: '🐙',
            title: 'GitHub',
            value: 'github.com/yourusername',
            link: 'https://github.com/yourusername'
        }
    ];

    return (
        <section id="contact" className="section contact-section">
            <div className="container">
                <h2 className="section-title">Get In Touch</h2>
                <p className="section-subtitle">
                    I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                </p>

                <div className="contact-content">
                    <div className="contact-cards">
                        {contactMethods.map((method, index) => (
                            <a
                                key={index}
                                href={method.link}
                                className="contact-card glass-card scale-in"
                                style={{ animationDelay: `${index * 0.1}s` }}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <div className="contact-icon">{method.icon}</div>
                                <h3 className="contact-title">{method.title}</h3>
                                <p className="contact-value">{method.value}</p>
                                <span className="contact-arrow">→</span>
                            </a>
                        ))}
                    </div>

                    <div className="contact-cta">
                        <div className="cta-card glass-card">
                            <h3 className="cta-title">Let's Build Something Amazing Together!</h3>
                            <p className="cta-description">
                                Whether you have a project in mind or just want to chat about technology,
                                I'd love to hear from you.
                            </p>
                            <a href="mailto:your.email@example.com" className="btn btn-primary btn-large">
                                Send Me a Message
                            </a>
                        </div>
                    </div>
                </div>

                <footer className="portfolio-footer">
                    <p className="footer-text">
                        Designed & Built by <span className="text-gradient">Your Name</span>
                    </p>
                    <p className="footer-copyright">
                        © 2026 All rights reserved.
                    </p>
                </footer>
            </div>
        </section>
    );
};

export default Contact;
