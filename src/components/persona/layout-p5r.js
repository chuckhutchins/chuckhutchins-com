import React from "react";
import Header from "./header-p5r";
import Footer from "./footer-p5r";
import styled from "styled-components";
import "/src/assets/scss/main.scss";

const PersonaLayout = styled.div`
    &.container {
        width: calc(100% - 2rem);
        max-width: 672px;
    }

    main > div {
        align-self: start;
        display: grid;
        grid-gap: 2rem;
    }

    h3 {
        margin-bottom: 1rem;
    }

    h4 {
        margin-bottom: .25rem;
    }

    ul:not(.haunts) {
        padding-left: 1rem;
        margin-bottom: 1rem;
        list-style: square;
        
        li {
            line-height: 1.5;
        }
    }
`;

export default function Layout({ children }) {
    return (
        <PersonaLayout className="container">
            <Header />
            {children}
            <Footer />
        </PersonaLayout>
    );
}
