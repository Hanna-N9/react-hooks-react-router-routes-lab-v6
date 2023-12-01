import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import NavBar from "../components/NavBar";

function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/movies")
      .then(res => res.json())
      .then(setMovies);
  }, []);

  return (
    <>
      <header>{<NavBar />}</header>
      <main>
        <h1>Home Page</h1>
        {movies.map(movie => (
          <MovieCard key={movie.id} movie={movie} title={movie.title} />
        ))}
      </main>
    </>
  );
}

export default Home;
