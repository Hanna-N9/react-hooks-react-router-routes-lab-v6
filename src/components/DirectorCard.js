export default function DirectorCard({ name, movies }) {
  return (
    <article>
      <h2>{name}</h2>
      <ul>
        {movies.map(movie => (
          <li key={movie}>{movie}</li>
        ))}
      </ul>
    </article>
  );
}
