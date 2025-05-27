import styled from "styled-components";

export const HeaderStyled = styled.header`
    padding: 1rem;
    h1 {
            font-size: 3rem;
            font-weight: 900;
            color: red;
        }

    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
    }

    @media (min-width: 769px) {
        display: flex;
        flex-direction: row;
    }
`