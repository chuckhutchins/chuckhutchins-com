import React from "react";
import Media from "./Media.js";

export default function MediaList({ mediaList }) {
    // get type of media
    const mediaType = Object.keys(mediaList);

    // reverse data coming in
    const media = mediaList[mediaType].reverse();

    // filter the arrays based on type
    const finished = media.filter(item => (item.finish === 1) || (item.finish === 0 && item.end !== ""));
    const inProgress = media.filter(item => item.finish === 0 && item.end === "");

    // make sure arrays aren't empty before showing the list
    let inProgressList, finishedList;
    if (inProgress !== undefined && inProgress.length !== 0) {
        inProgressList =
            <>
                <h2>In Progress</h2>
                <ul className="media__wrapper">
                    {inProgress.map((data) => {
                        return <Media data={data} key={data.index} />
                    })}
                </ul>
            </>;
    }
    if (finished !== undefined && finished.length !== 0) {
        finishedList =
            <>
                <h2>Finished</h2>
                <ul className="media__wrapper">
                    {finished.map((data) => {
                        return <Media data={data} key={data.index} />
                    })}
                </ul>
            </>;
    }

    return (
        <>
            {inProgressList}
            {finishedList}
        </>
    )
}
