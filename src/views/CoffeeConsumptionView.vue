<template>
  <main class="consumption">
    <div class="opener">
      <h1>Coffee Consumption</h1>
      <p>Hey, this is all the different coffee I've consumed.</p>
      <p>TLDR: I probably like a darker roast with a stereotypical coffee taste.</p>
    </div>
    <TheHr />
    <div class="filter-wrapper">
      <h2 id="filter-by-rating">Filter By Rating</h2>
      <div
        aria-labelledby="filter-by-rating"
        role="radiogroup"
        class="filters"
      >
        <label for="filter-by-all" :class="{ 'active': rating === 'all' }">
          All
          <input
            v-model="rating"
            class="sr-only"
            id="filter-by-all"
            name="filter-by-rating"
            type="radio"
            value="all"
          >
        </label>
        <label for="filter-by-5" :class="{ 'active': rating === '5' }">
          <IconStarSimple />
          <IconStarSimple />
          <IconStarSimple />
          <IconStarSimple />
          <IconStarSimple />
          <input
            v-model="rating"
            class="sr-only"
            id="filter-by-5"
            name="filter-by-rating"
            type="radio"
            value="5"
          >
        </label>
        <label for="filter-by-4" :class="{ 'active': rating === '4' }">
          <IconStarSimple />
          <IconStarSimple />
          <IconStarSimple />
          <IconStarSimple />
          <input
            v-model="rating"
            class="sr-only"
            id="filter-by-4"
            name="filter-by-rating"
            type="radio"
            value="4"
          >
        </label>
        <label for="filter-by-3" :class="{ 'active': rating === '3' }">
          <IconStarSimple />
          <IconStarSimple />
          <IconStarSimple />
          <input
            v-model="rating"
            class="sr-only"
            id="filter-by-3"
            name="filter-by-rating"
            type="radio"
            value="3"
          >
        </label>
        <label for="filter-by-2" :class="{ 'active': rating === '2' }">
          <IconStarSimple />
          <IconStarSimple />
          <input
            v-model="rating"
            class="sr-only"
            id="filter-by-2"
            name="filter-by-rating"
            type="radio"
            value="2"
          >
        </label>
        <label for="filter-by-1" :class="{ 'active': rating === '1' }">
          <IconStarSimple />
          <input
            v-model="rating"
            class="sr-only"
            id="filter-by-1"
            name="filter-by-rating"
            type="radio"
            value="1"
          >
        </label>
      </div>
    </div>
    <div class="coffee-wrapper">
      <ul class="coffee-list">
        <CoffeeItem
          v-for="(coffee, index) in getFilteredCoffeeList(rating)"
          :key="index"
          :coffee="coffee"
        />
      </ul>
    </div>
  </main>
</template>

<script>
import { mapActions } from 'pinia';
import {useCoffeeStore} from '@/stores/CoffeeStore';
import CoffeeItem from '@/components/coffee/CoffeeItem.vue';
import IconStarSimple from '@/components/icons/IconStarSimple.vue';
import TheHr from '@/components/common/TheHr.vue';

export default {
  name: 'CoffeeConsumptionView',
  components: {
    CoffeeItem,
    IconStarSimple,
    TheHr,
  },
  data: () => ({
    rating: 'all',
  }),
  methods: {
    ...mapActions(useCoffeeStore, ['getFilteredCoffeeList']),
  }
};
</script>

<style scoped lang="scss">
.consumption {
  display: grid;
  gap: 2rem;

  .opener {
    h1 {
      margin-block-end: 1rem;
    }

    p:not(:last-child) {
      margin-block-end: 0.5rem;
    }
  }

  .filter-wrapper {
    h2 {
      font-size: 1rem;
      margin-block-end: 0.5rem;
    }

    .filters {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 0.25rem;
      align-items: stretch;
      text-align: left;
      background-color: var(--filter-background);
      box-shadow: inset 0 0.0625rem 0.25rem rgba(0, 0, 0, 0.1);
      padding: 0.25rem;
      border-radius: 0.5rem;

      @media (min-width: 375px) {
        grid-template-columns: repeat(3, 1fr);
      }

      @media (min-width: 600px) {
        grid-template-columns: repeat(6, 1fr);
      }

      label {
        display: flex;
        justify-content: center;
        padding: 0.25rem;
        border-radius: 0.25rem;
        transition: background-color 0.25s;
        text-align: center;
        font-size: 0.875rem;

        &:hover {
          cursor: pointer;
          background-color: var(--filter-hover);
        }

        &.active {
          background-color: var(--filter-active);
          box-shadow: 0 0.0625rem 0.25rem rgba(0, 0, 0, 0.1);

          &:focus-within {
            box-shadow: 0 0 0 0.125rem var(--text);
          }
        }

        svg {
          width: 1rem;
        }
      }
    }
  }



  .coffee-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(10.2864rem, 1fr));
    gap: 1rem;
  }
}
</style>
