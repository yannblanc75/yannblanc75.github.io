import React, { useState } from 'react';
import './CV.css';

const CV = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [pdfError, setPdfError] = useState(false);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/images/cv/cv-yann-blanc.pdf';
    link.download = 'CV_Yann_Blanc_Cybersécurité.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handlePdfLoad = () => {
    setIsLoading(false);
    setPdfError(false);
  };

  const handlePdfError = () => {
    setIsLoading(false);
    setPdfError(true);
  };

  return (
    <div className="cv-page">
      <header className="page-header">
        <h1>Mon CV</h1>
        <p>Curriculum Vitae - Étudiant en Cybersécurité</p>
      </header>

      <div className="cv-content">
        <div className="cv-download-section">
          <button className="cv-download-button" onClick={handleDownload}>
            📥 Télécharger le CV
          </button>
        </div>

        <div className="cv-viewer-container">          
          <embed className="cv" src="/cv/cv-yann-blanc.pdf#toolbar=1&navpanes=0&scrollbar=1" type="application/pdf"></embed>          
        </div>

        <div className="cv-info">
          <div className="cv-summary">
            <h3>Résumé</h3>
            <p>
              Étudiant en Bachelor 3 Cybersécurité à Ynov Campus, passionné par la sécurité informatique 
              et le développement. Expérience pratique en analyse de vulnérabilités, pentesting et 
              développement d'applications sécurisées.
            </p>
          </div>
          
          <div className="cv-highlights">
            <div className="highlight">
              <h4>🎓 Formation</h4>
              <p>Bachelor 3 Cybersécurité<br/>Ynov Campus</p>
            </div>
            <div className="highlight">
              <h4>💻 Compétences Techniques</h4>
              <p>React, Python, Flask, Burp Suite<br/>Administration BDD, Pentest</p>
            </div>
            <div className="highlight">
              <h4>🔒 Spécialisation</h4>
              <p>Cybersécurité, Analyse de risques<br/>Protection des données de santé</p>
            </div>
            <div className="highlight">
              <h4>🚀 Projets Réalisés</h4>
              <p>AdminBDD, Pentest OWASP<br/>Amélioration SI CHU</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CV;
