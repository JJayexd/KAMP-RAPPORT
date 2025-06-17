import styled from "styled-components";

export const RapportStyled = styled.div`

    @media (min-width: 768px) {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: 1fr;
        margin: 1rem;
        overflow: hidden auto;
    }

    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
        margin: auto;
    }

    figure {
        border: 0px solid;
        border-radius: 0px 0px 4px 4px;
        padding: 1rem;
        margin: 1rem;
        max-width: 400px;
        box-sizing: border-box;
    }
    
    h3 {
        font-weight: 750;
    }

    a {
        text-decoration: none;
    }

    p {
        color: var(--color-text-primary);
    }

    .category {
        font-family: 'Heebo', sans-serif;
        font-size: 0.75rem;
        font-weight: 500;
        letter-spacing: 0.025rem;
        text-transform: uppercase;
        color: var(--color-text-primary);
        background-color: var(--color-accent);
        border-radius: 0rem;
        -webkit-border-radius: 0rem;
        -moz-border-radius: 0rem;
        padding: 0.35rem 0.5rem;
        width: fit-content;
        border-style: none;
        border-width: 0rem;
        border-color: #EF2D56;
    }

    img {
        height: 200px;
        width: 100%;
        object-fit: cover;
        display: block;
    }

`