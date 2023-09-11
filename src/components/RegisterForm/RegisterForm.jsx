import { Avatar, Box, Button, Typography } from "@mui/material";
import LockPersonIcon from "@mui/icons-material/LockPerson";
import { useForm } from "react-hook-form";
import Copyright from "../Copyright/Copyright";
import InputField from "../UI/FormFields/InputFields";
import InputPassword from "../UI/FormFields/InputPassword";
import { yupResolver } from "@hookform/resolvers/yup";
import { userSchema } from "./inputSchema";
import { styles } from "./RegisterFormStyle";

const RegisterForm = () => {
  const { handleSubmit, reset, control } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
    mode: "onTouched",
    resolver: yupResolver(userSchema),
  });

  const onSubmit = (data) => {
    console.log(data);
    // reset();
  };

  return (
    <>
      <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
        <LockPersonIcon />
      </Avatar>
      <Typography variant="h4" component="h2" mt={2}>
        Register form
      </Typography>
      <Box component="form" sx={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <InputField control={control} name="name" label="Name" />
        <InputField control={control} name="email" label="E-mail" />
        <InputPassword
          control={control}
          name="password"
          label="Password"
          type="password"
        />
        <Button type="submit" fullWidth variant="contained">
          Register
        </Button>
      </Box>
      <Copyright />
    </>
  );
};

export default RegisterForm;
