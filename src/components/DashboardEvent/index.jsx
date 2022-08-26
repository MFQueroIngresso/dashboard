import { Grid } from "@mui/material";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Event } from "../Event";

export const DashboardEvent = () => {
  const bull = (
    <Box
      component="span"
      sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
    >
      •
    </Box>
  );

  const data = [1, 2, 3];

  return (
    <Grid container spacing={1}>
      {data.map(() => (
        <>
          <Grid item xs={12} sm={6} md={4} lg={4}>
            <Card sx={{ minWidth: "100%" }}>
              <CardContent>
                <Typography variant="h6" component="div">
                  <b>Estatísticas do Evento</b>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </>
      ))}
    </Grid>
  );
};
