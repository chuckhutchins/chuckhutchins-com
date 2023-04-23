<template>
  <li>
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
h2 {
  font-size: 1rem;
}

p {
  font-size: 1rem;
  margin: 0;
}
</style>