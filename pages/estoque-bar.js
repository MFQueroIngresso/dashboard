import { Header } from "../src/components/Header";
import { Balance } from "../src/components/Balance";
import { useRouter } from "next/router";
import { ContentWithSidebar } from "../src/components/ContentWithSidebar";
import { HeaderTotal } from "../src/components/HeaderTotal";

const EstoqueBar = () => {
  const router = useRouter();
  const { event } = router.query;

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "detalhes",
      headerName: "Detalhes",
      width: 100,
    },
    {
      field: "nome",
      headerName: "Nome",
      width: 100,
    },
    {
      field: "dataabertura",
      headerName: "Data Abertura",
      type: "number",
      width: 130,
    },
    {
      field: "qtdbruto",
      headerName: "Data Fechamento",
      type: "number",
      width: 150,
    },
    {
      field: "qtd",
      headerName: "Vendas",
      type: "number",
      width: 100,
    },
    {
      field: "valorbruto",
      headerName: "Cancelamento",
      type: "number",
      width: 130,
    },
    {
      field: "valor_percent",
      headerName: "Sangrias",
      type: "number",
      width: 100,
    },
    {
      field: "valor_percent2",
      headerName: "Abastecimento",
      type: "number",
      width: 130,
    },
    {
      field: "valor_percent4",
      headerName: "Saldo",
      type: "number",
      width: 100,
    },
  ];

  const rows = [];

  return (
    <>
      <Header title="Estoque Bar" />
      <ContentWithSidebar>
        <HeaderTotal />
        <h1
          style={{
            textAlign: "center",
            marginTop: 140,
            textTransform: "uppercase",
            color: "gray",
            fontWeight: 200,
            letterSpacing: 7,
          }}
        >
          Sem Estoque
        </h1>
        {/* <Balance rows={rows} columns={columns} /> */}
      </ContentWithSidebar>
    </>
  );
};

export default EstoqueBar;
