import React from 'react'

const Player = ({songs}) => {
  return (
    songs.map(songs => {
      return 	<iframe key={songs.id} src={`https://open.spotify.com/embed/track/${songs.id}`} title={songs.id} width="300" height="380" frameBorder={0}></iframe>
    })
  )
}

export default Player
