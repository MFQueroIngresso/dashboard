import * as React from "react";
import Box from "@mui/material/Box";
import { Event } from "../Event";

export default function Events() {
  return (
    <div style={{ width: "100%" }}>
      <Box sx={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)" }}>
        <Event />
        <Event />
        <Event />
        <Event />
        <Event />
        <Event />
        <Event />
        <Event />
      </Box>
    </div>
  );
}
