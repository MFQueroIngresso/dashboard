import { useState } from "react";
import { Grid, Container } from "@mui/material";
import { Sidebar } from "../Sidebar";

export const ContentWithSidebar = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const handleSidebar = (e) => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <Container maxWidth="xl" sx={{ mt: 4, mb: 1 }}>
      <Grid container spacing={1} sx={{ mt: 2 }}>
        <Grid
          item
          xs={12}
          sm={12}
          md={sidebarOpen ? 3 : 1}
          lg={sidebarOpen ? 3 : 1}
        >
          <Sidebar handleSidebar={handleSidebar} sidebarOpen={sidebarOpen} />
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={sidebarOpen ? 9 : 11}
          lg={sidebarOpen ? 9 : 11}
        >
          {children}
        </Grid>
      </Grid>
    </Container>
  );
};
