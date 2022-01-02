import { Avatar, Button, Stack, Typography } from "@mui/material";
import React from "react";
import useAuth from "./../../../Hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";

const LoginIcon = () => {
  const { signInWithGoogle } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const handleGoogleSignIn = () => {
    signInWithGoogle(location, navigate);
  };
  return (
    <div>
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
    </div>
  );
};

export default LoginIcon;
