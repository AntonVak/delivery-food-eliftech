import { nanoid } from "@reduxjs/toolkit";
import { useState } from "react";
import { CardWrapper } from "../UI/CardWrap.styled";
import { FormStl } from "./FormGeneral.styled";
import TextField from "./TextField";

export const formId = nanoid();

const Form = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    adress: "",
  });
  const handleChange = ({ target }) => {
    setForm((prevState) => ({
      ...prevState,
      [target.name]: target.value,
    }));
  };

  return (
    <CardWrapper>
      <form id={formId}>
        <TextField
          type="text"
          label="Name"
          name="name"
          value={form.name}
          onChange={handleChange}
        />
        <TextField
          type="text"
          label="E-mail"
          name="email"
          value={form.email}
          onChange={handleChange}
        />

        {/* <TextField
        type="tel"
        label="Phone"
        name="phone"
        value={form.phone}
        onChange={handleChange}
      />
      <TextField
        type="text"
        label="Adress"
        name="adress"
        value={form.adress}
        onChange={handleChange}
      /> */}
      </form>
    </CardWrapper>
  );
};

export default Form;
