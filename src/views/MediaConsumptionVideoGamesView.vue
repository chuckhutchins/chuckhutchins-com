<template>
  <main class="consumption">
    <div class="opener">
      <h1>Video Games</h1>
      <p>Hey, this is all the stuff I've played since 2020.</p>
<!--      TODO: jump down to-->
<!--      TODO: back to link-->
    </div>
    <TheHr />
    <div class="item-wrapper">
      <ul>
        <li>wat goes here</li>
      </ul>
    </div>
  </main>
</template>

<script>
import TheHr from '@/components/common/TheHr.vue';

export default {
  name: 'MediaConsumptionVideoGamesView',
  components: {
    TheHr,
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

  .type-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(10.2864rem, 1fr));
    gap: 1rem;
    align-items: start;
  }
}
</style>
