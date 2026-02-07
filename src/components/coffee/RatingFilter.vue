<template>
  <div class="wrapper">
    <h2 class="header" id="filter-by-rating">Filter By Rating</h2>
    <div
      aria-labelledby="filter-by-rating"
      role="radiogroup"
      class="filters"
    >
      <label
        v-for="(filter, index) in filterByList"
        :key="index"
        class="label"
        :class="{ 'active': rating === filter.value }"
        :for="`filter-by-${filter.value}`"
      >
        <template v-if="filter.label">
          {{ filter.label }}
        </template>
        <template v-else>
          <IconStarSimple v-for="i in filter.value" :key="i" />
        </template>
        <input
          v-model="modelValue"
          class="sr-only"
          :id="`filter-by-${filter.value}`"
          name="filter-by-rating"
          type="radio"
          :value="filter.value"
        >
      </label>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import IconStarSimple from '@/components/icons/IconStarSimple.vue';

const props = defineProps({
  rating: {
    required: true,
    type: [String, Number],
  },
});

const emits = defineEmits(['update']);

const modelValue = computed({
  get: () => props.rating,
  set: value => emits('update', value),
});

const filterByList = [
  {
    label: 'All',
    value: 'all',
  },
  {
    label: null,
    value: 5,
  },
  {
    label: null,
    value: 4,
  },
  {
    label: null,
    value: 3,
  },
  {
    label: null,
    value: 2,
  },
  {
    label: null,
    value: 1,
  },
];
</script>

<style scoped lang="scss">
.header {
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
}

.label {
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
    inline-size: 1rem;
  }
}
</style>
