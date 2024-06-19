import React, { useState } from 'react';
import './card.css';
import { FaShareAlt } from 'react-icons/fa';
import { generateShareableLink } from './sharelink';

const CatCard = ({ catData }) => {
  const [showPopup, setShowPopup] = useState(false);
  const [shareLink, setShareLink] = useState('');

  const handleShareClick = (id) => {
    const link = generateShareableLink(id);
    setShareLink(link);
    setShowPopup(true);
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(shareLink);
    alert('Link copied to clipboard!');
  };

  const renderScore = (title, score) => {
    return (
      <div className="score-container" key={title}>
        <p className="score-title">{title}</p>
        <div className="score-bar">
          <div className="score-fill" style={{ width: `${(score / 5) * 100}%` }}></div>
        </div>
      </div>
    );
  };

  return (
    <div>
      {catData.map((cat) => (
        <div className="card" key={cat.id}>
          <div className="card-column image-column">
            <img src={cat.url} alt="Cat" />
          </div>
          <div className="card-column details-column">
            <h2>{cat.breeds[0].name}</h2>
            <p><strong>Description:</strong> {cat.breeds[0].description}</p>
            <p><strong>Temperament:</strong> {cat.breeds[0].temperament}</p>
            <p><strong>Origin:</strong> {cat.breeds[0].origin}</p>
            <p><strong>Life Span:</strong> {cat.breeds[0].life_span} years</p>
            <p><strong>Weight:</strong> {cat.breeds[0].weight.imperial} lbs ({cat.breeds[0].weight.metric} kg)</p>
            <p><strong>Wikipedia:</strong> <a href={cat.breeds[0].wikipedia_url} target="_blank" rel="noopener noreferrer">Link</a></p>
            <p><strong>More Info:</strong> <a href={cat.breeds[0].vcahospitals_url} target="_blank" rel="noopener noreferrer">VCA Hospitals</a>, <a href={cat.breeds[0].vetstreet_url} target="_blank" rel="noopener noreferrer">Vetstreet</a></p>
            <button className="share-button" onClick={() => handleShareClick(cat.id)}>
              <FaShareAlt /> Share
            </button>
          </div>
          <div className="card-column scores-column">
            <div className="scores-grid">
              {renderScore("Adaptability", cat.breeds[0].adaptability)}
              <div className="scores-grid-column">
                {renderScore("Affection Level", cat.breeds[0].affection_level)}
                {renderScore("Child Friendly", cat.breeds[0].child_friendly)}
                {renderScore("Dog Friendly", cat.breeds[0].dog_friendly)}
                {renderScore("Energy Level", cat.breeds[0].energy_level)}
                {renderScore("Experimental", cat.breeds[0].experimental)}
                {renderScore("Grooming", cat.breeds[0].grooming)}
                {renderScore("Hairless", cat.breeds[0].hairless)}
                {renderScore("Health Issues", cat.breeds[0].health_issues)}
                {renderScore("Hypoallergenic", cat.breeds[0].hypoallergenic)}
                {renderScore("Indoor", cat.breeds[0].indoor)}
              </div>
              <div className="scores-grid-column">
                {renderScore("Intelligence", cat.breeds[0].intelligence)}
                {renderScore("Natural", cat.breeds[0].natural)}
                {renderScore("Rare", cat.breeds[0].rare)}
                {renderScore("Rex", cat.breeds[0].rex)}
                {renderScore("Shedding Level", cat.breeds[0].shedding_level)}
                {renderScore("Short Legs", cat.breeds[0].short_legs)}
                {renderScore("Social Needs", cat.breeds[0].social_needs)}
                {renderScore("Stranger Friendly", cat.breeds[0].stranger_friendly)}
                {renderScore("Suppressed Tail", cat.breeds[0].suppressed_tail)}
                {renderScore("Vocalisation", cat.breeds[0].vocalisation)}
              </div>
            </div>
          </div>
        </div>
      ))}
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <h3>Share Link</h3>
            <p>{shareLink}</p>
            <button onClick={handleCopyLink}>Copy Link</button>
            <button onClick={() => setShowPopup(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CatCard;
