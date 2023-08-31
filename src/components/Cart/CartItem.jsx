import { CardWrapper } from "../UI/CardWrap.styled";
import burgerImg from "../../shared/img/burger1.jpeg";
import { BtnCard, H2, Img, SpanPrice} from "./Cart.styled";
import { FlexWrap } from "../../shared/style/GlobalStyles";
import { useDispatch } from "react-redux";
import {  removeItem } from "../../store/cart/cartSlice";
import CartQuantity from "./CartQuantity";

const CartItem = ({item} ) => {
  const { id, name, price, count } = item;
  const formatedPrice = `${price.toFixed(2)}`;

  const funcDispatch = useDispatch();
  const handleDelete = () => {
    funcDispatch(removeItem(id));
  };
  return (
    <CardWrapper>
      <FlexWrap>
        <Img className="" src={burgerImg} width="70" height="70" alt="" />
        <div>
          <H2>{name}</H2>
          <SpanPrice>$ {formatedPrice}</SpanPrice>
        </div>
        <CartQuantity id={id} count={count} />
        <BtnCard onClick={handleDelete} type="button">
          Delete
        </BtnCard>
      </FlexWrap>
    </CardWrapper>
  );
};

export default CartItem;
