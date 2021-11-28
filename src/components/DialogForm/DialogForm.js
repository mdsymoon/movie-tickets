import "./DialogForm.css";
import React, { useContext, useState } from "react";
import { MyBookings } from "../../App";
import { Modal } from "react-bootstrap";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Stack,
} from "@mui/material";
import DatePicker from "@mui/lab/DatePicker";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import AdapterDateFns from "@mui/lab/AdapterDateFns";

const DialogForm = ({ showDetails, showFormOpen, setShowFormOpen }) => {
  const [myBookings, setMyBookings] = useContext(MyBookings);
  const [ticketCount, setTicketCount] = useState(1);
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [date, setDate] = useState(new Date());

  const confirmBooking = (e) => {
    e.preventDefault();
    let bookingData = {
      showName: showDetails.name,
      totalTickets: ticketCount,
      showDate: date,
      userName: userName,
      userEmail: userEmail,
    };

    setMyBookings([...myBookings, bookingData])
    localStorage.setItem("bookings", JSON.stringify([...myBookings, bookingData]))
    setShowFormOpen(false);
  };

  return (
    <Modal
      aria-labelledby="contained-modal-title-vcenter"
      show={showFormOpen}
      onHide={() => setShowFormOpen(false)}
      size="lg"
      centered
    >
      <form onSubmit={confirmBooking}>
        <Modal.Header closeButton>
          <Modal.Title>Tickets Booking</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Stack spacing={3}>
            <div className="d-flex gap-3">
              <div className="flex-grow-1">
                <TextField
                  disabled
                  fullWidth
                  size="small"
                  label="Show Name"
                  value={showDetails?.name}
                />
              </div>

              <FormControl size="small">
                <InputLabel>Total Tickets</InputLabel>
                <Select
                  value={ticketCount}
                  label="Total Tickets"
                  onChange={(e) => setTicketCount(e.target.value)}
                >
                  <MenuItem value={1}>One</MenuItem>
                  <MenuItem value={3}>Three</MenuItem>
                  <MenuItem value={5}>Five</MenuItem>
                </Select>
              </FormControl>
            </div>

            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                label="Booking Date"
                value={date}
                onChange={(newValue) => {
                  setDate(newValue);
                }}
                renderInput={(params) => (
                  <TextField {...params} fullWidth size="small" />
                )}
              />
            </LocalizationProvider>

            <TextField
              required
              fullWidth
              size="small"
              label="Full Name"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />

            <TextField
              required
              fullWidth
              size="small"
              label="Email"
              type="email"
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
            />
          </Stack>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="contained" type="submit">
            Confirm
          </Button>
        </Modal.Footer>
      </form>
    </Modal>
  );
};

export default DialogForm;
