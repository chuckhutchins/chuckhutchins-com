<template>
  <main class="now">
    <div>
      <h1>Now</h1>
      <p>I'm still living down in Royal Oak with Allison and Koley. Right now, I'm working remotely on a contract rewriting a legacy app into a web app. I'm playing <a href="https://fabtcg.com/">Flesh and Blood</a> multiple times a week because it's super fun (and a good way to like, leave the house and socialize). I started doing some Japanese stuff recently as well because there will probably be a tournament there at some point this year.</p>
      <p>My next Flesh and Blood tournament will be <a href="https://fabtcg.com/organised-play/2024/pro-tour-los-angeles/">Pro Tour: Los Angeles</a>. I won't be in the main event, but I'll be doing all the other stuff over that weekend.</p>
      <p>Anything I'm watching or reading or playing can be found from the <router-link :to="{ name: 'MediaConsumptionPage' }">media consumption</router-link> pages. It's only kind of kept current.</p>
    </div>
    <TheHr />
    <div>
      <p>Last updated on December 16th, 2023.</p>
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
}
</style>
