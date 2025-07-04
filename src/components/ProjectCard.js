import React, { useState } from 'react';
import { motion } from 'framer-motion';
import MediaViewer from './MediaViewer';
import './ProjectCard.css';

const ProjectCard = ({ project, featured = false }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <motion.div 
      className={`project-card ${featured ? 'featured' : ''}`}
      whileHover={{ y: -10, scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <div className="project-media">
        <MediaViewer media={project.media} />
        <div className="project-overlay">
          <button 
            className="details-button"
            onClick={() => setShowDetails(true)}
          >
            Voir détails
          </button>
        </div>
      </div>
      
      <div className="project-content">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>
        
        <div className="project-technologies">
          {project.technologies?.map((tech, index) => (
            <span key={index} className="tech-tag">{tech}</span>
          ))}
        </div>
        
        <div className="project-links">
          {project.githubUrl && (
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          )}
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
              Démo
            </a>
          )}
        </div>
      </div>

      {showDetails && (
        <ProjectModal 
          project={project} 
          onClose={() => setShowDetails(false)} 
        />
      )}
    </motion.div>
  );
};

export default ProjectCard;
