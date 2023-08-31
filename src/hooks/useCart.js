import {
  selectCartItems,
  selectCartTotalPrice,
  selectCartUser,
} from "../store/cart/selectors";
import { useSelector } from "react-redux";

export const useCart = () => {
  const items = useSelector(selectCartItems);
  const totalPrice = useSelector(selectCartTotalPrice);
  const user = useSelector(selectCartUser);
  

  return { items, totalPrice, user};
};
