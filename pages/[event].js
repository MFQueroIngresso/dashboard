import Container from "@mui/material/Container";
import { Header } from "../src/components/Header";
import { useRouter } from "next/router";

const EventPage = () => {
  const router = useRouter();
  const { event } = router.query;

  return (
    <>
      <Header hideArea />
      Conteúdo
    </>
  );
};

export default EventPage;
