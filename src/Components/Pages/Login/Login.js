import { Container, Paper, TextField, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "./../../Hooks/useAuth";
import "./Login.css";
import LoginIcon from "./LoginIcon/LoginIcon";

const Login = () => {
  const [loginData, setLoginData] = useState({});
  const { loginUser } = useAuth();

  const location = useLocation();
  const navigate = useNavigate();

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
    <section className="login">
      <Container>
      <Paper elevation={3} className="login">
        <Typography variant="h4">LOG IN</Typography>
        <form onSubmit={handleLoginSubmit}>
          <Box
           
          >
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
            <Button type="submit" sx={{ my: 5 }} variant="contained">
              Sign in
            </Button>
          </Box>
        </form>
        <Box sx={{ mb: 3 }}>
          <Link to="/registration">New User? click hare</Link>
        </Box>
        <LoginIcon />
      </Paper>
      </Container>
    </section>
  );
};

export default Login;
