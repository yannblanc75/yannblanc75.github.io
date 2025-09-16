import React from 'react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      company: "Montpellier Ynov Campus",
      position: "Mentor informatique",
      startDate: "09-01-2024",
      endDate: "09-30-2025",
      location: "Montpellier, France",
      type: "Alternance",
      logo: "/images/experience/montpellier.png",
      missions: [
        "Coaching des étudiants informatique en bachelor 1 et 2",
        "Faire rayonner le campus via des ateliers et événements",
      ],
      technologies: ["React", "Python", "PostgreSQL", "Git", "Docker", "C#", "Unity", "Golang", "Windows Server", "Linux", "Virtualisation"],
      description: "Une expérience enrichissante qui m'a permis de découvrir le monde professionnel du mentorat. J'ai particulièrement apprécié le travail en équipe et l'apprentissage des bonnes pratiques de sécurité.",
      skills: ["Travail en équipe", "Gestion de projet", "Communication", "Sécurité informatique", "Mentorat"]
    },
    {
      id: 1,
      company: "IRSEA",
      position: "Developeur web",
      startDate: "06-01-2024",
      endDate: "08-30-2025",
      location: "Montpellier, France",
      type: "Stage",
      logo: "/images/experience/logo-irsea-group.png",
      missions: [
        "Devellopement d'une landing page pour l'IRSEA",
        "Aide à la maintenance du site web",
      ],
      technologies: ["Html", "CSS", "JavaScript", "React", "Figma"],
      description: "Stage de 3 mois en tant que développeur web au sein de l'IRSEA. J'ai travaillé sur la création d'une landing page pour promouvoir les services de l'IRSEA, ainsi que sur la maintenance du site web existant.",
      skills: ["Travail en équipe", "Communication", "SEO", "Design web", "Développement front-end", "UI/UX" ]
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
      </div>
    </div>
  );
};

export default Experience;
