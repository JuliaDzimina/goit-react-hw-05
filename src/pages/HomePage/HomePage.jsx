import { useEffect, useState } from "react";
import { getTrendingMovies } from "../../services/api";
import MovieList from "../../components/MovieList/MovieList";
import Loader from "../../components/Loader/Loader";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";

const HomePage = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      try {
        setLoading(true);
        const data = await getTrendingMovies();
        setMovies(data);
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchTrendingMovies();
  }, []);

  return (
    <div>
      <h2>Trending today </h2>
      {movies.length > 0 && <MovieList movies={movies} />}
      {loading && <Loader />}
      {error && <ErrorMessage />}
    </div>
  );
};

export default HomePage;
