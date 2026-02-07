<template>
  <ConsumptionLayout>
    <TheOpener>
      <template #header>
        Media Consumption
      </template>
      <p>Hey, this is all the stuff I've read/watched/played since 2020.</p>
    </TheOpener>
    <MediaTypeList />
  </ConsumptionLayout>
</template>

<script setup>
import ConsumptionLayout from '@/layouts/ConsumptionLayout.vue';
import TheOpener from '@/components/common/TheOpener.vue';
import MediaTypeList from '@/components/media/MediaTypeList.vue';
</script>
