<template>
  <main class="consumption-layout">
    <slot />
  </main>
</template>

<script setup>
</script>

<style scoped lang="scss">
.consumption-layout {
  display: grid;
  gap: 2rem;

  > * {
    min-inline-size: 0;
  }
}
</style>
