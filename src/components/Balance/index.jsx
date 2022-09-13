import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridToolbar, ptBR } from "@mui/x-data-grid";

export function Balance({ rows, columns }) {
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
