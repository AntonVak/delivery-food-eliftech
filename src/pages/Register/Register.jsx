import RegisterForm from "../../components/RegisterForm/RegisterForm";
import { FlexDirec } from "./RegisterPage.styled";
import MainContainer from "../../shared/style/MainContainer";

const RegisterPage = () => {
  return (
    <MainContainer>
      <FlexDirec>
        <RegisterForm />
      </FlexDirec>
    </MainContainer>
  );
};

export default RegisterPage;
