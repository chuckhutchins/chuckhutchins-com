import React from "react";
import Layout from "/src/components/layout";
import SEO from "/src/components/seo";

export default function IndexPage() {
    return (
        <Layout>
            <SEO override={"Video Games - Media Consumption"}/>
            <main className="media-consumption">
                <div>
                    <h2>Video Games</h2>
                    <p>Hey, this is all the stuff I've played since 2020.</p>
                </div>
                <div className="hr--mini"/>
                <div>
                    Video Games
                </div>
            </main>
        </Layout>
    );
}
