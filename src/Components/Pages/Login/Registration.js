import React, { useState } from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  CircularProgress,
  Alert,
  Box,
} from "@mui/material";

import { NavLink, useNavigate } from "react-router-dom";
import useAuth from "./../../Hooks/useAuth";
import LoginIcon from "./LoginIcon/LoginIcon";
const Registration = () => {
  const [loginData, setLoginData] = useState({});
  const navigate = useNavigate();
  const { user, registerUser, isLoading, authError } = useAuth();

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };
  const handleLoginSubmit = (e) => {
    if (loginData.password !== loginData.password2) {
      alert("Your password did not match");
      return;
    }
    registerUser(loginData.email, loginData.password, loginData.name, navigate);
    e.preventDefault();
  };

  return (
    <Container sx={{ my: 5 }}>
      <Box
        item
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "50%",
          justifyContent: "center",
          alignItems: "center",
          boxShadow: 3,
          m: "auto",
          p: 5,
        }}
      >
        <Typography variant="body1" gutterBottom>
          Register
        </Typography>
        {!isLoading && (
          <form onSubmit={handleLoginSubmit} autoComplete="off">
            <TextField
              sx={{ width: "75%", m: 1 }}
              id="standard-basic"
              label="Your Name"
              name="name"
              type="name"
              onBlur={handleOnBlur}
              variant="standard"
            />
            <TextField
              sx={{ width: "75%", m: 1 }}
              id="standard-basic"
              label="Your Email"
              name="email"
              type="email"
              onBlur={handleOnBlur}
              variant="standard"
            />
            <TextField
              sx={{ width: "75%", m: 1 }}
              id="standard-basic"
              label="Your Password"
              type="password"
              name="password"
              onBlur={handleOnBlur}
              variant="standard"
            />
            <TextField
              sx={{ width: "75%", m: 1 }}
              id="standard-basic"
              label="ReType Your Password"
              type="password"
              name="password2"
              onBlur={handleOnBlur}
              variant="standard"
            />

            <Button
              sx={{ width: "75%", m: 1 }}
              type="submit"
              variant="contained"
            >
              Register
            </Button>
            <NavLink style={{ textDecoration: "none" }} to="/login">
              <Button variant="text">Already Registered? Please Login</Button>
            </NavLink>
            <LoginIcon />
          </form>
        )}
        {isLoading && <CircularProgress />}
        {user?.email && (
          <Alert severity="success">User Created successfully!</Alert>
        )}
        {authError && <Alert severity="error">{authError}</Alert>}
      </Box>
    </Container>
  );
};

export default Registration;
