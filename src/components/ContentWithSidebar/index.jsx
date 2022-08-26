import { Grid, Container } from "@mui/material";
import { Sidebar } from "../Sidebar";

export const ContentWithSidebar = ({ children }) => {
  return (
    <Container maxWidth="xl" sx={{ mt: 4, mb: 1 }}>
      <Grid container spacing={3} sx={{ mt: 2 }}>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Sidebar />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          {children}
        </Grid>
      </Grid>
    </Container>
  );
};
