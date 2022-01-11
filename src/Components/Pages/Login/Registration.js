import {
  Alert, Button, CircularProgress, Container, Paper, TextField, Typography
} from "@mui/material";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import NavBar from "../../Shared/NavBar/NavBar";
import useAuth from "./../../Hooks/useAuth";
import "./Login.css";
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
    <>
    <NavBar/>
    <Container sx={{ my: 5 }}>
      <Paper elevation={3} className="input-box">
        <Typography variant="h5" gutterBottom>
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
      </Paper>
    </Container></>
  );
};

export default Registration;
