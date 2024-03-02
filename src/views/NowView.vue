<template>
  <main class="now">
    <div>
      <h1>Now</h1>
      <p>I'm still living in Royal Oak with Allison and Koley. Right now, I'm working remotely on a contract rewriting a legacy Windows app into a web app. I'm still playing <a href="https://fabtcg.com/">Flesh and Blood</a>. The new set, Heavy Hitters, is pretty fun for sealed and draft. The Japanese stuff is going less good. Work got a little stressful and that has been draining my energy a bit, so I haven't been great about it (16 out of 29 days 😬). This month I need to get it knocked out early in the morning, because I've found it's way too easy to make excuses as the day goes on. I injured my knee at the end of the month, so my walking pace has been down a lot as I go easy and let that heal. After it's back to normal, I plan on upping my mileage to three. As a fun little bonus, the walking and calorie tracking diligence has gotten me down to pre-2021 weight which is fun.</p>
      <h2>Resolutions</h2>
      <h3>New resolutions being added for March:</h3>
      <ul class="list">
        <li>Learn how to solve a Rubik's Cube and get my finish time to under three minutes</li>
        <li>Finish the "Mageborn" series (rest of book four and all of book five) so I can feel less guilt about reading and get unstuck. The series is mostly enjoyable and they're not exactly long. I've just had a real hard time wanting to read.</li>
      </ul>
      <h3>Ongoing:</h3>
      <ul class="list">
        <li>Get out of bed <em>as soon as I get up</em>: <strong>85% success rate</strong> (51/60, up 7.6%)</li>
        <li>Go for a minimum two mile walk early: <strong>100% success rate</strong> (60/60, no change)</li>
        <li>No sitting on weekdays until after my team's stand-up: <strong>100% success rate</strong> (43/43, no change)</li>
        <li>Japanese learning for at least an hour per day: <strong>73.3% success rate</strong> (44/60, down 17%)</li>
        <li>Track all food/calories consumed: <strong>100% success rate</strong> (60/60, no change)</li>
      </ul>
      <h3>Finite:</h3>
      <ul class="list">
        <li>Learn how to properly shuffle (like riffle shuffling stuff, maybe some other techniques): <strong>Complete - I don't feel like a toddler anymore and I can do the riffle thing</strong></li>
        <li>Finish "Getting Things Done" because it has been on my in-progress reading list for an extremely long time: <strong>Complete</strong></li>
      </ul>
      <p>My next Flesh and Blood tournament will be <a href="https://fabtcg.com/organised-play/2024/pro-tour-los-angeles/">Pro Tour: Los Angeles</a> from March 21&ndash;24. I won't be in the main event, but I'll be doing all the other stuff over that weekend.</p>
      <p>Anything I'm watching or reading or playing can be found from the <router-link :to="{ name: 'MediaConsumptionPage' }">media consumption</router-link> pages. It's updated every weekend.</p>
    </div>
    <TheHr />
    <div>
      <p>Last updated on March 2nd, 2024.</p>
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

  h2,
  h3 {
    margin-block-end: 0.5rem;
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
