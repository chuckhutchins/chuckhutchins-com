import React from "react"
import styled from "styled-components"

const HauntsStyles = styled.ul`
    display: flex;

    li {
        line-height: 1;

        + li {
            margin-left: 1rem;
        }
    }
`;

export default function Haunts() {
    return (
        <HauntsStyles className="haunts">
            <li className="email"><a href="mailto:chuck@chuckhutchins.com" aria-label="Email Me">chuck@chuckhutchins.com</a></li>
            <li className="linkedin"><a href="https://www.linkedin.com/in/chuckhutchinsdesign/" aria-label="View Me on LinkedIn">LinkedIn</a></li>
        </HauntsStyles>
    )
}
