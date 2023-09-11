import * as yup from "yup";



export const userSchema = yup
  .object().shape({
    name: yup
      .string()
      .required("First Name is required")
      .min(3, "Min 3 characters"),
    password: yup.string().required('This field is required').min(3).max(16),
  })
  .required();

//
