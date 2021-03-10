import React from "react";
import Layout from "/src/components/layout";
import SEO from "/src/components/seo";
import { Link } from "gatsby";
import BookIcon from "/src/components/icons/BookIcon";
import MovieIcon from "/src/components/icons/MovieIcon";
import TVShowIcon from "/src/components/icons/TVShowIcon";
import VideoGameIcon from "/src/components/icons/VideoGameIcon";

export default function IndexPage() {
    console.log(BookIcon);
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
                        <li><Link to="./books"><BookIcon /> Books</Link></li>
                        <li><Link to="./movies"><MovieIcon /> Movies</Link></li>
                        <li><Link to="./tv-shows"><TVShowIcon /> TV Shows</Link></li>
                        <li><Link to="./video-games"><VideoGameIcon /> Video Games</Link></li>
                    </ul>
                </div>
            </main>
        </Layout>
    );
}
