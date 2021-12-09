import { TextField } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import useAuth from "./../../Hooks/useAuth";

const Login = () => {
  const [loginData, setLoginData] = useState({});
  const { user, loginUser, signInWithGoogle, isLoading, authError } = useAuth();

  const location = useLocation();
  const history = useNavigate();

  const handleOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
    console.log(newLoginData);
  };
  const handleLoginSubmit = (e) => {
    loginUser(loginData.email, loginData.password, location, history);
    console.log(loginData.email, loginData.password);
    e.preventDefault();
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle(location, history);
  };
  return (
    <div>
      <h2>this is login page</h2>
      <form onSubmit={handleLoginSubmit}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "50%",
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
          />
          <Button type="submit" sx={{ my: 5 }} variant="contained">
            Sign in
          </Button>
        </Box>
      </form>
      <Box sx={{ mb: 3 }}>
        <Link to="/registration">New User? click hare</Link>
      </Box>
    </div>
  );
};

export default Login;
