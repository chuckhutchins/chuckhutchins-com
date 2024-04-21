<template>
  <li :class="{'favorite': props.coffee.favorite}">
    <h2>{{ props.coffee.name }}</h2>
    <p>{{ props.coffee.roaster }}</p>
  </li>
</template>

<script setup lang="ts">
import type { Coffee } from '@/types';
const props = defineProps<{
  coffee: Coffee
}>();
</script>

<style scoped lang="scss">
.favorite {
  border-radius: 0.5rem;
  background: var(--fancy-gradient);
  padding: 0.5rem;
  margin: -0.5rem;
  color: #fff;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
}

h2 {
  font-size: 1rem;
}

p {
  font-size: 1rem;
  margin: 0;
}
</style>