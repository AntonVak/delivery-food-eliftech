
import { useDispatch } from "react-redux";
import burgerImg from "../../shared/img/burger1.jpeg";
import {
  BtnCard,
  H2,
  Img,
  SpanPrice,
  StyledP,
  MealCard,
  FooterCard,
  Description,
} from "./CardMeal.styled";
import { addItem } from "../../store/cart/cartSlice";

const CardMeal = (props) => {
  const { id, name, price, description } = props;

  const dispatchFunc = useDispatch();

  const handleButtonClick = () => {
    dispatchFunc(
      addItem({
        id,
        name,
        price,
      })
    );
  };

  const formatedPrice = `${price.toFixed(2)}`;
  return (
    <MealCard>
      <Description>
        <Img className="" src={burgerImg} alt="" />
        <H2>{name}</H2>
        <StyledP>{description}</StyledP>
      </Description>

      <FooterCard>
        <footer>
          <SpanPrice>${formatedPrice}</SpanPrice>
        </footer>

        <BtnCard type="button" className="button" onClick={handleButtonClick}>
          Add meals{" "}
        </BtnCard>
      </FooterCard>
    </MealCard>
  );
};

export default CardMeal;
