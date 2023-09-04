import { Container } from "@mui/material";

const MainContainer = ({ children }) => {
  const styles = {
    container: { mt: 10 },
  };

  return (
    <Container container="main" maxWidth="xs" sx={styles.container}>
      {children}
    </Container>
  );
};

export default MainContainer;
