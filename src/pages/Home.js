import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ProjectCard from '../components/ProjectCard';
import './Home.css';

const Home = () => {
  const mainProjects = [
    {
      id: 1,
      title: "Launcher de jeux vidéo",
      description: "Un portail web sécurisé pour héberger des jeux étudiants",
      image: "/images/launcher-preview.jpg",
      technologies: ["React", "Node.js", "MongoDB"]
    },
    {
      id: 4,
      title: "Conversion HTML/URL → PDF",
      description: "Mini-app Flask pour générer des PDF depuis du HTML ou une URL (prévisualisation + historique)",
      image: "/images/projects/pdfapp-home.png",
      technologies: ["Flask", "WeasyPrint", "Playwright"]
    },
    {
      id: 2,
      title: "Automatisation CASTp",
      description: "Extraction automatique des poches sur les protéines avec Python + Selenium",
      image: "/images/castp-preview.jpg",
      technologies: ["Python", "Selenium", "Bioinformatique"]
    },
    {
      id: 3,
      title: "Détection de contamination en métagénomique",
      description: "Pipeline de classification par apprentissage supervisé",
      image: "/images/metagenomique-preview.jpg",
      technologies: ["Python", "Machine Learning", "Bioinformatique"]
    }
  ];

  return (
    <div className="home">
      <motion.section
        className="hero"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="hero-content">
          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Yann Blanc
          </motion.h1>
          <motion.p
            className="hero-subtitle"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Étudiant en cybersécurité & développeur passionné
          </motion.p>
          <motion.div
            className="hero-description"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <p>
              Étudiant en Bachelor 3 à Ynov, spécialisé en cybersécurité.
              Je développe des projets innovants alliant développement, IA et bioinformatique.
            </p>
          </motion.div>
          <motion.div
            className="hero-cta"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <Link to="/projects" className="cta-button primary">
              Voir mes projets
            </Link>
            <Link to="/contact" className="cta-button secondary">
              Me contacter
            </Link>
          </motion.div>
        </div>
        <div className="hero-visual">
          <div className="geometric-shape"></div>
        </div>
      </motion.section>

      <motion.section
        className="featured-projects"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <h2>Projets principaux</h2>
        <div className="projects-grid">
          {mainProjects.map((project) => (
            <ProjectCard key={project.id} project={project} featured />
          ))}
        </div>
        <Link to="/projects" className="view-all-button">
          Voir tous mes projets →
        </Link>
      </motion.section>
    </div>
  );
};

export default Home;
