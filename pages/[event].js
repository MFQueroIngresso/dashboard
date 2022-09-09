import Container from "@mui/material/Container";
import { Header } from "../src/components/Header";
import { useRouter } from "next/router";
import { ContentWithSidebar } from "../src/components/ContentWithSidebar";
import { DashboardEvent } from "../src/components/DashboardEvent";
import { HeaderTotal } from "../src/components/HeaderTotal";

const EventPage = () => {
  const router = useRouter();
  const { event } = router.query;

  return (
    <>
      <Header hideArea />
      <ContentWithSidebar>
        <HeaderTotal />
        <DashboardEvent />
      </ContentWithSidebar>
    </>
  );
};

export default EventPage;
