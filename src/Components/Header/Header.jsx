import { HeaderStyled } from "./Header.Styled";
import { Nav } from "../Nav/Nav";
import { Divider } from "../Footer/Footer.Styled";

export const Header = ({}) => {
    return (
        <>
            <HeaderStyled>
                <h1>KAMPRAPPORT.DK</h1>
                <Nav />
            </HeaderStyled>
            {/* <Divider style={
                {marginTop: '0rem'}
            } /> */}
        </>
    )
}