import { Header } from "../src/components/Header";
import { Balance } from "../src/components/Balance";
import { useRouter } from "next/router";
import { ContentWithSidebar } from "../src/components/ContentWithSidebar";
import { HeaderTotal } from "../src/components/HeaderTotal";

const Detalhados = () => {
  const router = useRouter();
  const { event } = router.query;

  const columns = [
    { field: "id", headerName: "ID", width: 30 },
    {
      field: "data-compra",
      headerName: "Data da Compra",
      width: 120,
    },
    {
      field: "pdv",
      headerName: "PDV",
      type: "number",
      width: 50,
    },
    {
      field: "pos",
      headerName: "Pos",
      type: "number",
      width: 50,
    },
    {
      field: "total",
      headerName: "Total de Desc. em Ingressos",
      type: "number",
      width: 220,
    },
    {
      field: "pedido",
      headerName: "Pedido",
      type: "number",
      width: 100,
    },
    {
      field: "cod-barras",
      headerName: "Código de Barras",
      type: "number",
      width: 150,
    },
    {
      field: "situacao",
      headerName: "Situação",
      type: "number",
      width: 100,
    },
    {
      field: "ingresso",
      headerName: "Ingresso",
      type: "number",
      width: 100,
    },
    {
      field: "ingresso-numerado",
      headerName: "Ingresso Numerado",
      type: "number",
      width: 150,
    },
    {
      field: "valor",
      headerName: "Valor",
      type: "number",
      width: 90,
    },
    {
      field: "forma-pagto",
      headerName: "Forma de Pagamento",
      type: "number",
      width: 90,
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

export default Detalhados;
