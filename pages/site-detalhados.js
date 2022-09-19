import { Header } from "../src/components/Header";
import { Balance } from "../src/components/Balance";
import { useRouter } from "next/router";
import { ContentWithSidebar } from "../src/components/ContentWithSidebar";
import { HeaderTotal } from "../src/components/HeaderTotal";

const SiteDetalhados = () => {
  const router = useRouter();
  const { event } = router.query;

  const columns = [
    { field: "id", headerName: "Pedido", width: 90 },
    {
      field: "data",
      headerName: "Data",
      width: 100,
    },
    {
      field: "status",
      headerName: "Status",
      type: "number",
      width: 100,
    },
    {
      field: "comprador",
      headerName: "Comprador",
      type: "number",
      width: 100,
    },
    {
      field: "nominado",
      headerName: "Nominado",
      type: "number",
      width: 100,
    },
    {
      field: "email",
      headerName: "E-mail",
      type: "number",
      width: 100,
    },
    {
      field: "telefone",
      headerName: "Telefone",
      type: "number",
      width: 100,
    },
    {
      field: "qtde",
      headerName: "Quantidade",
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
      field: "valor",
      headerName: "Valor",
      type: "number",
      width: 100,
    },
  ];

  const rows = [];

  return (
    <>
      <Header title="Site Detalhados" />
      <ContentWithSidebar>
        <HeaderTotal />
        <Balance rows={rows} columns={columns} />
      </ContentWithSidebar>
    </>
  );
};

export default SiteDetalhados;
