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
  const [search, setSearch] = useState("");

  const {
    handleAllEvents,
    handleCurrentEvents,
    handlePastEvents,
    handleSearchEvents,
  } = useEventContext();

  const handleChange = (event) => {
    setFilter(event.target.value);
    if (event.target.value === 1) {
      handleAllEvents();
    }
    if (event.target.value === 2) {
      handleCurrentEvents();
    }
    if (event.target.value === 3) {
      handlePastEvents();
    }
  };

  const handleSearchChange = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
    handleSearchEvents(e.target.value);
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
        <TextField
          sx={{ minWidth: "100%" }}
          label="Encontrar Evento"
          value={search}
          onChange={handleSearchChange}
        />
      </Grid>
    </Grid>
  );
}
