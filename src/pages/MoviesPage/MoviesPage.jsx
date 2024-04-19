import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getMoviesByName } from "../../services/api";
import Loader from "../../components/Loader/Loader";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import SearchForm from "../../components/SearchForm/SearchForm";
import MovieList from "../../components/MovieList/MovieList";

const MoviesPage = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query") ?? "";

  const queryParams = (query) => {
    const params = query !== "" ? { query } : {};
    setSearchParams(params);
  };
  useEffect(() => {
    if (!query) return;
    const searchMovies = async () => {
      try {
        setLoading(true);
        const data = await getMoviesByName(query);
        setMovies(data);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    searchMovies();
  }, [query]);

  return (
    <div>
      <SearchForm onSearch={queryParams} />
      {movies.length > 0 && <MovieList movies={movies} />}
      {loading && <Loader />}
      {error && <ErrorMessage />}
    </div>
  );
};

export default MoviesPage;
