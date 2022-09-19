import { Header } from "../src/components/Header";
import { Balance } from "../src/components/Balance";
import { useRouter } from "next/router";
import { ContentWithSidebar } from "../src/components/ContentWithSidebar";
import { HeaderTotal } from "../src/components/HeaderTotal";

const Sangrias = () => {
  const router = useRouter();
  const { event } = router.query;

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "pdv",
      headerName: "PDV",
      type: "number",
      width: 200,
    },
    {
      field: "vendas",
      headerName: "Vendas",
      type: "number",
      width: 100,
    },
    {
      field: "sangrias",
      headerName: "Sangrias",
      type: "number",
      width: 150,
    },
    {
      field: "saldo",
      headerName: "Total Líquido",
      type: "number",
      width: 150,
    },
    {
      field: "total",
      headerName: "Total",
      type: "number",
      width: 150,
    },
  ];

  const rows = [];

  return (
    <>
      <Header title="Sangrias" />
      <ContentWithSidebar>
        <HeaderTotal />
        <Balance rows={rows} columns={columns} />
      </ContentWithSidebar>
    </>
  );
};

export default Sangrias;
