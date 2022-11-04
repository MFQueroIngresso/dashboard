import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Checkbox from "@mui/material/Checkbox";

function Row(props) {
  const { row, columns } = props;
  const [open, setOpen] = React.useState(false);
  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  return (
    <React.Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          {row?.expand && (
            <>
              <IconButton
                aria-label="expand row"
                size="small"
                onClick={() => setOpen(!open)}
              >
                {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
              </IconButton>
              <Checkbox {...label} defaultChecked />
            </>
          )}
        </TableCell>
        <TableCell align="right">{row.classe}</TableCell>
        <TableCell align="right">{row.vendas}</TableCell>
        <TableCell align="right">{row.cortesia}</TableCell>
        <TableCell align="right">{row.total}</TableCell>
        <TableCell align="right">{row.valor}</TableCell>
      </TableRow>
      {row?.expand && (
        <TableRow>
          <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <Box sx={{ margin: 1 }}>
                <TableContainer component={Paper}>
                  <Table size="large" aria-label="purchases">
                    <TableHead style={{ backgroundColor: "gray" }}>
                      <TableRow>
                        <TableCell></TableCell>
                        {columns.map((item) => (
                          <>
                            <TableCell key={item} style={{ color: "white" }}>
                              {item.headerName}
                            </TableCell>
                          </>
                        ))}
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      <TableRow>
                        <TableCell></TableCell>
                        {row?.expand?.map((item) => (
                          <>
                            <TableCell></TableCell>
                            <TableCell key={item}>{item.classe}</TableCell>
                            <TableCell key={item}>{item.vendas}</TableCell>
                            <TableCell key={item}>{item.cortesia}</TableCell>
                            <TableCell key={item}>{item.total}</TableCell>
                            <TableCell key={item}>{item.valor}</TableCell>
                          </>
                        ))}
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
              </Box>
            </Collapse>
          </TableCell>
        </TableRow>
      )}
    </React.Fragment>
  );
}

export function BalanceWithExpand({ rows, columns }) {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            {columns.map((item) => (
              <TableCell key={item} align="right">
                {item.headerName}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          <>
            {rows.map((row) => (
              <Row key={row} row={row} columns={columns} />
            ))}
          </>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
