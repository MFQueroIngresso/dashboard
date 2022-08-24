import * as React from "react";
import { styled } from "@mui/material/styles";
import { Card, Grid, Divider } from "@mui/material";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import { CalendarToday } from "@mui/icons-material";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Box from "@mui/material/Box";

export function Event() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <Card sx={{ maxWidth: 345, mt: 3, mb: 1 }}>
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
          subheader="19 de Agosto, 2022"
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
          <Grid container spacing={1} sx={{ mt: 1, mb: 2 }}>
            <Grid item xs={4} sx={{ textAlign: "center" }}>
              <Typography variant="body2" color="info.main">
                Hoje
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="body2" color="text.secondary">
                <b>Vendidos</b>
                <br />
                <b>Receita</b>
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="body2" color="success.main">
                <b>
                  10
                  <br />
                  R$ 12.456,00
                </b>
              </Typography>
            </Grid>
          </Grid>
          <Divider />
          <Grid container spacing={1} sx={{ mt: 1, mb: 2 }}>
            <Grid item xs={4} sx={{ textAlign: "center" }}>
              <Typography variant="body2" color="info.main">
                Total
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="body2" color="text.secondary">
                <b>Vendidos</b>
                <br />
                <b>Receita</b>
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="body2" color="success.main">
                <b>
                  10
                  <br />
                  R$ 12.456,00
                </b>
              </Typography>
            </Grid>
          </Grid>
          <Divider />
        </CardContent>
        <CardActions sx={{ ml: 1, mb: 2, textAlign: "center" }}>
          <Button
            variant="outlined"
            size="small"
            onClick={handleExpandClick}
            sx={{ m: "auto" }}
          >
            Ver Detalhes
          </Button>
        </CardActions>
      </Card>
      <SwipeableDrawer
        anchor="right"
        open={expanded}
        onClose={handleExpandClick}
        onOpen={handleExpandClick}
      >
        <CardContent sx={{ p: 4 }} color="text.secondary">
          <h2>Nando Reis</h2>
          <Card sx={{ minWidth: 475, mt: 3 }}>
            <CardContent>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                Ingressos Emitidos
              </Typography>
              <Box
                sx={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)" }}
              >
                <div>
                  <Typography variant="h5" component="div">
                    32
                  </Typography>
                  <Typography variant="body2">Hoje</Typography>
                </div>
                <div>
                  <Typography variant="h5" component="div">
                    345
                  </Typography>
                  <Typography variant="body2">Total</Typography>
                </div>
              </Box>
            </CardContent>
          </Card>

          <Card sx={{ minWidth: 475, mt: 3 }}>
            <CardContent>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                Faturamento
              </Typography>
              <Box
                sx={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)" }}
              >
                <div>
                  <Typography variant="h5" component="div">
                    R$ 100,00
                  </Typography>
                  <Typography variant="body2">Hoje</Typography>
                </div>
                <div>
                  <Typography variant="h5" component="div">
                    R$ 2.340,00
                  </Typography>
                  <Typography variant="body2">Total</Typography>
                </div>
              </Box>
            </CardContent>
          </Card>

          <Card sx={{ minWidth: 475, mt: 3 }}>
            <CardContent>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                Ticket Médio
              </Typography>
              <Box
                sx={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)" }}
              >
                <div>
                  <Typography variant="h5" component="div">
                    R$ 100,00
                  </Typography>
                </div>
              </Box>
            </CardContent>
          </Card>

          <Card sx={{ minWidth: 475, mt: 3 }}>
            <CardContent>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                Média Diária
              </Typography>
              <Box
                sx={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)" }}
              >
                <div>
                  <Typography variant="h5" component="div">
                    100
                  </Typography>
                  <Typography variant="body2">Quantidade</Typography>
                </div>
                <div>
                  <Typography variant="h5" component="div">
                    R$ 240,00
                  </Typography>
                  <Typography variant="body2">Valor</Typography>
                </div>
              </Box>
            </CardContent>
          </Card>
        </CardContent>
        <Button variant="contained" sx={{ mr: 4, ml: 4 }}>
          Estatísticas Completas
        </Button>
      </SwipeableDrawer>
    </>
  );
}
