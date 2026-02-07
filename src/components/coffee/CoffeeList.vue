<template>
  <ul class="coffee-list">
    <CoffeeItem
      v-for="coffee in coffeeList"
      :key="coffee.index"
      :coffee="coffee"
    />
  </ul>
</template>

<script setup>
import CoffeeItem from '@/components/coffee/CoffeeItem.vue';

defineProps({
  coffeeList: {
    type: Array,
    required: true,
  },
});
</script>

<style scoped lang="scss">
.coffee-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(10.2864rem, 1fr));
  gap: 1rem;
  align-items: start;
}
</style>
