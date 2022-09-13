import { Header } from "../src/components/Header";
import { Balance } from "../src/components/Balance";
import { useRouter } from "next/router";
import { ContentWithSidebar } from "../src/components/ContentWithSidebar";
import { HeaderTotal } from "../src/components/HeaderTotal";

const Diarios = () => {
  const router = useRouter();
  const { event } = router.query;

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "data",
      headerName: "Data",
      width: 250,
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
      field: "prazo",
      headerName: "Prazo para o Evento",
      type: "string",
      width: 250,
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
      data: "13/09/2022 - Terça-feira",
      vendas: 10,
      cortesia: 10,
      prazo: "17 dias",
      valor: "R$ 10,000.00",
    },
    {
      id: 2,
      data: "12/09/2022 - Segunda-Feira",
      vendas: 10,
      cortesia: 10,
      prazo: "17 dias",
      valor: "R$ 10,000.00",
    },
    {
      id: 3,
      data: "13/09/2022 - Terça-feira",
      vendas: 10,
      cortesia: 10,
      prazo: "17 dias",
      valor: "R$ 10,000.00",
    },
    {
      id: 4,
      data: "12/09/2022 - Segunda-Feira",
      vendas: 10,
      cortesia: 10,
      prazo: "17 dias",
      valor: "R$ 10,000.00",
    },
    {
      id: 5,
      data: "13/09/2022 - Terça-feira",
      vendas: 10,
      cortesia: 10,
      prazo: "17 dias",
      valor: "R$ 10,000.00",
    },
    {
      id: 6,
      data: "12/09/2022 - Segunda-Feira",
      vendas: 10,
      cortesia: 10,
      prazo: "17 dias",
      valor: "R$ 10,000.00",
    },
    {
      id: 7,
      data: "13/09/2022 - Terça-feira",
      vendas: 10,
      cortesia: 10,
      prazo: "17 dias",
      valor: "R$ 10,000.00",
    },
    {
      id: 8,
      data: "12/09/2022 - Segunda-Feira",
      vendas: 10,
      cortesia: 10,
      prazo: "17 dias",
      valor: "R$ 10,000.00",
    },
  ];

  return (
    <>
      <Header title="Diários" />
      <ContentWithSidebar>
        <HeaderTotal />
        <Balance rows={rows} columns={columns} />
      </ContentWithSidebar>
    </>
  );
};

export default Diarios;
