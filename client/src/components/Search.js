import React from 'react';

const Search = ({ handleSubmit }) => {

  return (
    <div className='go'>
      <button onClick={handleSubmit}>Get Recommendations</button>
    </div>
  )
}

export default Search
