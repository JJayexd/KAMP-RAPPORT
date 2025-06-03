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
                    font-weight: 750;
                    text-decoration: none;
                    padding: 0.8rem;
                }
            }
        }
    }

    @media (min-width: 769px) {
        margin: auto;
        width: 1300px;
        ul {
            display: flex;
            flex-direction: row;
            justify-content: center;
            li {
                list-style: none;
                margin: 1rem;
                a {
                    font-weight: 750;
                    text-decoration: none;
                    padding: 0.5.rem;
                }
            }
        }
    }
`