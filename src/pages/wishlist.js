import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import WishlistProduct from "../components/wishlist/wishlist-product"
import styled from "styled-components"

const WishlistLayout = styled.div`
    align-self: start;
    display: grid;
    grid-gap: 2rem;
    
    .hr--mini {
        grid-column: span 1;
    }

    h3 {
        margin-bottom: .5rem;
    }

    .product__container {
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
`

export default function WishlistPage() {
    return (
        <Layout>
            <main className="wishlist">
                <SEO title={"Wishlist"} />
                <WishlistLayout>
                    <div>
                        <h2>Wishlist</h2>
                        <p>Don't worry, folks. I know you're ready to spend your hard-earned money on me. Here are a few ideas to get you started.</p>
                        <p>One of the downsides to not using some massive conglomerate that sells everything from A to Z (including your data) is that there's no good way to tell what has been purchased by others. Well, only a few of you know about the link to this page, so you guys can work it out amongst yourselves. That's an early gift from me to you.</p>
                        <p>One last note: you can get a lot of these things anywhere. I just linked to their "official" sources, but some of these can be gotten on Amazon or at Meijer or something.</p>
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
                            {/*<WishlistProduct*/}
                            {/*  link="https://blackwing602.com/collections/pencils/products/blackwing-natural-set-of-12"*/}
                            {/*  image="https://res.cloudinary.com/innocent/image/upload/f_auto/v1604669635/chuckhutchins/wishlist/blackwing-natural-pencils_ogex2u.png"*/}
                            {/*  name="Blackwing Natural Pencils"*/}
                            {/*/>*/}
                            <WishlistProduct
                                link="https://littledebbie.com/www/snackproducts/view/57/christmas-tree-cakes-van"
                                image="https://res.cloudinary.com/innocent/image/upload/f_auto/v1604429870/chuckhutchins/wishlist/christmas-tree-cakes_pvkvdx.png"
                                name="Christmas Tree Cakes, Vanilla"
                            />
                            <WishlistProduct
                                link="https://www.google.com/search?q=butchers+near+me"
                                image="https://res.cloudinary.com/innocent/image/upload/f_auto/v1604691632/chuckhutchins/wishlist/delicious-meats_ec45nr.png"
                                name="Delicious Meats (New York Strip, Chuck Roast)"
                            />
                            <WishlistProduct
                                link="https://www.kroger.com/p/kroger-hot-spicy-naturally-flavored-peanuts-with-sea-salt/0001111001951"
                                image="https://res.cloudinary.com/innocent/image/upload/f_auto/v1604429870/chuckhutchins/wishlist/hot-and-spicy-peanuts_nsmyqp.png"
                                name="Kroger Hot & Spicy Peanuts"
                            />
                            <WishlistProduct
                                link="https://www.nintendo.com/giftcards/"
                                image="https://res.cloudinary.com/innocent/image/upload/f_auto/v1604691632/chuckhutchins/wishlist/nintendo-eshop-gift-card_mmiz24.png"
                                name="Nintendo eShop Gift Card"
                            />
                            <WishlistProduct
                                link="https://www.playstation.com/en-us/playstation-gift-cards/"
                                image="https://res.cloudinary.com/innocent/image/upload/f_auto/v1604691632/chuckhutchins/wishlist/playstation-store-gift-card_zyyqew.png"
                                name="PlayStation Store Gift Card"
                            />
                            <WishlistProduct
                                link="https://www.google.com/search?q=coffee+roasters+near+me"
                                image="https://res.cloudinary.com/innocent/image/upload/f_auto/v1604691632/chuckhutchins/wishlist/whole-bean-dark-roast-coffee_sktwuj.png"
                                name="Whole Bean Dark Roast Coffee"
                            />
                        </ul>
                    </div>
                    <div>
                        <h3 aria-label="$25 to $99">$$</h3>
                        <ul className="product__container">
                            <WishlistProduct
                                link="https://www.graylingceramics.com/products/cup"
                                image="https://res.cloudinary.com/innocent/image/upload/f_auto/v1615642503/chuckhutchins/wishlist/coffee-cup-charcoal_zmvclz.png"
                                name="Coffee Cup, Charcoal"
                            />
                            <WishlistProduct
                                link="https://www.mujjo.com/touchscreen-gloves/double-layered-touchscreen-gloves/"
                                image="https://res.cloudinary.com/innocent/image/upload/f_auto/v1615642503/chuckhutchins/wishlist/mujjo-double-layered-touchscreen-gloves_zw5vdd.png"
                                name="Mujjo Double-Layered Touchscreen Gloves, Large"
                            />
                            <WishlistProduct
                                link="https://www.yubico.com/product/yubikey-5c-nfc/"
                                image="https://res.cloudinary.com/innocent/image/upload/f_auto/v1604429870/chuckhutchins/wishlist/yubikey-5c-nfc_fknwmn.png"
                                name="YubiKey 5C NFC"
                            />
                        </ul>
                    </div>
                    <div>
                        <h3 aria-label="$100 to $249">$$$</h3>
                        <ul className="product__container">
                            <WishlistProduct
                                link="https://acaia.co/collections/coffee-scales/products/pearl?variant=3791487303703"
                                image="https://res.cloudinary.com/innocent/image/upload/f_auto/v1604669635/chuckhutchins/wishlist/acaia-pearl-black_oivrz8.png"
                                name="Acaia Pearl, Black"
                            />
                            <WishlistProduct
                                link="https://anovaculinary.com/anova-precision-cooker/nano/"
                                image="https://res.cloudinary.com/innocent/image/upload/f_auto/v1604669635/chuckhutchins/wishlist/anova-precision-cooker-nano_ruvaqx.png"
                                name="Anova Precision Cooker Nano"
                            />
                            <WishlistProduct
                                link="https://www.patagonia.com/product/mens-better-sweater-fleece-jacket/25528.html?dwvar_25528_color=BLK"
                                image="https://res.cloudinary.com/innocent/image/upload/f_auto/v1604669635/chuckhutchins/wishlist/patagonia-better-sweater-fleece-jacket_agtqog.png"
                                name="Patagonia Better Sweater Fleece Jacket, Black, Large"
                            />
                        </ul>
                    </div>
                    <div>
                        <h3 aria-label="$250 and over">$$$$</h3>
                        <ul className="product__container">
                            <WishlistProduct
                                link="https://store.hermanmiller.com/office/office-chairs/aeron-chair/2195348.html"
                                image="https://res.cloudinary.com/innocent/image/upload/f_auto/v1604667256/chuckhutchins/wishlist/herman-miller-aeron-chair_qudewg.png"
                                name="Herman Miller Aeron Chair"
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
                        <h2>Changelog</h2>
                        <ul className="list">
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
                </WishlistLayout>
            </main>
        </Layout>
    )
}
