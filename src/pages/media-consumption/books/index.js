import React from "react";
import Layout from "/src/components/layout";
import SEO from "/src/components/seo";
import BookList from "/src/components/media-consumption/BookList";

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
                <div className="media-consumption__books">
                    <BookList />
                </div>
            </main>
        </Layout>
    );
}
