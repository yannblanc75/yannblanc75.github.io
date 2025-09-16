import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const mainProjects = [
    {
      id: 1,
      title: "Gestion des droits utilisateurs bancaires",
      description: "Plateforme sécurisée d'échange de données entre médecins et banquiers conforme aux normes HDS et ISO 27001",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
      technologies: ["React", "Python Flask", "PHPMyAdmin"]
    },
    {
      id: 2,
      title: "Amélioration SI d'un CHU",
      description: "Analyse complète des vulnérabilités et propositions d'amélioration selon la méthode HEBIOS de l'ANSSI",
      image: "/p_filRouge/preview.png",
      technologies: ["Méthode HEBIOS", "Analyse de risque", "Sécurité réseau"]
    },
    {
      id: 3,
      title: "Pentest OWASP Juice Shop",
      description: "Pentest complet avec exploitation de vulnérabilités web et manipulation de JWT tokens",
      image: "https://images.unsplash.com/photo-1563206767-5b18f218e8de?w=400&h=300&fit=crop",
      technologies: ["Burp Suite", "Hydra", "JWT", "OSINT"]
    }
  ];

  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Yann Blanc</h1>
          <p className="hero-subtitle">Étudiant en cybersécurité & développeur passionné</p>
          <div className="hero-description">
            <p>
              Étudiant en Bachelor 3 à Ynov, spécialisé en cybersécurité. 
              Je développe des projets innovants alliant développement, IA et bioinformatique.
            </p>
          </div>
          <div className="hero-cta">
            <Link to="/projects" className="cta-button primary">
              Voir mes projets
            </Link>
            <Link to="/contact" className="cta-button secondary">
              Me contacter
            </Link>
          </div>
        </div>
        <div className="hero-visual">
          <div className="profile-section">
            <img 
              src="/images/pprosite.PNG" 
              alt="Photo de profil de Yann Blanc"
              className="profile-image"
            />
            <div className="profile-glow"></div>
          </div>
        </div>
      </section>

      <section className="featured-projects">
        <h2>Projets principaux</h2>
        <div className="projects-grid">
          {mainProjects.map((project) => (
            <div key={project.id} className="featured-project-card">
              <img 
                src={project.image} 
                alt={project.title}
                className="project-image"
              />
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        <Link to="/projects" className="view-all-button">
          Voir tous mes projets →
        </Link>
      </section>
    </div>
  );
};
export default Home;
