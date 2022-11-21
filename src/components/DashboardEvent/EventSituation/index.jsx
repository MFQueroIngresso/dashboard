import * as React from "react";
import { Card, Grid, Divider } from "@mui/material";
import CardHeader from "@mui/material/CardHeader";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import { CalendarToday } from "@mui/icons-material";

export const EventSituation = () => {
  return (
    <>
      <Card sx={{ minWidth: "100%", minHeight: "100%", boxShadow: "none" }}>
        <CardHeader
          sx={{ background: "#1976d2" }}
          subheader={
            <>
              <Typography variant="span" component="div" color="#ffffff">
                Situação do Evento
              </Typography>
            </>
          }
        />

        <CardContent>
          <Typography
            variant="body2"
            sx={{ mt: 1, mb: 3, textAlign: "center" }}
          >
            Vendas iniciadas em 30 de Agosto de 2022 <br />
            <b>Iniciado há 46 dias</b>
          </Typography>
          <Divider />
          <Grid container spacing={1} sx={{ mt: 1, mb: 2 }}>
            <Grid item xs={4} sx={{ pr: 1 }}>
              <Typography
                variant="body2"
                color="info.main"
                sx={{ fontWeight: "bold" }}
              >
                Ticket Médio
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="body2" color="text.secondary">
                <b>Quantidade</b>
                <br />
                <b>Valor</b>
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="body2" color="success.main">
                <b>
                  10
                  <br />
                  R$ 233,00
                </b>
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
        <CardActions sx={{ mt: 2, mb: 3 }}>
          <Chip
            label="Faltam 12 dias para o evento"
            size="small"
            deleteIcon={<CalendarToday />}
            onDelete={() => {}}
            sx={{ pr: 1, pl: 1, textAlign: "center", m: "auto" }}
          />
        </CardActions>
      </Card>
    </>
  );
};
