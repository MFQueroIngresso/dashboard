import * as React from "react";
import { Card, Grid, Divider } from "@mui/material";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export const IssuedTickets = () => {
  return (
    <>
      <Card sx={{ minWidth: "100%" }}>
        <CardHeader
          sx={{ background: "#1976d2" }}
          subheader={
            <>
              <Typography variant="span" component="div" color="#ffffff">
                Ingressos Emitidos
              </Typography>
            </>
          }
        />

        <CardContent>
          <Grid container spacing={1} sx={{ mt: 1, mb: 2 }}>
            <Grid item xs={4} sx={{ pr: 1 }}>
              <Typography
                variant="body2"
                color="info.main"
                sx={{ fontWeight: "bold" }}
              >
                Hoje
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="body2" color="text.secondary">
                <b>Vendidos</b>
                <br />
                <b>Cortesia</b>
                <br />
                <b>Receita</b>
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="body2" color="success.main">
                <b>
                  10
                  <br />
                  4
                  <br />
                  R$ 12.456,00
                </b>
              </Typography>
            </Grid>
          </Grid>
          <Divider />
          <Grid container spacing={1} sx={{ mt: 1, mb: 2 }}>
            <Grid item xs={4} sx={{ pr: 1 }}>
              <Typography
                variant="body2"
                color="info.main"
                sx={{ fontWeight: "bold" }}
              >
                Total
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="body2" color="text.secondary">
                <b>Vendidos</b>
                <br />
                <b>Cortesia</b>
                <br />
                <b>Receita</b>
                <br />
                <b>Ticket Médio</b>
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="body2" color="success.main">
                <b>
                  10
                  <br />
                  4
                  <br />
                  R$ 12.456,00
                  <br />
                  R$ 223,00
                </b>
              </Typography>
            </Grid>
          </Grid>
          <Divider />
          <Grid container spacing={1} sx={{ mt: 1, mb: 2 }}>
            <Grid item xs={4} sx={{ pr: 1 }}>
              <Typography
                variant="body2"
                color="info.main"
                sx={{ fontWeight: "bold" }}
              >
                Média Diária
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
      </Card>
    </>
  );
};
