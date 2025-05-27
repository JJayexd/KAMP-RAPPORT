import { ContainerStyled } from "./Container.Styled";

export const Container = ({ height, width, bgcolor, className, children }) => {
    return (
        <ContainerStyled height={height} width={width} $bgcolor={bgcolor} className={className}>
            {children}
        </ContainerStyled>
    )
}