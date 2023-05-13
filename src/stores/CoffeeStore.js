import { defineStore } from 'pinia';
import ApiService from '@/services/Api.js';

export const useCoffeeStore = defineStore('coffee', {
  state: () => ({
    coffeeList: [],
  }),
  actions: {
    getCoffeeList() {
      this.coffeeList = ApiService.getCoffeeList();
    },
    getFilteredCoffeeList(rating) {
      return filterByRating(this.coffeeList, rating);
    }
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