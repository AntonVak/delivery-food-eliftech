import { Link, NavLink } from "react-router-dom";
import { Container } from "../../shared/style/GlobalStyles";
import { FlexWrap } from "../../shared/style/GlobalStyles";
import ButtonCart from "../UI/Button";
import { HeaderSt, H4 } from "./Header.styled";

const Header = () => {
  return (
    <HeaderSt className="header">
      <Container>
        <FlexWrap>
          <H4>
            Awesome <span>logo</span>
          </H4>
          <FlexWrap className="navMenu">
            <li>
              <NavLink activeClassName="selected" to="/">Shop</NavLink>
            </li>
            <li>
              <Link to="/cart">Shopping Cart</Link>
            </li>
            <li className="link-form">
              <Link to="/register">Register</Link>
            </li>
            <li className="link-form">
              <Link to="/login">LogIn</Link>
            </li>
          </FlexWrap>
          <div>
            <ButtonCart />
          </div>
        </FlexWrap>
      </Container>
    </HeaderSt>
  );
};

export default Header;
