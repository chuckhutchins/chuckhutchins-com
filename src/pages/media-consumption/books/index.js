import React from "react";
import Layout from "/src/components/layout";
import SEO from "/src/components/seo";
import MediaList from "/src/components/media-consumption/MediaList";
import JSONData from "../../../../content/book-list.json"

export default function IndexPage() {
    return (
        <Layout>
            <SEO override={"Books - Media Consumption"}/>
            <main className="media-consumption">
                <div>
                    <h2>Books</h2>
                    <p>Hey, this is all the stuff I've read since 2020.</p>
                </div>
                <div className="hr--mini"/>
                <div className="media-consumption__media">
                    <MediaList mediaList={JSONData} />
                </div>
            </main>
        </Layout>
    );
}
