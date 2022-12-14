import * as React from "react";
import Box from "@mui/material/Box";
import { styled, ThemeProvider, createTheme } from "@mui/material/styles";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import ArrowRight from "@mui/icons-material/ArrowRight";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import Home from "@mui/icons-material/Home";
import Settings from "@mui/icons-material/Settings";
import People from "@mui/icons-material/People";
import PermMedia from "@mui/icons-material/PermMedia";
import Dns from "@mui/icons-material/Dns";
import Public from "@mui/icons-material/Public";
import Link from "next/link";

const data = [
  { icon: <People />, label: "Geral", link: "/slug-do-evento" },
  { icon: <Dns />, label: "Classes", link: "/classes" },
  { icon: <PermMedia />, label: "PDV", link: "/pdv" },
  { icon: <Public />, label: "Diários", link: "/diarios" },
  { icon: <Public />, label: "Numerados", link: "/numerados" },
  { icon: <Public />, label: "Cancelados", link: "/cancelados" },
  { icon: <Public />, label: "Por Lote", link: "/por-lote" },
];

const data2 = [
  { icon: <People />, label: "Comissários", link: "/comissarios" },
  { icon: <Dns />, label: "Site Detalhados", link: "/site-detalhados" },
  { icon: <PermMedia />, label: "Detalhados", link: "/detalhados" },
];

const data3 = [
  {
    icon: <People />,
    label: "Detalhado",
    link: "/detalhado",
  },
];

const data4 = [
  { icon: <People />, label: "Sangrias PDV", link: "/sangrias" },
  { icon: <People />, label: "Sangrias Web", link: "/sangrias" },
  { icon: <People />, label: "Comprovantes", link: "/comprovantes" },
];

const data5 = [
  { icon: <People />, label: "Gestão de Lotes", link: "/gestao-de-lotes" },
  { icon: <People />, label: "Gerar Cortesias", link: "/gerar-cortesias" },
];

const data6 = [
  { icon: <People />, label: "Vendas Bar", link: "/vendas-bar" },
  { icon: <People />, label: "Estoque Bar", link: "/estoque-bar" },
  { icon: <People />, label: "Caixa Bar", link: "/caixa-bar" },
];

const FireNav = styled(List)({
  "& .MuiListItemButton-root": {
    paddingLeft: 24,
    paddingRight: 24,
  },
  "& .MuiListItemIcon-root": {
    minWidth: 0,
    marginRight: 16,
  },
  "& .MuiSvgIcon-root": {
    fontSize: 20,
  },
});

export function Sidebar({ handleSidebar, sidebarOpen }) {
  const [open, setOpen] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const [open3, setOpen3] = React.useState(false);
  const [open4, setOpen4] = React.useState(false);
  const [open5, setOpen5] = React.useState(false);
  const [open6, setOpen6] = React.useState(false);

  return (
    <Box sx={{ display: "flex" }}>
      <ThemeProvider
        theme={createTheme({
          components: {
            MuiListItemButton: {
              defaultProps: {
                disableTouchRipple: true,
              },
            },
          },
          palette: {
            mode: "dark",
            primary: { main: "rgb(102, 157, 246)" },
            background: { paper: "rgb(5, 30, 52)" },
          },
        })}
      >
        <Paper elevation={0} sx={{ maxWidth: "100%", minWidth: "100%" }}>
          <FireNav component="nav" disablePadding>
            <Divider />
            <ListItem component="div" disablePadding onClick={handleSidebar}>
              <ListItemButton sx={{ height: 56 }}>
                <ListItemIcon>
                  <Home color="primary" />
                </ListItemIcon>
                {sidebarOpen && (
                  <ListItemText
                    primary="Geral"
                    primaryTypographyProps={{
                      color: "primary",
                      fontWeight: "medium",
                      variant: "body2",
                    }}
                  />
                )}
              </ListItemButton>
            </ListItem>
            {sidebarOpen && (
              <div>
                <Divider />
                <Box
                  sx={{
                    bgcolor: open ? "rgba(71, 98, 130, 0.2)" : null,
                    pb: open ? 2 : 0,
                  }}
                >
                  <ListItemButton
                    alignItems="flex-start"
                    onClick={() => setOpen(!open)}
                    sx={{
                      px: 3,
                      pt: 2.5,
                      pb: open ? 0 : 2.5,
                      "&:hover, &:focus": {
                        "& svg": { opacity: open ? 1 : 0 },
                      },
                    }}
                  >
                    <ListItemText
                      primary="Mais Utilizados"
                      primaryTypographyProps={{
                        fontSize: 15,
                        fontWeight: "medium",
                        lineHeight: "20px",
                        mb: "2px",
                      }}
                      secondary="Classes, PDV, Diários, Numerados, Cancelados, Por Lote"
                      secondaryTypographyProps={{
                        noWrap: true,
                        fontSize: 12,
                        lineHeight: "16px",
                        color: open ? "rgba(0,0,0,0)" : "rgba(255,255,255,0.5)",
                      }}
                      sx={{ my: 0 }}
                    />
                    <KeyboardArrowDown
                      sx={{
                        mr: -1,
                        opacity: 0,
                        transform: open ? "rotate(-180deg)" : "rotate(0)",
                        transition: "0.2s",
                      }}
                    />
                  </ListItemButton>
                  {open &&
                    data.map((item) => (
                      <Link href={item.link} key={item}>
                        <a>
                          <ListItemButton
                            key={item.label}
                            sx={{
                              py: 0,
                              minHeight: 32,
                              color: "rgba(255,255,255,.8)",
                            }}
                          >
                            <ListItemIcon sx={{ color: "inherit" }}>
                              {item.icon}
                            </ListItemIcon>
                            <ListItemText
                              primary={item.label}
                              primaryTypographyProps={{
                                fontSize: 14,
                                fontWeight: "medium",
                              }}
                            />
                          </ListItemButton>
                        </a>
                      </Link>
                    ))}
                </Box>

                <Divider />
                <Box
                  sx={{
                    bgcolor: open2 ? "rgba(71, 98, 130, 0.2)" : null,
                    pb: open2 ? 2 : 0,
                  }}
                >
                  <ListItemButton
                    alignItems="flex-start"
                    onClick={() => setOpen2(!open2)}
                    sx={{
                      px: 3,
                      pt: 2.5,
                      pb: open2 ? 0 : 2.5,
                      "&:hover, &:focus": {
                        "& svg": { opacity: open2 ? 1 : 0 },
                      },
                    }}
                  >
                    <ListItemText
                      primary="Relatórios"
                      primaryTypographyProps={{
                        fontSize: 15,
                        fontWeight: "medium",
                        lineHeight: "20px",
                        mb: "2px",
                      }}
                      secondary="Comissários, Site Detalhados, Detalhados"
                      secondaryTypographyProps={{
                        noWrap: true,
                        fontSize: 12,
                        lineHeight: "16px",
                        color: open2
                          ? "rgba(0,0,0,0)"
                          : "rgba(255,255,255,0.5)",
                      }}
                      sx={{ my: 0 }}
                    />
                    <KeyboardArrowDown
                      sx={{
                        mr: -1,
                        opacity: 0,
                        transform: open2 ? "rotate(-180deg)" : "rotate(0)",
                        transition: "0.2s",
                      }}
                    />
                  </ListItemButton>
                  {open2 &&
                    data2.map((item) => (
                      <Link href={item.link} key={item}>
                        <a>
                          <ListItemButton
                            key={item.label}
                            sx={{
                              py: 0,
                              minHeight: 32,
                              color: "rgba(255,255,255,.8)",
                            }}
                          >
                            <ListItemIcon sx={{ color: "inherit" }}>
                              {item.icon}
                            </ListItemIcon>
                            <ListItemText
                              primary={item.label}
                              primaryTypographyProps={{
                                fontSize: 14,
                                fontWeight: "medium",
                              }}
                            />
                          </ListItemButton>
                        </a>
                      </Link>
                    ))}
                </Box>

                <Divider />
                <Box
                  sx={{
                    bgcolor: open3 ? "rgba(71, 98, 130, 0.2)" : null,
                    pb: open3 ? 2 : 0,
                  }}
                >
                  <ListItemButton
                    alignItems="flex-start"
                    onClick={() => setOpen3(!open3)}
                    sx={{
                      px: 3,
                      pt: 2.5,
                      pb: open3 ? 0 : 2.5,
                      "&:hover, &:focus": {
                        "& svg": { opacity: open3 ? 1 : 0 },
                      },
                    }}
                  >
                    <ListItemText
                      primary="Analytics"
                      primaryTypographyProps={{
                        fontSize: 15,
                        fontWeight: "medium",
                        lineHeight: "20px",
                        mb: "2px",
                      }}
                      secondary="Detalhado"
                      secondaryTypographyProps={{
                        noWrap: true,
                        fontSize: 12,
                        lineHeight: "16px",
                        color: open3
                          ? "rgba(0,0,0,0)"
                          : "rgba(255,255,255,0.5)",
                      }}
                      sx={{ my: 0 }}
                    />
                    <KeyboardArrowDown
                      sx={{
                        mr: -1,
                        opacity: 0,
                        transform: open3 ? "rotate(-180deg)" : "rotate(0)",
                        transition: "0.2s",
                      }}
                    />
                  </ListItemButton>
                  {open3 &&
                    data3.map((item) => (
                      <Link href={item.link} key={item}>
                        <a>
                          <ListItemButton
                            key={item.label}
                            sx={{
                              py: 0,
                              minHeight: 32,
                              color: "rgba(255,255,255,.8)",
                            }}
                          >
                            <ListItemIcon sx={{ color: "inherit" }}>
                              {item.icon}
                            </ListItemIcon>
                            <ListItemText
                              primary={item.label}
                              primaryTypographyProps={{
                                fontSize: 14,
                                fontWeight: "medium",
                              }}
                            />
                          </ListItemButton>
                        </a>
                      </Link>
                    ))}
                </Box>

                <Divider />
                <Box
                  sx={{
                    bgcolor: open4 ? "rgba(71, 98, 130, 0.2)" : null,
                    pb: open4 ? 2 : 0,
                  }}
                >
                  <ListItemButton
                    alignItems="flex-start"
                    onClick={() => setOpen4(!open4)}
                    sx={{
                      px: 3,
                      pt: 2.5,
                      pb: open4 ? 0 : 2.5,
                      "&:hover, &:focus": {
                        "& svg": { opacity: open4 ? 1 : 0 },
                      },
                    }}
                  >
                    <ListItemText
                      primary="Sangrias"
                      primaryTypographyProps={{
                        fontSize: 15,
                        fontWeight: "medium",
                        lineHeight: "20px",
                        mb: "2px",
                      }}
                      secondary="Sangrias PDV, Sangrias Web, Comprovantes"
                      secondaryTypographyProps={{
                        noWrap: true,
                        fontSize: 12,
                        lineHeight: "16px",
                        color: open4
                          ? "rgba(0,0,0,0)"
                          : "rgba(255,255,255,0.5)",
                      }}
                      sx={{ my: 0 }}
                    />
                    <KeyboardArrowDown
                      sx={{
                        mr: -1,
                        opacity: 0,
                        transform: open4 ? "rotate(-180deg)" : "rotate(0)",
                        transition: "0.2s",
                      }}
                    />
                  </ListItemButton>
                  {open4 &&
                    data4.map((item) => (
                      <Link href={item.link} key={item}>
                        <a>
                          <ListItemButton
                            key={item.label}
                            sx={{
                              py: 0,
                              minHeight: 32,
                              color: "rgba(255,255,255,.8)",
                            }}
                          >
                            <ListItemIcon sx={{ color: "inherit" }}>
                              {item.icon}
                            </ListItemIcon>
                            <ListItemText
                              primary={item.label}
                              primaryTypographyProps={{
                                fontSize: 14,
                                fontWeight: "medium",
                              }}
                            />
                          </ListItemButton>
                        </a>
                      </Link>
                    ))}
                </Box>

                <Divider />
                <Box
                  sx={{
                    bgcolor: open5 ? "rgba(71, 98, 130, 0.2)" : null,
                    pb: open5 ? 2 : 0,
                  }}
                >
                  <ListItemButton
                    alignItems="flex-start"
                    onClick={() => setOpen5(!open5)}
                    sx={{
                      px: 3,
                      pt: 2.5,
                      pb: open5 ? 0 : 2.5,
                      "&:hover, &:focus": {
                        "& svg": { opacity: open5 ? 1 : 0 },
                      },
                    }}
                  >
                    <ListItemText
                      primary="Administrativo"
                      primaryTypographyProps={{
                        fontSize: 15,
                        fontWeight: "medium",
                        lineHeight: "20px",
                        mb: "2px",
                      }}
                      secondary="Gestão de Lotes"
                      secondaryTypographyProps={{
                        noWrap: true,
                        fontSize: 12,
                        lineHeight: "16px",
                        color: open5
                          ? "rgba(0,0,0,0)"
                          : "rgba(255,255,255,0.5)",
                      }}
                      sx={{ my: 0 }}
                    />
                    <KeyboardArrowDown
                      sx={{
                        mr: -1,
                        opacity: 0,
                        transform: open5 ? "rotate(-180deg)" : "rotate(0)",
                        transition: "0.2s",
                      }}
                    />
                  </ListItemButton>
                  {open5 &&
                    data5.map((item) => (
                      <Link href={item.link} key={item}>
                        <a>
                          <ListItemButton
                            key={item.label}
                            sx={{
                              py: 0,
                              minHeight: 32,
                              color: "rgba(255,255,255,.8)",
                            }}
                          >
                            <ListItemIcon sx={{ color: "inherit" }}>
                              {item.icon}
                            </ListItemIcon>
                            <ListItemText
                              primary={item.label}
                              primaryTypographyProps={{
                                fontSize: 14,
                                fontWeight: "medium",
                              }}
                            />
                          </ListItemButton>
                        </a>
                      </Link>
                    ))}
                </Box>

                <Divider />
                <Box
                  sx={{
                    bgcolor: open6 ? "rgba(71, 98, 130, 0.2)" : null,
                    pb: open6 ? 2 : 0,
                  }}
                >
                  <ListItemButton
                    alignItems="flex-start"
                    onClick={() => setOpen6(!open6)}
                    sx={{
                      px: 3,
                      pt: 2.5,
                      pb: open6 ? 0 : 2.5,
                      "&:hover, &:focus": {
                        "& svg": { opacity: open6 ? 1 : 0 },
                      },
                    }}
                  >
                    <ListItemText
                      primary="Bar"
                      primaryTypographyProps={{
                        fontSize: 15,
                        fontWeight: "medium",
                        lineHeight: "20px",
                        mb: "2px",
                      }}
                      secondary="Vendas Bar, Estoque Bar, Caixa Bar"
                      secondaryTypographyProps={{
                        noWrap: true,
                        fontSize: 12,
                        lineHeight: "16px",
                        color: open6
                          ? "rgba(0,0,0,0)"
                          : "rgba(255,255,255,0.5)",
                      }}
                      sx={{ my: 0 }}
                    />
                    <KeyboardArrowDown
                      sx={{
                        mr: -1,
                        opacity: 0,
                        transform: open6 ? "rotate(-180deg)" : "rotate(0)",
                        transition: "0.2s",
                      }}
                    />
                  </ListItemButton>
                  {open6 &&
                    data6.map((item) => (
                      <Link href={item.link} key={item}>
                        <a>
                          <ListItemButton
                            key={item.label}
                            sx={{
                              py: 0,
                              minHeight: 32,
                              color: "rgba(255,255,255,.8)",
                            }}
                          >
                            <ListItemIcon sx={{ color: "inherit" }}>
                              {item.icon}
                            </ListItemIcon>
                            <ListItemText
                              primary={item.label}
                              primaryTypographyProps={{
                                fontSize: 14,
                                fontWeight: "medium",
                              }}
                            />
                          </ListItemButton>
                        </a>
                      </Link>
                    ))}
                </Box>
              </div>
            )}
          </FireNav>
        </Paper>
      </ThemeProvider>
    </Box>
  );
}
