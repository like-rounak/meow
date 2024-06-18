import React from 'react';
import './CatCard.css';

const CatCard = ({ catData }) => {
    return (
      <div>
        {catData.map((cat) => (
          <div className="card" key={cat.id}>
            <h2>{cat.breeds[0].name}</h2>
            <img src={cat.url} alt="Cat" />
            <p>{cat.breeds[0].description}</p>
          </div>
        ))}
      </div>
    );
  };
  

export default CatCard;
