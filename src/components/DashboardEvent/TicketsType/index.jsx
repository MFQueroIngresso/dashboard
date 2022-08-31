import * as React from "react";
import { Card } from "@mui/material";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { TicketsTypeChart } from "./TicketsTypeChart";

export const TicketsType = () => {
  return (
    <>
      <Card sx={{ minWidth: "100%" }}>
        <CardHeader
          sx={{ background: "#1976d2" }}
          subheader={
            <>
              <Typography variant="span" component="div" color="#ffffff">
                Tipos de Ingresso
              </Typography>
            </>
          }
        />

        <CardContent>
          <TicketsTypeChart />
        </CardContent>
      </Card>
    </>
  );
};
