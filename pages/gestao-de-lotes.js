import { Header } from "../src/components/Header";
import { Balance } from "../src/components/Balance";
import { useRouter } from "next/router";
import { ContentWithSidebar } from "../src/components/ContentWithSidebar";
import { HeaderTotal } from "../src/components/HeaderTotal";

const GestaoDeLotes = () => {
  const router = useRouter();
  const { event } = router.query;

  const columns = [
    { field: "id", headerName: "Código", width: 90 },
    {
      field: "classe",
      headerName: "Classe",
      type: "number",
      width: 450,
    },
    {
      field: "acoes",
      headerName: "Ações",
      type: "number",
      width: 200,
    },
  ];

  const rows = [];

  return (
    <>
      <Header title="Gestão de Lotes" />
      <ContentWithSidebar>
        <HeaderTotal />
        <Balance rows={rows} columns={columns} />
      </ContentWithSidebar>
    </>
  );
};

export default GestaoDeLotes;
