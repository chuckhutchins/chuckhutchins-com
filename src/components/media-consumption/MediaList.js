import React from "react";
import Media from "./Media.js";

export default function MediaList({ mediaList }) {
    // get type of media
    const mediaType = Object.keys(mediaList);

    // reverse data coming in
    // slice is used to create a shallow copy before reversing
    // reversing directly on the data causing weird mutation/state issues
    const media = mediaList[mediaType].slice().reverse();

    const inProgressList = getInProgressMediaList(media);
    const finishedList = getFinishedMediaList(media);

    return (
        <>
            {inProgressList}
            {finishedList}
        </>
    )
}

function getInProgressMediaList(media) {
    const inProgress = media.filter(item => item.finish === 0 && item.end === "");

    return buildMediaList('In Progress', inProgress);
}

function getFinishedMediaList(media) {
    const finished = media.filter(item => (item.finish === 1) || (item.finish === 0 && item.end !== ""));

    return buildMediaList('Finished', finished);
}

function buildMediaList(header, media) {
    if (media !== undefined && media.length !== 0) {
        return (
            <>
                <h2>{header}</h2>
                <ul className="media__wrapper">
                    {media.map((data) => {
                        return <Media data={data} key={`media-${data.index}`} />;
                    })}
                </ul>
            </>
        );
    } else {
        return null;
    }
}
