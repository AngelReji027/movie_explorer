import { Link } from 'react-router-dom';
import { useFavorites } from '../context/FavoritesContext';

function MovieCard({ movie }) {
  const { addFavorite, removeFavorite, isFavorite } = useFavorites();
  const favorite = isFavorite(movie.id);

  const imageUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w300${movie.poster_path}`
    : 'https://via.placeholder.com/300x450?text=No+Image';

  function handleFavoriteClick(e) {
    e.preventDefault(); // stop Link navigation when clicking the button
    if (favorite) {
      removeFavorite(movie.id);
    } else {
      addFavorite(movie);
    }
  }

  return (
    <div className="movie-card-wrapper">
      <Link to={`/movie/${movie.id}`} className="movie-card">
        <img src={imageUrl} alt={movie.title} />
        <h3>{movie.title}</h3>
        <p>⭐ {movie.vote_average.toFixed(1)}</p>
      </Link>
      <button onClick={handleFavoriteClick}>
        {favorite ? '❤️ Remove' : '🤍 Add'}
      </button>
    </div>
  );
}

export default MovieCard;