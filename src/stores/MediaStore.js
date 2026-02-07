import { ref } from 'vue';
import { defineStore } from 'pinia';
import ApiService from '@/services/Api';

export const useMediaStore = defineStore('media', () => {
  const bookList = ref([]);
  const getBookList = () => {
    bookList.value = ApiService.getBookList();
  };

  const movieList = ref([]);
  const getMovieList = () => {
    movieList.value = ApiService.getMovieList();
  };

  const tvShowList = ref([]);
  const getTVShowList = () => {
    tvShowList.value = ApiService.getTVShowList();
  };

  const videoGameList = ref([]);
  const getVideoGameList = () => {
    videoGameList.value = ApiService.getVideoGameList();
  };

  return {
    bookList,
    movieList,
    tvShowList,
    videoGameList,
    getBookList,
    getMovieList,
    getTVShowList,
    getVideoGameList,
  };
});
