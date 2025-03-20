import { useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router"; // Correct import
import Singlecard from "./Singlecard";
import MoviesList from "./components/MoviesList";

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/movies")
      .then((response) => {
        setMovies(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error.message);
      });
  }, []);

  return (
    <>
      <h1>Movies List</h1>
      <BrowserRouter>
        <Routes>
    
         <Route path='/' element={<MoviesList movie={movies}/>}/>
          <Route path="/:id" element={<Singlecard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;