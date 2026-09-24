import { useFavorites } from '../context/FavoritesContext';
import MovieList from '../components/MovieList';
import { Link } from 'react-router-dom';

function Favorites() {
  const { favorites } = useFavorites();

  if (favorites.length === 0) {
    return <p>No favorites yet. Go add some movies you like!</p>;
  }

  return (
    <div>
    <Link to="/">← Back</Link>
      <h2>Your Favorites</h2>
      <MovieList movies={favorites} />
    </div>
  );
}

export default Favorites;