/* eslint-disable no-unused-expressions */
import React, { useState, useEffect } from "react";
import { UserService } from "../service/index";
import {
  Container,
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

const UserList = () => {
  const [userDataList, setUserDataList] = useState([]);
  const [column, setColumn] = useState([]);

  const generateColumnHeader = async (userObj) => {
    let array = Object.keys(userObj).filter((key) => key !== "_id");
    let cols = array.map((key) => ({
      field: key,
      headerName: key?.toUpperCase(),
    }));

    return cols;
  };
  const fetchUserData = async () => {
    try {
      const response = await UserService.fetchUserData();
      if (response?.data?.length) {
        const columnData = await generateColumnHeader(response.data[0]);
        setColumn(columnData);
        setUserDataList(response?.data);
      }
      console.log({ response });
    } catch (error) {
      console.log({ error });
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <Container maxWidth="md">
      <Box sx={{ my: 4 }}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                {column.map((col, i) => (
                  <TableCell key={col.field}>{col.headerName}</TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {userDataList.map((user, i) => (
                <TableRow
                  key={i}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  {column.map((row, j) => (
                    <TableCell align="left">{user[row.field]}</TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Container>
  );
};

export default UserList;
