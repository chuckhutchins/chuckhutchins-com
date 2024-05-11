import { bookList } from '@/assets/data/book-list';
import { coffeeList } from '@/assets/data/coffee-list';
import { movieList } from '@/assets/data/movie-list';
import { tvShowList } from '@/assets/data/tv-show-list';
import { videoGameList } from '@/assets/data/video-game-list';

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
