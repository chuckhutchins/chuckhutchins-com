<template>
  <ul class="type-list">
    <MediaTypeItem v-for="(type, index) in typeList" :key="index" :type="type" />
  </ul>
</template>

<script setup>
import MediaTypeItem from '@/components/media/MediaTypeItem.vue';

const typeList = ['Books', 'Movies', 'TV Shows', 'Video Games'];
</script>

<style scoped lang="scss">
.type-list {
  display: grid;
  gap: 1rem;
}
</style>
