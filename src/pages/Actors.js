import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import ActorCard from "../components/ActorCard";

function Actors() {
  const [actors, setActors] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/actors")
      .then(res => res.json())
      .then(setActors);
  }, []);

  return (
    <>
      <header>{<NavBar />}</header>
      <main>
        <h1>Actors Page</h1>
        {actors.map(actor => (
          <ActorCard key={actor.id} name={actor.name} movies={actor.movies} />
        ))}
      </main>
    </>
  );
}

export default Actors;
