<template>
  <main class="consumption">
    <MediaOpener>
      <template #header>
        Media Consumption
      </template>
      <p>Hey, this is all the stuff I've read/watched/played since 2020.</p>
    </MediaOpener>
    <MediaTypeList />
  </main>
</template>

<script setup>
import MediaOpener from '@/components/media/MediaOpener.vue';
import MediaTypeList from '@/components/media/MediaTypeList.vue';
</script>

<style scoped lang="scss">
.consumption {
  display: grid;
  gap: 2rem;

  .type-list {
    display: grid;
    gap: 1rem;
  }
}
</style>
