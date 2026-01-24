import React, { useState, useEffect } from 'react';
import './AdminDashboard.css';
import { db } from '../firebase';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';

const AdminDashboard = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [password, setPassword] = useState('');
    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(false);

    // Hardcoded password for simplicity as requested
    const ADMIN_PASSWORD = "admin123";

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
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
