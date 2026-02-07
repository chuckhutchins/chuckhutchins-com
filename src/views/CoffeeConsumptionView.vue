<template>
  <ConsumptionLayout>
    <TheOpener>
      <template #header>
        Coffee Consumption
      </template>
      <p>Hey, this is all the different coffee I've consumed.</p>
      <p>TLDR: I probably like a darker roast with a stereotypical coffee taste.</p>
    </TheOpener>
    <RatingFilter :rating="rating" @update="handleRatingUpdate" />
    <CoffeeList :coffeeList="filteredCoffeeList" />
  </ConsumptionLayout>
</template>

<script setup>
import { computed, ref } from 'vue';
import { storeToRefs } from 'pinia';
import { useCoffeeStore } from '@/stores/CoffeeStore';
import ConsumptionLayout from '@/layouts/ConsumptionLayout.vue';
import CoffeeList from '@/components/coffee/CoffeeList.vue';
import RatingFilter from '@/components/coffee/RatingFilter.vue';
import TheOpener from '@/components/common/TheOpener.vue';

const coffeeStore = useCoffeeStore();
const { coffeeList } = storeToRefs(coffeeStore);

const rating = ref('all');
const handleRatingUpdate = newRating => {
  rating.value = newRating;
};

const filteredCoffeeList = computed(() => {
  if (rating.value !== 'all') {
    return sortedCoffeeList.value.filter(item => item.rating === Number(rating.value));
  }
  return sortedCoffeeList.value;
});

const sortedCoffeeList = computed(() => {
  return coffeeList.value
    .toSorted((a, b) => {
      const aName = a.name || '';
      const bName = b.name || '';
      return aName.localeCompare(bName);
    });
});
</script>
