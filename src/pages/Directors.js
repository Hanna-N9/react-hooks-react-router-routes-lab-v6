import { useEffect, useState } from "react";
import DirectorCard from "../components/DirectorCard";
import NavBar from "../components/NavBar";

function Directors() {
  const [directors, setDirectors] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/directors")
      .then(res => res.json())
      .then(setDirectors);
  }, []);

  return (
    <>
      <header>{<NavBar />}</header>
      <main>
        <h1>Directors Page</h1>
        {directors.map(director => (
          <DirectorCard
            key={director.id}
            name={director.name}
            movies={director.movies}
          />
        ))}
      </main>
    </>
  );
}

export default Directors;
