import { Header } from "../src/components/Header";
import { Balance } from "../src/components/Balance";
import { useRouter } from "next/router";
import { ContentWithSidebar } from "../src/components/ContentWithSidebar";
import { HeaderTotal } from "../src/components/HeaderTotal";

const Cancelados = () => {
  const router = useRouter();
  const { event } = router.query;

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "classe",
      headerName: "Classe",
      width: 350,
    },
    {
      field: "vendas",
      headerName: "Total de Venda",
      type: "number",
      width: 150,
    },
    {
      field: "cortesia",
      headerName: "Total Cancelados",
      type: "number",
      width: 150,
    },
    {
      field: "total",
      headerName: "Total Final",
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
      classe: "Área Premium",
      vendas: 10,
      cortesia: 10,
      total: 40,
      valor: "R$ 10,000.00",
    },
    {
      id: 2,
      classe: "Área VIP Camarote",
      vendas: 10,
      cortesia: 10,
      total: 40,
      valor: "R$ 10,000.00",
    },
    {
      id: 3,
      classe: "Área Premium",
      vendas: 10,
      cortesia: 10,
      total: 40,
      valor: "R$ 10,000.00",
    },
    {
      id: 4,
      classe: "Área VIP Camarote",
      vendas: 10,
      cortesia: 10,
      total: 40,
      valor: "R$ 10,000.00",
    },
    {
      id: 5,
      classe: "Área Premium",
      vendas: 10,
      cortesia: 10,
      total: 40,
      valor: "R$ 10,000.00",
    },
    {
      id: 6,
      classe: "Área VIP Camarote",
      vendas: 10,
      cortesia: 10,
      total: 40,
      valor: "R$ 10,000.00",
    },
    {
      id: 7,
      classe: "Área Premium",
      vendas: 10,
      cortesia: 10,
      total: 40,
      valor: "R$ 10,000.00",
    },
    {
      id: 8,
      classe: "Área VIP Camarote",
      vendas: 10,
      cortesia: 10,
      total: 40,
      valor: "R$ 10,000.00",
    },
  ];

  return (
    <>
      <Header title="Cancelados" />
      <ContentWithSidebar>
        <HeaderTotal />
        <Balance rows={rows} columns={columns} />
      </ContentWithSidebar>
    </>
  );
};

export default Cancelados;
