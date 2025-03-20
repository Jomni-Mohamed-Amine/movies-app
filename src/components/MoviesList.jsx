import React from 'react'
import Moviecard from './Moviecard'

const MoviesList = ({ movie }) => {
  if (!movie) return <div>Loading...</div>; // Add null check
  return (
    <div className="d-flex gap-4">
      {movie.map((mo, i) => (
        <Moviecard movies={mo} key={mo.id} />
      ))}
    </div>
  );
}

export default MoviesList
