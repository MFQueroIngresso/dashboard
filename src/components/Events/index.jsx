import * as React from "react";
import Grid from "@mui/material/Grid";
import { Event } from "../Event";

export default function Events() {
  return (
    <div style={{ width: "100%" }}>
      <Grid container spacing={3} sx={{ mt: 2 }}>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Event />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Event />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Event />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Event />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Event />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Event />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Event />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Event />
        </Grid>
      </Grid>
    </div>
  );
}
