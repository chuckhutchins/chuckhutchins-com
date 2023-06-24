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
      console.log(ApiService.getBookList());
      this.bookList = ApiService.getBookList();
    },
  },
});

function filterByRating(list, rating) {
  if (rating === 'all') {
    return sortByName(list);
  } else {
    return sortByName(list.filter(item => item.rating === Number(rating)));
  }
}

function sortByName(list) {
  return []
    .concat(list)
    .sort((a, b) => {
      return a.name.localeCompare(b.name);
    });
}