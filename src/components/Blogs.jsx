import React from 'react';
import './Blogs.css';

const Blogs = () => {
    const blogs = [
        {
            title: 'Building Scalable Web Apps with React & Node.js',
            description: 'Learn how to architect modern full-stack applications using React for the frontend and Node.js for the backend.',
            date: 'Feb 2026',
            readTime: '5 min read',
            tags: ['React', 'Node.js', 'Web Dev'],
            link: '#'
        },
        {
            title: 'Getting Started with Google Cloud & Firebase',
            description: 'A beginner-friendly guide to deploying your apps using Google Cloud Platform and Firebase services.',
            date: 'Jan 2026',
            readTime: '4 min read',
            tags: ['Firebase', 'GCloud', 'DevOps'],
            link: '#'
        }
    ];

    return (
        <section id="blogs" className="section blogs-section">
            <div className="container">
                <h2 className="section-title">Articles & Blogs</h2>
                <p className="section-subtitle">Sharing my knowledge and experiences in web development</p>

                <div className="blogs-grid">
                    {blogs.map((blog, index) => (
                        <a
                            key={index}
                            href={blog.link}
                            className="blog-card glass-card fade-in"
                            style={{ animationDelay: `${index * 0.15}s` }}
                        >
                            <div className="blog-meta">
                                <span className="blog-date">{blog.date}</span>
                                <span className="blog-read-time">{blog.readTime}</span>
                            </div>
                            <h3 className="blog-title">{blog.title}</h3>
                            <p className="blog-description">{blog.description}</p>
                            <div className="blog-tags">
                                {blog.tags.map((tag, i) => (
                                    <span key={i} className="blog-tag">{tag}</span>
                                ))}
                            </div>
                            <span className="blog-read-more">Read More →</span>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Blogs;
