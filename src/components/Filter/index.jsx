import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

export function Filter() {
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={top100Films}
      sx={{ width: "80%", m: "auto" }}
      renderInput={(params) => (
        <TextField {...params} label="Encontrar Evento" />
      )}
    />
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
  { label: "Festa do Peão de Barretos", year: 2022 },
  { label: "Niver da Pri", year: 2022 },
  { label: "Expo Perdões", year: 2022 },
  { label: "Turnê de Despedida do Skank", year: 2022 },
  { label: "Festa do Beijo", year: 2022 },
  { label: "Nando Reis", year: 2022 },
  { label: "Isso é São Paulo", year: 2022 },
];
