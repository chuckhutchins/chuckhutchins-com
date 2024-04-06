<template>
  <main class="now">
    <div>
      <h1>Now</h1>
      <p>I'm still living in Royal Oak with Allison and Koley. Right now, I'm working remotely on a contract rewriting a legacy Windows app into a web app. It's going fine. Here's hoping I get brought on as a direct employee soon so I can get some of that sweet, sweet PTO. It was definitely a bit of a damper on my LA trip having to miss three days of pay (on top of the extra cost of travel).</p>
      <p>The Japanese stuff is not going great. Between being in LA and having a weak overall mental game, I only managed seven days this month. My knee has been a consistent and painful issue the entire month, so I barely managed to walk the two miles (nine times). After quite a bit of pain during a walk on April 1, I'm just straight up finished going for walks until my knee is actually good to go. I'm super bummed about this, and it is definitely spiraling out into the rest of my motivations and productivity (see previous note about the weak overall mental game).</p>
      <p>My new resolution this month is to incorporate a proper stretching and mobility routine into my morning, so as I figure out what that looks like, maybe that work will help strengthen my joints and it'll reverse some of the damage being sedentary has caused. Getting old is actually starting to happen.</p>
      <p>We've been doing HelloFresh for about a month now in order to switch up some of the stuff we're eating, and that has been pretty enjoyable. It's a bit of a premium to try some things we wouldn't normally eat, but having a self-contained new meal three nights a week gets me more in the kitchen and also paying more attention to the things I put in my body.</p>
      <h2>Resolutions</h2>
      <h3>New resolutions being added for April:</h3>
      <ul class="list">
        <li>Implement a stretching/mobility routine</li>
        <li>Take the necessary steps to get past my knee pain. I can't express how tired I am of my knee not getting better</li>
      </ul>
      <h3>Ongoing:</h3>
      <ul class="list">
        <li>Get out of bed <em>as soon as I get up</em>: <strong>79.1% success rate</strong>(72/91, down 5.9%)</li>
        <li>Go for a minimum two mile walk early: <strong>75.8% success rate</strong>(69/91, down 24.2%)</li>
        <li>No sitting on weekdays until after my team's stand-up: <strong>100% success rate</strong>(61/61, no change)</li>
        <li>Japanese learning for at least an hour per day: <strong>56% success rate</strong>(51/91, down 17.3%)</li>
        <li>Track all food/calories consumed: <strong>94.5% success rate</strong>(86/91, down 5.5%)</li>
      </ul>
      <h3>Finite:</h3>
      <ul class="list">
        <li>Learn how to solve a Rubik's Cube and get my finish time to under three minutes: <strong>Complete - I can reliably do it in under 90 seconds - best time is 1m6s</strong></li>
        <li>Finish the "Mageborn" series (rest of book four and all of book five) so I can feel less guilt about reading and get unstuck: <strong>Complete</strong></li>
        <li>Learn how to properly shuffle (like riffle shuffling stuff, maybe some other techniques): <strong>Complete - I don't feel like a toddler anymore and I can do the riffle thing</strong></li>
        <li>Finish "Getting Things Done" because it has been on my in-progress reading list for an extremely long time: <strong>Complete</strong></li>
      </ul>
      <p>My next Flesh and Blood tournament will be <a href="https://fabtcg.com/organised-play/2024/national-championships2024/usa-nationals/">Calling: Minneapolis</a> from June 14&ndash;16. The events to qualify for Nationals didn't line up well with real life, so I won't be in the main Nationals event, but I'll be doing all the other stuff over that weekend.</p>
      <p>Anything I'm watching or reading or playing can be found from the <router-link :to="{ name: 'MediaConsumptionPage' }">media consumption</router-link> pages. It's updated every weekend.</p>
    </div>
    <TheHr />
    <div>
      <p>Last updated on April 6th, 2024.</p>
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
