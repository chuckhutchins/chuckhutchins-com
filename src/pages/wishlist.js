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
      </div>
      <div className="hr--mini" />
      <div>
        <h3>Fun Things</h3>
        <ul className="product__container">
          <li>
            <a href="https://www.fjallraven.com/us/en-us/bags-gear/accessories/backpack-bag-accessories/kanken-organizer">
              <img src="https://res.cloudinary.com/innocent/image/upload/f_auto/v1604359037/chuckhutchins/kanken-organizer-fog_ejjusb.png" alt=""/>
              <h4>Kånken Organizer, Fog</h4>
              <p>Because they don't have black :(</p>
            </a>
          </li>
          <li>
            <a href="https://openseadesignco.com/collections/art-prints/products/rebirth">
              <img src="https://placehold.it/330x330" alt=""/>
              <h4>Rebirth Print</h4>
            </a>
          </li>
          <li>
            <a href="https://www.fjallraven.com/us/en-us/bags-gear/accessories/travel-accessories/zip-card-holder">
              <img src="https://placehold.it/330x330" alt=""/>
              <h4>Zip Card Holder, Dark Grey</h4>
              <p>This is so I can store emergency cash and/or "conditional" cards in my backpack</p>
            </a>
          </li>
          <li>
            <a href="https://www.fjallraven.com/us/en-us/bags-gear/accessories/travel-accessories/leather-luggage-tag">
              <img src="https://placehold.it/330x330" alt=""/>
              <h4>Leather Luggage Tag, Black</h4>
              <p>If we ever get to travel again</p>
            </a>
          </li>
          <li>
            <a href="https://www.fjallraven.com/us/en-us/kids/accessories/kanken-keyring">
              <img src="https://placehold.it/330x330" alt=""/>
              <h4>Kånken Keyring, Black (x2)</h4>
            </a>
          </li>
          <li>
            <a href="https://www.vizio.com/tvs/p659g1.html">
              <img src="https://placehold.it/330x330" alt=""/>
              <h4>Vizio P-Series Quantum 65" Class 4K HDR Smart TV, P659-H1</h4>
              <p>I need to do more TV research because I bookmarked this a long time ago</p>
            </a>
          </li>
          <li>
            <a href="https://www.rei.com/product/128052/nemo-stargaze-recliner-luxury-chair">
              <img src="https://placehold.it/330x330" alt=""/>
              <h4>Nemo Stargaze Recliner Luxury Chair, Graphite/Smoke</h4>
            </a>
          </li>
          <li>
            <a href="https://www.vanmoof.com/en-US/s3?color=dark">
              <img src="https://placehold.it/330x330" alt=""/>
              <h4>VanMoof S3</h4>
            </a>
          </li>
          <li>
            <a href="https://shop.thejamesbrand.com/products/the-hardin?variant=30552406851654">
              <img src="https://placehold.it/330x330" alt=""/>
              <h4>The Hardin Carabiner, Black</h4>
            </a>
          </li>
          <li>
            <a href="https://bellroy.com/products/key-cover/leather_standard/black">
              <img src="https://placehold.it/330x330" alt=""/>
              <h4>Bellroy Key Cover, Black</h4>
            </a>
          </li>
          <li>
            <a href="https://www.amazon.com/gift-cards/b/">
              <img src="https://placehold.it/330x330" alt=""/>
              <h4>Amazon Gift Card</h4>
              <p>So I can purchase books on my Kindle account</p>
            </a>
          </li>
          <li>
            <a href="https://www.amazon.com/All-new-Kindle-Oasis-adjustable-auto-renewal/dp/B07VDMJJLG/">
              <img src="https://placehold.it/330x330" alt=""/>
              <h4>Kindle Oasis, Graphite</h4>
            </a>
          </li>
          <li>
            <a href="https://acaia.co/collections/coffee-scales/products/pearl?variant=3791487303703">
              <img src="https://placehold.it/330x330" alt=""/>
              <h4>Acaia Pearl, Black</h4>
            </a>
          </li>
          <li>
            <a href="https://www.apple.com/shop/buy-homepod/homepod-mini">
              <img src="https://placehold.it/330x330" alt=""/>
              <h4>HomePod mini, Space Gray</h4>
            </a>
          </li>
        </ul>
        <h3>Developer Things</h3>
        <ul className="product__container">
          <li>
            <a href="https://mastergatsby.com/">
              <img src="https://placehold.it/330x330" alt=""/>
              <h4>Master Gatsby Course</h4>
              <p>I will be buying this so it links to my account</p>
            </a>
          </li>
          <li>
            <a href="https://www.macbartender.com/">
              <img src="https://placehold.it/330x330" alt=""/>
              <h4>Bartender 3</h4>
              <p>I will be buying this so it links to my account</p>
          </a>
          </li>
        </ul>
        <h3>Office Things</h3>
        <ul className="product__container">
          <li>
            <a href="https://blackwing602.com/collections/pencils/products/blackwing-natural-set-of-12">
              <img src="https://placehold.it/330x330" alt=""/>
              <h4>Blackwing Natural Pencils</h4>
            </a>
          </li>
          <li>
            <a href="https://www.yubico.com/product/yubikey-5c-nfc/">
              <img src="https://placehold.it/330x330" alt=""/>
              <h4>YubiKey 5C NFC</h4>
            </a>
          </li>
          <li>
            <a href="https://www.samsung.com/us/computing/memory-storage/portable-solid-state-drives/portable-ssd-t7-usb-3-2-500gb--gray--mu-pc500t-am/">
              <img src="https://placehold.it/330x330" alt=""/>
              <h4>Portable SSD T7, Gray</h4>
              <p>Need to revisit this because I want to find a USB-C model</p>
          </a>
          </li>
          <li>
            <a href="https://store.hermanmiller.com/office/office-chairs/aeron-chair/2195348.html">
              <img src="https://placehold.it/330x330" alt=""/>
              <h4>Herman Miller Aeron Chair</h4>
            </a>
          </li>
        </ul>
      </div>
    </main>
  </Layout>
)

export default IndexPage
