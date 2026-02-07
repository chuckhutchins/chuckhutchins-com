import { bookList } from '@/assets/data/book-list.js';
import { coffeeList } from '@/assets/data/coffee-list.js';
import { movieList } from '@/assets/data/movie-list.js';
import { tvShowList } from '@/assets/data/tv-show-list.js';
import { videoGameList } from '@/assets/data/video-game-list.js';

export default {
  getBookList() {
    return bookList;
  },
  getCoffeeList() {
    return coffeeList;
  },
  getMovieList() {
    return movieList;
  },
  getTVShowList() {
    return tvShowList;
  },
  getVideoGameList() {
    return videoGameList;
  },
};
