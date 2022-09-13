import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "id", headerName: "ID", width: 90 },
  { field: "tipo", headerName: "Tipo", width: 300 },
  { field: "venda", headerName: "Venda", width: 150 },
  { field: "cortesia", headerName: "Cortesia", width: 150 },
  { field: "total", headerName: "Total", width: 150 },
  { field: "valor", headerName: "Valor", width: 150 },
];

const rows = [
  {
    id: 1,
    tipo: "Site",
    venda: 90,
    cortesia: 22,
    total: 16,
    valor: "R$ 1340,00",
  },
  {
    id: 2,
    tipo: "Ponto de Venda",
    venda: 112,
    cortesia: 80,
    total: 16,
    valor: "R$ 1340,00",
  },
];

export function PaymentOrigemDataTable() {
  return (
    <>
      <div style={{ height: 215, width: "100%" }}>
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
