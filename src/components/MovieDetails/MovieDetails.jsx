import css from "./MovieDetails.module.css";

const MovieDetails = ({ movie }) => {
  return (
    <div className={css.conteiner}>
      <div>
        <img
          src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
          alt={movie.title}
        />
      </div>
      <div>
        <h1>
          {movie.title} ({movie.release_date.split("-")[0]})
        </h1>
        <p> User Store: {`${Math.round(movie.vote_average * 10)}`}%</p>
        <h2>Overview</h2>
        <p>{movie.overview}</p>
        <h2>Genres</h2>
        <p>{movie.genres.map((genres) => genres.name).join(", ")}</p>
      </div>
    </div>
  );
};

export default MovieDetails;
