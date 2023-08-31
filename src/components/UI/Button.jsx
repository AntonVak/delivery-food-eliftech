
import { ButtonSt, IconBadge, IconSpan } from "./Button.styled";
import CartIcon from "./CartIcon";
import { cartNumber } from "../../store/cart/cartSlice";
import { useCart } from "../../hooks/useCart";

const ButtonCart = () => {
  const { items } = useCart();
  // const cartItemsNumber = items.reduce((curr, item) => {
  //   return curr + item.count;
  // }, 0);
  const cartItemsNumber = items.length;

  return (
    <ButtonSt to="/cart">
      <IconSpan>
        <CartIcon />
      </IconSpan>
      <span>Cart</span>
      <IconBadge>{cartItemsNumber}</IconBadge>
    </ButtonSt>
  );
};

export default ButtonCart;
