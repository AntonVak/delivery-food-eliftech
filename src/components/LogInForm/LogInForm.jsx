import { Avatar, Button, Box, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import Copyright from "../Copyright/Copyright";
import InputField from "../UI/FormFields/InputFields";
import LockPersonIcon from "@mui/icons-material/LockPerson";
import { FlexDiv } from "../../shared/style/GlobalStyles";
import { styles } from "./LoginFormStayle";

const LoginForm = () => {
  const { handleSubmit, reset, control } = useForm({
    defaultValues: {
      name: "",
      password: "",
    },
    mode: "onTouched",
  });

  const onSubmit = (data) => {
    console.log(data);
    // reset();
  };
  return (
    <FlexDiv>
      <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
        <LockPersonIcon />
      </Avatar>
      <Typography variant="h4" component="h2" mt={2}>
        Login form
      </Typography>
      <Box component="form"  sx={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <InputField control={control} name="name" label="Name" />
        <InputField control={control} name="password" label="Password" type="password"/>
        <Button className={styles.button} type="submit" variant="contained" fullWidth>
          Register
        </Button>
      </Box>
      <Copyright />
    </FlexDiv>
  );
};

export default LoginForm;
