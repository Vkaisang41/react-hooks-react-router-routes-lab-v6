// src/pages/Home.jsx
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar"; // ✅ Import NavBar

function Home() {
  const movies = [
    { id: 1, title: "Doctor Strange" },
    { id: 2, title: "Trolls" },
    { id: 3, title: "Jack Reacher: Never Go Back" },
  ];

  return (
    <>
      <NavBar /> {/* ✅ Add NavBar */}
      <h1>Home Page</h1>
      {movies.map((movie) => (
        <div key={movie.id}>
          <h2>{movie.title}</h2>
          <Link to={`/movie/${movie.id}`}>View Info</Link>
        </div>
      ))}
    </>
  );
}

export default Home;
