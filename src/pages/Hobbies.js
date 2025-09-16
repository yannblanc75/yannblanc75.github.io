import React from 'react';
import './Hobbies.css';

const Hobbies = () => {
  const hobbies = [
    {
      id: 1,
      category: "🎵 Musique",
      title: "Groupe de rock amateur",
      description: "Je joue de la guitare dans un groupe de rock amateur depuis 3 ans. Nous nous produisons régulièrement en concert.",
      images: [
        '/images/hobbies/concert.png',
      ]
    },
    {
      id: 2,
      category: "🏃‍♂️ Sport",
      title: "Rugby à XV",
      description: "Joueur Semi-professionnel au PARC (aujourd'hui Provence Rugby Club), joueur de 3ème ligne centre (8) puis 2ème ligne (4).Joueur pendant 20ans.",
      images: [
        '/images/hobbies/rugby.png',
      ]
    }
  ];

  return (
    <div className="hobbies-page">
      <header className="page-header">
        <h1>Mes Loisirs</h1>
        <p>Mes passions et activités en dehors du développement</p>
      </header>

      <div className="hobbies-content">
        <div className="hobbies-grid">
          {hobbies.map((hobby) => (
            <div key={hobby.id} className="hobby-category">
              <h3>{hobby.category}</h3>
              <h4>{hobby.title}</h4>
              <p>{hobby.description}</p>
              
              <div className="hobby-images">
                {hobby.images.map((image, index) => (
                  <img 
                    key={index}
                    src={image} 
                    alt={`${hobby.title} ${index + 1}`}
                    className="hobby-image"
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="add-hobby-note">
          <p>📸 Plus de médias et détails seront ajoutés prochainement.</p>
          <p>Consultez le guide d'utilisation pour apprendre à ajouter vos loisirs.</p>
        </div>
      </div>
    </div>
  );
};

export default Hobbies;
