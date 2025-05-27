import styled from 'styled-components';

export const NavStyled = styled.nav`
    @media (max-width: 768px) {
        ul {
            display: flex;
            flex-direction: column;
            li {
            list-style: none;
            margin: 1rem;
                a {
                font-weight: 900;
                text-decoration: none;
                padding: 0.8rem;
                color: black;
                }
                a:hover {
                    color: grey;
                }
            }
        }
    }

    @media (min-width: 769px) {
        display: flex;
        justify-content: center;
        margin-left: -175px;
        width: 1300px;
        ul {
            display: flex;
            flex-direction: row;
            li {
                list-style: none;
                margin: 1rem;
                a {

                    font-weight: 900;
                    text-decoration: none;
                    padding: 0.5.rem;
                    color: black;
                }
            }
        }
    }
`