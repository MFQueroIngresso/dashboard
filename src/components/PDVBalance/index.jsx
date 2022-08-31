import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridToolbar, ptBR } from "@mui/x-data-grid";

export function PDVBalance() {
  const columns = [
    { field: "id", headerName: "ID", width: 150 },
    {
      field: "pdv",
      headerName: "PDV",
      width: 350,
      editable: true,
    },
    {
      field: "vendas",
      headerName: "vendas",
      type: "number",
      width: 250,
      editable: true,
    },
    {
      field: "total",
      headerName: "total",
      type: "string",
      width: 250,
      editable: true,
    },
  ];

  const rows = [
    { id: 1, pdv: "Art Rock - CPV", vendas: 10, total: "R$ 35.000,00" },
    { id: 2, pdv: "Art Rock - CPV", vendas: 10, total: "R$ 35.000,00" },
    { id: 3, pdv: "Art Rock - CPV", vendas: 10, total: "R$ 35.000,00" },
    { id: 4, pdv: "Art Rock - CPV", vendas: 10, total: "R$ 35.000,00" },
    { id: 5, pdv: "Art Rock - CPV", vendas: 10, total: "R$ 35.000,00" },
    { id: 6, pdv: "Art Rock - CPV", vendas: 10, total: "R$ 35.000,00" },
    { id: 7, pdv: "Art Rock - CPV", vendas: 10, total: "R$ 35.000,00" },
    { id: 8, pdv: "Art Rock - CPV", vendas: 10, total: "R$ 35.000,00" },
    { id: 9, pdv: "Art Rock - CPV", vendas: 10, total: "R$ 35.000,00" },
    { id: 10, pdv: "Art Rock - CPV", vendas: 10, total: "R$ 35.000,00" },
    { id: 11, pdv: "Art Rock - CPV", vendas: 10, total: "R$ 35.000,00" },
    { id: 12, pdv: "Art Rock - CPV", vendas: 10, total: "R$ 35.000,00" },
    { id: 13, pdv: "Art Rock - CPV", vendas: 10, total: "R$ 35.000,00" },
    { id: 14, pdv: "Art Rock - CPV", vendas: 10, total: "R$ 35.000,00" },
    { id: 15, pdv: "Art Rock - CPV", vendas: 10, total: "R$ 35.000,00" },
    { id: 16, pdv: "Art Rock - CPV", vendas: 10, total: "R$ 35.000,00" },
    { id: 17, pdv: "Art Rock - CPV", vendas: 10, total: "R$ 35.000,00" },
    { id: 18, pdv: "Art Rock - CPV", vendas: 10, total: "R$ 35.000,00" },
    { id: 19, pdv: "Art Rock - CPV", vendas: 10, total: "R$ 35.000,00" },
  ];

  return (
    <Box sx={{ height: 800, width: 1 }}>
      <DataGrid
        localeText={ptBR.components.MuiDataGrid.defaultProps.localeText}
        rows={rows}
        columns={columns}
        disableColumnFilter
        disableColumnSelector
        disableDensitySelector
        checkboxSelection
        disableSelectionOnClick
        components={{ Toolbar: GridToolbar }}
        componentsProps={{
          toolbar: {
            showQuickFilter: true,
            quickFilterProps: { debounceMs: 500 },
          },
        }}
      />
    </Box>
  );
}
