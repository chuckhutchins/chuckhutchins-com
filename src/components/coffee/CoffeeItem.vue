<template>
  <li class="item" :class="{'is-favorite': isFavorite}">
    <h2 class="name">{{ coffee.name }}</h2>
    <p class="roaster">{{ coffee.roaster }}</p>
  </li>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  coffee: {
    type: Object,
    required: true,
  },
});

const isFavorite = computed(() => props.coffee.favorite);
</script>

<style scoped lang="scss">
.is-favorite {
  border-radius: 0.5rem;
  background: var(--fancy-gradient);
  padding: 0.5rem;
  margin: -0.5rem;
  color: var(--color-white);
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
}

.name {
  font-size: 1rem;
}

.roaster {
  font-size: 1rem;
  margin: 0;
}
</style>
