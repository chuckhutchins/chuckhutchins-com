import { ref } from 'vue';
import { defineStore } from 'pinia';
import ApiService from '@/services/Api';

export const useCoffeeStore = defineStore('coffee', () => {
  const coffeeList = ref([]);

  const getCoffeeList = () => {
    coffeeList.value = ApiService.getCoffeeList();
  };

  return { coffeeList, getCoffeeList };
});
