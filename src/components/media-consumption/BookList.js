import React from "react"
import BookListAbandoned from "./BookListAbandoned"
import BookListInProgress from "./BookListInProgress"
import BookListCompleted from "./BookListCompleted"

export default function BookList() {
    return (
        <>
            <BookListInProgress />
            <BookListCompleted />
            <BookListAbandoned />
        </>
    )
}
