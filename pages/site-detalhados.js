import { Header } from "../src/components/Header";
import { Balance } from "../src/components/Balance";
import { useRouter } from "next/router";
import { ContentWithSidebar } from "../src/components/ContentWithSidebar";
import { HeaderTotal } from "../src/components/HeaderTotal";
import { useEffect, useState } from "react";
import { api } from "../src/libs/api";

const SiteDetalhados = () => {
  const router = useRouter();
  const { event } = router.query;

  const [detalhados, setDetalhados] = useState([]);
  const [loading, setLoading] = useState(true);

  const statusNumberForText = (status) => {
    if (status === 0) return "NÃO CONFIRMADO";
    if (status === 1 || status === 2) return "APROVADO";
    if (status === 3) return "CANCELADO";
  };

  const getSiteDetalhados = async () => {
    try {
      const { data } = await api.get("site_detalhados");
      const organizeData = data.map((event) => ({
        id: event.order_id,
        data: new Date(event.date_added).toLocaleDateString("pt-BR", {
          year: "numeric",
          month: "numeric",
          day: "numeric",
          hour: "2-digit",
          minute: "2-digit",
        }),
        status: statusNumberForText(event.status),
        comprador: event,
        nominado: event,
        email: event.email,
        telefone: `(${event.telephone.slice(0, 2)}) ${event.telephone.slice(
          2
        )}`,
        qtde: 1,
        ingresso:
          "1x " +
          event.cla_nome +
          " • " +
          event.price.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          }),
        valor: (event.tax + event.price).toLocaleString("pt-br", {
          style: "currency",
          currency: "BRL",
        }),
      }));
      setDetalhados(organizeData);
    } catch (err) {
      console.log("err: ", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getSiteDetalhados();
  }, []);

  const columns = [
    { field: "id", headerName: "Pedido", width: 90 },
    {
      field: "data",
      headerName: "Data",
      width: 150,
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
      width: 230,
      renderCell: (param) => {
        return (
          <span style={{ textAlign: "right", width: "100%" }}>
            {param.value?.firstname} {param.value?.lastname} <br /> RG:{" "}
            {param.value?.rg}
          </span>
        );
      },
    },
    {
      field: "nominado",
      headerName: "Nominado",
      type: "number",
      width: 230,
      renderCell: (param) => {
        return (
          <>
            {param.value?.firstname} {param.value?.lastname}
          </>
        );
      },
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
      width: 190,
    },
    {
      field: "qtde",
      headerName: "Quantidade",
      type: "number",
      width: 190,
    },
    {
      field: "ingresso",
      headerName: "Ingresso",
      type: "number",
      width: 390,
    },
    {
      field: "valor",
      headerName: "Valor",
      type: "number",
      width: 100,
    },
  ];

  return (
    <>
      <Header title="Site Detalhados" />
      <ContentWithSidebar>
        <HeaderTotal />
        {!loading && <Balance rows={detalhados} columns={columns} />}
        {loading && (
          <>
            <h1
              style={{
                color: "gray",
                textAlign: "center",
                textTransform: "uppercase",
                letterSpacing: 3,
              }}
            >
              Aguarde, carregando...
            </h1>
          </>
        )}
      </ContentWithSidebar>
    </>
  );
};

export default SiteDetalhados;
