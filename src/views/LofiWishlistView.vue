<template>
  <main class="wishlist">
    <div class="opener">
      <h1>Wishlist</h1>
      <p>Don't worry, folks. I know you're ready to spend your hard-earned money on me. Here are a few ideas to get you started.</p>
      <p>Please use Amazon as a last resort. They're really kind of the worst, but I understand that shipping is a killer from each individual place.</p>
    </div>
    <TheHr />
    <div>
      <ul class="list">
        <li>[PENDING] Carhartt beanie (black) with the badge removed, but have stitching that says "ope." or "oof." or "ouch." or something</li>
      </ul>
    </div>
    <TheHr />
    <div>
      <h2>Changelog</h2>
      <ul class="list">
        <li>2025-12-27 &ndash; Removed items received for Christmas. [Pie Crust Bag, Spice Measuring Spoons, Pie Carrier, Colander that spans over the sink, Hip pack thing in black, Cool Evil Cat Print]</li>
        <li>2025-12-20 &ndash; Removed items received for birthday. [Pastry Scraper/Chopper/Bench Knife, Dough Blender, Tongs w/ Silicone Heads, Vegetable Brush]</li>
        <li>2025-11-29 &ndash; Updated wishlist to not require images. It's just a list now y'all. Simplified copy above the list.</li>
        <li>2024-04-21 &ndash; Updated wishlist code behind the scenes.</li>
        <li>2024-03-02 &ndash; Added T-Bone to the examples of Delicious Meats. Removed Herman Miller Aeron Chair.</li>
        <li>2023-06-29 &ndash; Updated wishlist to new framework. Removed YubiKey 5C NFC and VanMoof S3.</li>
        <li>2022-01-01 &ndash; Removed Christmas Tree Cakes (Vanilla), Kroger Hot & Spicy Peanuts, Coffee Cup (Charcoal), and Anova Precision Cooker Nano.</li>
        <li>2021-12-15 &ndash; Removed Mujjo Double-Layered Touchscreen Gloves (Large) and Patagonia Better Sweater Fleece Jacket (Black, Large).</li>
        <li>2021-11-06 &ndash; Updated Delicious Meats title. Added Anova Precision Cooker Nano, Christmas Tree Cakes (Vanilla), Kroger Hot &amp; Spicy Peanuts, PlayStation Store Gift Card. Removed Blackwing Natural Pencils, HomePod mini (Space Gray), and Kånken Bottle Pocket (Black).</li>
        <li>2021-06-25 &ndash; Added size to Patagonia Better Sweater Fleece Jacket (Black, Large).</li>
        <li>2021-05-22 &ndash; Added Mujjo Double-Layered Touchscreen Gloves (Large) and Patagonia Better Sweater Fleece Jacket (Black). Removed Bartender 4.</li>
        <li>2021-04-03 &ndash; Removed Novel Duffle (Black).</li>
        <li>2021-03-13 &ndash; Added Coffee Cup (Charcoal) and Kånken Bottle Pocket (Black).</li>
        <li>2021-01-31 &ndash; Updated layout.</li>
        <li>2021-01-09 &ndash; Removed Coffee Paddle, Aeropress, Rebirth Print, and P-Series Quantum X 4K HDR Smart TV (P65QX-H1).</li>
        <li>2020-12-15 &ndash; Added dark mode styles. Removed Zip Card Holder (Dark Grey). Removed Sleep Mask and Sleep Mask footnote, Kånken Organizer (Fog), and Kindle Oasis (Graphite).</li>
        <li>2020-11-07 &ndash; Moved sleep mask from copy down to footnotes. Changed footnote asterisks to numbers.</li>
        <li>2020-11-07 &ndash; Added changelog.</li>
        <li>2020-11-07 &ndash; Added Bamboo Coffee Paddle and Novel Duffel.</li>
        <li>2020-11-06 &ndash; Added Aeropress and Weighted Sleep Mask.</li>
        <li>2020-11-06 &ndash; Initial wishlist launch.</li>
      </ul>
    </div>
  </main>
</template>

<script setup lang="ts">
import TheHr from '@/components/common/TheHr.vue';
import WishlistItem from '@/components/wishlist/WishlistItem.vue';
</script>

<style scoped lang="scss">
.wishlist {
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

  h2 {
    margin-block-end: 0.5rem;
  }

  .wishlist-list {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 1.5rem 1rem;

    @media (min-width: 375px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (min-width: 600px) {
      grid-template-columns: repeat(3, 1fr);
    }
  }
}
</style>
