import React from "react";

export default function Badge({ data }) {
    let badge;

    if (data.rating === 'Like') {
        badge = <BadgeLike />;
    } else if (data.rating === 'Dislike') {
        badge = <BadgeDislike />;
    } else if (data.end !== '' && data.finish === 0) {
        badge = <BadgeDidNotFinish />;
    } else {
        badge = null;
    }

    return (
        <>
            {badge}
        </>
    );
}

function BadgeLike() {
    return (
        <div className="badge badge--like"><span role="img" aria-label="Rating: liked">❤️</span></div>
    );
}

function BadgeDislike() {
    return (
        <div className="badge badge--dislike"><span role="img" aria-label="Rating: disliked">💔</span></div>
    );
}

function BadgeDidNotFinish() {
    return (
        <div className="badge badge--dnf" aria-label="Did not finish">DNF</div>
    );
}
