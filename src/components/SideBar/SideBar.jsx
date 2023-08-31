import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";


import { selectRestaurants, selectRestaurantsError, selectRestaurantsIsloading } from "../../store/restaurants/selectors";
import { getRestaurants } from "../../store/restaurants/thunks";
// import { CardWrapper } from "../UI/CardWrap.styled";
import { Aside, CardWrapperCafe } from "./SideBar.styled";
import SideBarCard from "./SideBarCard";

const SideBar = () => {
const restaurants = useSelector(selectRestaurants);
// const loading = useSelector(selectRestaurantsIsloading);
// const error = useSelector(selectRestaurantsError);
const dispatchFunc = useDispatch();


useEffect(() => {
  dispatchFunc(getRestaurants());
 
}, [dispatchFunc]);

  return (
    <Aside className="aside">
      <CardWrapperCafe>
      {
        Object.keys(restaurants).map((restaurant) => (
          <SideBarCard key={restaurant} {...restaurants[restaurant]}/>
        ))
      }
      </CardWrapperCafe>
    </Aside>
  );
};

export default SideBar;
