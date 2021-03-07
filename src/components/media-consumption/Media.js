import React from "react";
import Badge from "./Badge.js";

export default function Media({ data }) {

    let platform, author, season;
    if (data.platform) {
        platform = <p>{data.platform}</p>;
    }
    if (data.author) {
        author = <p>{data.author}</p>;
    }
    if (data.season) {
        season = <p>Season {data.season}</p>;
    }

    return (
        <li key={`media-${data.index}`} className="media">
            <div className="media__image">
                <Badge data={data} />
                <img src={data.image} alt="" width="315" height="475" loading="lazy" />
            </div>
            <div className="media__content">
                <h3>{data.title}</h3>
                {season}
                {author}
                {platform}
            </div>
        </li>
    )
}
