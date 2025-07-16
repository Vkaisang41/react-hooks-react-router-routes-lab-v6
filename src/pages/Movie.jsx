// src/pages/Movie.jsx
import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

function Movie() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // TEMPORARY: Hardcoded data for testing
    setMovies([
      {
        id: 1,
        title: "Doctor Strange",
        time: 115,
        genres: ["Action", "Adventure", "Fantasy"],
      },
      {
        id: 2,
        title: "Trolls",
        time: 92,
        genres: ["Animation", "Comedy", "Family"],
      },
    ]);

    // ORIGINAL (Uncomment this when done testing)
    // fetch("http://localhost:4000/movies")
    //   .then((res) => res.json())
    //   .then(setMovies);
  }, []);

  return (
    <>
      <NavBar />
      <h1>Movie Page</h1>
      {movies.map((movie) => (
        <article key={movie.id}>
          <h1>{movie.title}</h1>
          <p>Time: {movie.time} minutes</p>
          <div>
            {movie.genres.map((genre, index) => (
              <span key={index}>{genre}</span>
            ))}
          </div>
        </article>
      ))}
    </>
  );
}

export default Movie;
