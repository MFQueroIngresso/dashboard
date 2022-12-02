import * as React from "react";
import Grid from "@mui/material/Grid";
import { Event } from "../Event";
import { useState, useEffect } from "react";

export default function Events({ events }) {
  const [eventsSort, setEventsSort] = useState([]);

  const one_day = 1000 * 60 * 60 * 24;
  const presentDate = Date.now();

  const showRemaingDays = (date) => {
    const dateCompare = new Date(date);
    if (
      new Date(presentDate).getMonth() == 11 &&
      new Date(presentDate).getDate() > 25
    )
      dateCompare.setFullYear(dateCompare.getFullYear() + 1);

    const result =
      Math.round(dateCompare.getTime() - new Date(presentDate).getTime()) /
      one_day;

    const finalResult = result.toFixed(0);
    return finalResult;
  };

  const handleEventSort = () => {
    const sorteableEvents = events.sort(
      (a, b) =>
        Number(showRemaingDays(a.eve_data)) -
        Number(showRemaingDays(b.eve_data))
    );
    const removePassEvents = sorteableEvents.filter((event) => {
      return showRemaingDays(event.eve_data) > 0;
    });
    setEventsSort(removePassEvents);
  };

  useEffect(() => {
    handleEventSort();
  }, []);

  return (
    <div style={{ width: "100%" }}>
      <Grid container spacing={1} sx={{ mt: 2 }}>
        {eventsSort.map((event) => {
          return (
            <>
              <Event event={event} />
            </>
          );
        })}
      </Grid>
      <br />
      <br />
      <br />
    </div>
  );
}
