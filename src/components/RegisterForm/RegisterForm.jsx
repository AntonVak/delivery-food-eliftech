import { Button, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import Copyright from "../Copyright/Copyright";
import InputField from "../UI/FormFields/InputFields";
import InputPassword from "../UI/FormFields/InputPassword";
import { yupResolver } from "@hookform/resolvers/yup";
import { userSchema } from "../../shared/schemaYup/schema";

const RegisterForm = () => {
  const { handleSubmit, reset, control } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
    mode: "onTouched",
    resolver: yupResolver(userSchema)
  });

  const onSubmit = (data) => {
    console.log(data);
    // reset();
  };

  const styles = {
    сopyright: { mt: 1 },
  };
  return (
    <>
      <Typography variant="h4" component="h2" mt={2}>
        Register form
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputField control={control} name="name" label="Name"  />
        <InputField control={control} name="email" label="E-mail"/>
        <InputPassword
          control={control}
          name="password"
          label="Password"
          type="password"
        />
        <Button type="submit" fullWidth variant="contained">
          Register
        </Button>
      </form>
      <Copyright sx={styles.сopyright} />
    </>
  );
};

export default RegisterForm;
