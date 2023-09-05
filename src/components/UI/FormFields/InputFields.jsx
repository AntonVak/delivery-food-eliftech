import { useController } from "react-hook-form";
import { TextField } from "@mui/material";

const InputField = ({ label, name, control, type }) => {
  const {
    field: { ref, onBlur, onChange },
    fieldState: { invalid, error },
  } = useController({
    name,
    control,
  });
  return (
    <>
      <TextField
        id="outlined-basic"
        label={label}
        // onBlur={onBlur}
        // onChange={onChange}
        // ref={ref}
        type={type}
        fullWidth
        size="small"
      />
      {/* {invalid && <p>{error?.message}</p>} */}
    </>
  );
};

export default InputField;
