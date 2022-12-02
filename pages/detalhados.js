import { Header } from "../src/components/Header";
import { Balance } from "../src/components/Balance";
import { useRouter } from "next/router";
import { ContentWithSidebar } from "../src/components/ContentWithSidebar";
import { HeaderTotal } from "../src/components/HeaderTotal";
import { api } from "../src/libs/api";
import { useEffect, useState } from "react";
import { Loading } from "../src/components/Loading";

const Detalhados = () => {
  const router = useRouter();
  const { event } = router.query;

  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  const getOrders = async () => {
    try {
      const { data } = await api.get("orders");
      const organizeData = data.map((order) => ({
        id: order.order_id,
        data_compra: new Date(order.date_added).toLocaleDateString("pt-BR"),
        pdv: order.store_name,
        pos: "",
        pedido: order.invoice_no,
        cod_barras: order.pagseguro_code,
        situacao: "Aprovado",
        ingresso: "",
        ingresso_numerado: "",
        valor: new Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL",
        }).format(order.total),
        forma_pagto: order.comment,
      }));
      setOrders(organizeData);
    } catch (err) {
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getOrders();
  }, []);

  const rows = [
    {
      id: 1,
      data_compra: "Área Premium",
      pdv: "",
      pos: "",
      pedido: "R$ 10,000.00",
      cod_barras: "R$ 10,000.00",
      situacao: "sit",
      ingresso: "ing",
      ingresso_numerado: "ingresso_numerado",
      valor: "valor",
      forma_pagto: "forma_pagto",
    },
  ];

  const columns = [
    { field: "id", headerName: "ID", width: 100 },
    {
      field: "data_compra",
      headerName: "Data da Compra",
      width: 120,
    },
    {
      field: "pdv",
      headerName: "PDV",
      width: 350,
    },
    {
      field: "pos",
      headerName: "Pos",
      type: "number",
      width: 50,
    },
    {
      field: "pedido",
      headerName: "Pedido",
      type: "number",
      width: 100,
    },
    {
      field: "cod_barras",
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
      field: "ingresso_numerado",
      headerName: "Ingresso Numerado",
      type: "number",
      width: 150,
    },
    {
      field: "valor",
      headerName: "Valor",
      type: "number",
      width: 110,
    },
    {
      field: "forma_pagto",
      headerName: "Forma de Pagamento",
      type: "number",
      width: 220,
    },
  ];

  return (
    <>
      <Header title="Detalhados" />
      <ContentWithSidebar>
        <HeaderTotal />
        {!loading && <Balance rows={orders} columns={columns} />}
        {loading && <Loading />}
      </ContentWithSidebar>
    </>
  );
};

export default Detalhados;
