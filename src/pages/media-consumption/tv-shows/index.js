import React from "react";
import Layout from "/src/components/layout";
import SEO from "/src/components/seo";

export default function IndexPage() {
    return (
        <Layout>
            <SEO override={"TV Shows - Media Consumption"}/>
            <main className="media-consumption">
                <div>
                    <h2>TV Shows</h2>
                    <p>Hey, this is all the stuff I've watched since 2020.</p>
                </div>
                <div className="hr--mini"/>
                <div>
                    TV Shows
                </div>
            </main>
        </Layout>
    );
}
