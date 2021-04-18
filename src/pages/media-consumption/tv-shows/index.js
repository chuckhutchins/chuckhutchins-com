import React from "react";
import MediaLayout from "/src/components/media-consumption/MediaLayout";
import SEO from "/src/components/seo";
import MediaList from "../../../components/media-consumption/MediaList"
import JSONData from "../../../../content/tv-show-list.json"
import ReturnToLink from "../../../components/media-consumption/ReturnToLink"

export default function IndexPage() {
    return (
        <MediaLayout>
            <SEO override={"TV Shows - Media Consumption"}/>
            <main className="media-consumption">
                <div>
                    <h2>TV Shows</h2>
                    <p>Hey, this is all the stuff I've watched since 2020.</p>
                </div>
                <div>
                    <h3>Jump down to:</h3>
                    <ul className="list">
                        <li><a href="#in-progress">In Progress</a></li>
                        <li><a href="#finished">Finished</a></li>
                        <li><a href="#abandoned">Abandoned</a></li>
                    </ul>
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
