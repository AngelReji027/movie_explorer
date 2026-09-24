import { useFavorites } from '../context/FavoritesContext';
import MovieList from '../components/MovieList';

function Favorites() {
  const { favorites } = useFavorites();

  if (favorites.length === 0) {
    return <p>No favorites yet. Go add some movies you like!</p>;
  }

  return (
    <div>
      <h2>Your Favorites</h2>
      <MovieList movies={favorites} />
    </div>
  );
}

export default Favorites;