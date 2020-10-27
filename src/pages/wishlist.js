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
        <ul className="list">
          <li><a href="https://www.fjallraven.com/us/en-us/bags-gear/accessories/backpack-bag-accessories/kanken-organizer">Kånken Organizer, Fog</a> - Because they don't have black :(</li>
          <li><a href="https://openseadesignco.com/collections/art-prints/products/rebirth">Rebirth Print</a></li>
          <li><a href="https://www.fjallraven.com/us/en-us/bags-gear/accessories/travel-accessories/zip-card-holder">Zip Card Holder, Dark Grey</a> - This is so I can store emergency cash and/or "conditional" cards in my backpack</li>
          <li><a href="https://www.fjallraven.com/us/en-us/bags-gear/accessories/travel-accessories/leather-luggage-tag">Leather Luggage Tag, Black</a> - If we ever get to travel again</li>
          <li><a href="https://www.fjallraven.com/us/en-us/kids/accessories/kanken-keyring">Kånken Keyring, Black (x2)</a></li>
          <li><a href="https://www.vizio.com/tvs/p659g1.html">Vizio P-Series Quantum 65" Class 4K HDR Smart TV, P659-G1</a> - I need to do more TV research because I bookmarked this a long time ago</li>
          <li><a href="https://www.rei.com/product/128052/nemo-stargaze-recliner-luxury-chair">Nemo Stargaze Recliner Luxury Chair, Graphite/Smoke</a></li>
          <li><a href="https://www.vanmoof.com/en-US/s3?color=dark">VanMoof S3</a></li>
          <li><a href="https://shop.thejamesbrand.com/products/the-hardin?variant=30552406851654">The Hardin Carabiner, Black</a></li>
          <li><a href="https://bellroy.com/products/key-cover/leather_standard/black">Bellroy Key Cover, Black</a></li>
          <li><a href="https://www.amazon.com/gift-cards/b/">Amazon Gift Card</a> - So I can purchase books on my Kindle account</li>
          <li><a href="https://www.amazon.com/All-new-Kindle-Oasis-adjustable-auto-renewal/dp/B07VDMJJLG/">Kindle Oasis, Graphite</a></li>
          <li><a href="https://acaia.co/collections/coffee-scales/products/pearl?variant=3791487303703">Acaia Pearl, Black</a></li>
        </ul>
        <h3>Developer Things</h3>
        <ul className="list">
          <li><a href="https://mastergatsby.com/">Master Gatsby Course</a> - I will be buying this so it links to my account</li>
          <li><a href="https://www.macbartender.com/">Bartender 3</a> - I will be buying this so it links to my account</li>
        </ul>
        <h3>Office Things</h3>
        <ul className="list">
          <li><a href="https://blackwing602.com/collections/pencils/products/blackwing-natural-set-of-12">Blackwing Natural Pencils</a></li>
          <li><a href="https://www.yubico.com/product/yubikey-5c-nfc/">YubiKey 5C NFC</a></li>
          <li><a href="https://www.samsung.com/us/computing/memory-storage/portable-solid-state-drives/portable-ssd-t7-usb-3-2-500gb--gray--mu-pc500t-am/">Portable SSD T7, Gray</a> - Need to revisit this because I want to find a USB-C model</li>
        </ul>
      </div>
    </main>
  </Layout>
)

export default IndexPage
