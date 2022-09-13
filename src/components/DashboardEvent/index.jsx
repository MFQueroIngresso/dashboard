import { Grid } from "@mui/material";
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
        <GeneralCard title="Ticket Médio" textBold="R$ 45,00" />
        <GeneralCard
          title="Média Diária"
          textBold="139 ingressos"
          chip
          chipText="R$ 45,00"
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
