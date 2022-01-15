import { Button, Paper, Stack, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import ResetPassword from "../../Shared/DialogBox/ResetPassword";

import useAuth from "./../../Hooks/useAuth";
import "./Login.css";
import LoginIcon from "./LoginIcon/LoginIcon";
import NavBar from "./../../Shared/NavBar/Navbar";

const Login = () => {
  const [loginData, setLoginData] = useState({});
  const { loginUser } = useAuth();

  const location = useLocation();
  const navigate = useNavigate();

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
    console.log(newLoginData);
  };
  const handleLoginSubmit = (e) => {
    loginUser(loginData.email, loginData.password, location, navigate);
    console.log(loginData.email, loginData.password);
    e.preventDefault();
  };

  return (
    <>
      <NavBar />
      <section className="login-section">
        <Paper elevation={3} className="input-box">
          <Typography variant="h4">LOG IN</Typography>
          <form onSubmit={handleLoginSubmit}>
            <Box>
              <TextField
                id="standard-textarea"
                label="email :"
                placeholder="Enter your Email"
                multiline
                type="email"
                name="email"
                variant="standard"
                sx={{ mt: 5 }}
                onChange={handleOnChange}
                fullWidth
              />
              <TextField
                id="standard-textarea"
                label="password :"
                placeholder="Create Password"
                multiline
                type="password"
                name="password"
                variant="standard"
                sx={{ mt: 5 }}
                onChange={handleOnChange}
                fullWidth
              />
              <Button
                type="submit"
                sx={{ my: 5, width: "100%" }}
                variant="contained"
              >
                Sign in
              </Button>
            </Box>
          </form>
          <Stack
            direction={{ xs: "row", sm: "row" }}
            sx={{ justifyContent: "space-between", alignItems: "center" }}
          >
            <Box sx={{ mb: 3 }}>
              <Link to="/registration">New User? click hare</Link>
            </Box>
            <Box sx={{ mb: 3 }}>
              <Button onClick={handleClickOpen}>Forgot Password ?</Button>
            </Box>
          </Stack>
          <LoginIcon />
        </Paper>
        <ResetPassword
          handleClickOpen={handleClickOpen}
          handleClose={handleClose}
          open={open}
        />
      </section>
    </>
  );
};

export default Login;
