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
        "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=200&fit=crop",
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=200&fit=crop"
      ]
    },
    {
      id: 2,
      category: "🏃‍♂️ Sport",
      title: "Escalade en salle",
      description: "Pratique régulière de l'escalade en salle et en extérieur. C'est un excellent moyen de se maintenir en forme et de relever des défis.",
      images: [
        "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=300&h=200&fit=crop",
        "https://images.unsplash.com/photo-1522163182402-834f871fd851?w=300&h=200&fit=crop"
      ]
    },
    {
      id: 3,
      category: "💻 Technologie",
      title: "Veille technologique",
      description: "Passionné par les nouvelles technologies, je consacre du temps à la veille technologique et aux projets open source.",
      images: [
        "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=300&h=200&fit=crop",
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=300&h=200&fit=crop"
      ]
    },
    {
      id: 4,
      category: "📚 Lecture",
      title: "Science-fiction et cybersécurité",
      description: "Grand amateur de science-fiction et de livres techniques sur la cybersécurité. La lecture m'aide à rester inspiré et informé.",
      images: [
        "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&h=200&fit=crop",
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=200&fit=crop"
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
