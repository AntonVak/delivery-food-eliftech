import { useSelector, useDispatch } from "react-redux";
import CardMeal from "../CardMeal/CardMeal";
import { useEffect } from "react";
import { Section } from "./ListShop.styled";
import { selectMeals, selectMealsIsLoading } from "../../store/meals/selectors";
import { getMeals } from "../../store/meals/thunks";
import { WrapCardMeal } from "../UI/CardWrap.styled";

const ListShop = () => {
  const meals = useSelector(selectMeals);
  const loading = useSelector(selectMealsIsLoading);
  const dispatchFunc = useDispatch();

  

  useEffect(() => {
    dispatchFunc(getMeals());
  }, [dispatchFunc]);

  return (
    <Section className="shop">
      {loading ? (
        <p>Loading...</p>
      ) : (
        Object.keys(meals).map((meal) => (
          <WrapCardMeal key={meals[meal].id}>
            <CardMeal  {...meals[meal]} />
          </WrapCardMeal>
        ))
      )}
    </Section>
  );
};

export default ListShop;
