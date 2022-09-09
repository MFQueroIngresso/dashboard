import * as React from "react";
import { Card, Grid, Divider } from "@mui/material";
import CardHeader from "@mui/material/CardHeader";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import { CalendarToday } from "@mui/icons-material";

export const GeneralCard = ({
  title,
  textBold,
  textNormal,
  chip,
  chipText,
}) => {
  return (
    <>
      <Card sx={{ minWidth: "100%" }}>
        <CardHeader
          sx={{ background: "#1976d2" }}
          subheader={
            <>
              <Typography variant="span" component="div" color="#ffffff">
                {title}
              </Typography>
            </>
          }
        />

        <CardContent>
          <Typography variant="body2" sx={{ mt: 1, textAlign: "center" }}>
            {textBold && <b>{textBold}</b>}
            {textNormal && (
              <>
                <br />
                {textNormal}
                <br />
              </>
            )}
          </Typography>
        </CardContent>
        {chip && (
          <CardActions sx={{ mb: 3, mt: "-20px" }}>
            <Chip
              label={chipText}
              size="small"
              sx={{ pr: 1, pl: 1, textAlign: "center", m: "auto" }}
              variant="outlined"
            />
          </CardActions>
        )}
      </Card>
      <br />
    </>
  );
};
