import React from 'react';

const Mood = ({ mood, setMood }) => {
  const handleChange = (e) => {
    setMood({
      ...mood,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className='mood'>
      <label htmlFor="target_energy">Energetic</label>
      <input type="range" title={'Energetic'} name="target_energy" defaultValue={0.5} onChange={handleChange} step={0.1} min={0.1} max={1}></input>
      <label htmlFor="target_valence">Happy</label>
      <input type="range" title={'Happy'} name="target_valence" defaultValue={0.5} onChange={handleChange} step={0.1} min={0.1} max={1}></input>
      <label htmlFor="target_acousticness">Peaceful</label>
      <input type="range" title={'Peaceful'} name="target_acousticness" defaultValue={0.5} onChange={handleChange} step={0.1} min={0.1} max={1}></input>
      <label htmlFor="target_danceability">Danceability</label>
      <input type="range" title={'Danceability'} name="target_danceability" defaultValue={0.5} onChange={handleChange} step={0.1} min={0.1} max={1}></input>
    </div>
  )
}

export default Mood
