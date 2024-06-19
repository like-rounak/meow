import React from 'react';
import './CatTable.css';

const CatTable = ({ catData }) => {
  const renderScore = (score) => {
    return (
      <div className="score-bar">
        <div className="score-fill" style={{ width: `${score * 20}%` }}></div>
        <span>{score}</span>
      </div>
    );
  };

  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Description</th>
            <th>Temperament</th>
            <th>Origin</th>
            <th>Life Span</th>
            <th>Weight</th>
            <th>Links</th>
          </tr>
        </thead>
        <tbody>
          {catData.map((cat) => (
            <tr key={cat.id}>
              <td>
                <img src={cat.url} alt="Cat" style={{ width: '100px' }} />
              </td>
              <td>{cat.breeds[0].name}</td>
              <td>{cat.breeds[0].description}</td>
              <td>{cat.breeds[0].temperament}</td>
              <td>{cat.breeds[0].origin}</td>
              <td>{cat.breeds[0].life_span} years</td>
              <td>{cat.breeds[0].weight.imperial} lbs ({cat.breeds[0].weight.metric} kg)</td>
              <td>
                <a href={cat.breeds[0].wikipedia_url} target="_blank" rel="noopener noreferrer">Wikipedia</a>, 
                <a href={cat.breeds[0].vcahospitals_url} target="_blank" rel="noopener noreferrer">VCA Hospitals</a>, 
                <a href={cat.breeds[0].vetstreet_url} target="_blank" rel="noopener noreferrer">Vetstreet</a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <table>
        <thead>
          <tr>
            {/* <th>Name</th> */}
            <th>Adaptability</th>
            <th>Affection Level</th>
            <th>Child Friendly</th>
            <th>Dog Friendly</th>
            <th>Energy Level</th>
            <th>Experimental</th>
            <th>Grooming</th>
            <th>Hairless</th>
            <th>Health Issues</th>
            <th>Hypoallergenic</th>
            <th>Indoor</th>
            <th>Intelligence</th>
            <th>Natural</th>
            <th>Rare</th>
            <th>Rex</th>
            <th>Shedding Level</th>
            <th>Short Legs</th>
            <th>Social Needs</th>
            <th>Stranger Friendly</th>
            <th>Suppressed Tail</th>
            <th>Vocalisation</th>
          </tr>
        </thead>
        <tbody>
          {catData.map((cat) => (
            <tr key={cat.id}>
              {/* <td>{cat.breeds[0].name}</td> */}
              <td>{renderScore(cat.breeds[0].adaptability)}</td>
              <td>{renderScore(cat.breeds[0].affection_level)}</td>
              <td>{renderScore(cat.breeds[0].child_friendly)}</td>
              <td>{renderScore(cat.breeds[0].dog_friendly)}</td>
              <td>{renderScore(cat.breeds[0].energy_level)}</td>
              <td>{renderScore(cat.breeds[0].experimental)}</td>
              <td>{renderScore(cat.breeds[0].grooming)}</td>
              <td>{renderScore(cat.breeds[0].hairless)}</td>
              <td>{renderScore(cat.breeds[0].health_issues)}</td>
              <td>{renderScore(cat.breeds[0].hypoallergenic)}</td>
              <td>{renderScore(cat.breeds[0].indoor)}</td>
              <td>{renderScore(cat.breeds[0].intelligence)}</td>
              <td>{renderScore(cat.breeds[0].natural)}</td>
              <td>{renderScore(cat.breeds[0].rare)}</td>
              <td>{renderScore(cat.breeds[0].rex)}</td>
              <td>{renderScore(cat.breeds[0].shedding_level)}</td>
              <td>{renderScore(cat.breeds[0].short_legs)}</td>
              <td>{renderScore(cat.breeds[0].social_needs)}</td>
              <td>{renderScore(cat.breeds[0].stranger_friendly)}</td>
              <td>{renderScore(cat.breeds[0].suppressed_tail)}</td>
              <td>{renderScore(cat.breeds[0].vocalisation)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CatTable;
