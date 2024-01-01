<template>
  <main class="now">
    <div>
      <h1>Now</h1>
      <p>I'm still living down in Royal Oak with Allison and Koley. Right now, I'm working remotely on a contract rewriting a legacy app into a web app. I'm still playing lots of <a href="https://fabtcg.com/">Flesh and Blood</a>. A few times a month, I meet up with my friend Paul and play board/card games at <a href="https://www.urbanrest.com/">Urbanrest</a>. The Japanese stuff is going well. I slow-rolled it a bit over the holidays, but I have the basic kana nailed down, have started a cool <a href="https://www.wanikani.com/">WaniKani</a> program to learn kanji and vocabulary, and I just started the actual coursework from the textbook I bought.</p>
      <p>I am an avid New Year's Resolution person, so here are the ones I'm starting right now:</p>
      <ul class="list">
        <li>Get out of bed <em>as soon as I get up</em></li>
        <li>Go for a minimum two mile walk before work</li>
        <li>No sitting on weekdays until after my team's stand-up</li>
        <li>Japanese learning for at least an hour per day</li>
        <li>Track all food consumed</li>
      </ul>
      <p>My next Flesh and Blood tournament will be <a href="https://fabtcg.com/organised-play/2024/pro-tour-los-angeles/">Pro Tour: Los Angeles</a>. I won't be in the main event, but I'll be doing all the other stuff over that weekend.</p>
      <p>Anything I'm watching or reading or playing can be found from the <router-link :to="{ name: 'MediaConsumptionPage' }">media consumption</router-link> pages. It's only kind of kept current.</p>
    </div>
    <TheHr />
    <div>
      <p>Last updated on January 1st, 2024.</p>
    </div>
  </main>
</template>

<script>
import TheHr from '@/components/common/TheHr.vue';

export default {
  name: 'NowView',
  components: {
    TheHr,
  },
};
</script>

<style scoped lang="scss">
.now {
  display: grid;
  gap: 2rem;

  h1 {
    margin-block-end: 1rem;
  }

  p:not(:last-child) {
    margin-block-end: 0.5rem;
  }

  ul {
    margin-block: -0.5rem 0.5rem;
    //margin-block-end: 0.5rem;
  }
}
</style>
