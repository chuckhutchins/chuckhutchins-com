import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const PersonaHeader = styled.header`
    a {
        line-height: 1;
    }
`;

export default function Header() {
    return (
        <PersonaHeader>
            <h1>Persona 5 Royal</h1>
            <Link to="/p5r">Guide homepage</Link>
        </PersonaHeader>
    );
}
