<template>
  <main class="now">
    <div>
      <h1>Now</h1>
      <p>I'm still living in Royal Oak with Allison and Koley, and I am also still working remotely for Sedgwick. It's still going okay. We just launched a slightly-more-than-MVP version of our first app rewrite, so I'm hoping early user feedback is good and the project gets expanded.</p>
      <p>Minneapolis was good overall. That Thursday I arrived I walked about 11.5 miles. I walked around 35 miles over the entire weekend (Thursday through Sunday afternoon), so that was pretty nice. I really only had Thursday to explore and do things, and I kind of wish I were able to do a tiny bit more outside of the convention center. Friday I played side events all day long and did very very well (10-1 across three events), and I was able to get my "goal" prize card for the weekend. The Calling on Saturday was pretty rough. I did not do very well at all. I was playing a deck that needed to do a small thing within the first two turns of the game in order to push an advantage and win, and when you can't do the thing until turn five or later, you lose the ability to pivot. I won't say that it wasn't my fault because it feels like I lost in my deckbuilding decisions. Immediately after the tournament was over for me (2-3 drop), I switched out a few cards and it has been much smoother since. My Sunday was intentionally a little more relaxed since I had an 11 hour day of cards on Friday and a demoralizing Saturday (on top of some mishaps with ordering dinner). <a href="https://hellskitcheninc.com/">Hell's Kitchen</a> (no affiliation with Gordon Ramsey) was super good. Everything I ate there was great. If you're in Minneapolis, I'd recommend stopping there. Maybe even pick up a jar of their house-made peanut butter.</p>
      <p>Morning fasts and tracking calories started taking a bit of a backseat this month, and I can really feel the difference of that. I need to make that a priority for my July as a whole (another spoiler alert, 4th of July weekend was not good for this). But new weeks are new beginnings and a new opportunity for a small reset.</p>
      <p>Walking is still going pretty well. I got pretty sick after Minneapolis, so there was a bit of time where I wasn't really able to do that. I'd maybe do a mile, but mostly I took a break to rest up a bit. It also didn't help that the weather has been unseasonably hot and humid in the mornings, which makes it really tough. There just isn't a time of the day where it's cool enough to be outside.</p>
      <p>I am loving my morning meditation. It's my favorite habit at the moment. Just a great way to slow down and get centered before the day. I've noticed it levels me out and makes a stressful workday not as bad.</p>
      <h2>Resolutions</h2>
      <h3>New resolutions being added for July:</h3>
      <ul class="list">
        <li>Learn to Juggle</li>
      </ul>
      <h3>Ongoing:</h3>
      <ul class="list">
        <li>Get out of bed <em>as soon as I get up</em>: <strong>79.1% success rate</strong>(144/182, up 1.5%)</li>
        <li>Go for a minimum two mile walk early: <strong>75.3% success rate</strong>(137/182, up 0.3%)</li>
        <li>No sitting on work days until after my team's stand-up: <strong>100% success rate</strong>(123/123, no change)</li>
        <li>Track all food/calories consumed: <strong>92.3% success rate</strong>(168/182, down 3.8%)</li>
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
      <p>Anything I'm watching or reading or playing can be found from the <router-link :to="{ name: 'MediaConsumptionPage' }">media consumption</router-link> pages. It's updated (almost) every weekend.</p>
    </div>
    <TheHr />
    <div>
      <p>Last updated on July 7th, 2024.</p>
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
