import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchMovieDetails() {
        setLoading(true);
        const res = await fetch(
            `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`
        );
        const data = await res.json();
        setMovie(data);
        setLoading(false);
    }
    fetchMovieDetails();
  },[id]);

  if (loading) return <p>Loading...</p>;
  if (!movie) return <p>Movie not found.</p>;

  return (
    <div className="movie-details">
      <Link to="/">← Back</Link>
      <h2>{movie.title}</h2>
      <img
        src={`https://image.tmdb.org/t/p/w400${movie.poster_path}`}
        alt={movie.title}
      />
      <p>{movie.overview}</p>
      <p>⭐ {movie.vote_average.toFixed(1)}</p>
      <p>Release Date: {movie.release_date}</p>
    </div>
  );
}

export default MovieDetails;