import React from 'react';

const Genre = ({ setGenre }) => {
  const handleChange = (e) => {
    setGenre({
      style: e.target.value,
    });
  };

  return (
    <div className='genre'>
        <select onChange={handleChange} name="cars">
            <option value="pop">Pop</option>
            <option value="rock">Rock</option>
            <option value="dance">Dance</option>
            <option value="jazz">Jazz</option>
            <option value="country">Country</option>
        </select>
    </div>
  )
}

export default Genre
