import { defineStore } from 'pinia';
import ApiService from '@/services/Api.js';
import type { CoffeeItem } from '@/types';

type StateShape = {
  coffeeList: CoffeeItem[];
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
