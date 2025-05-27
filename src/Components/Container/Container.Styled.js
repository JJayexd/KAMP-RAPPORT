import styled from "styled-components";

export const ContainerStyled = styled.div`
    height: ${props => props.height ? props.height : 'auto'};
    /* width: ${props => props.width ? props.width : 1300}px; */
    background-color: ${props => props.$bgcolor ? props.$bgcolor : 'transparent'};
    margin: auto;

    &.center {
        width: 1300px;
    }
`