import { useEffect, useState, useRef, Suspense } from "react";
import {
  Link,
  NavLink,
  useParams,
  useLocation,
  Outlet,
} from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import { getMovieDetails } from "../../services/api";
import MovieDetails from "../../components/MovieDetails/MovieDetails";
import clsx from "clsx";
import css from "./MovieDetailsPage.module.css";

const MovieDetailsPage = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [movieDetails, setMovieDetails] = useState(null);
  const { movieId } = useParams();

  const location = useLocation();
  const backLink = useRef(location.state?.from ?? "/movies");

  function linkClasses({ isActive }) {
    return clsx(css.infoLink, {
      [css.active]: isActive,
    });
  }

  useEffect(() => {
    if (!movieId) return;

    const fetchMovieDetails = async () => {
      try {
        setLoading(true);
        const data = await getMovieDetails(movieId);
        setMovieDetails(data);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, [movieId]);

  return (
    <div>
      {loading && <Loader />}
      {error && <ErrorMessage />}

      <Link to={backLink.current} className={css.btnGoBack}>
        {" "}
        Go back
      </Link>
      {movieDetails && <MovieDetails movie={movieDetails} />}

      <p>Additional information</p>
      <div className={css.linkConteiner}>
        <NavLink className={linkClasses} to="cast">
          Cast
        </NavLink>

        <NavLink className={linkClasses} to="reviews">
          Reviews
        </NavLink>
      </div>

      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MovieDetailsPage;
