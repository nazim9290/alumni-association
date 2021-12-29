import { TextField, Paper, Typography, Stack } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import useAuth from "./../../Hooks/useAuth";
import Avatar from "@mui/material/Avatar";
import "./Login.css";

const Login = () => {
  const [loginData, setLoginData] = useState({});
  const { user, loginUser, signInWithGoogle, isLoading, authError } = useAuth();

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

  const handleGoogleSignIn = () => {
    signInWithGoogle(location, navigate);
  };
  return (
    <section className="login">
      <Paper elevation={3} sx={{ width: "50%", m: "auto", p: 5 }}>
        <Typography variant="h4">LOG IN</Typography>
        <form onSubmit={handleLoginSubmit}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",

              mx: "auto",
              boxShadow: 3,
            }}
          >
            <TextField
              id="standard-textarea"
              label="email"
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
              label="password"
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
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={{ xs: 1, sm: 1, md: 2 }}
          sx={{ justifyContent: "center" }}
        >
          <Button variant="contained" onClick={handleGoogleSignIn}>
            <Avatar src="https://i.ibb.co/JjDZnYF/download.png" />
            <Typography component="p" variant="p" color="white">
              Sign in with Google
            </Typography>
          </Button>
          <Button variant="contained" onClick={handleGoogleSignIn}>
            <Avatar src="https://i.ibb.co/WKXD8js/facebook.png" />
            <Typography component="p" variant="p" color="white">
              Sign in with facebook
            </Typography>
          </Button>
        </Stack>
      </Paper>
    </section>
  );
};

export default Login;
