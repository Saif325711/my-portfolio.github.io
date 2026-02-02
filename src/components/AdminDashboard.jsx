import React, { useState, useEffect } from 'react';
import './AdminDashboard.css';
import { db } from '../firebase';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';

const AdminDashboard = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [password, setPassword] = useState('');
    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(false);
    const [showReplyModal, setShowReplyModal] = useState(false);
    const [selectedMessage, setSelectedMessage] = useState(null);
    const [replyText, setReplyText] = useState('');

    // Hardcoded password for simplicity as requested
    const ADMIN_PASSWORD = "Saiful@123";

    const handleLogin = (e) => {
        e.preventDefault();
        if (password === ADMIN_PASSWORD) {
            setIsAuthenticated(true);
            fetchMessages();
        } else {
            alert("Incorrect password");
        }
    };

    const fetchMessages = async () => {
        setLoading(true);
        try {
            const q = query(collection(db, "messages"), orderBy("timestamp", "desc"));
            const querySnapshot = await getDocs(q);
            const fetchedMessages = [];
            querySnapshot.forEach((doc) => {
                fetchedMessages.push({ id: doc.id, ...doc.data() });
            });
            setMessages(fetchedMessages);
        } catch (error) {
            console.error("Error fetching messages:", error);
            alert("Failed to fetch messages");
        } finally {
            setLoading(false);
        }
    };

    const handleReplyClick = (msg) => {
        setSelectedMessage(msg);
        setShowReplyModal(true);
    };

    const sendReply = async (e) => {
        e.preventDefault();
        if (!replyText.trim()) return;

        try {
            const response = await fetch('http://localhost:5000/api/reply', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    to: selectedMessage.email,
                    subject: 'Reply to your inquiry',
                    text: replyText,
                    originalMessage: selectedMessage.message
                })
            });

            if (response.ok) {
                alert('Reply sent successfully!');
                setShowReplyModal(false);
                setReplyText('');
                setSelectedMessage(null);
            } else {
                alert('Failed to send reply.');
            }
        } catch (error) {
            console.error('Error sending reply:', error);
            alert('Error sending reply.');
        }
    };

    if (!isAuthenticated) {
        return (
            <div className="admin-dashboard">
                <div className="login-container">
                    <h2 className="login-title">Admin Login</h2>
                    <form onSubmit={handleLogin} className="login-form">
                        <input
                            type="password"
                            placeholder="Enter Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <button type="submit" className="login-btn">Login</button>
                    </form>
                </div>
            </div>
        );
    }

    return (
        <div className="admin-dashboard">
            <div className="dashboard-container">
                <div className="dashboard-header">
                    <h1 className="dashboard-title">Message Dashboard</h1>
                    <button onClick={() => setIsAuthenticated(false)} className="logout-btn">Logout</button>
                </div>

                <div className="messages-table-container">
                    {loading ? (
                        <p className="loading-text">Loading messages...</p>
                    ) : messages.length === 0 ? (
                        <p className="no-messages">No messages found.</p>
                    ) : (
                        <table className="messages-table">
                            <thead>
                                <tr>
                                    <th>Date</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Message</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {messages.map((msg) => (
                                    <tr key={msg.id}>
                                        <td>
                                            {msg.timestamp?.seconds
                                                ? new Date(msg.timestamp.seconds * 1000).toLocaleString()
                                                : 'N/A'}
                                        </td>
                                        <td>{msg.name}</td>
                                        <td>
                                            <a href={`mailto:${msg.email}`}>{msg.email}</a>
                                        </td>
                                        <td>{msg.message}</td>
                                        <td>
                                            <button onClick={() => handleReplyClick(msg)} className="reply-btn">Reply</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                </div>
            </div>

            {/* Reply Modal */}
            {showReplyModal && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <h2>Reply to {selectedMessage?.name}</h2>
                        <form onSubmit={sendReply}>
                            <textarea
                                value={replyText}
                                onChange={(e) => setReplyText(e.target.value)}
                                placeholder="Type your reply here..."
                                rows="5"
                                className="reply-textarea"
                                required
                            />
                            <div className="modal-actions">
                                <button type="button" onClick={() => setShowReplyModal(false)} className="cancel-btn">Cancel</button>
                                <button type="submit" className="send-btn">Send Reply</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AdminDashboard;
