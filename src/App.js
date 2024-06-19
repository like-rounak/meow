import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes, useParams } from 'react-router-dom';
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
    } finally {
      setLoading(false);
    }
  };

  const fetchCatDetails = async (id) => {
    setLoading(true);
    try {
      const response = await axios.get(`https://api.thecatapi.com/v1/images/${id}`);
      setCatData([response.data]);
    } catch (error) {
      console.error('Error fetching cat details:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Router>
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
          <Routes>
            <Route path="/" element={view === 'card' ? <CatCard catData={catData} /> : <CatTable catData={catData} />} />
            <Route path="/share/:id" element={<SharedCatView fetchCatDetails={fetchCatDetails} />} />
          </Routes>
        )}
      </div>
    </Router>
  );
};

const SharedCatView = ({ fetchCatDetails }) => {
  const { id } = useParams();
  const [catData, setCatData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        await fetchCatDetails(id);
      } catch (error) {
        console.error('Error fetching cat details:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id, fetchCatDetails]);

  return (
    <div>
      {loading ? (
        <p className="loading">Loading...</p>
      ) : (
        <>
          <CatCard catData={catData} />
          <CatTable catData={catData} />
        </>
      )}
    </div>
  );
};

export default App;
