import { Grid } from "@mui/material";
import { IssuedTickets } from "./IssuedTickets";

export const DashboardEvent = () => {
  return (
    <Grid container spacing={1}>
      <Grid item xs={12} sm={6} md={4} lg={4}>
        <IssuedTickets />
      </Grid>
    </Grid>
  );
};
