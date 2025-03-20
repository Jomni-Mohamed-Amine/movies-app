import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router'; // Correct import

const Singlecard = () => {
  const { id } = useParams(); // Destructure id from useParams
  const [movie, setMovie] = useState(null); // Initialize as null

  useEffect(() => {
    axios
      .get(`http://localhost:3000/movies/${id}`)
      .then((res) => {
        setMovie(res.data); // Set movie data
        console.log(res.data); // Log the fetched data
      })
      .catch((error) => {
        console.error(error.message); // Log any errors
      });
  }, [id]); // Re-run effect when id changes

  if (!movie) {
    return <div>Loading...</div>; // Show loading state
  }

  return (
    <div>
      <h1>{movie.title}</h1>
      <p>Year: {movie.release_year}</p>
      <h3>Actors:</h3>
      <ul>
        {movie.actors?.map((actor, index) => (
          <li key={index}>{actor}</li> // Use optional chaining
        ))}
      </ul>
      <h3>Genres:</h3>
      <ul>
        {movie.genre?.map((genre, index) => (
          <li key={index}>{genre}</li> // Use optional chaining
        ))}
      </ul>
    </div>
  );
};

export default Singlecard;