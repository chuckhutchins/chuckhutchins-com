import { defineStore } from 'pinia';
import ApiService from '@/services/Api.js';

export const useMediaStore = defineStore('media', {
  state: () => ({
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
