import * as yup from "yup";

const emailReg =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

export const userSchema = yup
  .object()
  .shape({
    name: yup
      .string()
      .required("Name is required")
      .min(3, "Min 3 characters"),
    email: yup.string().required("E-mail is required").matches(emailReg, "E-mail is not valid"),
    password: yup.string().required("This field is required").min(3).max(16),
  })
  .required();

//
