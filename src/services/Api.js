import bookList from '@/assets/data/book-list.json';
import coffeeList from '@/assets/data/coffee-list.json';
import movieList from '@/assets/data/movie-list.json';
import tvShowList from '@/assets/data/tv-show-list.json';
import videoGameList from '@/assets/data/video-game-list.json';

export default {
  getBookList() {
    return bookList.books;
  },
  getCoffeeList() {
    return coffeeList.coffee;
  },
  getMovieList() {
    return movieList.movies;
  },
  getTVShowList() {
    return tvShowList.tvShows;
  },
  getVideoGameList() {
    return videoGameList.videoGames;
  },
};