import { Header } from "../src/components/Header";
import { Balance } from "../src/components/Balance";
import { useRouter } from "next/router";
import { ContentWithSidebar } from "../src/components/ContentWithSidebar";
import { HeaderTotal } from "../src/components/HeaderTotal";

const GerarCortesias = () => {
  const router = useRouter();
  const { event } = router.query;

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "criadoem",
      headerName: "Criado em",
      width: 200,
    },
    {
      field: "classe",
      headerName: "Classe",
      type: "number",
      width: 200,
    },
    {
      field: "qtdgerada",
      headerName: "Qtd Gerada",
      type: "number",
      width: 100,
    },
    {
      field: "emissor",
      headerName: "Emissor",
      type: "number",
      width: 280,
    },
    {
      field: "acao",
      headerName: "Ação",
      type: "number",
      width: 150,
    },
  ];

  const rows = [];

  return (
    <>
      <Header title="Comissários" />
      <ContentWithSidebar>
        <HeaderTotal />
        <Balance rows={rows} columns={columns} />
      </ContentWithSidebar>
    </>
  );
};

export default GerarCortesias;
