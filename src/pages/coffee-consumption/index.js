import React from "react";
import MediaLayout from "/src/components/media-consumption/MediaLayout";
import SEO from "/src/components/seo";
import CoffeeList from "/src/components/coffee-consumption/CoffeeList";
import JSONData from "../../../content/coffee-list.json";

export default function IndexPage() {
    return (
        <MediaLayout>
            <SEO title={"Coffee Consumption"}/>
            <main className="media-consumption">
                <div>
                    <h2>Coffee Consumption</h2>
                    <p>Hey, this is all the different coffee I've consumed.</p>
                    <p>TLDR: Probably a darker roast with a stereotypical coffee taste.</p>
                </div>
                <div>
                    <h3>Jump down to:</h3>
                    <ul className="list">
                        <li><a href="#five-star-rating">Five Star Rating</a></li>
                        <li><a href="#four-star-rating">Four Star Rating</a></li>
                        <li><a href="#three-star-rating">Three Star Rating</a></li>
                        <li><a href="#two-star-rating">Two Star Rating</a></li>
                        <li><a href="#one-star-rating">One Star Rating</a></li>
                    </ul>
                </div>
                <div className="hr--mini"/>
                <div className="media-consumption__media">
                    <CoffeeList coffeeList={JSONData} />
                </div>
            </main>
        </MediaLayout>
    );
}
