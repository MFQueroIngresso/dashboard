import Container from "@mui/material/Container";
import { Header } from "../src/components/Header";
import { PDVBalance } from "../src/components/PDVBalance";

export default function SaldoPdv() {
  return (
    <>
      <Header title="Saldo PDV" />
      <Container maxWidth="xl" sx={{ mt: 4, mb: 1 }}>
        <PDVBalance />
      </Container>
    </>
  );
}
