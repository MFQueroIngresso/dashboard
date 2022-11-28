import { Grid, Chip } from "@mui/material";
import { CalendarToday } from "@mui/icons-material";

export const HeaderTotal = () => {
  const event =
    typeof window !== "undefined" &&
    JSON.parse(window.localStorage.getItem("selected_event"));

  return (
    <Grid container spacing={0} sx={{ mb: 3 }}>
      <Grid item xs={12} sm={12} md={9} lg={9}>
        <h2
          style={{ color: "rgba(0,0,0,.6)", marginTop: 0, marginBottom: "3px" }}
        >
          Relatório Geral <small> · {event?.eve_nome}</small>
        </h2>
        <hr style={{ opacity: "0.2" }} />
        <p
          style={{ color: "rgba(0,0,0,.6)", marginTop: 0, marginBottom: "3px" }}
        >
          {event?.eve_local} · {event?.eve_cidade}
        </p>
      </Grid>
      <Grid item xs={12} sm={12} md={3} lg={3} sx={{ textAlign: "right" }}>
        <Chip
          label="30 de Agosto de 2022 "
          size="small"
          deleteIcon={<CalendarToday />}
          onDelete={() => {}}
          sx={{ pr: 1, pl: 1, textAlign: "center", m: "auto", width: "100%" }}
          variant="outlined"
        />
        <hr style={{ opacity: "0.2", marginTop: 12 }} />
        <p
          style={{ color: "rgba(0,0,0,.6)", marginTop: 0, marginBottom: "3px" }}
        >
          <b>1247</b> vendas no total
        </p>
      </Grid>
    </Grid>
  );
};
