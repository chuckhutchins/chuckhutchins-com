import React from "react";
import Badge from "./Badge.js";

export default function Book({ data }) {
    return (
        <li key={`book-${data.index}`} className="book">
            <div className="book__image">
                <Badge data={data} />
                <img src={data.image} alt="" width="315" height="475" loading="lazy" />
            </div>
            <div className="book__content">
                <h3>{data.title}</h3>
                <p>{data.author}</p>
            </div>
        </li>
    )
}
