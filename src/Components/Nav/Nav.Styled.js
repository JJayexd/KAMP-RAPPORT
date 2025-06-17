import styled from 'styled-components';

export const NavStyled = styled.nav`
    @media (max-width: 768px) {
        ul {
            display: flex;
            flex-direction: column;
            max-height: 900px;

            li {
                list-style: none;
                margin: 1rem;
                
                a, .dropbtn {
                    font-weight: 750;
                    text-decoration: none;
                    cursor: pointer;
                }

                .dropdown-content {
                    display: block;
                    flex-direction: column;
                }

                .dropdown-content li {
                    text-transform: uppercase;
                    margin-top: 2rem;
                }

                hr {
                    width: 100px;
                    margin: auto;
                }
            }
        }
    }

    @media (min-width: 768px) {
        margin: auto;
        width: 1300px;

        ul {
            display: flex;
            flex-direction: row;
            justify-content: center;

            li {
                list-style: none;
                margin: 1rem;
                position: relative;

                a, .dropbtn {
                    display: block;
                    font-weight: 750;
                    text-decoration: none;
                    cursor: pointer;
                }

                .dropdown-content {
                    position: absolute;
                    top: auto;
                }

                .dropdown-content li {
                    text-transform: uppercase;
                    margin: 1 0 1 0;
                }
            }
        }
    }
`;

export const Divider = styled.hr`
    margin: 1rem 0;
`;