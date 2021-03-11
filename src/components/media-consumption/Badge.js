import React from "react";
import HeartIcon from "/src/components/icons/HeartIcon";
import HeartBrokenIcon from "/src/components/icons/HeartBrokenIcon";

export default function Badge({ data }) {
    let badge = null;

    if (data.rating === 'Dislike' && data.end !== '' && data.finish === 0) {
        badge = <BadgeOhSoBad />;
    } else if (data.rating === 'Like') {
        badge = <BadgeLike />;
    } else if (data.rating === 'Dislike') {
        badge = <BadgeDislike />;
    } else if (data.end !== '' && data.finish === 0) {
        badge = <BadgeDidNotFinish />;
    }

    return (
        <>
            {badge}
        </>
    );
}

function BadgeLike() {
    return (
        <div className="badge badge--like" aria-label="Rating: Like"><HeartIcon /></div>
    );
}

function BadgeDislike() {
    return (
        <div className="badge badge--dislike" aria-label="Rating: Dislike"><HeartBrokenIcon /></div>
    );
}

function BadgeDidNotFinish() {
    return (
        <div className="badge badge--dnf" aria-label="Did not finish">DNF</div>
    );
}

function BadgeOhSoBad() {
    return (
        <>
            <BadgeDislike />
            <BadgeDidNotFinish />
        </>
    )
}
