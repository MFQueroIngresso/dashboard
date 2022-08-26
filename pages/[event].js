import Container from "@mui/material/Container";
import { Header } from "../src/components/Header";
import { useRouter } from "next/router";
import { ContentWithSidebar } from "../src/components/ContentWithSidebar";

const EventPage = () => {
  const router = useRouter();
  const { event } = router.query;

  return (
    <>
      <Header hideArea />
      <ContentWithSidebar>Conteúdo</ContentWithSidebar>
    </>
  );
};

export default EventPage;
