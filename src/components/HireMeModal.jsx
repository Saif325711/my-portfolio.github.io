import React, { useState } from 'react';
import './HireMeModal.css';
import { db } from '../firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

const HireMeModal = ({ isOpen, onClose }) => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleContentClick = (e) => {
        e.stopPropagation();
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        try {
            await addDoc(collection(db, "messages"), {
                ...formData,
                timestamp: serverTimestamp()
            });
            alert('Message sent successfully! I will get back to you soon.');
            setFormData({ name: '', email: '', message: '' });
            onClose();
        } catch (error) {
            console.error("Error sending message: ", error);
            alert('Failed to send message. Please try again later.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div
            className={`hire-me-modal-overlay ${isOpen ? 'open' : ''}`}
            onClick={onClose}
        >
            <div className="hire-me-modal-content" onClick={handleContentClick}>
                <button className="modal-close-btn" onClick={onClose}>
                    &times;
                </button>

                <div className="modal-header">
                    <h2>Get in Touch</h2>
                    <p className="modal-subtitle">
                        Feel free to reach out for collaborations, freelance work, or product ideas.
                    </p>
                </div>

                <div className="contact-info-block">
                    <div className="info-item">
                        <span className="info-label">Name</span>
                        <span className="info-value">Saiful</span>
                    </div>
                    <div className="info-item">
                        <span className="info-label">Email</span>
                        <a href="mailto:saifulislam.786452@gmail.com" className="info-value">
                            saifulislam.786452@gmail.com
                        </a>
                    </div>
                    <div className="info-item">
                        <span className="info-label">Phone</span>
                        <span className="info-value">6003359534</span>
                    </div>
                </div>

                <form className="modal-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label className="form-label">Name</label>
                        <input
                            type="text"
                            name="name"
                            className="form-input"
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="Enter your name"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label className="form-label">Email</label>
                        <input
                            type="email"
                            name="email"
                            className="form-input"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="Enter your email"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label className="form-label">Message</label>
                        <textarea
                            name="message"
                            className="form-textarea"
                            value={formData.message}
                            onChange={handleInputChange}
                            placeholder="Enter your message"
                            required
                        ></textarea>
                    </div>
                    <button type="submit" className="modal-send-btn" disabled={isSubmitting}>
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default HireMeModal;
