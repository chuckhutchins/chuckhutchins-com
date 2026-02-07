<template>
  <ConsumptionLayout>
    <TheOpener>
      <template #header>
        TV Shows
      </template>
      <p>Hey, this is all the stuff I've read watched 2020.</p>
      <RouterLink :to="{ name: 'MediaConsumptionPage' }">
        Back to Media Consumption
      </RouterLink>
    </TheOpener>
    <MediaList :mediaList="useMediaStore().tvShowList" />
  </ConsumptionLayout>
</template>

<script setup>
import { useMediaStore } from '@/stores/MediaStore';
import ConsumptionLayout from '@/layouts/ConsumptionLayout.vue';
import MediaList from '@/components/media/MediaList.vue';
import TheOpener from '@/components/common/TheOpener.vue';
</script>
