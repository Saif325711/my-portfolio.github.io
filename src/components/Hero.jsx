import React, { useState, useEffect } from 'react';
import './Hero.css';
import profileImg from '/profile.jpeg';
import HireMeModal from './HireMeModal';

const TYPING_WORDS = [
    'Flutter Apps',
    'Fullstack Systems',
    'Modern Web',
    'Google Cloud',
    'AI Integration',
];

const Hero = () => {
    const [showHireModal, setShowHireModal] = useState(false);
    const [wordIndex, setWordIndex] = useState(0);
    const [displayText, setDisplayText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentWord = TYPING_WORDS[wordIndex];
        let timeout;

        if (!isDeleting && displayText === currentWord) {
            // Pause at full word, then start deleting
            timeout = setTimeout(() => setIsDeleting(true), 1800);
        } else if (isDeleting && displayText === '') {
            // Move to next word
            setIsDeleting(false);
            setWordIndex((prev) => (prev + 1) % TYPING_WORDS.length);
        } else {
            const speed = isDeleting ? 50 : 100;
            timeout = setTimeout(() => {
                setDisplayText(
                    isDeleting
                        ? currentWord.substring(0, displayText.length - 1)
                        : currentWord.substring(0, displayText.length + 1)
                );
            }, speed);
        }

        return () => clearTimeout(timeout);
    }, [displayText, isDeleting, wordIndex]);

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

                        <p className="hero-description">
                            I craft <span className="typing-text">{displayText}</span><span className="typing-cursor">|</span> that scales across web, mobile, cloud & AI platforms.
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
