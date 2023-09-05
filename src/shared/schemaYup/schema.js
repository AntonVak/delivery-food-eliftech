import * as yup from "yup";

const emailReg =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

export const userSchema = yup
  .object({
    firstName: yup
      .string()
      .required("First Name is required")
      .min(3, "min 3 characters"),
    email: yup.string().required().matches(emailReg, "E-mail is not valid"),
    password: yup.string().required().min(2).max(16),
  })
  .required();

//
