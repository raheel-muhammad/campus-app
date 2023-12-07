import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Box from "@mui/material/Box";
import ClearIcon from "@mui/icons-material/Clear";
import DoneIcon from "@mui/icons-material/Done";
import Avatar from "@mui/material/Avatar";
const columns = [
  {
    id: "profile",
    label: "Profile",
  },
  { id: "email", label: "Email" },
  { id: "name", label: "Name" },
  {
    id: "accept",
    label: "Accept",
  },
  {
    id: "reject",
    label: "Reject",
  },
];

const rows = [
  {
    profile: <Avatar alt="User Profile" src={""} />,
    email: "test@test.com",
    name: "test",
    accept: <DoneIcon sx={{ color: "green" }} />,
    reject: <ClearIcon sx={{ color: "red" }} />,
  },
  {
    profile: <Avatar alt="User Profile" src={""} />,
    email: "test@test.com",
    name: "test",
    accept: <DoneIcon sx={{ color: "green" }} />,
    reject: <ClearIcon sx={{ color: "red" }} />,
  },
  {
    profile: <Avatar alt="User Profile" src={""} />,
    email: "test@test.com",
    name: "test",
    accept: <DoneIcon sx={{ color: "green" }} />,
    reject: <ClearIcon sx={{ color: "red" }} />,
  },
  {
    profile: <Avatar alt="User Profile" src={""} />,
    email: "test@test.com",
    name: "test",
    accept: <DoneIcon sx={{ color: "green" }} />,
    reject: <ClearIcon sx={{ color: "red" }} />,
  },
  {
    profile: <Avatar alt="User Profile" src={""} />,
    email: "test@test.com",
    name: "test",
    accept: <DoneIcon sx={{ color: "green" }} />,
    reject: <ClearIcon sx={{ color: "red" }} />,
  },
];

export default function StickyHeadTable() {
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
    <>
      <Paper
        sx={{
          width: "95%",
          overflow: "hidden",
          borderRadius: "10px",
          height: "520px",
        }}
      >
        <Box
          sx={{
            background: "#fff",
            color: "#7433FF",
            padding: "10px",
            fontSize: "24px",
            fontWeight: "600",
          }}
        >
          Recent Approvals
        </Box>
        <TableContainer>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    sx={{
                      fontWeight: "600",
                      fontSize: { xs: "12px", sm: "16px" },
                      textAlign: { xs: "center", sm: "center", md: "left" },
                      padding: { xs: "4px", sm: "10px", md: "16px" },
                    }}
                    key={column.id}
                    align={column.align}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={row.code}
                    >
                      {columns.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {column.format && typeof value === "number"
                              ? column.format(value)
                              : value}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 25, 50]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </>
  );
}
