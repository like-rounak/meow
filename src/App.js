import React, { useState } from 'react';
import axios from 'axios';
import CatCard from './components/CatCard';
import CatTable from './components/CatTable';
import './App.css';

const App = () => {
  const [catData, setCatData] = useState([]);
  const [view, setView] = useState('table');
  const [loading, setLoading] = useState(false);

  const fetchRandomCat = async () => {
    setLoading(true);
    try {
      const response = await axios.get('https://api.thecatapi.com/v1/images/search?has_breeds=1');
      const catId = response.data[0].id;
      fetchCatDetails(catId);
    } catch (error) {
      console.error('Error fetching random cat:', error);
      setLoading(false);
    }
  };

  const fetchCatDetails = async (id) => {
    try {
      const response = await axios.get(`https://api.thecatapi.com/v1/images/${id}`);
      setCatData([response.data]);
      console.log('Cat Data:', response.data); // Log the cat data to the console for debugging
    } catch (error) {
      console.error('Error fetching cat details:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <h1>Cat Info Fetcher</h1>
      <div className="buttons">
        <button className="fetch-button" onClick={fetchRandomCat}>Fetch Random Cat</button>
        <button className="view-button" onClick={() => setView('card')}>Show in Card</button>
        <button className="view-button" onClick={() => setView('table')}>Show in Table</button>
      </div>
      {loading ? (
        <p className="loading">Loading...</p>
      ) : (
        <>
          {view === 'card' && <CatCard catData={catData} />}
          {view === 'table' && <CatTable catData={catData} />}
        </>
      )}
    </div>
  );
};

export default App;
