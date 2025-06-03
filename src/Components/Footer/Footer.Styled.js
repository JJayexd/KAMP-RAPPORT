import styled from 'styled-components';

export const FooterStyled = styled.footer`
    display: flex;
    justify-content: center;
    box-shadow: 0px -5px 8px 0px rgba(0,0,0,0.1);
    padding: 1rem;
    margin-top: auto;
    ul {
        margin: 0;
        padding: 0;
        list-style: none;
        display: flex;
        flex-direction: column;
        margin: 0 0.5rem 0 0.5rem;
        gap: 0.2rem;
    }

    h3 {
        font-weight: 900;
        color: red;
        margin-bottom: 0.25rem;
    }

`