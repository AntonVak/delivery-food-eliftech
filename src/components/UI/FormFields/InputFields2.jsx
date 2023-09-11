import { Controller, useController } from "react-hook-form";
import { TextField } from "@mui/material";

const InputField2 = ({ label, name, control, errors, type }) => {
  return (
    <>
      <Controller
        control={control}
        name="test"
        render={({ field: { onChange, onBlur, value, ref } }) => (
          <TextField
            placeholder="First name"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
      />
    </>
  );
};

export default InputField2;
