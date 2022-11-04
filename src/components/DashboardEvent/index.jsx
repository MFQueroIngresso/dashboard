import { Card, Grid, Divider, Typography } from "@mui/material";
import { IssuedTickets } from "./IssuedTickets";
import { EventSituation } from "./EventSituation";
import { GeneralCard } from "./GeneralCard";
import { TicketsType } from "./TicketsType";
import { DemographicData } from "./DemographicData";
import { PaymentOrigem } from "./PaymentOrigem";
import { PaymentType } from "./PaymentType";

export const DashboardEvent = () => {
  return (
    <Grid container spacing={1}>
      <Grid item xs={12} sm={6} md={4} lg={4}>
        <EventSituation />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={4}>
        <IssuedTickets />
      </Grid>
      <Grid item xs={12} sm={12} md={4} lg={4}>
        <GeneralCard
          title="Faturamento"
          textBold={
            <>
              <Grid container spacing={1} sx={{ mt: -2, mb: 2 }}>
                <Grid item xs={6} sx={{ pr: 1 }}>
                  <Typography
                    variant="body2"
                    color="info.main"
                    sx={{ fontWeight: "bold" }}
                  >
                    Hoje
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="body2" color="text.secondary">
                    <b>R$ 12.456,00</b>
                  </Typography>
                </Grid>
              </Grid>
              <Divider />
              <Grid container spacing={1} sx={{ mt: 1, mb: 2 }}>
                <Grid item xs={6} sx={{ pr: 1 }}>
                  <Typography
                    variant="body2"
                    color="info.main"
                    sx={{ fontWeight: "bold" }}
                  >
                    Total
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="body2" color="text.secondary">
                    <b>R$ 12.456,00</b>
                  </Typography>
                </Grid>
              </Grid>
            </>
          }
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TicketsType />
      </Grid>
      <Grid item xs={12} sm={6}>
        <DemographicData />
      </Grid>
      <Grid item xs={12} sm={12}>
        <PaymentType />
      </Grid>
      <Grid item xs={12} sm={12}>
        <PaymentOrigem />
      </Grid>
    </Grid>
  );
};
