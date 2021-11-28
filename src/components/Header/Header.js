import "./Header.css";
import React from "react";
import { Link } from "react-router-dom";
import { Box, AppBar, Toolbar, Typography } from "@mui/material";

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Movie Tickets
          </Typography>

          <Link to="/" className="text-white text-decoration-none">Home</Link>
          <Link to="/bookings" className="text-white text-decoration-none ps-4">Bookings</Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
