import React from "react";

export default function Coffee({ data }) {
    return (
        <li className="media">
            <div className="media__content">
                <h3>{data.name}</h3>
                <p>{data.roaster}</p>
            </div>
        </li>
    );
}
