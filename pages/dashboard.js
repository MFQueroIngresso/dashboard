import Container from "@mui/material/Container";
import Events from "../src/components/Events";
import { Filter } from "../src/components/Filter";
import { Header } from "../src/components/Header";

export default function DashboardPage() {
  const events = [1, 2, 3, 4, 5, 6];
  return (
    <>
      <Header />
      <Container maxWidth="xl" sx={{ mt: 4, mb: 1 }}>
        <Filter />
      </Container>
      <Container maxWidth="xl">
        <Events />
      </Container>
    </>
  );
}
