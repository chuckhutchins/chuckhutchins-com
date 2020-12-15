import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import WishlistProduct from "../components/wishlist-product"

const IndexPage = () => (
  <Layout>
    <main className="wishlist">
      <SEO title={'Wishlist'}/>
      <div>
        <h2>Wishlist</h2>
        <p>Don't worry, folks. I know you're ready to spend your hard-earned money on me. Here are a few ideas to get you started.</p>
        <p>One of the downsides to not using some massive conglomerate that sells everything from A to Z (including your data) is that there's no good way to tell what has been purchased by others. Well, only a few of you know about the link to this page, so you guys can work it out amongst yourselves. That's an early gift from me to you.</p>
        <p>One last note: you can get a lot of these things anywhere. I just linked to their "official" sources, but some of these can be gotten on Amazon or at Meijer or something.</p>
        <p>One more last note: I'm super fortunate and also don't really _need_ anything, so please consider a donation to a charity or non-profit to help those who do. If you want to donate to a web development cause, I would recommend <a href="https://girlswhocode.com/">Girls Who Code</a> or <a href="https://www.freecodecamp.org/donate">freeCodeCamp</a> or something.</p>
      </div>
      <div className="hr--mini" />
      <div>
        <h3 aria-label="$24 and under">$</h3>
        <ul className="product__container">
          <WishlistProduct
            link="https://www.amazon.com/gift-cards/"
            image="https://res.cloudinary.com/innocent/image/upload/f_auto/v1604429870/chuckhutchins/wishlist/amazon-gift-card_cwgy6w.png"
            name="Amazon Gift Card"
          />
          <WishlistProduct
            link="https://www.frenchpresscoffee.com/products/coffee-stir-paddle-french-press"
            image="https://res.cloudinary.com/innocent/image/upload/f_auto/v1604755428/chuckhutchins/wishlist/bamboo-coffee-paddle_ojw1oe.png"
            name="Bamboo Coffee Paddle"
            footnote="1"
          />
          {/*<WishlistProduct */}
          {/*  link="https://www.macbartender.com/Bartender4/" */}
          {/*  image="https://res.cloudinary.com/innocent/image/upload/f_auto/v1604691632/chuckhutchins/wishlist/bartender-4_vhh4fb.png" */}
          {/*  name="Bartender 4" */}
          {/*/>*/}
          {/*<WishlistProduct */}
          {/*  link="https://blackwing602.com/collections/pencils/products/blackwing-natural-set-of-12" */}
          {/*  image="https://res.cloudinary.com/innocent/image/upload/f_auto/v1604669635/chuckhutchins/wishlist/blackwing-natural-pencils_ogex2u.png" */}
          {/*  name="Blackwing Natural Pencils" */}
          {/*/>*/}
          <WishlistProduct
            link="https://www.google.com/search?q=butchers+near+me"
            image="https://res.cloudinary.com/innocent/image/upload/f_auto/v1604691632/chuckhutchins/wishlist/delicious-meats_ec45nr.png"
            name="Delicious Meats"
          />
          <WishlistProduct
            link="https://www.nintendo.com/giftcards/"
            image="https://res.cloudinary.com/innocent/image/upload/f_auto/v1604691632/chuckhutchins/wishlist/nintendo-eshop-gift-card_mmiz24.png"
            name="Nintendo eShop Card"
          />
          <WishlistProduct
            link="https://www.google.com/search?q=coffee+roasters+near+me"
            image="https://res.cloudinary.com/innocent/image/upload/f_auto/v1604691632/chuckhutchins/wishlist/whole-bean-dark-roast-coffee_sktwuj.png"
            name="Whole Bean Dark Roast Coffee"
          />
        </ul>
        <h3 aria-label="$25 to $99">$$</h3>
        <ul className="product__container">
          <WishlistProduct
            link="https://aeropress.com/product/aeropress-coffee-maker/"
            image="https://res.cloudinary.com/innocent/image/upload/f_auto/v1604698796/chuckhutchins/wishlist/aeropress_t5syyq.png"
            name="Aeropress"
            footnote="1"
          />
          <WishlistProduct
            link="https://www.apple.com/shop/buy-homepod/homepod-mini/space-gray"
            image="https://res.cloudinary.com/innocent/image/upload/f_auto/v1604429870/chuckhutchins/wishlist/homepod-mini_fakxjr.png"
            name="HomePod mini, Space Gray"
          />
          <WishlistProduct
            link="https://herschel.com/shop/duffles/novel-duffle?v=10026-00535-OS"
            image="https://res.cloudinary.com/innocent/image/upload/f_auto/v1604758897/chuckhutchins/wishlist/novel-duffle-black_kody3w.png"
            name="Novel Duffle, Black"
          />
          <WishlistProduct
            link="https://openseadesignco.com/collections/art-prints/products/rebirth"
            image="https://res.cloudinary.com/innocent/image/upload/f_auto/v1604669635/chuckhutchins/wishlist/rebirth-print_y6dboj.png"
            name="Rebirth Print"
          />
          <WishlistProduct
            link="https://www.yubico.com/product/yubikey-5c-nfc/"
            image="https://res.cloudinary.com/innocent/image/upload/f_auto/v1604429870/chuckhutchins/wishlist/yubikey-5c-nfc_fknwmn.png"
            name="YubiKey 5C NFC"
          />
        </ul>
        <h3 aria-label="$100 to $249">$$$</h3>
        <ul className="product__container">
          <WishlistProduct
            link="https://acaia.co/collections/coffee-scales/products/pearl?variant=3791487303703"
            image="https://res.cloudinary.com/innocent/image/upload/f_auto/v1604669635/chuckhutchins/wishlist/acaia-pearl-black_oivrz8.png"
            name="Acaia Pearl, Black"
          />
          {/*<WishlistProduct*/}
          {/*  link="https://www.rei.com/product/128052/nemo-stargaze-recliner-luxury-chair"*/}
          {/*  image="https://res.cloudinary.com/innocent/image/upload/f_auto/v1604667256/chuckhutchins/wishlist/nemo-stargaze-recliner-luxury-chair-graphite-smoke_jkzgfn.png"*/}
          {/*  name="Nemo Stargaze Recliner Luxury Chair, Graphite/Smoke"*/}
          {/*/>*/}
        </ul>
        <h3 aria-label="$250 and over">$$$$</h3>
        <ul className="product__container">
          <WishlistProduct
            link="https://store.hermanmiller.com/office/office-chairs/aeron-chair/2195348.html"
            image="https://res.cloudinary.com/innocent/image/upload/f_auto/v1604667256/chuckhutchins/wishlist/herman-miller-aeron-chair_qudewg.png"
            name="Herman Miller Aeron Chair"
          />
          <WishlistProduct
            link="https://www.vizio.com/en/tv/p-series/P65QX-H1"
            image="https://res.cloudinary.com/innocent/image/upload/f_auto/v1604669635/chuckhutchins/wishlist/p-series-quantum-x-4k-hdr-smart-tv-p65qx-h1_jbcizo.png"
            name="P-Series Quantum X 4K HDR Smart TV, P65QX-H1"
          />
          <WishlistProduct
            link="https://www.vanmoof.com/en-US/s3?color=dark"
            image="https://res.cloudinary.com/innocent/image/upload/f_auto/v1604669635/chuckhutchins/wishlist/vanmoof-s3_ywqduk.png"
            name="VanMoof S3"
          />
        </ul>
      </div>
      <div className="hr--mini" />
      <div>
        <p>1: If you order the Aeropress from <a href="https://www.frenchpresscoffee.com/collections/french-press/products/aeropress-coffee-and-espresso-maker">FrenchPressCoffee.com</a>, it looks like they throw in the bamboo coffee paddle for free. I think it's about the same price for the Aeropress, you just get the $6 paddle for free.</p>
      </div>
      <div className="hr--mini" />
      <div>
        <h2>Changelog</h2>
        <ul className="list">
          <li>2020-12-15 &ndash; Removed Zip Card Holder, Dark Grey. Removed sleep mask and sleep mask footnote. Removed Kånken Organizer, Fog. Removed Kindle Oasis, Graphite.</li>
          <li>2020-11-07 &ndash; Moved sleep mask from copy down to footnotes. Changed footnote asterisks to numbers.</li>
          <li>2020-11-07 &ndash; Added changelog.</li>
          <li>2020-11-07 &ndash; Added Bamboo Coffee Paddle and Novel Duffel.</li>
          <li>2020-11-06 &ndash; Added Aeropress and Weighted Sleep Mask.</li>
          <li>2020-11-06 &ndash; Initial wishlist launch.</li>
        </ul>
      </div>
    </main>
  </Layout>
)

export default IndexPage
