import * as React from "react";
import Grid from "@mui/material/Grid";
import { Event } from "../Event";

export default function Events() {
  return (
    <div style={{ width: "100%" }}>
      <Grid container spacing={1} sx={{ mt: 2 }}>
        <Grid item xs={12}>
          <Event />
        </Grid>
      </Grid>
      <br />
      <br />
      <br />
    </div>
  );
}
