import React from 'react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      company: "TechCorp Solutions",
      position: "Stagiaire Développeur",
      startDate: "2024-06-01",
      endDate: "2024-08-31",
      location: "Paris, France",
      type: "stage",
      logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=120&h=120&fit=crop",
      missions: [
        "Développement d'applications web en React",
        "Participation aux tests de sécurité",
        "Documentation technique"
      ],
      technologies: ["React", "Python", "PostgreSQL"],
      description: "Une expérience enrichissante qui m'a permis de découvrir le monde professionnel du développement. J'ai particulièrement apprécié le travail en équipe et l'apprentissage des bonnes pratiques de sécurité.",
      skills: ["Travail en équipe", "Gestion de projet", "Communication client"],
      achievements: [
        "Amélioration des performances de 30%",
        "Implémentation de nouvelles fonctionnalités"
      ]
    }
  ];

  return (
    <div className="experience-page">
      <header className="page-header">
        <h1>Expérience Professionnelle</h1>
        <p>Mon parcours professionnel et mes apprentissages</p>
      </header>

      <div className="experience-content">
        {experiences.map((exp) => (
          <div key={exp.id} className="experience-card">
            <div className="experience-header">
              <img 
                src={exp.logo} 
                alt={`Logo ${exp.company}`}
                className="company-logo"
              />
              <div className="experience-info">
                <h3>{exp.position}</h3>
                <h4>{exp.company}</h4>
                <p className="period">
                  {new Date(exp.startDate).toLocaleDateString('fr-FR', { month: 'long', year: 'numeric' })} - 
                  {new Date(exp.endDate).toLocaleDateString('fr-FR', { month: 'long', year: 'numeric' })}
                </p>
              </div>
            </div>
            
            <p>{exp.description}</p>
            
            <div className="missions-list">
              <h5>Missions principales :</h5>
              <ul>
                {exp.missions.map((mission, index) => (
                  <li key={index}>{mission}</li>
                ))}
              </ul>
            </div>

            <div className="technologies">
              <h5>Technologies utilisées :</h5>
              {exp.technologies.map((tech, index) => (
                <span key={index} className="tech-tag">{tech}</span>
              ))}
            </div>
          </div>
        ))}

        <div className="experience-card">
          <h3>Formation en cours</h3>
          <h4>Ynov Campus - Bachelor Cybersécurité</h4>
          <p className="period">2022 - 2025</p>
          <p>Formation spécialisée en cybersécurité avec focus sur le développement sécurisé et l'analyse de vulnérabilités.</p>
        </div>

        <div className="add-experience-note">
          <p>📝 Les nouvelles expériences professionnelles seront ajoutées ici au fur et à mesure.</p>
          <p>Consultez le guide d'utilisation pour apprendre à ajouter vos expériences.</p>
        </div>
      </div>
    </div>
  );
};

export default Experience;
