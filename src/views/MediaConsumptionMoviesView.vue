<template>
  <ConsumptionLayout>
    <TheOpener>
      <template #header>
        Movies
      </template>
      <p>Hey, this is all the stuff I've watched since 2020.</p>
      <RouterLink :to="{ name: 'MediaConsumptionPage' }">
        Back to Media Consumption
      </RouterLink>
    </TheOpener>
    <MediaList :mediaList="useMediaStore().movieList" />
  </ConsumptionLayout>
</template>

<script setup>
import { useMediaStore } from '@/stores/MediaStore';
import ConsumptionLayout from '@/layouts/ConsumptionLayout.vue';
import MediaList from '@/components/media/MediaList.vue';
import TheOpener from '@/components/common/TheOpener.vue';
</script>
