import { Typography } from "@mui/material";
//Тестирование
const H1TextStyle = ({ children }) => {
  return (
    <Typography variant="h4" component="h2" mt={2}>
      {children}
    </Typography>
  );
};

export default H1TextStyle;
