import React from 'react';
import { graphql, Link } from 'gatsby';

export default function MediaConsumptionTemplate({data}) {
    console.log(data.file);
    const item = data.file.childMarkdownRemark.frontmatter;

    return (
        <>
            <h1>{item.title}</h1>
            <ul>
                <li>Medium: {item.medium}</li>
                <li>Started: {item.start}</li>
                <li>End: {item.end}</li>
                {(item.love) && <li>Loved it</li>}
            </ul>
            <Link to={`/media-consumption`}>Back to list</Link>
        </>
    )
}

export const pageQuery = graphql`
    query($slug: String!) {
        file(name: {eq: $slug}) {
            childMarkdownRemark {
                frontmatter {
                    title
                    medium
                    start(formatString: "MMMM D, YYYY")
                    end(formatString: "MMMM D, YYYY")
                    finish
                    love
                    hate
                }
            }
        }
    }
`
