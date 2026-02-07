<template>
  <main class="consumption">
    <MediaOpener>
      <template #header>
        TV Shows
      </template>
      <p>Hey, this is all the stuff I've read watched 2020.</p>
      <RouterLink :to="{ name: 'MediaConsumptionPage' }">
        Back to Media Consumption
      </RouterLink>
    </MediaOpener>
    <MediaList :mediaList="useMediaStore().tvShowList" />
  </main>
</template>

<script setup>
import { useMediaStore } from '@/stores/MediaStore';
import MediaList from '@/components/media/MediaList.vue';
import MediaOpener from '@/components/media/MediaOpener.vue';
</script>

<style scoped lang="scss">
.consumption {
  display: grid;
  gap: 2rem;
}
</style>
