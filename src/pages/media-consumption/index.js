import React from "react";
import Layout from "/src/components/layout";
import SEO from "/src/components/seo";
import { Link } from "gatsby";

export default function IndexPage() {
    return (
        <Layout>
            <SEO title={"Media Consumption"}/>
            <main className="media-consumption">
                <div>
                    <h2>Media Consumption</h2>
                    <p>Hey, this is all the stuff I've read/watched/played.</p>
                </div>
                <div className="hr--mini"/>
                <div>
                    <ul className="media-consumption__table-of-contents">
                        <li><Link to="./books">Books</Link></li>
                        <li><Link to="./movies">Movies</Link></li>
                        <li><Link to="./tv-shows">TV Shows</Link></li>
                        <li><Link to="./video-games">Video Games</Link></li>
                    </ul>
                </div>
            </main>
        </Layout>
    );
}
