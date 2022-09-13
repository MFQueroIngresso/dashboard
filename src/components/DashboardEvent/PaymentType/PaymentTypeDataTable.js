import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "tipo", headerName: "Tipo", width: 350 },
  { field: "site", headerName: "Site", width: 75 },
  { field: "pontodevenda", headerName: "Ponto de Venda", width: 150 },
  { field: "total", headerName: "Total", width: 120 },
  { field: "valor", headerName: "Valor", width: 120 },
];

const rows = [
  {
    id: 1,
    tipo: "Cartão de Crédito",
    site: 90,
    pontodevenda: 22,
    total: 212,
    valor: "R$ 1340,00",
  },
  {
    id: 2,
    tipo: "Débito",
    site: 112,
    pontodevenda: 80,
    total: 122,
    valor: "R$ 1340,00",
  },
  {
    id: 3,
    tipo: "Parcelado",
    site: 112,
    pontodevenda: 80,
    total: 166,
    valor: "R$ 1340,00",
  },
  {
    id: 4,
    tipo: "PIX",
    site: 112,
    pontodevenda: 80,
    total: 189,
    valor: "R$ 1340,00",
  },
];

export function PaymentTypeDataTable() {
  return (
    <>
      <div style={{ height: 319, width: "100%" }}>
        <br />
        <br />
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={4}
          rowsPerPageOptions={[4]}
        />
      </div>
      <br />
      <br />
    </>
  );
}
