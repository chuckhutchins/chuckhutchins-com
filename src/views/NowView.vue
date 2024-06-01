<template>
  <main class="now">
    <div>
      <h1>Now</h1>
      <p>I'm still living in Royal Oak with Allison and Koley, and I am also still working remotely on a contract rewriting a legacy Windows app into a web app for Sedgwick. It's going okay. We're about to launch the first app to production so that's exciting at least?</p>
      <p>Man the Japanese stuff has really taken a back seat. I barely did anything. Still just a little burnt out as a whole. I'm not going to keep it in my resolutions anymore. Maybe it can resurface when I've worked on my mental game a bit more.</p>
      <p>Being able to walk for 2.5-3 miles every morning is really nice. It just takes up so much time. On a good morning I'm walking at a 15 minute mile (4 mph) which is pretty speedy.</p>
      <p>I am loving my morning meditation. I'm in month two of a free trial of Headspace that I nabbed from an <a href="https://www.youtube.com/watch?v=vYaNiC4kchg">Answer in Progress</a> video about attention spans. It definitely feels like it's leveling me out. I'm less stressed overall (even with the extra work stress from being about to launch), and I haven't bitten my nails in about a month. I don't remember the last time I haven't bitten my nails. It is a great habit that only takes about 15 minutes, and it really feels like a grounding point for my day. I noticed that it's much easier to do early in the day. Afternoon/evening meditations are a lot tougher since my mind is a bit busier.</p>
      <p>I didn't even start the Juggling resolution that I hastily threw on this list. I have a really busy month coming up, so I am not going to pick it up for June (or add any new resolutions).</p>
      <h2>Resolutions</h2>
      <h3>New resolutions being added for June:</h3>
      <ul class="list">
        <li>None - I need a break from adding new things. I'll try to work in some stuff for July.</li>
      </ul>
      <h3>Ongoing:</h3>
      <ul class="list">
        <li>Get out of bed <em>as soon as I get up</em>: <strong>77.6% 80.1% success rate</strong>(118/152, down 2.5%)</li>
        <li>Go for a minimum two mile walk early: <strong>75%68.6% success rate</strong>(114/152, up 6,4%)</li>
        <li>No sitting on work days until after my team's stand-up: <strong>100% success rate</strong>(105/105, no change)</li>
        <li>Track all food/calories consumed: <strong>96.1% success rate</strong>(146/152, up 1.1%)</li>
      </ul>
      <h3>Finite:</h3>
      <ul class="list">
        <li><span class="strike">Two sections of Japanese a week: <strong>Failure - 0% success rate (0/5)</strong></span> - Putting this on hold while I figure out how to dedicate more time for it</li>
        <li>Japanese learning for at least an hour per day: <strong>Failure - 42.1% success rate (51/121) before changing the goalpost</strong></li>
        <li>Implement a stretching/mobility routine: <strong>Just A Bit Complete - I found an overall mobility routine (and did it a handful of times), but I've been focusing on ankle work until I feel like my knee is strong enough to complete it</strong></li>
        <li>Take the necessary steps to get past my knee pain. I can't express how tired I am of my knee not getting better: <strong>Complete</strong></li>
        <li>Learn how to solve a Rubik's Cube and get my finish time to under three minutes: <strong>Complete - I can reliably do it in under 90 seconds - best time is 1m6s</strong></li>
        <li>Finish the "Mageborn" series (rest of book four and all of book five) so I can feel less guilt about reading and get unstuck: <strong>Complete</strong></li>
        <li>Learn how to properly shuffle (like riffle shuffling stuff, maybe some other techniques): <strong>Complete - I don't feel like a toddler anymore and I can do the riffle thing</strong></li>
        <li>Finish "Getting Things Done" because it has been on my in-progress reading list for an extremely long time: <strong>Complete</strong></li>
      </ul>
      <p>My next Flesh and Blood tournament will be <a href="https://fabtcg.com/organised-play/2024/national-championships2024/usa-nationals/">Calling: Minneapolis</a> from June 14&ndash;16. The events to qualify for Nationals didn't line up well with real life, so I won't be in the main Nationals event, but I'll be doing all the other stuff over that weekend.</p>
      <p>Anything I'm watching or reading or playing can be found from the <router-link :to="{ name: 'MediaConsumptionPage' }">media consumption</router-link> pages. It's updated (almost) every weekend.</p>
    </div>
    <TheHr />
    <div>
      <p>Last updated on May 4th, 2024.</p>
    </div>
  </main>
</template>

<script setup lang="ts">
import TheHr from '@/components/common/TheHr.vue';
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
  }

  .strike {
    text-decoration: line-through;
  }
}
</style>
