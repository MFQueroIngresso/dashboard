import { useContext, useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Grid from "@mui/material/Grid";
import { useEventContext } from "../../../context/providers/EventContext";

export function Filter() {
  const [filter, setFilter] = useState(2);
  const { handleAllEvents, handleCurrentEvents } = useEventContext();

  const handleChange = (event) => {
    setFilter(event.target.value);
    if (event.target.value === 1) {
      handleAllEvents();
    }
    if (event.target.value === 2) {
      handleCurrentEvents();
    }
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6} md={8} lg={3}>
        <Box sx={{ minWidth: "100%" }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Filtrar</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={filter}
              label="Filtrar"
              onChange={handleChange}
            >
              <MenuItem value={1}>Todos os Eventos</MenuItem>
              <MenuItem value={2}>Eventos Atuais</MenuItem>
              <MenuItem value={3}>Eventos Encerrados</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Grid>
      <Grid item xs={12} sm={6} md={8} lg={9}>
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={top100Films}
          sx={{ width: "100%" }}
          renderInput={(params) => (
            <TextField {...params} label="Encontrar Evento" />
          )}
        />
      </Grid>
    </Grid>
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
