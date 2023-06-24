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
      <template v-for="(book, index) in finishedList" :key="index">
        <div v-if="showYearCard(index)" class="year-card">
          <p>{{ formatDate(book.end) }}</p>
        </div>
        <MediaItem :item="book" />
      </template>
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
      return finished.sort((a, b) => (a.end > b.end) ? -1 : 1);
    },
    hasFinished() {
      return this.finishedList.length > 0;
    },
  },
  methods: {
    showYearCard(index) {
      return (index === 0) || this.formatDate(this.finishedList[index - 1].end) !== this.formatDate(this.finishedList[index].end);
    },
    formatDate(date) {
      if (date === '0') {
        return 'Before the existence of written records';
      }
      return this.$dayjs(date).format('YYYY');
    },
  },
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
    text-shadow: 0 .0625rem .125rem hsla(0, 0%, 0%, .25);
    text-align: center;
  }
}
</style>