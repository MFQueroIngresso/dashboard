import Container from "@mui/material/Container";
import { Header } from "../src/components/Header";
import { Balance } from "../src/components/Balance";

export default function SaldoPdv() {
  return (
    <>
      <Header title="Saldo PDV" />
      <Container maxWidth="xl" sx={{ mt: 4, mb: 1 }}>
        <Balance />
      </Container>
    </>
  );
}
