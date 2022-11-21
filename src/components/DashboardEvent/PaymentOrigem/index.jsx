import * as React from "react";
import { Card } from "@mui/material";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { PaymentOrigemDataChart } from "./PaymentOrigemDataChart";
import { PaymentOrigemDataTable } from "./PaymentOrigemDataTable";

export const PaymentOrigem = () => {
  return (
    <>
      <Card sx={{ minWidth: "100%", boxShadow: "none" }}>
        <CardHeader
          sx={{ background: "#1976d2" }}
          subheader={
            <>
              <Typography variant="span" component="div" color="#ffffff">
                Origem da Venda
              </Typography>
            </>
          }
        />

        <CardContent>
          <PaymentOrigemDataChart />
          <PaymentOrigemDataTable />
        </CardContent>
      </Card>
    </>
  );
};
