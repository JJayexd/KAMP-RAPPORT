import { HeaderStyled } from "./Header.styled";
import { Nav } from "../Nav/Nav";

export const Header = ({ children }) => {
    return (
        <HeaderStyled>
            <h1>KRP.DK</h1>
            <Nav />
        </HeaderStyled>
    )
}