import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "id", headerName: "ID", width: 60 },
  { field: "tipo", headerName: "Tipo", width: 110 },
  { field: "venda", headerName: "Venda", width: 75 },
  { field: "cortesia", headerName: "Cortesia", width: 75 },
  { field: "total", headerName: "Total", width: 75 },
  { field: "valor", headerName: "Valor", width: 120 },
];

const rows = [
  {
    id: 1,
    tipo: "Entrada",
    venda: 8,
    cortesia: 8,
    total: 16,
    valor: "R$ 1340,00",
  },
  {
    id: 2,
    tipo: "Camarote VIP",
    venda: 8,
    cortesia: 8,
    total: 16,
    valor: "R$ 1340,00",
  },
  {
    id: 3,
    tipo: "Arquibancada",
    venda: 8,
    cortesia: 8,
    total: 16,
    valor: "R$ 1340,00",
  },
];

export function DemographicDataTable() {
  return (
    <>
      <div style={{ height: 476, width: "100%" }}>
        <br />
        <br />
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
        />
      </div>
      <br />
      <br />
    </>
  );
}
