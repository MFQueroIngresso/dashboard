import { Header } from "../src/components/Header";
import { Balance } from "../src/components/Balance";
import { useRouter } from "next/router";
import { ContentWithSidebar } from "../src/components/ContentWithSidebar";
import { HeaderTotal } from "../src/components/HeaderTotal";

const PDV = () => {
  const router = useRouter();
  const { event } = router.query;

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "pdv",
      headerName: "PDV",
      width: 350,
    },
    {
      field: "vendas",
      headerName: "Vendas",
      type: "number",
      width: 150,
    },
    {
      field: "cortesia",
      headerName: "Cortesia",
      type: "number",
      width: 150,
    },
    {
      field: "total",
      headerName: "Total",
      type: "number",
      width: 150,
    },
    {
      field: "valor",
      headerName: "Valor",
      type: "number",
      width: 150,
    },
  ];

  const rows = [
    {
      id: 1,
      pdv: "QUEROINGRESSO - INTERNET",
      vendas: 10,
      cortesia: 10,
      total: 40,
      valor: "R$ 10,000.00",
    },
    {
      id: 2,
      pdv: "STUDIO DIGITAL - GUARAREMA",
      vendas: 10,
      cortesia: 10,
      total: 40,
      valor: "R$ 10,000.00",
    },
    {
      id: 3,
      pdv: "QUEROINGRESSO - INTERNET",
      vendas: 10,
      cortesia: 10,
      total: 40,
      valor: "R$ 10,000.00",
    },
    {
      id: 4,
      pdv: "STUDIO DIGITAL - GUARAREMA",
      vendas: 10,
      cortesia: 10,
      total: 40,
      valor: "R$ 10,000.00",
    },
    {
      id: 5,
      pdv: "QUEROINGRESSO - INTERNET",
      vendas: 10,
      cortesia: 10,
      total: 40,
      valor: "R$ 10,000.00",
    },
    {
      id: 6,
      pdv: "STUDIO DIGITAL - GUARAREMA",
      vendas: 10,
      cortesia: 10,
      total: 40,
      valor: "R$ 10,000.00",
    },
    {
      id: 7,
      pdv: "QUEROINGRESSO - INTERNET",
      vendas: 10,
      cortesia: 10,
      total: 40,
      valor: "R$ 10,000.00",
    },
    {
      id: 8,
      pdv: "STUDIO DIGITAL - GUARAREMA",
      vendas: 10,
      cortesia: 10,
      total: 40,
      valor: "R$ 10,000.00",
    },
  ];

  return (
    <>
      <Header title="PDV" />
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
          Sem Dados
        </h1>
        {/* <Balance rows={rows} columns={columns} /> */}
      </ContentWithSidebar>
    </>
  );
};

export default PDV;
