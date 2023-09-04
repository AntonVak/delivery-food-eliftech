
import LoginForm from "../../components/LogInForm/LogInForm";
import SignUp from "../../components/LogInForm/SignUp";
import MainContainer from "../../shared/style/MainContainer";


const LogInPage = () => {
    return ( 
        <MainContainer>
           <LoginForm/>
           <SignUp/>
        </MainContainer>
     );
}
 
export default LogInPage;