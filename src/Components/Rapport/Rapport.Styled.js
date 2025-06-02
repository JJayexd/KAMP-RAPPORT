import styled from "styled-components";

export const RapportStyled = styled.div`

    @media (min-width: 768px) {
        display: flex;
        flex-direction: row;
        margin: 1rem;
    }

    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
        margin: auto;
    }

    figure {
        background-color: #fefefe;
        box-shadow: 0px 5px 8px 0px rgba(0,0,0,0.1);
        border: 0px solid;
        border-radius: 0px 0px 4px 4px;
        padding: 1rem;
        margin: 1rem;
        width: 400px;
    } 
    
    h3 {
        font-weight: 750;
    }

    a {
        text-decoration: none;
        color: black;
    }

    p {
        color: red;
        font-weight: 900;
    }

    img {
        height: 200px;
        width: 100%;
        object-fit: cover;
    }
`