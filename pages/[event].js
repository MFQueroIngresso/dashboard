import Container from "@mui/material/Container";
import { Header } from "../src/components/Header";
import { useRouter } from "next/router";
import { ContentWithSidebar } from "../src/components/ContentWithSidebar";
import { DashboardEvent } from "../src/components/DashboardEvent";
import { HeaderTotal } from "../src/components/HeaderTotal";

const EventPage = () => {
  const router = useRouter();
  const { event } = router.query;
  // usar esse event, para dar um find na api de eventos

  return (
    <>
      <Header title="Dashboard" />
      <ContentWithSidebar>
        <HeaderTotal />
        <pre>{JSON.stringify(event)}</pre>
        <DashboardEvent />
      </ContentWithSidebar>
    </>
  );
};

export default EventPage;
