import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import { getMovieReviews } from "../../services/api";
import MovieReviewsItem from "../MovieReviewsItem/MovieReviewsItem";

const MovieReviews = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    if (!movieId) return;

    const fetchMovieCast = async () => {
      try {
        setLoading(true);
        const reviews = await getMovieReviews(movieId);
        setReviews(reviews);
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
      <ul>
        {reviews.length > 0 ? (
          reviews.map((review) => (
            <li key={review.id}>
              <MovieReviewsItem review={review} />
            </li>
          ))
        ) : (
          <p>We don&apos;t have any reviews for this movie</p>
        )}
      </ul>
    </div>
  );
};

export default MovieReviews;
