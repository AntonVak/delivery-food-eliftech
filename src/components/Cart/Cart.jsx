import { useDispatch } from "react-redux";
import { BtnCard } from "./Cart.styled";
import CartItem from "./CartItem";
import { useCart } from "../../hooks/useCart";
import { formId } from "../Form/Form";
import { useEffect } from "react";
import { setTotalPrice } from "../../store/cart/cartSlice";

const Cart = () => {
  const { items, totalPrice } = useCart();
  const dispatchFunc = useDispatch();
  useEffect(() => {
    if (items.length > 0) {
      const currentTotalPrice = items.reduce((acc, curr) => {
        return acc + curr.price * curr.count;
      }, 0);
      dispatchFunc(setTotalPrice(currentTotalPrice));
    }
    if (items.length === 0) {
      dispatchFunc(setTotalPrice(0));
    }
  }, [dispatchFunc, items]);

  return (
    <div>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <CartItem item={item} />
          </li>
        ))}
      </ul>

      <span>Total:{totalPrice}</span>
      <BtnCard className="button" form={formId}>
        Submit{" "}
      </BtnCard>
    </div>
  );
};

export default Cart;
