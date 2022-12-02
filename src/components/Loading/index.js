import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

export default function CircularIndeterminate() {
  return (
    <Box sx={{ display: "flex" }}>
      <CircularProgress size={50} thickness={6} />
    </Box>
  );
}

export const Loading = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: "30vh" }}
      >
        <Grid item xs={2}>
          <CircularIndeterminate />
        </Grid>
        <Grid item xs={10}>
          <h1 style={{ color: "rgba(0,0,0,.5" }}>Aguarde, carregando...</h1>
        </Grid>
      </Grid>
    </Box>
  );
};
