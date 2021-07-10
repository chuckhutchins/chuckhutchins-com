import React from "react";
import Coffee from "./Coffee.js";

export default function CoffeeList({ coffeeList: { coffee } }) {
    return (
        <>
            { filterByCoffeeRating(coffee, 'Five', 5) }
            { filterByCoffeeRating(coffee, 'Four', 4) }
            { filterByCoffeeRating(coffee, 'Three', 3) }
            { filterByCoffeeRating(coffee, 'Two', 2) }
            { filterByCoffeeRating(coffee, 'One', 1) }
        </>
    )
}

function filterByCoffeeRating(list, humanRating, rating) {
    // filter by rating and sort by name
    const filteredList = sortByName(list.filter(item => item.rating === rating));

    // generate star heading
    let stars = '';
    for (let i = 0; i < rating; i++) {
        stars += '★';
    }

    return buildCoffeeList(stars, `${humanRating} Star Rating`, filteredList);
}

function buildCoffeeList(starHeading, heading, list) {
    if (list !== undefined && list.length !== 0) {
        return (
            <>
                <h2 id={convertToSlug(heading)} aria-label={heading}>{starHeading}</h2>
                <ul className="media__wrapper">
                    {list.map((data) => {
                        return <Coffee data={data} key={`media-${data.index}`} />;
                    })}
                </ul>
            </>
        );
    } else {
        return null;
    }
}

function sortByName(list) {
    return [].concat(list)
        .sort((a, b) => {
            return a.name.localeCompare(b.name);
        });
}

function convertToSlug(text) {
    return text
        .toLowerCase()
        .replace(/[^\w ]+/g,'')
        .replace(/ +/g,'-');
}
