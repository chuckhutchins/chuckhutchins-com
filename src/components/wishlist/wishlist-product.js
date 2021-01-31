import React from "react"
import styled from "styled-components"

const WishlistItem = styled.li`
    a {
        display: block;
        border-bottom: none;

        &:hover,
        &:focus {
            img {
                background-color: transparent;
            }

            h4 {
                border-bottom-color: transparent;
            }
        }

        div {
            overflow: hidden;
            border-radius: .125rem;
            margin-bottom: .5rem;
            background: linear-gradient(-45deg, #ffa745 0%, #fe869f 30%, #ef7ac8 45%, #a083ed 70%, #43aeff 85%);
        }

        img {
            background-color: var(--stripes);
            transition: background-color .2s;
        }

        h4 {
            display: inline;
            border-bottom: .125rem dotted;
            transition: border-bottom-color .2s;
        }
    }
`;

export default function WishlistProduct(props) {
    return (
        <WishlistItem>
            <a href={props.link}>
                <div>
                    <img src={props.image} alt="" />
                </div>
                <h4>{props.name}{props.footnote ? <sup>{props.footnote}</sup> : null}</h4>
            </a>
        </WishlistItem>
    );
}
