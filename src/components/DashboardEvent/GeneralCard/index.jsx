import * as React from "react";
import { Card, Grid, Divider } from "@mui/material";
import CardHeader from "@mui/material/CardHeader";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import { CalendarToday } from "@mui/icons-material";

export const GeneralCard = () => {
  return (
    <>
      <Card sx={{ minWidth: "100%", minHeight: "100%" }}>
        <CardHeader
          sx={{ background: "#1976d2" }}
          subheader={
            <>
              <Typography variant="span" component="div" color="#ffffff">
                Relatório Geral
              </Typography>
            </>
          }
        />

        <CardContent>
          <Typography variant="body2" sx={{ mt: 10, textAlign: "center" }}>
            <b>Nando Reis</b>
            <br />
            Hillarius VP | São José dos Campos - SP
            <br />
          </Typography>
        </CardContent>
        <CardActions sx={{ mt: 12 }}>
          <Chip
            label="30 de Agosto de 2022"
            size="small"
            sx={{ pr: 1, pl: 1, textAlign: "center", m: "auto" }}
            variant="outlined"
          />
        </CardActions>
      </Card>
    </>
  );
};
