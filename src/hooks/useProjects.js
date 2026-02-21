import { useState, useEffect } from 'react';
import { projects as localProjects } from '../data/projects';

export const useProjects = () => {
    const [projects, setProjects] = useState(localProjects);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/projects');
                if (!response.ok) {
                    throw new Error('Failed to fetch projects');
                }
                const data = await response.json();
                if (data && data.length > 0) {
                    setProjects(data);
                }
            } catch (err) {
                console.error("Using local projects data");
                // Keep using localProjects (already set as default)
            } finally {
                setLoading(false);
            }
        };

        fetchProjects();
    }, []);

    return { projects, loading, error };
};
