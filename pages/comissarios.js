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
      field: "comissario",
      headerName: "Comissário",
      width: 200,
    },
    {
      field: "qtdtotal",
      headerName: "Quantidade Total",
      type: "number",
      width: 200,
    },
    {
      field: "totalbruto",
      headerName: "Total Bruto",
      type: "number",
      width: 100,
    },
    {
      field: "total",
      headerName: "Total de Desconto em Ingressos",
      type: "number",
      width: 280,
    },
    {
      field: "saldo",
      headerName: "Total Líquido",
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

export default Comissarios;
