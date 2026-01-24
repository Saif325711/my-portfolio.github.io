import React, { useState } from 'react';
import './Navbar.css';
import HireMeModal from './HireMeModal';

import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [showHireModal, setShowHireModal] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const openHireModal = () => {
        setShowHireModal(true);
        setIsOpen(false);
    };

    const closeHireModal = () => {
        setShowHireModal(false);
    };

    return (
        <>
            <nav className="navbar">
                <div className="nav-left">
                    <span className="nav-name">Saiful</span>
                </div>
                <div className="nav-right">
                    <div className="hamburger-menu" onClick={toggleMenu}>
                        <span className="line"></span>
                        <span className="line"></span>
                        <span className="line"></span>
                    </div>
                </div>
            </nav>

            <div className={`mobile-menu-overlay ${isOpen ? 'open' : ''}`} onClick={toggleMenu}></div>

            <div className={`mobile-menu-container ${isOpen ? 'open' : ''}`}>
                <div className="menu-header">
                    <span className="menu-name">Saiful</span>
                    <button className="close-btn" onClick={toggleMenu}>
                        &times;
                    </button>
                </div>

                <ul className="menu-links">
                    <li><a href="#hero" onClick={toggleMenu}>Home</a></li>
                    <li><a href="#about" onClick={toggleMenu}>About</a></li>
                    <li><a href="#projects" onClick={toggleMenu}>Projects</a></li>
                    <li><a href="#experience" onClick={toggleMenu}>Experience</a></li>
                    <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
                    <li><Link to="/admin" onClick={toggleMenu}>Login</Link></li>
                </ul>

                <div className="menu-footer">
                    <button className="hire-me-btn" onClick={openHireModal}>Hire Me</button>
                </div>
            </div>

            <HireMeModal isOpen={showHireModal} onClose={closeHireModal} />
        </>
    );
};

export default Navbar;
