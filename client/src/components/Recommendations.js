import React from 'react'
import Player from './Player'

const Recommendations = ({songs}) => {
  return (
    <div className='recommendations'>
        <Player songs={songs} />
    </div>
  )
}

export default Recommendations
