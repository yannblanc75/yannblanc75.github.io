import React, { useState } from 'react';
import './Projects.css';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [expandedProject, setExpandedProject] = useState(null);
  const [lightboxImage, setLightboxImage] = useState(null);
  
  const projects = [
    {
      id: 1,
      name: "AKIROO",
      title: "Le Futur du Gaming",
      description: "Projet Ydays. Dans le cadre des projet Ydays, avec une equipe composer de developeur, comerciaux et expert cyber nous avons develloper une plateforme qui mets en avant les devellopeur de jeux videos et leurs creations.",
      category: "dev",
      technologies: ["React", "Python", "PHPMyAdmin"],
      status: "completed",
      image: "/p_Akiroo/akiroo_banner.png",
      detailedDescription: "Cette plateforme est faite avant tout pour les petits créateurs et pour promouvoir leurs jeux.",
      mediaGallery: [
        { type: "image", url: "/p_Akiroo/akiroo_home.png", caption: "Page d'acceuil" },
        { type: "image", url: "/p_Akiroo/akiroo_assets.png", caption: "Boutique d'assets" },
        { type: "image", url: "/p_Akiroo/akiroo_mobile.png", caption: "Page de connexion mobile" }
      ]
    },
    {
      id: 2,
      name: "AdminBDD",
      title: "Gestion des droits utilisateurs bancaires",
      description: "Projet réalisé pour le module \"Administration Base de Données\". J'ai développé deux plateformes web reliées par une base de données. L'objectif était de permettre un échange de données sécurisé entre un médecin et un banquier dans le cadre d'une demande de prêt bancaire, en respectant les normes HDS, ISO 27001, et ISO 27799 pour la protection des données de santé.",
      category: "web",
      technologies: ["React", "Python Flask", "PHPMyAdmin", "Faker"],
      status: "completed",
      image: "/p_AdminBDD/AppBanque.png",
      detailedDescription: "Chaque type d'utilisateur (super admin, médecin, banquier) possède des droits spécifiques. Le banquier peut par exemple accéder à un rapport anonymisé sans voir les données médicales sensibles. Le système implémente une architecture de sécurité robuste conforme aux standards de protection des données de santé.",
      mediaGallery: [
        { type: "image", url: "/p_AdminBDD/AppBanque.png", caption: "Interface application banque" },
        { type: "image", url: "/p_AdminBDD/AppDoc.png", caption: "Interface médecin" },
        { type: "image", url: "/p_AdminBDD/infoEmprunteur.png", caption: "Exemple de donnees emprunteurs" },
      ]
    },
    {
      id: 3,
      name: "filRouge",
      title: "Amélioration du système d'information d'un CHU",
      description: "Dans ce projet fil rouge, j'ai analysé les failles logiques, physiques et organisationnelles d'un CHU fictif. J'ai réalisé un premier pentest interne, identifié les actifs critiques et obsolètes, proposé une nouvelle segmentation des VLANs, amélioré le PCA et PRA selon la méthode HEBIOS de l'ANSSI.",
      category: "cybersécurité",
      technologies: ["Méthode HEBIOS (ANSSI)", "Analyse de risque", "Exercices de sensibilisation", "Recommandations réseau (VLAN)"],
      status: "completed",
      image: "/p_filRouge/Schema.png",
      detailedDescription: "Projet d'envergure incluant l'analyse complète de la sécurité d'un établissement de santé. J'ai proposé des actions de sensibilisation du personnel avec mises en situation pratiques et développé un plan d'amélioration basé sur les recommandations de l'ANSSI.",
      mediaGallery: [
        { type: "image", url: "/p_filRouge/Matrice des risque.jpg", caption: "Cartographie des risques" },
        { type: "image", url: "/p_filRouge/Matrice initiale.png", caption: "Matrice Initial" },
        { type: "image", url: "/p_filRouge/Schema.png", caption: "Nouveaux schéma" }
      ]
    },
    {
      id: 4,
      name: "Pentest",
      title: "Pentest d'un site web vulnérable (OWASP Juice Shop)",
      description: "Dans ce projet de cybersécurité, j'ai réalisé un pentest complet sur un site e-commerce fictif (Juice Shop – OWASP). J'ai mené des phases de reconnaissance, de tests automatisés et manuels. J'ai notamment exploité une faille d'authentification en manipulant un JWT token.",
      category: "cybersécurité",
      technologies: ["Burp Suite", "Hydra", "jwt.io", "Navigateur dev tools"],
      status: "completed",
      image: "/p_Pentest/Failles_majeurs.png",
      detailedDescription: "Pentest méthodique incluant la phase de reconnaissance, l'exploitation de vulnérabilités web classiques, et l'escalade de privilèges. J'ai effectué un brute force sur le compte admin après avoir récupéré son e-mail dans un commentaire public, démontrant l'importance de la collecte d'informations (OSINT).",
      mediaGallery: [
        { type: "image", url: "/p_Pentest/Failles_majeurs.png", caption: "Les failles Majeurs trouvees" },
        { type: "image", url: "/p_Pentest/jwtBurp1.png", caption: "Scan automatisé avec Burp Suite" },
        { type: "image", url: "/p_Pentest/jwtio.png", caption: "Modification du token jwt" },
        { type: "image", url: "/p_Pentest/jwtAdmin.png", caption: "Connexion en tant qu'Administrateur" }
      ]
    },
    {
      id: 5,
      name: "SwingPDF",
      title: "Convertisseur de fichiers HTML en PDF",
      description: "A FAIRE",
      category: "dev",
      technologies: ["Python Flask", "Bootstrap", "WeasyPrint", "PlayWright"],
      status: "completed",
      image: "/p_SwingPDF/SwingPDF.png",
      detailedDescription: "",
      mediaGallery: [
        { type: "image", url: "/p_SwingPDF/pdfapp-home.png", caption: "A FAIRE" },
        { type: "image", url: "/p_SwingPDF/pdfapp-form.png", caption: "A FAIRE" },
        { type: "image", url: "/p_SwingPDF/pdfapp-wiki.png", caption: "A FAIRE" },
        { type: "image", url: "/p_SwingPDF/pdfapp-history.png", caption: "A FAIRE" },
      ]
    }
  ];

  const categories = ['all', 'web', 'cybersécurité', 'dev'];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const toggleProjectDetails = (projectId) => {
    setExpandedProject(expandedProject === projectId ? null : projectId);
  };

  const closeProjectDetails = () => {
    setExpandedProject(null);
  };

  const openLightbox = (imageUrl, caption) => {
    setLightboxImage({ url: imageUrl, caption: caption });
  };

  const closeLightbox = () => {
    setLightboxImage(null);
  };

  const handleLightboxClick = (e) => {
    if (e.target === e.currentTarget) {
      closeLightbox();
    }
  };

  return (
    <div className="projects-page">
      <header className="page-header">
        <h1>Mes Projets</h1>
        <p>Réalisations académiques et techniques durant mon Bachelor 3 à Ynov</p>
      </header>

      <div className="filter-bar">
        {categories.map((category) => (
          <button
            key={category}
            className={`filter-button ${activeFilter === category ? 'active' : ''}`}
            onClick={() => setActiveFilter(category)}
          >
            {category === 'all' ? 'Tous' : category}
          </button>
        ))}
      </div>

      <div className="projects-grid">
        {filteredProjects.map((project) => (
          <div key={project.id} className="project-card">
            <div className="project-image-container">
              <img 
                src={project.image} 
                alt={project.title}
                className="project-image"
              />
              <div className="project-overlay">
                <button 
                  className="details-button"
                  onClick={() => toggleProjectDetails(project.id)}
                >
                  Voir les détails
                </button>
              </div>
            </div>
            <div className="project-info">
              <h3 className="project-title">{project.title}</h3>
              <span className="project-name">{project.name}</span>
            </div>
          </div>
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <div className="no-projects">
          <p>Aucun projet trouvé pour cette catégorie.</p>
        </div>
      )}

      {/* Overlay Modal pour les détails du projet */}
      {expandedProject && (
        <div className="project-modal-overlay" onClick={closeProjectDetails}>
          <div className="project-modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeProjectDetails}>
              ✕
            </button>
            
            {(() => {
              const project = projects.find(p => p.id === expandedProject);
              return (
                <div className="modal-content">
                  <div className="modal-header">
                    <div className="modal-image">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        onClick={() => openLightbox(project.image, project.title)}
                        className="clickable-image"
                      />
                    </div>
                    <div className="modal-title-section">
                      <h2>{project.title}</h2>
                      <span className="modal-project-name">{project.name}</span>
                      <div className="modal-technologies">
                        {project.technologies.map((tech, index) => (
                          <span key={index} className="tech-tag">{tech}</span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="modal-body">
                    <div className="modal-description">
                      <h3>Description</h3>
                      <p>{project.description}</p>
                    </div>

                    <div className="modal-detailed-description">
                      <h3>Détails techniques</h3>
                      <p>{project.detailedDescription}</p>
                    </div>

                    <div className="modal-media-gallery">
                      <h3>Galerie</h3>
                      <div className="modal-media-grid">
                        {project.mediaGallery.map((media, index) => (
                          <div key={index} className="modal-media-item">
                            <img 
                              src={media.url} 
                              alt={media.caption}
                              onClick={() => openLightbox(media.url, media.caption)}
                              className="clickable-image"
                            />
                            <p className="modal-media-caption">{media.caption}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })()}
          </div>
        </div>
      )}

      {/* Lightbox pour afficher les images en grand */}
      {lightboxImage && (
        <div 
          className="lightbox-overlay" 
          onClick={handleLightboxClick}
        >
          <div className="lightbox-container">
            <button 
              className="lightbox-close" 
              onClick={closeLightbox}
            >
              ✕
            </button>
            <img 
              src={lightboxImage.url} 
              alt={lightboxImage.caption}
              className="lightbox-image"
            />
            {lightboxImage.caption && (
              <div className="lightbox-caption">
                {lightboxImage.caption}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
