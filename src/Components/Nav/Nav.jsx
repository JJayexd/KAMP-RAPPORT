import { NavLink } from "react-router-dom";
import { NavStyled } from "./Nav.Styled";
import { HomePage } from "../../Pages/HomePage";

export const Nav = () => {
    return (
        <NavStyled>
            <ul>
                <li><NavLink to="/">HJEM</NavLink></li>
                <li><NavLink>KATEGORIER</NavLink></li>
                <li><NavLink>OM OS</NavLink></li>
                <li><NavLink>LOGIN</NavLink></li>
            </ul>
        </NavStyled>
    )
}