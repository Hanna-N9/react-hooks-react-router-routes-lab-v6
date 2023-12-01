import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";

function Movie() {
  const [movies, setMovies] = useState({});
  const params = useParams();
  const movieId = params.id;

  useEffect(() => {
    fetch(`http://localhost:4000/movies/${movieId}`)
      .then(res => res.json())
      .then(setMovies);
  }, [movieId]);

  if (!movies.title) {
    return <h1>Loading...</h1>;
  }

  const movieGenres = movies.genres.map(genre => (
    <span key={genre} genre={genre}>
      {genre}
    </span>
  ));

  return (
    <>
      <header>{<NavBar />}</header>
      <main>
        <h1>{movies.title}</h1>
        <p>{movies.time}</p>
        {movieGenres}
      </main>
    </>
  );
}

export default Movie;
