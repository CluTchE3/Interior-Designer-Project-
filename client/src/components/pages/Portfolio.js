import React, { useEffect, useState } from 'react';
import { getProjects } from '../../services/api';
import './Portfolio.css';

function Portfolio() {
  const [projects, setProjects] = useState([]);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await getProjects();
        setProjects(res.data.projects || []);
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    };
    fetchProjects();
  }, []);

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  const categories = ['all', ...new Set(projects.map(p => p.category))];

  return (
    <div className="portfolio-page">
      <section className="page-hero">
        <h1>Our Portfolio</h1>
        <p>Explore our collection of transformative design projects</p>
      </section>

      <div className="container">
        <section className="portfolio-section section">
          <div className="filter-buttons">
            {categories.map(cat => (
              <button
                key={cat}
                className={`filter-btn ${filter === cat ? 'active' : ''}`}
                onClick={() => setFilter(cat)}
              >
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </button>
            ))}
          </div>

          <div className="portfolio-grid">
            {filteredProjects.map(project => (
              <div key={project._id} className="portfolio-item">
                <div className="portfolio-image">
                  {project.images?.[0] && (
                    <img src={project.images[0].url} alt={project.title} />
                  )}
                </div>
                <div className="portfolio-info">
                  <h3>{project.title}</h3>
                  <p className="category">{project.category}</p>
                  <div className="project-meta">
                    {project.location && <span>{project.location}</span>}
                    {project.area && <span>{project.area} sqft</span>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default Portfolio;
