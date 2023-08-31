import RegisterForm from "../../components/RegisterForm/RegisterForm";
import { Container } from "../../shared/constants/GlobalStyles";
import { ContainerFlex, FlexDirec, SectionStyl } from "./RegisterPage.styled";
import LockPersonIcon from "@mui/icons-material/LockPerson";
import { Avatar } from "@mui/material";

const RegisterPage = () => {
  return (
    <SectionStyl>
      <ContainerFlex>
        <FlexDirec>
          <Avatar>
            <LockPersonIcon />
          </Avatar>
          <RegisterForm />
        </FlexDirec>
      </ContainerFlex>
    </SectionStyl>
  );
};

export default RegisterPage;
