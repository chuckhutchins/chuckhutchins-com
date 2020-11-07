import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <main className="wishlist">
      <SEO title={'Wishlist'}/>
      <div>
        <h2>Wishlist</h2>
        <p>Don't worry, folks. I know you're ready to spend your hard-earned money on me. Here are a few ideas to get you started.</p>
        <p>One of the downsides to not using some massive conglomerate that sells everything from A to Z (including your data) is that there's no good way to tell what has been purchased by others. Well, only a few of you know about the link to this page, so you guys can work it out amongst yourselves. That's an early gift from me to you.</p>
        <p>One last note: you can get a lot of these things anywhere. I just linked to their "official" sources, but some of these can be gotten on Amazon or at Meijer or something.</p>
        <p>One more last note (about the weighted sleep mask): I really just want a sleep mask. I take a nap every single weekday during lunch, and I am currently using the sleeve of one of my flannels. Not super ideal. Or effective. I just linked the weighted one from Gravity because it's intriguing. But if you get a normal one, that's fine too.</p>
        <p>Last note part three: I'm super fortunate and also don't really _need_ anything, so please consider a donation to a charity or non-profit to help those who do. If you want to donate to a web development cause, I would recommend <a href="https://girlswhocode.com/">Girls Who Code</a> or <a href="https://www.freecodecamp.org/donate">freeCodeCamp</a> or something.</p>
      </div>
      <div className="hr--mini" />
      <div>
        <h3 aria-label="$24 and under">$</h3>
        <ul className="product__container">
          <li>
            <a href="https://www.amazon.com/gift-cards/">
              <div>
                <img src="https://res.cloudinary.com/innocent/image/upload/f_auto/v1604429870/chuckhutchins/wishlist/amazon-gift-card_cwgy6w.png" alt=""/>
              </div>
              <h4>Amazon Gift Card</h4>
            </a>
          </li>
          <li>
            <a href="https://www.frenchpresscoffee.com/products/coffee-stir-paddle-french-press">
              <div>
                <img src="https://res.cloudinary.com/innocent/image/upload/f_auto/v1604755428/chuckhutchins/wishlist/bamboo-coffee-paddle_ojw1oe.png" alt=""/>
              </div>
              <h4>Bamboo Coffee Paddle*</h4>
            </a>
          </li>
          {/*<li>*/}
          {/*  <a href="https://www.macbartender.com/Bartender4/">*/}
          {/*    <div>*/}
          {/*      <img src="https://res.cloudinary.com/innocent/image/upload/f_auto/v1604691632/chuckhutchins/wishlist/bartender-4_vhh4fb.png" alt=""/>*/}
          {/*    </div>*/}
          {/*    <h4>Bartender 4</h4>*/}
          {/*  </a>*/}
          {/*</li>*/}
          {/*<li>*/}
          {/*  <a href="https://blackwing602.com/collections/pencils/products/blackwing-natural-set-of-12">*/}
          {/*    <div>*/}
          {/*      <img src="https://res.cloudinary.com/innocent/image/upload/f_auto/v1604669635/chuckhutchins/wishlist/blackwing-natural-pencils_ogex2u.png" alt=""/>*/}
          {/*    </div>*/}
          {/*    <h4>Blackwing Natural Pencils</h4>*/}
          {/*  </a>*/}
          {/*</li>*/}
          <li>
            <a href="https://www.google.com/search?q=butchers+near+me">
              <div>
                <img src="https://res.cloudinary.com/innocent/image/upload/f_auto/v1604691632/chuckhutchins/wishlist/delicious-meats_ec45nr.png" alt=""/>
              </div>
              <h4>Delicious Meats</h4>
            </a>
          </li>
          <li>
            <a href="https://www.nintendo.com/giftcards/">
              <div>
                <img src="https://res.cloudinary.com/innocent/image/upload/f_auto/v1604691632/chuckhutchins/wishlist/nintendo-eshop-gift-card_mmiz24.png" alt=""/>
              </div>
              <h4>Nintendo eShop Card</h4>
            </a>
          </li>
          <li>
            <a href="https://www.google.com/search?q=coffee+roasters+near+me">
              <div>
                <img src="https://res.cloudinary.com/innocent/image/upload/f_auto/v1604691632/chuckhutchins/wishlist/whole-bean-dark-roast-coffee_sktwuj.png" alt=""/>
              </div>
              <h4>Whole Bean Dark Roast Coffee</h4>
            </a>
          </li>
        </ul>
        <h3 aria-label="$25 to $99">$$</h3>
        <ul className="product__container">
          <li>
            <a href="https://aeropress.com/product/aeropress-coffee-maker/">
              <div>
                <img src="https://res.cloudinary.com/innocent/image/upload/f_auto/v1604698796/chuckhutchins/wishlist/aeropress_t5syyq.png" alt=""/>
              </div>
              <h4>Aeropress*</h4>
            </a>
          </li>
          <li>
            <a href="https://www.apple.com/shop/buy-homepod/homepod-mini/space-gray">
              <div>
                <img src="https://res.cloudinary.com/innocent/image/upload/f_auto/v1604429870/chuckhutchins/wishlist/homepod-mini_fakxjr.png" alt=""/>
              </div>
              <h4>HomePod mini, Space Gray</h4>
            </a>
          </li>
          <li>
            <a href="https://www.fjallraven.com/us/en-us/bags-gear/accessories/backpack-bag-accessories/kanken-organizer">
              <div>
                <img src="https://res.cloudinary.com/innocent/image/upload/f_auto/v1604429870/chuckhutchins/wishlist/kanken-organzier-fog_noobdk.png" alt=""/>
              </div>
              <h4>Kånken Organizer, Fog</h4>
            </a>
          </li>
          {/*<li>*/}
          {/*  <a href="https://mastergatsby.com/">*/}
          {/*    <div>*/}
          {/*      <img src="https://res.cloudinary.com/innocent/image/upload/f_auto/v1604691632/chuckhutchins/wishlist/master-gatsby_we9t1k.png" alt=""/>*/}
          {/*    </div>*/}
          {/*    <h4>Master Gatsby Course</h4>*/}
          {/*  </a>*/}
          {/*</li>*/}
          <li>
            <a href="https://herschel.com/shop/duffles/novel-duffle?v=10026-00535-OS">
              <div>
                <img src="https://res.cloudinary.com/innocent/image/upload/f_auto/v1604758897/chuckhutchins/wishlist/novel-duffle-black_kody3w.png" alt=""/>
              </div>
              <h4>Novel Duffle, Black</h4>
            </a>
          </li>
          <li>
            <a href="https://openseadesignco.com/collections/art-prints/products/rebirth">
              <div>
                <img src="https://res.cloudinary.com/innocent/image/upload/f_auto/v1604669635/chuckhutchins/wishlist/rebirth-print_y6dboj.png" alt=""/>
              </div>
              <h4>Rebirth Print</h4>
            </a>
          </li>
          <li>
            <a href="https://gravityblankets.com/products/the-gravity-sleep-mask">
              <div>
                <img src="https://res.cloudinary.com/innocent/image/upload/f_auto/v1604698797/chuckhutchins/wishlist/weighted-sleep-mask_ruex0e.png" alt=""/>
              </div>
              <h4>Weighted Sleep Mask</h4>
            </a>
          </li>
          <li>
            <a href="https://www.yubico.com/product/yubikey-5c-nfc/">
              <div>
                <img src="https://res.cloudinary.com/innocent/image/upload/f_auto/v1604429870/chuckhutchins/wishlist/yubikey-5c-nfc_fknwmn.png" alt=""/>
              </div>
              <h4>YubiKey 5C NFC</h4>
            </a>
          </li>
          <li>
            <a href="https://www.fjallraven.com/us/en-us/bags-gear/accessories/travel-accessories/zip-card-holder">
              <div>
                <img src="https://res.cloudinary.com/innocent/image/upload/f_auto/v1604429870/chuckhutchins/wishlist/zip-card-holder-dark-grey_uck0xi.png" alt=""/>
              </div>
              <h4>Zip Card Holder, Dark Grey</h4>
            </a>
          </li>
        </ul>
        <h3 aria-label="$100 to $249">$$$</h3>
        <ul className="product__container">
          <li>
            <a href="https://acaia.co/collections/coffee-scales/products/pearl?variant=3791487303703">
              <div>
                <img src="https://res.cloudinary.com/innocent/image/upload/f_auto/v1604669635/chuckhutchins/wishlist/acaia-pearl-black_oivrz8.png" alt=""/>
              </div>
              <h4>Acaia Pearl, Black</h4>
            </a>
          </li>
          <li>
            <a href="https://www.amazon.com/All-new-Kindle-Oasis-adjustable-auto-renewal/dp/B07VDMJJLG/">
              <div>
                <img src="https://res.cloudinary.com/innocent/image/upload/f_auto/v1604429870/chuckhutchins/wishlist/kindle-oasis_yiorai.png" alt=""/>
              </div>
              <h4>Kindle Oasis, Graphite</h4>
            </a>
          </li>
          {/*<li>*/}
          {/*  <a href="https://www.rei.com/product/128052/nemo-stargaze-recliner-luxury-chair">*/}
          {/*    <div>*/}
          {/*      <img src="https://res.cloudinary.com/innocent/image/upload/f_auto/v1604667256/chuckhutchins/wishlist/nemo-stargaze-recliner-luxury-chair-graphite-smoke_jkzgfn.png" alt=""/>*/}
          {/*    </div>*/}
          {/*    <h4>Nemo Stargaze Recliner Luxury Chair, Graphite/Smoke</h4>*/}
          {/*  </a>*/}
          {/*</li>*/}
        </ul>
        <h3 aria-label="$250 and over">$$$$</h3>
        <ul className="product__container">
          <li>
            <a href="https://store.hermanmiller.com/office/office-chairs/aeron-chair/2195348.html">
              <div>
                <img src="https://res.cloudinary.com/innocent/image/upload/f_auto/v1604667256/chuckhutchins/wishlist/herman-miller-aeron-chair_qudewg.png" alt=""/>
              </div>
              <h4>Herman Miller Aeron Chair</h4>
            </a>
          </li>
          <li>
            <a href="https://www.vizio.com/en/tv/p-series/P65QX-H1">
              <div>
                <img src="https://res.cloudinary.com/innocent/image/upload/f_auto/v1604669635/chuckhutchins/wishlist/p-series-quantum-x-4k-hdr-smart-tv-p65qx-h1_jbcizo.png" alt=""/>
              </div>
              <h4>P-Series Quantum X 4K HDR Smart TV, P65QX-H1</h4>
            </a>
          </li>
          <li>
            <a href="https://www.vanmoof.com/en-US/s3?color=dark">
              <div>
                <img src="https://res.cloudinary.com/innocent/image/upload/f_auto/v1604669635/chuckhutchins/wishlist/vanmoof-s3_ywqduk.png" alt=""/>
              </div>
              <h4>VanMoof S3</h4>
            </a>
          </li>
        </ul>
      </div>
      <div className="hr--mini" />
      <div>
        <p>* If you order the Aeropress from <a href="https://www.frenchpresscoffee.com/collections/french-press/products/aeropress-coffee-and-espresso-maker">FrenchPressCoffee.com</a>, it looks like they throw in the bamboo coffee paddle for free. I think it's about the same price for the Aeropress, you just get the $6 paddle for free.</p>
      </div>
      <div className="hr--mini" />
      <div>
        <h2>Changelog</h2>
        <ul className="list">
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
