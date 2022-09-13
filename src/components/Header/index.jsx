/* eslint-disable @next/next/no-img-element */
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import Head from "next/head";
import Link from "next/link";

const settings = ["Perfil do Usuário", "Minha Conta", "Visão Geral", "Sair"];

export const Header = ({ hideArea, title }) => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <>
      <AppBar position="static">
        <Head>
          <title>Quero Ingresso</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Link href="/dashboard">
              <a>
                <img
                  src="logo.png"
                  alt="Logotipo"
                  style={{
                    width: 140,
                    height: "auto",
                    paddingTop: "10px",
                    paddingBottom: "10px",
                    paddingRight: "20px",
                  }}
                />
              </a>
            </Link>

            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {!hideArea && (
                <Typography
                  variant="p"
                  textAlign="center"
                  sx={{
                    pb: 0,
                    mb: 0,
                    textTransform: "uppercase",
                    fontWeight: "bold",
                    letterSpacing: 3,
                  }}
                >
                  · {title || "Área do Produtor"}
                </Typography>
              )}
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Link href="/">
                      <a>
                        <Typography textAlign="center">{setting}</Typography>
                      </a>
                    </Link>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};
