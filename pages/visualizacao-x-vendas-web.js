import { Header } from "../src/components/Header";
import { Balance } from "../src/components/Balance";
import { useRouter } from "next/router";
import { ContentWithSidebar } from "../src/components/ContentWithSidebar";
import { HeaderTotal } from "../src/components/HeaderTotal";
import { VisualizacaoGrafico } from "../src/components/DashboardEvent/VisualizacaoGrafico";

const Visualizacao = () => {
  const router = useRouter();
  const { event } = router.query;

  return (
    <>
      <Header title="Visualização x Vendas Web" />
      <ContentWithSidebar>
        <HeaderTotal />
        <VisualizacaoGrafico />
      </ContentWithSidebar>
    </>
  );
};

export default Visualizacao;
