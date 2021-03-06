import React from "react";
import Book from "./Book.js";
import JSONData from "../../../content/book-list.json";

export default function BookList() {
    // reverse data coming in
    const books = JSONData.books.reverse();

    // filter the arrays based on type
    const finished = books.filter(book => (book.finish === 1) || (book.finish === 0 && book.end !== ""));
    const inProgress = books.filter(book => book.finish === 0 && book.end === "");

    return (
        <>
            <h2>In Progress</h2>
            <ul className="book__wrapper">
                {inProgress.map((data) => {
                    return <Book data={data} />
                })}
            </ul>
            <h2>Finished</h2>
            <ul className="book__wrapper">
                {finished.map((data) => {
                    return <Book data={data} />
                })}
            </ul>
        </>
    )
}
