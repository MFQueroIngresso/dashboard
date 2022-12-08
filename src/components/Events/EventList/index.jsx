import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { Typography } from "@mui/material";
import { useRouter } from "next/router";

export function EventList({ events }) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const router = useRouter();

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  // nessa tela, precisa pegar o evento e ver informações das vendas

  const showRemaingDays = (event) => {
    const one_day = 1000 * 60 * 60 * 24;
    const presentDate = Date.now();
    const dateCompare = new Date(event.eve_data);

    if (
      new Date(presentDate).getMonth() == 11 &&
      new Date(presentDate).getDate() > 25
    ) {
      dateCompare.setFullYear(dateCompare.getFullYear() + 1);
    }

    const result =
      Math.round(dateCompare.getTime() - new Date(presentDate).getTime()) /
      one_day;

    const finalResult = result.toFixed(0);
    return finalResult;
  };

  const handleClick = (event) => {
    typeof window !== "undefined" &&
      window.localStorage.setItem("selected_event", JSON.stringify(event));
    router.push(`/${event.eve_cod}`);
  };

  return (
    <Paper sx={{ width: "100%" }}>
      <TableContainer sx={{ maxHeight: 540 }}>
        <Table>
          <TableHead sx={{ backgroundColor: "rgba(0,0,0,.05)" }}>
            <TableRow>
              <TableCell rowSpan={2}>
                <a href="https://promo.queroingresso.com.br/index.php/home?date=atual&amp;order=name&amp;sort=asc">
                  <Typography
                    variant="strong"
                    component="strong"
                    color="primary.main"
                  >
                    Nome
                  </Typography>
                </a>
              </TableCell>
              <TableCell rowSpan={2}>
                <a href="https://promo.queroingresso.com.br/index.php/home?date=atual&amp;order=data_evento&amp;sort=asc">
                  <Typography
                    variant="strong"
                    component="strong"
                    color="primary.main"
                  >
                    Data do Evento
                  </Typography>
                </a>
              </TableCell>
              <TableCell colSpan={2}>
                <span>
                  <Typography
                    variant="strong"
                    component="strong"
                    color="primary.main"
                  >
                    Hoje
                  </Typography>
                </span>
              </TableCell>
              <TableCell colSpan={4}>
                <span>
                  <Typography
                    variant="strong"
                    component="strong"
                    color="primary.main"
                  >
                    Total
                  </Typography>
                </span>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Typography
                  variant="strong"
                  component="strong"
                  color="text.secondary"
                >
                  Vendidos
                </Typography>
              </TableCell>
              <TableCell>
                <Typography
                  variant="strong"
                  component="strong"
                  color="text.secondary"
                >
                  Receita
                </Typography>
              </TableCell>
              <TableCell>
                <Typography
                  variant="strong"
                  component="strong"
                  color="text.secondary"
                >
                  Cortesias
                </Typography>
              </TableCell>
              <TableCell>
                <Typography
                  variant="strong"
                  component="strong"
                  color="text.secondary"
                >
                  Vendidos
                </Typography>
              </TableCell>
              <TableCell>
                <Typography
                  variant="strong"
                  component="strong"
                  color="text.secondary"
                >
                  Receita
                </Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {events
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((event) => {
                return (
                  <>
                    <TableRow
                      key={event}
                      onClick={() => handleClick(event)}
                      sx={{ cursor: "pointer" }}
                    >
                      <TableCell>
                        <div>
                          <strong>{event.eve_nome}</strong>
                        </div>
                        <small>{event.eve_local}</small>
                        <span>&nbsp; | &nbsp;</span>
                        <small>{event.eve_cidade}</small>
                      </TableCell>
                      <TableCell>
                        <span>
                          <strong>
                            {new Date(event.eve_data).toLocaleString("pt-BR", {
                              year: "numeric",
                              month: "numeric",
                              day: "numeric",
                            })}
                          </strong>
                        </span>
                        <br />
                        <Typography
                          variant="strong"
                          component="strong"
                          color={
                            showRemaingDays(event) < 0
                              ? "secondary.main"
                              : "primary.main"
                          }
                        >
                          {showRemaingDays(event) < 0
                            ? "Evento Encerrado"
                            : `Faltam ${showRemaingDays(
                                event
                              )} dias para o evento`}
                        </Typography>
                      </TableCell>
                      <TableCell>8</TableCell>
                      <TableCell>
                        <strong>
                          <Typography
                            variant="span"
                            component="span"
                            color="success.main"
                          >
                            R$ 480,00
                          </Typography>
                        </strong>
                      </TableCell>
                      <TableCell>0</TableCell>
                      <TableCell>243 </TableCell>
                      <TableCell>
                        <strong>
                          <Typography
                            variant="span"
                            component="span"
                            color="success.main"
                          >
                            R$ 17.060,00
                          </Typography>
                        </strong>
                      </TableCell>
                    </TableRow>
                  </>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={events.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
