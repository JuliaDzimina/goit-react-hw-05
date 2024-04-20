import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import { getMovieCast } from "../../services/api";
import MovieCastItem from "../MovieCastItem/MovieCastItem";
import css from "./MovieCast.module.css";

const MovieCast = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const { movieId } = useParams();
  const [actors, setActors] = useState([]);

  useEffect(() => {
    if (!movieId) return;

    const fetchMovieCast = async () => {
      try {
        setLoading(true);
        const actor = await getMovieCast(movieId);
        setActors(actor);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchMovieCast();
  }, [movieId]);

  return (
    <div>
      {loading && <Loader />}
      {error && <ErrorMessage />}
      {actors && (
        <ul className={css.castList}>
          {actors.map((actor) => (
            <li key={actor.id}>
              <MovieCastItem actor={actor} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MovieCast;
