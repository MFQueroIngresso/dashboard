import * as React from "react";
import { Card } from "@mui/material";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { TicketsTypeChart } from "./TicketsTypeChart";
import { TicketsTypeTable } from "./TicketsTypeTable";

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
          <TicketsTypeTable />
        </CardContent>
      </Card>
    </>
  );
};
