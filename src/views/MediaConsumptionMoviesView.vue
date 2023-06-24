<template>
  <main class="consumption">
    <div class="opener">
      <h1>Movies</h1>
      <p>Hey, this is all the stuff I've watched since 2020.</p>
<!--      TODO: jump down to-->
<!--      TODO: back to link-->
    </div>
    <TheHr />
    <MediaList :mediaList="movieList" />
  </main>
</template>

<script>
import { mapState } from 'pinia';
import { useMediaStore } from '@/stores/MediaStore.js';
import TheHr from '@/components/common/TheHr.vue';
import MediaList from '@/components/media/MediaList.vue';

export default {
  name: 'MediaConsumptionMoviesView',
  components: {
    TheHr,
    MediaList,
  },
  computed: {
    ...mapState(useMediaStore, ['movieList']),
  },
};
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
}
</style>
