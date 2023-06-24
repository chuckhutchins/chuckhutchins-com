<template>
  <div v-if="hasInProgress" class="media-group">
    <h2>In Progress</h2>
    <div class="media-list">
      <MediaItem
        v-for="(book, index) in inProgressList"
        :key="index"
        :item="book"
      />
    </div>
  </div>
  <div v-if="hasFinished" class="media-group">
    <h2>Finished</h2>
    <div class="media-list">
      <MediaItem
        v-for="(book, index) in finishedList"
        :key="index"
        :item="book"
      />
    </div>
  </div>
</template>

<script>
import { mapState } from 'pinia';
import { useMediaStore } from '@/stores/MediaStore.js';
import MediaItem from '@/components/media/MediaItem.vue';

export default {
  name: 'MediaList',
  components: {
    MediaItem,
  },
  computed: {
    ...mapState(useMediaStore, ['bookList']),
    inProgressList() {
      const list = [...this.bookList];
      return list.filter(item => item.finish === 0 && item.end === '');
    },
    hasInProgress() {
      return this.inProgressList.length > 0;
    },
    finishedList() {
      const list = [...this.bookList];
      const finished = list.filter(item => item.finish !== 0 || item.end !== '');
      // TODO: fix date format for all data in order to use new Date to sort
      return finished.reverse();
    },
    hasFinished() {
      return this.finishedList.length > 0;
    },
  }
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
</style>