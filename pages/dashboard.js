import Container from "@mui/material/Container";
import Events from "../src/components/Events";
import { Filter } from "../src/components/Filter";
import { Header } from "../src/components/Header";
import { useEventContext } from "../context/providers/EventContext";
import { Loading } from "../src/components/Loading";

export default function DashboardPage() {
  const { events, loading } = useEventContext();
  return (
    <>
      <Header />
      <Container maxWidth="xl" sx={{ mt: 4, mb: 1 }}>
        <Filter />
      </Container>
      <Container maxWidth="xl">
        {!loading && <Events events={events} />}
        {loading && <Loading />}
      </Container>
    </>
  );
}
