import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';
import FilterBar from '../components/FilterBar';
import './Projects.css';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [activeFilter, setActiveFilter] = useState('all');

  useEffect(() => {
    // Charger les projets depuis le fichier JSON
    fetch('/data/projects.json')
      .then(response => response.json())
      .then(data => {
        setProjects(data);
        setFilteredProjects(data);
      })
      .catch(error => console.error('Erreur lors du chargement des projets:', error));
  }, []);

  const filterProjects = (category) => {
    setActiveFilter(category);
    if (category === 'all') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(project =>
        (project.category || '').toLowerCase() === category.toLowerCase()
      ));
    }
  };

  // Ajout de la nouvelle catégorie "filRouge"
  const categories = ['all', 'filRouge', 'web', 'cybersécurité', 'bioinformatique', 'ia', 'mobile'];

  return (
    <div className="projects-page">
      <motion.header
        className="page-header"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1>Mes Projets</h1>
        <p>Une collection de mes réalisations techniques et créatives</p>
      </motion.header>

      <FilterBar
        categories={categories}
        activeFilter={activeFilter}
        onFilter={filterProjects}
      />

      <motion.div
        className="projects-grid"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        {filteredProjects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </motion.div>

      {filteredProjects.length === 0 && (
        <div className="no-projects">
          <p>Aucun projet trouvé pour cette catégorie.</p>
        </div>
      )}
    </div>
  );
};

export default Projects;
