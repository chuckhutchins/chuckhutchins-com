<template>
  <main class="consumption">
    <div class="opener">
      <h1>Media Consumption</h1>
      <p>Hey, this is all the stuff I've read/watched/played since 2020.</p>
    </div>
    <TheHr />
    <div class="type-wrapper">
      <ul class="type-list">
        <MediaTypeItem type="Books" />
        <MediaTypeItem type="Movies" />
        <MediaTypeItem type="TV Shows" />
        <MediaTypeItem type="Video Games" />
      </ul>
    </div>
  </main>
</template>

<script setup lang="ts">
import MediaTypeItem from '@/components/media/MediaTypeItem.vue';
import TheHr from '@/components/common/TheHr.vue';
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

  .type-list {
    display: grid;
    gap: 1rem;
  }
}
</style>
