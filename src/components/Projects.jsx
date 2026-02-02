import React from 'react';
import { useProjects } from '../hooks/useProjects';
import './Projects.css';

const Projects = () => {
    const { projects, loading, error } = useProjects();

    if (loading) return <div className="text-center py-10">Loading projects...</div>;
    if (error) return <div className="text-center py-10 text-red-500">Error loading projects</div>;
    return (
        <section id="projects" className="section projects-section">
            <div className="container">
                <h2 className="section-title">Featured Projects</h2>
                <p className="section-subtitle">
                    Here are some of my recent projects that showcase my skills and creativity
                </p>

                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="project-card glass-card fade-in"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="project-image">
                                <span className="project-emoji">{project.image}</span>
                            </div>

                            <div className="project-content">
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-description">{project.description}</p>

                                <div className="project-tech">
                                    {project.tech.map((tech, techIndex) => (
                                        <span key={techIndex} className="tech-badge">{tech}</span>
                                    ))}
                                </div>

                                <div className="project-links">
                                    <a href={project.github} className="project-link" target="_blank" rel="noopener noreferrer">
                                        <span>GitHub</span>
                                        <span className="link-icon">→</span>
                                    </a>
                                    <a href={project.demo} className="project-link" target="_blank" rel="noopener noreferrer">
                                        <span>View Project</span>
                                        <span className="link-icon">→</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
