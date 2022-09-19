import { Header } from "../src/components/Header";
import { Balance } from "../src/components/Balance";
import { useRouter } from "next/router";
import { ContentWithSidebar } from "../src/components/ContentWithSidebar";
import { HeaderTotal } from "../src/components/HeaderTotal";

const SangriasComprovantes = () => {
  const router = useRouter();
  const { event } = router.query;

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "imagem",
      headerName: "Imagem do Comprovante. (Clique para Ampliar)",
      width: 400,
    },
    {
      field: "data",
      headerName: "Data do Cadastro",
      type: "number",
      width: 200,
    },
    {
      field: "deposito",
      headerName: "Valor do Depósito",
      type: "number",
      width: 200,
    },
  ];

  const rows = [];

  return (
    <>
      <Header title="Comprovantes das Sangrias" />
      <ContentWithSidebar>
        <HeaderTotal />
        <Balance rows={rows} columns={columns} />
      </ContentWithSidebar>
    </>
  );
};

export default SangriasComprovantes;
