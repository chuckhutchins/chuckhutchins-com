<template>
  <main class="now">
    <div>
      <h1>Now</h1>
      <p>I'm still living down in Royal Oak with Allison and Koley. Right now, I'm working remotely on a contract rewriting a legacy app into a web app. I'm still playing <a href="https://fabtcg.com/">Flesh and Blood</a>. A new set is about to come out, so that's always an exciting (and expensive) time. The Japanese stuff is going okay. I missed a few days from being tired or strapped for time. There's a lot of stuff I have to do before work, and on Wednesdays and Thursdays I (usually) play cards so it's tough to fit it in.</p>
      <p>Here is the status of my New Year's Resolutions so far:</p>
      <ul class="list">
        <li>Get out of bed <em>as soon as I get up</em>: <strong>77.4% success rate</strong></li>
        <li>Go for a minimum two mile walk before work: <strong>100% success rate</strong></li>
        <li>No sitting on weekdays until after my team's stand-up: <strong>100% success rate</strong></li>
        <li>Japanese learning for at least an hour per day: <strong>90.3% success rate</strong></li>
        <li>Track all food/calories consumed: <strong>100% success rate</strong></li>
      </ul>
      <p>New resolutions being added for February:</p>
      <ul class="list">
        <li>Learn how to properly shuffle (like riffle shuffling stuff, maybe some other techniques)</li>
        <li>Finish "Getting Things Done" because it has been on my in-progress reading list for an extremely long time</li>
      </ul>
      <p>My next Flesh and Blood tournament will be <a href="https://fabtcg.com/organised-play/2024/pro-tour-los-angeles/">Pro Tour: Los Angeles</a> near the end of March. I won't be in the main event, but I'll be doing all the other stuff over that weekend.</p>
      <p>Anything I'm watching or reading or playing can be found from the <router-link :to="{ name: 'MediaConsumptionPage' }">media consumption</router-link> pages. It's updated every weekend.</p>
    </div>
    <TheHr />
    <div>
      <p>Last updated on February 1st, 2024.</p>
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
