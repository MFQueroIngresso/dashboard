/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { Header } from "../src/components/Header";
import { Balance } from "../src/components/Balance";
import { useRouter } from "next/router";
import { ContentWithSidebar } from "../src/components/ContentWithSidebar";
import { HeaderTotal } from "../src/components/HeaderTotal";
import { useProofContext } from "../context/providers/ProofContext";
import { Loading } from "../src/components/Loading";

const SangriasComprovantes = () => {
  const router = useRouter();
  const event =
    typeof window !== "undefined" &&
    JSON.parse(window.localStorage.getItem("selected_event"));

  const { proofs, loading } = useProofContext();

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "imagem",
      headerName: "Imagem do Comprovante. (Clique para Ampliar)",
      width: 400,
      type: "string",
      renderCell: (param) => {
        return (
          <>
            <a
              href={`http://gestao.queroingresso.com.br/images/comprovante/${param.row.imagem}`}
              target="_blank"
            >
              <img
                src={`http://gestao.queroingresso.com.br/images/comprovante/${param.row.imagem}`}
                height="50"
              />
            </a>
          </>
        );
      },
    },
    {
      field: "cadastrado_em",
      headerName: "Data do Cadastro",
      type: "number",
      renderCell: (param) => {
        return (
          <>
            {new Date(param.row.cadastrado_em).toLocaleString("pt-BR", {
              year: "numeric",
              month: "numeric",
              day: "numeric",
            })}
          </>
        );
      },
    },
    {
      field: "valor",
      headerName: "Valor do Depósito",
      type: "number",
      renderCell: (param) => {
        return (
          <>
            {param.row.valor.toLocaleString("pt-br", {
              style: "currency",
              currency: "BRL",
            })}
          </>
        );
      },
    },
  ];

  const proofsFiltered = proofs.filter((e) => e.evento_id === event.eve_cod);

  const rows = proofs.map((p) => {
    return {
      id: p.comprovante_sangria_id,
      imagem: p.imagem,
      cadastrado_em: p.cadastrado_em,
      valor: p.valor,
    };
  });

  return (
    <>
      <Header title="Comprovantes das Sangrias" />
      <ContentWithSidebar>
        <HeaderTotal />
        {loading && <Loading />}
        {!loading && <Balance rows={rows} columns={columns} />}
      </ContentWithSidebar>
    </>
  );
};

export default SangriasComprovantes;
