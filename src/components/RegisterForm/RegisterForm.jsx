import { Button, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import Copyright from "../Copyright/Copyright";
import InputField from "../UI/FormFields/InputFields";

const RegisterForm = () => {
  const { handleSubmit, reset, control } = useForm({
    defaultValues: {
      firstName: "",
      email: "",
      password: "",
    },
    mode: "onTouched",
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
        <InputField control={control} name="name" label="Name" />
        <InputField control={control} name="email" label="E-mail" />
        <Button type="submit" fullWidth variant="contained">
          Register
        </Button>
      </form>
      <Copyright sx={styles.сopyright}/>
    </>
  );
};

export default RegisterForm;
