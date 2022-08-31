import { Grid } from "@mui/material";
import { IssuedTickets } from "./IssuedTickets";
import { EventSituation } from "./EventSituation";
import { GeneralCard } from "./GeneralCard";
import { TicketsType } from "./TicketsType";

export const DashboardEvent = () => {
  return (
    <Grid container spacing={1}>
      <Grid item xs={12} sm={12} md={4} lg={4}>
        <GeneralCard />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={4}>
        <EventSituation />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={4}>
        <IssuedTickets />
      </Grid>
      <Grid item xs={12}>
        <TicketsType />
      </Grid>
    </Grid>
  );
};
