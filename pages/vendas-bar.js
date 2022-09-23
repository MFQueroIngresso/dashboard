import { Header } from "../src/components/Header";
import { Balance } from "../src/components/Balance";
import { useRouter } from "next/router";
import { ContentWithSidebar } from "../src/components/ContentWithSidebar";
import { HeaderTotal } from "../src/components/HeaderTotal";

const Comissarios = () => {
  const router = useRouter();
  const { event } = router.query;

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "nome",
      headerName: "Nome",
      width: 100,
    },
    {
      field: "valun",
      headerName: "Valor Un.",
      type: "number",
      width: 200,
    },
    {
      field: "qtdbruto",
      headerName: "Qtd. Bruto",
      type: "number",
      width: 100,
    },
    {
      field: "qtd",
      headerName: "Qtd. (%)",
      type: "number",
      width: 100,
    },
    {
      field: "valorbruto",
      headerName: "Valor Bruto",
      type: "number",
      width: 100,
    },
    {
      field: "valor_percent",
      headerName: "Valor. (%)",
      type: "number",
      width: 280,
    },
  ];

  const rows = [];

  return (
    <>
      <Header title="Vendas Bar" />
      <ContentWithSidebar>
        <HeaderTotal />
        <Balance rows={rows} columns={columns} />
      </ContentWithSidebar>
    </>
  );
};

export default Comissarios;
