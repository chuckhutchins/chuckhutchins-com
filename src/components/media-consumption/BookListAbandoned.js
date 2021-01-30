import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

export default function BookListAbandoned() {
    const data = useStaticQuery(graphql`
        query booksAbandonedQuery {
            files: allFile(filter: {
                sourceInstanceName: {eq: "books"}
                childMarkdownRemark: {
                    frontmatter: {
                        end: {ne: null}
                        finish: {eq: false}
                    }
                }
            }) {
                edges {
                    node {
                        markdown: childMarkdownRemark {
                            frontmatter {
                                title
                            }
                        }
                        id
                        name
                    }
                }
            }
        }
    `);
    const books = data.files.edges;

    return (
        <>
            <h3>2020 - Books - Abandoned</h3>
            <ul>
                {books.map((book) => (
                    <li key={book.node.id}>
                        <Link to={`/media-consumption/books/${book.node.name}`}>
                            {book.node.markdown.frontmatter.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    )
}
