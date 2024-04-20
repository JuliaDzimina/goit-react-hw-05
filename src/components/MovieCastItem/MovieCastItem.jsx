import css from "./MovieCastItem.module.css";
const MovieCastItem = ({ actor }) => {
  return (
    <div className={css.castItem}>
      <img
        className={css.imgActor}
        src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
        alt={actor.name}
      />

      <div></div>
      <p className={css.infoActor}>{actor.name}</p>
      <p className={css.infoActor}>
        <b>Character: </b>
        {actor.character}
      </p>
    </div>
  );
};

export default MovieCastItem;
