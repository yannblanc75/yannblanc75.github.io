import React from 'react';
import './Contact.css';

const Contact = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/yannblanc75',
      icon: '🐙'
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/yannblanc',
      icon: '💼'
    },
    {
      name: 'Email',
      url: 'mailto:yann.blanc.1@outlook.fr',
      icon: '📧'
    }
  ];

  return (
    <div className="contact-page">
      <header className="page-header">
        <h1>Contact</h1>
        <p>N'hésitez pas à me contacter pour toute opportunité ou collaboration</p>
      </header>

      <div className="contact-content">
        <div className="contact-intro">
          <p>
            Je suis toujours ouvert aux nouvelles opportunités et aux projets intéressants. 
            Que ce soit pour un stage, un projet collaboratif ou simplement pour échanger 
            sur la cybersécurité et le développement, n'hésitez pas à me contacter !
          </p>
        </div>

        <div className="social-links">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              className="social-link"
              target={link.url.startsWith('http') ? '_blank' : '_self'}
              rel="noopener noreferrer"
            >
              <span className="social-icon">{link.icon}</span>
              <span className="social-name">{link.name}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;
