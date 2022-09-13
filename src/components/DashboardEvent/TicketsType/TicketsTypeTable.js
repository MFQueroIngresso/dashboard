import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "tipo", headerName: "Tipo", width: 200 },
  { field: "quantidade", headerName: "Quantidade", width: 200 },
];

const rows = [
  { id: 1, tipo: "Venda", quantidade: 120 },
  { id: 2, tipo: "Cortesia", quantidade: 11 },
];

export function TicketsTypeTable() {
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
