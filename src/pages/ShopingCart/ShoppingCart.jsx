import Cart from "../../components/Cart/Cart";
import Form from "../../components/Form/Form";
import { Container} from "../../shared/style/GlobalStyles";
import {  SectionStl, ShoppingWrap } from "./ShoppingCart.styled";

const ShoppingCart = () => {
  return (
    <SectionStl>
      <Container>
        <ShoppingWrap>
          <Form />
          <Cart />
        </ShoppingWrap>
      </Container>
    </SectionStl>
  );
};

export default ShoppingCart;
