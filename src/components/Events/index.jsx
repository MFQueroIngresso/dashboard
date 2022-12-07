import * as React from "react";
import Grid from "@mui/material/Grid";
import { Event } from "../Event";
import { EventList } from "./EventList";

export default function Events({ events }) {
  return (
    <div style={{ width: "100%" }}>
      <Grid container spacing={1} sx={{ mt: 2 }}>
        <EventList events={events} />
        {/* {events.map((event) => {
          return (
            <>
              <Event event={event} />
            </>
          );
        })} */}
      </Grid>
      <br />
      <br />
      <br />
    </div>
  );
}
