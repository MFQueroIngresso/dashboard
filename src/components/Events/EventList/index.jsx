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

function createData(name, code, population, size) {
  const density = population / size;
  return { name, code, population, size, density };
}

const rows = [
  createData("India", "IN", 1324171354, 3287263),
  createData("China", "CN", 1403500365, 9596961),
  createData("Italy", "IT", 60483973, 301340),
  createData("United States", "US", 327167434, 9833520),
  createData("Canada", "CA", 37602103, 9984670),
  createData("Australia", "AU", 25475400, 7692024),
  createData("Germany", "DE", 83019200, 357578),
  createData("Ireland", "IE", 4857000, 70273),
  createData("Mexico", "MX", 126577691, 1972550),
  createData("Japan", "JP", 126317000, 377973),
  createData("France", "FR", 67022000, 640679),
  createData("United Kingdom", "GB", 67545757, 242495),
  createData("Russia", "RU", 146793744, 17098246),
  createData("Nigeria", "NG", 200962417, 923768),
  createData("Brazil", "BR", 210147125, 8515767),
];

export function EventList({ events }) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: "100%" }}>
      <TableContainer sx={{ maxHeight: 540 }}>
        <Table>
          <TableHead sx={{ backgroundColor: "rgba(0,0,0,.05)" }}>
            <TableRow>
              <TableCell rowSpan={2}>
                <a href="https://promo.queroingresso.com.br/index.php/home?date=atual&amp;order=name&amp;sort=asc">
                  Nome
                </a>
              </TableCell>
              <TableCell rowSpan={2}>
                <a href="https://promo.queroingresso.com.br/index.php/home?date=atual&amp;order=data_evento&amp;sort=asc">
                  Data do Evento
                </a>
              </TableCell>
              <TableCell colSpan={2}>
                <span>Hoje</span>
              </TableCell>
              <TableCell colSpan={4}>
                <span>Total</span>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Vendidos</TableCell>
              <TableCell>Receita</TableCell>
              <TableCell>Cortesias</TableCell>
              <TableCell>Vendidos</TableCell>
              <TableCell>Receita</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {events.map(() => {
              return (
                <>
                  <TableRow>
                    <TableCell>
                      <div>
                        <strong>HUNGRIA E TURMA DO PAGODE</strong>
                      </div>
                      <small>Rancho Santa Fé </small>
                      <span>-</span>
                      <small>Mogi das Cruzes - SP </small>
                    </TableCell>
                    <TableCell>
                      <span>
                        <strong>06/01/2023</strong>
                      </span>
                      <br />
                      <Typography
                        variant="strong"
                        component="strong"
                        color="primary.main"
                      >
                        Faltam 30 dias
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
