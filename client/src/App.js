import React, { useState } from 'react';
import axios from 'axios';
import './App.css';
import Genre from './components/Genre';
import Mood from './components/Mood';
import Search from './components/Search';
import Recommendations from './components/Recommendations';


function App() {
  const [mood, setMood] = useState({
    target_energy: '0.5',
    target_valence: '0.5',
    target_acousticness: '0.5',
    target_danceability: '0.5'
  });

  const [genre, setGenre] = useState({
    style: 'pop',
  });

  const [songs, setSongs] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/api', {genre, mood})
      .then((response) => setSongs(response.data.tracks))
      .catch((err) => console.log(err));
  }

  return (
    <div className="App">
      <h1>Moodify</h1>
      <h4>Find music based on your mood</h4>
      <Mood mood={mood} setMood={setMood}/>
      <Genre genre={genre} setGenre={setGenre}/>
      <Search handleSubmit={handleSubmit}/>
      <Recommendations songs={songs}/>
    </div>
  );
}

export default App;
