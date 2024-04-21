import { bookList } from '@/assets/data/book-list.ts';
import { coffeeList } from '@/assets/data/coffee-list.ts';
import { movieList } from '@/assets/data/movie-list.ts';
import { tvShowList } from '@/assets/data/tv-show-list.ts';
import { videoGameList } from '@/assets/data/video-game-list.ts';

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