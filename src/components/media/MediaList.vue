<template>
  <div v-if="hasInProgress" class="media-group">
    <h2>In Progress</h2>
    <div class="media-list">
      <MediaItem
        v-for="(item, index) in inProgressList"
        :key="index"
        :item="item"
      />
    </div>
  </div>
  <div v-if="hasFinished" class="media-group">
    <h2>Finished</h2>
    <div class="media-list">
      <template v-for="(item, index) in finishedList" :key="index">
        <div v-if="showYearCard(index)" class="year-card">
          <p>{{ formatDate(item.end) }}</p>
        </div>
        <MediaItem :item="item" />
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import dayjs from 'dayjs';
import MediaItem from '@/components/media/MediaItem.vue';
import type { Media } from '@/types';

const props = defineProps<{
  mediaList: Media[];
}>();

const inProgressList = computed(() => {
  const list = [...props.mediaList];
  return list.filter(item => !item.finish && item.end === '');
});
const hasInProgress = computed(() => inProgressList.value.length > 0);

const finishedList = computed(() => {
  const list = [...props.mediaList];
  const finished = list.filter(item => item.finish || item.end !== '');
  return finished.sort((a, b) => (a.end > b.end) ? -1 : 1);
});
const hasFinished = computed(() => finishedList.value.length > 0);

const showYearCard = index => {
  return (index === 0) || formatDate(finishedList.value[index - 1].end) !== formatDate(finishedList.value[index].end);
};
const formatDate = date => {
  if (date === '0') {
    return 'Before the existence of written records';
  }
  return dayjs(date).format('YYYY');
};
</script>

<style scoped lang="scss">
.media-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.media-list {
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1.5rem;

  @media (min-width: 480px) {
    grid-template-columns: repeat(auto-fill, minmax(10rem, 1fr));
  }
}

.year-card {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.25rem;
  background: var(--fancy-gradient);

  p {
    color: var(--color-white);
    font-size: 2rem;
    font-weight: 700;
    text-shadow: 0 0.0625rem 0.125rem hsla(0, 0%, 0%, 0.25);
    text-align: center;
  }
}
</style>
