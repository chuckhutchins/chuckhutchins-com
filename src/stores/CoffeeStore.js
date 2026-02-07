import { defineStore } from 'pinia';
import ApiService from '@/services/Api';

export const useCoffeeStore = defineStore('coffee', {
  state: () => ({
    coffeeList: [],
  }),
  actions: {
    getCoffeeList() {
      this.coffeeList = ApiService.getCoffeeList();
    },
  },
});
