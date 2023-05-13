<template>
  <li :class="{'favorite': coffee.favorite}">
    <h2>{{ coffee.name }}</h2>
    <p>{{ coffee.roaster }}</p>
  </li>
</template>

<script>
export default {
  name: 'CoffeeItem',
  props: {
    coffee: {
      required: true,
      type: Object,
    },
  },
};
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