import { defineStore } from 'pinia';
import ApiService from '@/services/Api.js';
import type { Coffee } from '@/types';

type StateShape = {
  coffeeList: Coffee[];
};

export const useCoffeeStore = defineStore('coffee', {
  state: (): StateShape => ({
    coffeeList: [],
  }),
  actions: {
    getCoffeeList() {
      this.coffeeList = ApiService.getCoffeeList();
    },
  },
});
