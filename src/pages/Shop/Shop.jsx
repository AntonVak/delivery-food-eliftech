import ListShop from "../../components/ListShop/ListShop";
import SideBar from "../../components/SideBar/SideBar";
import { Container} from "../../shared/style/GlobalStyles";
import { FlexShop, SectionStl } from "./Shop.styled";

const Shop = () => {
  return (
    <SectionStl>
      <Container>
        <FlexShop>
          <SideBar/>
          <ListShop/>
        </FlexShop>
      </Container>
    </SectionStl>
  );
};

export default Shop;
