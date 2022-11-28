import * as React from "react";
import Grid from "@mui/material/Grid";
import { Event } from "../Event";

export default function Events({ events }) {
  // events com data mais próxima no topo
  return (
    <div style={{ width: "100%" }}>
      <Grid container spacing={1} sx={{ mt: 2 }}>
        {events.map((event) => (
          <Grid key={event} item xs={12}>
            <Event event={event} />
          </Grid>
        ))}
      </Grid>
      <br />
      <br />
      <br />
    </div>
  );
}
