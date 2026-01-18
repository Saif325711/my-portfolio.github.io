import React, { useState } from 'react';
import './Hero.css';
import profileImg from '/profile.jpeg';
import HireMeModal from './HireMeModal';

const Hero = () => {
    const [showHireModal, setShowHireModal] = useState(false);

    const openHireModal = () => {
        setShowHireModal(true);
    };

    const closeHireModal = () => {
        setShowHireModal(false);
    };

    return (
        <>
            <section id="hero" className="hero-section">
                <div className="container">
                    <div className="hero-content fade-in">
                        <div className="hero-profile">
                            <img src={profileImg} alt="Saiful Islam" className="profile-image" />
                        </div>

                        <div className="hero-tags">
                            <span className="hero-tag">BTech CSE 2027</span>
                            <span className="hero-tag">Fullstack Dev</span>
                            <span className="hero-tag">AI & ML</span>
                        </div>

                        <h1 className="hero-title">
                            Hi, I'm <span className="text-gradient">Saiful Islam</span>
                        </h1>

                        <h2 className="hero-subtitle">
                            Computer Science Engineering Student & Web Developer
                        </h2>

                        <p className="hero-description">
                            Passionate about building elegant solutions to complex problems through code.
                            Specializing in web development with a strong foundation in programming fundamentals.
                        </p>

                        <div className="hero-contact-section" style={{ marginTop: '20px' }}>
                            <h3 className="contact-heading">Contact</h3>
                            <div className="hero-contact-info">
                                <p className="contact-text">📧 saifulislam.786452@gmail.com</p>
                                <p className="contact-text">📱 6003359534</p>
                                <p className="contact-text">📍 Assam, India (783392)</p>
                            </div>
                        </div>

                        <div className="hero-scroll">
                            <span>Scroll Down</span>
                            <div className="scroll-arrow"></div>
                        </div>

                        <div className="hero-stack-section">
                            <div className="orbit-container">
                                <div className="center-hub">
                                    <div className="hub-text">Core<br />Stack</div>
                                </div>
                                <div className="orbit-ring">

                                    <div className="stack-box">
                                        <div className="stack-dot"></div>
                                        <div className="stack-label"><span className="text-rotator">Flutter</span></div>
                                    </div>
                                    <div className="stack-box">
                                        <div className="stack-dot"></div>
                                        <div className="stack-label"><span className="text-rotator">Node</span></div>
                                    </div>
                                    <div className="stack-box">
                                        <div className="stack-dot"></div>
                                        <div className="stack-label"><span className="text-rotator">Next.js</span></div>
                                    </div>
                                    <div className="stack-box">
                                        <div className="stack-dot"></div>
                                        <div className="stack-label"><span className="text-rotator">AI</span></div>
                                    </div>
                                    <div className="stack-box">
                                        <div className="stack-dot"></div>
                                        <div className="stack-label"><span className="text-rotator">ML</span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="hero-visual">
                        <div className="floating-card card-1 glass-card">
                            <div className="card-icon">💻</div>
                            <div className="card-text">Web Development</div>
                        </div>
                        <div className="floating-card card-2 glass-card">
                            <div className="card-icon">🚀</div>
                            <div className="card-text">Problem Solving</div>
                        </div>
                        <div className="floating-card card-3 glass-card">
                            <div className="card-icon">⚡</div>
                            <div className="card-text">Fast Learner</div>
                        </div>
                    </div>
                </div>
            </section>

            <HireMeModal isOpen={showHireModal} onClose={closeHireModal} />
        </>
    );
};

export default Hero;
