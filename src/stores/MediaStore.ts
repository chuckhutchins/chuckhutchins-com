import { defineStore } from 'pinia';
import ApiService from '@/services/Api';
import type { Media } from '@/types';

type StateShape = {
  bookList: Media[];
  movieList: Media[];
  tvShowList: Media[];
  videoGameList: Media[];
};

export const useMediaStore = defineStore('media', {
  state: (): StateShape => ({
    bookList: [],
    movieList: [],
    tvShowList: [],
    videoGameList: [],
  }),
  actions: {
    getBookList() {
      this.bookList = ApiService.getBookList();
    },
    getMovieList() {
      this.movieList = ApiService.getMovieList();
    },
    getTVShowList() {
      this.tvShowList = ApiService.getTVShowList();
    },
    getVideoGameList() {
      this.videoGameList = ApiService.getVideoGameList();
    },
  },
});
