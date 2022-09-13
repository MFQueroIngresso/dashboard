import Container from "@mui/material/Container";
import { Header } from "../src/components/Header";
import { Balance } from "../src/components/Balance";
import { useRouter } from "next/router";
import { ContentWithSidebar } from "../src/components/ContentWithSidebar";
import { DashboardEvent } from "../src/components/DashboardEvent";
import { HeaderTotal } from "../src/components/HeaderTotal";

const Classes = () => {
  const router = useRouter();
  const { event } = router.query;

  const columns = [
    { field: "id", headerName: "ID", width: 150 },
    {
      field: "pdv",
      headerName: "PDV",
      width: 350,
      editable: true,
    },
    {
      field: "vendas",
      headerName: "vendas",
      type: "number",
      width: 250,
      editable: true,
    },
    {
      field: "total",
      headerName: "total",
      type: "string",
      width: 250,
      editable: true,
    },
  ];

  const rows = [
    { id: 1, pdv: "Art Rock - CPV", vendas: 10, total: "R$ 35.000,00" },
    { id: 2, pdv: "Art Rock - CPV", vendas: 10, total: "R$ 35.000,00" },
    { id: 3, pdv: "Art Rock - CPV", vendas: 10, total: "R$ 35.000,00" },
    { id: 4, pdv: "Art Rock - CPV", vendas: 10, total: "R$ 35.000,00" },
    { id: 5, pdv: "Art Rock - CPV", vendas: 10, total: "R$ 35.000,00" },
    { id: 6, pdv: "Art Rock - CPV", vendas: 10, total: "R$ 35.000,00" },
    { id: 7, pdv: "Art Rock - CPV", vendas: 10, total: "R$ 35.000,00" },
    { id: 8, pdv: "Art Rock - CPV", vendas: 10, total: "R$ 35.000,00" },
    { id: 9, pdv: "Art Rock - CPV", vendas: 10, total: "R$ 35.000,00" },
    { id: 10, pdv: "Art Rock - CPV", vendas: 10, total: "R$ 35.000,00" },
    { id: 11, pdv: "Art Rock - CPV", vendas: 10, total: "R$ 35.000,00" },
    { id: 12, pdv: "Art Rock - CPV", vendas: 10, total: "R$ 35.000,00" },
    { id: 13, pdv: "Art Rock - CPV", vendas: 10, total: "R$ 35.000,00" },
    { id: 14, pdv: "Art Rock - CPV", vendas: 10, total: "R$ 35.000,00" },
    { id: 15, pdv: "Art Rock - CPV", vendas: 10, total: "R$ 35.000,00" },
    { id: 16, pdv: "Art Rock - CPV", vendas: 10, total: "R$ 35.000,00" },
    { id: 17, pdv: "Art Rock - CPV", vendas: 10, total: "R$ 35.000,00" },
    { id: 18, pdv: "Art Rock - CPV", vendas: 10, total: "R$ 35.000,00" },
    { id: 19, pdv: "Art Rock - CPV", vendas: 10, total: "R$ 35.000,00" },
  ];

  return (
    <>
      <Header title="Classes" />
      <ContentWithSidebar>
        <HeaderTotal />
        <Balance rows={rows} columns={columns} />
      </ContentWithSidebar>
    </>
  );
};

export default Classes;
