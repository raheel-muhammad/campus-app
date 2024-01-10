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
import BlockIcon from "@mui/icons-material/Block";
import Avatar from "@mui/material/Avatar";
import { style } from "./style";
import { db, ref, set } from "../../Lib/Firebase";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import { useEffect } from "react";

export default function StickyHeadTable({ data, setData, check, name }) {
  const [columns, setColumns] = React.useState([]);
  const handleClick = (index) => {
    let tempData = [...data];
    tempData[index].isVerified = true;
    set(ref(db, "users/" + tempData[index].userId), { ...tempData[index] });
    tempData = tempData?.filter((item) => item !== tempData[index]);
    setData(tempData);
  };
  const handleBlocked = (index) => {
    let tempData = [...data];
    tempData[index].isBlock = true;
    set(ref(db, "users/" + tempData[index].userId), { ...tempData[index] });
    tempData = tempData?.filter((item) => item !== tempData[index]);
    setData(tempData);
  };
  const handleReject = (index) => {
    let tempData = [...data];
    tempData[index].isReject = true;
    set(ref(db, "users/" + tempData[index].userId), { ...tempData[index] });
    tempData = tempData?.filter((item) => item !== tempData[index]);
    setData(tempData);
  };
  const handleUnblock = (index) => {
    let tempData = [...data];
    tempData[index].isBlock = false;
    set(ref(db, "users/" + tempData[index].userId), { ...tempData[index] });
    tempData = tempData?.filter((item) => item !== tempData[index]);
    setData(tempData);
  };

  useEffect(() => {
    let tempCol = [...columns];
    tempCol.push(
      {
        id: "profile",
        label: "Profile",
      },
      { id: "email", label: "Email" },
      { id: "name", label: "Name" }
    );
    let nvu = [
      {
        id: "accept",
        label: "Accept",
      },
      {
        id: "reject",
        label: "Reject",
      },
    ];
    let vu = [
      {
        id: "block",
        label: "Block",
      },
    ];
    let bu = [
      {
        id: "unblock",
        label: "Unblock",
      },
    ];
    if (check === "nvu") {
      tempCol.push(...nvu);
    } else if (check === "vu") {
      tempCol.push(...vu);
    } else if (check === "bu") {
      tempCol.push(...bu);
    }
    setColumns(tempCol);
  }, []);

  let rows = [];
  data?.map((item, index) => {
    rows.push({
      profile: <Avatar alt="User Profile" src={""} />,
      email: item?.email,
      name: item?.username,
      accept: (
        <DoneIcon sx={{ color: "green" }} onClick={() => handleClick(index)} />
      ),
      reject: (
        <ClearIcon sx={{ color: "red" }} onClick={() => handleReject(index)} />
      ),
      block: (
        <BlockIcon sx={{ color: "red" }} onClick={() => handleBlocked(index)} />
      ),
      unblock: (
        <LockOpenIcon
          sx={{ color: "green" }}
          onClick={() => handleUnblock(index)}
        />
      ),
    });
  });

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
      <Paper sx={style.Container}>
        <Box component={"div"} sx={style.ApprovalDiv}>
          {name}
        </Box>
        <TableContainer>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    sx={style.TableCell}
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
          rowsPerPageOptions={[10, 25, 50]}
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
