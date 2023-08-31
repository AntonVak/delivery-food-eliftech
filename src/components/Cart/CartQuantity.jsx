import { useDispatch } from "react-redux";
import { decrement, increment } from "../../store/cart/cartSlice";

import { WrapQuantity, ButtonQuantity } from "./CartQuantity.styled";

const CartQuantity = ({ id, count }) => {
  const funcDispatch = useDispatch();

  const handleIncrease = () => {
    funcDispatch(increment(id));
   
  };
  const handleDecrease = () => {
    funcDispatch(decrement(id));
   
  };

  return (
    <WrapQuantity>
      <ButtonQuantity disabled={count === 1} onClick={handleDecrease}>
        -
      </ButtonQuantity>
      <p>{count}</p>
      <ButtonQuantity disabled={count === 10} onClick={handleIncrease}>
        +
      </ButtonQuantity>
    </WrapQuantity>
  );
};

export default CartQuantity;
