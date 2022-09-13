import Container from "@mui/material/Container";
import { Header } from "../src/components/Header";
import { PDVBalance } from "../src/components/PDVBalance";
import { useRouter } from "next/router";
import { ContentWithSidebar } from "../src/components/ContentWithSidebar";
import { DashboardEvent } from "../src/components/DashboardEvent";
import { HeaderTotal } from "../src/components/HeaderTotal";

const EventPage = () => {
  const router = useRouter();
  const { event } = router.query;

  return (
    <>
      <Header title="Classes" />
      <ContentWithSidebar>
        <HeaderTotal />
        <PDVBalance />
      </ContentWithSidebar>
    </>
  );
};

export default EventPage;
