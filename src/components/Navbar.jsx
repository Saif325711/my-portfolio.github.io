import React, { useState } from 'react';
import './Navbar.css';
import HireMeModal from './HireMeModal';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [showHireModal, setShowHireModal] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

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

    const handleNavClick = (e, sectionId) => {
        e.preventDefault();
        setIsOpen(false);

        if (sectionId === 'top') {
            if (location.pathname === '/') {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            } else {
                navigate('/');
                setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 100);
            }
        } else {
            if (location.pathname === '/') {
                const el = document.getElementById(sectionId);
                if (el) el.scrollIntoView({ behavior: 'smooth' });
            } else {
                navigate('/');
                setTimeout(() => {
                    const el = document.getElementById(sectionId);
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            }
        }
    };

    return (
        <>
            <nav className="navbar">
                <div className="nav-left">
                    <span className="nav-name">Saiful</span>
                </div>
                <div className="nav-center">
                    <ul className="nav-links">
                        <li><a href="#" onClick={(e) => handleNavClick(e, 'top')}>Home</a></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/blogs">Blogs</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>
                <div className="nav-right">
                    <Link to="/contact" className="nav-hire-btn">Hire Me</Link>
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
                    <li><a href="#" onClick={(e) => handleNavClick(e, 'top')}>Home</a></li>
                    <li><Link to="/about" onClick={toggleMenu}>About</Link></li>
                    <li><Link to="/blogs" onClick={toggleMenu}>Blogs</Link></li>
                    <li><Link to="/contact" onClick={toggleMenu}>Contact</Link></li>
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


