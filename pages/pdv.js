import { Header } from "../src/components/Header";
import { BalanceWithExpand } from "../src/components/BalanceWithExpand";
import { useRouter } from "next/router";
import { ContentWithSidebar } from "../src/components/ContentWithSidebar";
import { HeaderTotal } from "../src/components/HeaderTotal";

const PDV = () => {
  const router = useRouter();
  const { event } = router.query;

  const columns = [
    { field: "id", headerName: "", width: 90 },
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
      slug: "QUEROINGRESSO - INTERNET",
      vendas: 10,
      cortesia: 10,
      total: 40,
      valor: "R$ 10,000.00",
      expand: [
        {
          slug: "Área Premium",
          vendas: 10,
          cortesia: 10,
          total: 40,
          valor: "R$ 10,000.00",
        },
      ],
    },
    {
      id: 2,
      slug: "STUDIO DIGITAL - GUARAREMA",
      vendas: 10,
      cortesia: 10,
      total: 40,
      valor: "R$ 10,000.00",
      expand: [
        {
          slug: "Área Premium",
          vendas: 10,
          cortesia: 10,
          total: 40,
          valor: "R$ 10,000.00",
        },
      ],
    },
    {
      id: 3,
      slug: "QUEROINGRESSO - INTERNET",
      vendas: 10,
      cortesia: 10,
      total: 40,
      valor: "R$ 10,000.00",
      expand: [
        {
          slug: "Área Premium",
          vendas: 10,
          cortesia: 10,
          total: 40,
          valor: "R$ 10,000.00",
        },
      ],
    },
    {
      id: 4,
      slug: "STUDIO DIGITAL - GUARAREMA",
      vendas: 10,
      cortesia: 10,
      total: 40,
      valor: "R$ 10,000.00",
      expand: [
        {
          slug: "Área Premium",
          vendas: 10,
          cortesia: 10,
          total: 40,
          valor: "R$ 10,000.00",
        },
      ],
    },
    {
      id: 5,
      slug: "QUEROINGRESSO - INTERNET",
      vendas: 10,
      cortesia: 10,
      total: 40,
      valor: "R$ 10,000.00",
      expand: [
        {
          slug: "Área Premium",
          vendas: 10,
          cortesia: 10,
          total: 40,
          valor: "R$ 10,000.00",
        },
      ],
    },
    {
      id: 6,
      slug: "STUDIO DIGITAL - GUARAREMA",
      vendas: 10,
      cortesia: 10,
      total: 40,
      valor: "R$ 10,000.00",
      expand: [
        {
          slug: "Área Premium",
          vendas: 10,
          cortesia: 10,
          total: 40,
          valor: "R$ 10,000.00",
        },
      ],
    },
    {
      id: 7,
      slug: "QUEROINGRESSO - INTERNET",
      vendas: 10,
      cortesia: 10,
      total: 40,
      valor: "R$ 10,000.00",
      expand: [
        {
          slug: "Área Premium",
          vendas: 10,
          cortesia: 10,
          total: 40,
          valor: "R$ 10,000.00",
        },
      ],
    },
    {
      id: 8,
      slug: "STUDIO DIGITAL - GUARAREMA",
      vendas: 10,
      cortesia: 10,
      total: 40,
      valor: "R$ 10,000.00",
      expand: [
        {
          slug: "Área Premium",
          vendas: 10,
          cortesia: 10,
          total: 40,
          valor: "R$ 10,000.00",
        },
      ],
    },
    {
      id: 9,
      slug: "Total",
      vendas: 10,
      cortesia: 10,
      total: 40,
      valor: "R$ 130,000.00",
    },
  ];

  return (
    <>
      <Header title="PDV" />
      <ContentWithSidebar>
        <HeaderTotal />
        <BalanceWithExpand rows={rows} columns={columns} />
      </ContentWithSidebar>
    </>
  );
};

export default PDV;
