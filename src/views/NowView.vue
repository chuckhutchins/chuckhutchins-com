<template>
  <main class="now">
    <div>
      <h1>Now</h1>
      <p>I'm still living in Royal Oak with Allison and Koley, and I am also still working remotely on a contract rewriting a legacy Windows app into a web app for Sedgwick. It's going okay.</p>
      <p>I'm going to switch up what I'm doing with my Japanese resolution. I'm keeping up on the WaniKani learning tool for kanji, but needing to do an hour of Japanese coursework a day is just too much right now. I am going to switch to doing two sections a week (each chapter has anywhere from six to eight sections). This will probably be two or three hours a week. Not a lot, but much better than just not doing anything.</p>
      <p>My knee pain has pretty much completely disappeared after a physical therapy appointment with Eric from <a href="https://www.theactivefix.com/">The Active Fix</a>. I guess I didn't really have any ankle mobility for walking, so my knee was just absorbing everything. It was fine in winter when I was wearing boots (that had a heel), but when I switched to my Vans (flat), that started the issues. I have a quick five-minute routine I need to do before I go for walks to limber up my ankle, but other than that it's all good now.</p>
      <p>I'm having trouble figuring out what I want my resolution for the month to be, but I did pre-emptively order some juggling balls, so let's just do that for May. I'm going to at least start with the three balls that came in the package, but a stretch goal will be to get to four. I just feel like four is significantly more impressive. I'm also going to incrementally up my daily walk to three miles. I started the month jumping right to three miles, but I started developing new knee pain in the last quarter mile. I'll start out at two and a half and work up to three as my joints adjust. Something something "it's a marathon not a sprint" or something.</p>
      <h2>Resolutions</h2>
      <h3>New resolutions being added for May:</h3>
      <ul class="list">
        <li>Learn how to juggle</li>
        <li>Work up to an extra mile to my daily walk</li>
        <li>Implement a stretching/mobility routine</li>
      </ul>
      <h3>Ongoing:</h3>
      <ul class="list">
        <li>Get out of bed <em>as soon as I get up</em>: <strong>80.1% success rate</strong>(97/121, up 1%)</li>
        <li>Go for a minimum two mile walk early: <strong>68.6% success rate</strong>(83/121, down 7.2%)</li>
        <li>No sitting on work days until after my team's stand-up: <strong>100% success rate</strong>(83/83, no change)</li>
        <li>Two sections of Japanese a week: <strong>??% success rate</strong></li>
        <li>Track all food/calories consumed: <strong>95% success rate</strong>(115/121, up 0.5%)</li>
      </ul>
      <h3>Finite:</h3>
      <ul class="list">
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
}
</style>
