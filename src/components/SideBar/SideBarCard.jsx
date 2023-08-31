
import { CardWrapperCafe } from "./SideBar.styled";

const SideBarCard = ({ name }) => {
  return (
    <CardWrapperCafe>
      <h3>{name}</h3>
    </CardWrapperCafe>
  );
};

export default SideBarCard;
