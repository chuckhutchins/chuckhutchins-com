<template>
  <main class="wishlist">
    <div class="opener">
      <h1>Wishlist</h1>
      <p>Don't worry, folks. I know you're ready to spend your hard-earned money on me. Here are a few ideas to get you started.</p>
      <p>One of the downsides to not using some massive conglomerate that sells everything from A to Z (including your data) is that there's no good way to tell what has been purchased by others. Well, only a few of you know about the link to this page, so you guys can work it out amongst yourselves. That's an early gift from me to you.</p>
      <p>One last note: you can get a lot of these things anywhere. I just linked to their "official" sources, but some of these can be gotten on Amazon or at Meijer or something.</p>
    </div>
    <TheHr />
    <div>
      <h2 aria-label="$24 and under">$</h2>
      <ul class="wishlist-list">
        <WishlistItem
          link='https://www.amazon.com/gift-cards/'
          image='https://res.cloudinary.com/innocent/image/upload/f_auto/v1604429870/chuckhutchins/wishlist/amazon-gift-card_cwgy6w.png'
          name='Amazon Gift Card'
        />
        <WishlistItem
          link='https://www.google.com/search?q=butchers+near+me'
          image='https://res.cloudinary.com/innocent/image/upload/f_auto/v1604691632/chuckhutchins/wishlist/delicious-meats_ec45nr.png'
          name='Delicious Meats (New York Strip, Chuck Roast)'
        />
        <WishlistItem
          link='https://www.nintendo.com/giftcards/'
          image='https://res.cloudinary.com/innocent/image/upload/f_auto/v1604691632/chuckhutchins/wishlist/nintendo-eshop-gift-card_mmiz24.png'
          name='Nintendo eShop Gift Card'
        />
        <WishlistItem
          link='https://www.playstation.com/en-us/playstation-gift-cards/'
          image='https://res.cloudinary.com/innocent/image/upload/f_auto/v1604691632/chuckhutchins/wishlist/playstation-store-gift-card_zyyqew.png'
          name='PlayStation Store Gift Card'
        />
        <WishlistItem
          link='https://www.google.com/search?q=coffee+roasters+near+me'
          image='https://res.cloudinary.com/innocent/image/upload/f_auto/v1604691632/chuckhutchins/wishlist/whole-bean-dark-roast-coffee_sktwuj.png'
          name='Whole Bean Dark Roast Coffee'
        />
      </ul>
    </div>
<!--    <div>-->
<!--      <h2 aria-label="$25 to $99">$$</h2>-->
<!--      <ul class="wishlist-list"></ul>-->
<!--    </div>-->
    <div>
      <h2 aria-label="$100 to $249">$$$</h2>
      <ul class="wishlist-list">
        <WishlistItem
          link='https://acaia.co/collections/coffee-scales/products/pearl?variant=3791487303703'
          image='https://res.cloudinary.com/innocent/image/upload/f_auto/v1604669635/chuckhutchins/wishlist/acaia-pearl-black_oivrz8.png'
          name='Acaia Pearl, Black'
        />
      </ul>
    </div>
    <div>
      <h2 aria-label="$250 and over">$$$$</h2>
      <ul class="wishlist-list">
        <WishlistItem
          link='https://store.hermanmiller.com/office/office-chairs/aeron-chair/2195348.html'
          image='https://res.cloudinary.com/innocent/image/upload/f_auto/v1604667256/chuckhutchins/wishlist/herman-miller-aeron-chair_qudewg.png'
          name='Herman Miller Aeron Chair'
        />
      </ul>
    </div>
    <TheHr />
    <div>
      <h2>Changelog</h2>
      <ul class="list">
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

<script>
import TheHr from '@/components/common/TheHr.vue';
import WishlistItem from '@/components/wishlist/WishlistItem.vue';

export default {
  name: 'WishlistView',
  components: {
    TheHr,
    WishlistItem,
  },
};
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
    margin-bottom: 0.5rem;
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
