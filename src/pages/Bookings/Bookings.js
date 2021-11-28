import "./Bookings.css";
import React, { useContext } from "react";
import { MyBookings } from "../../App";
import {
  Container,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Table,
} from "@mui/material";

const Bookings = () => {
  const [myBookings] = useContext(MyBookings);

  return (
    <Container className="mt-5">
      <TableContainer component={Paper}>
        <Table
          sx={{ minWidth: 700, overflow: "scroll" }}
          aria-label="simple table"
        >
          <TableHead sx={{ background: "gray" }}>
            <TableRow>
              <TableCell>Show Name</TableCell>
              <TableCell>Customer Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Show Date</TableCell>
              <TableCell>Total Tickets</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {myBookings.map((item, index) => (
              <TableRow key={index}>
                <TableCell>{item.showName}</TableCell>
                <TableCell>{item.userName}</TableCell>
                <TableCell>{item.userEmail}</TableCell>
                <TableCell>{new Date(item.showDate).toLocaleString()}</TableCell>
                <TableCell>{item.totalTickets}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default Bookings;
