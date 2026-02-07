<template>
  <div class="container">
    <TheHeader />
    <RouterView />
    <TheFooter />
  </div>
</template>

<script setup>
import TheFooter from '@/components/common/TheFooter.vue';
import TheHeader from '@/components/common/TheHeader.vue';
</script>

<style scoped lang="scss">
.container {
  inline-size: calc(100% - 2rem);
  max-inline-size: 1024px;
  margin: 0 auto;
  box-sizing: border-box;
  padding: 1rem 0;
  display: grid;
  grid-template-rows: auto 1fr auto;
  align-items: start;
  grid-gap: 2rem;
  min-block-size: 100dvh;

  * > {
    min-inline-size: 0;
  }
}

.not-found {
  h1 {
    margin-bottom: 0.5rem;
  }
}
</style>
