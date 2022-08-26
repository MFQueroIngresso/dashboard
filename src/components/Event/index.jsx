import * as React from "react";
import { Card, Grid, Divider } from "@mui/material";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import { CalendarToday } from "@mui/icons-material";
import Link from "next/link";

export function Event() {
  return (
    <>
      <Card sx={{ maxWidth: "100%", minWidth: 345, mt: 0, mb: 1 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              N
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="Nando Reis"
          subheader={
            <>
              19 de Agosto, 2022
              <br />
              <small>Hillarius VP | São José dos Campos - SP</small>
            </>
          }
        />

        <CardContent>
          <Stack direction="row" spacing={1}>
            <Chip
              label="Faltam 12 dias para o evento"
              size="small"
              deleteIcon={<CalendarToday />}
              onDelete={() => {}}
              sx={{ pr: 1, pl: 1 }}
            />
          </Stack>
          <br />
          <Divider />
          <Grid container spacing={1} sx={{ mt: 1, mb: 2 }}>
            <Grid item xs={4} sx={{ textAlign: "right", pr: 1 }}>
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
            <Grid item xs={4} sx={{ textAlign: "right", pr: 1 }}>
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
            <Grid item xs={4} sx={{ textAlign: "right", pr: 1 }}>
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
          <Divider />
        </CardContent>
        <CardActions sx={{ ml: 1, mb: 2, textAlign: "center" }}>
          <Button variant="outlined" size="small" sx={{ m: "auto" }}>
            <Link href="/">
              <a>Ver Detalhes</a>
            </Link>
          </Button>
        </CardActions>
      </Card>
    </>
  );
}
