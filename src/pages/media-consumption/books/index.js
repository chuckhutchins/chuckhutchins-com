import React from "react";
import MediaLayout from "/src/components/media-consumption/MediaLayout";
import SEO from "/src/components/seo";
import MediaList from "/src/components/media-consumption/MediaList";
import JSONData from "../../../../content/book-list.json"
import ReturnToLink from "../../../components/media-consumption/ReturnToLink"

export default function IndexPage() {
    return (
        <MediaLayout>
            <SEO override={"Books - Media Consumption"}/>
            <main className="media-consumption">
                <div>
                    <h2>Books</h2>
                    <p>Hey, this is all the stuff I've read since 2020.</p>
                </div>
                <div>
                    <ReturnToLink page="media consumption" />
                </div>
                <div className="hr--mini"/>
                <div className="media-consumption__media">
                    <MediaList mediaList={JSONData} />
                </div>
                <div className="hr--mini"/>
                <div>
                    <ReturnToLink page="media consumption" />
                </div>
            </main>
        </MediaLayout>
    );
}
