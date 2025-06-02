import styled from "styled-components";

export const RapportStyled = styled.div`
    display: flex;
    flex-direction: row;
    margin: 1rem;
    a {
        text-decoration: none;
        color: black;
    }
    figure {
        background-color: #fefefe;
        box-shadow: 0px 5px 8px 0px rgba(0,0,0,0.1);
        border: 0px solid;
        border-radius: 0px 0px 4px 4px;
        padding: 1rem;
        margin: 1rem;
        width: 400px;
    } h3 {
        font-weight: 750;
        } p {
            color: red;
            font-weight: 900;
            }
    img {
        height: 200px;
        width: 100%;
        object-fit: cover;
    }
`