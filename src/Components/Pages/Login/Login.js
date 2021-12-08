import { TextField } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Button from "@mui/material/Button";

const Login = () => {
  return (
    <div>
      <h2>this is login page</h2>
      <form onSubmit="">
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "50%",
            mx: "auto",
            mt: 15,
            boxShadow: 3,
          }}
        >
          <TextField
            id="standard-textarea"
            label="Name"
            placeholder="Enter your Name"
            multiline
            type="name"
            variant="standard"
            sx={{ mt: 5 }}
          />

          <TextField
            id="standard-textarea"
            label="Email"
            placeholder="Enter your Email"
            multiline
            type="email"
            variant="standard"
            sx={{ mt: 5 }}
          />
          <TextField
            id="standard-textarea"
            label="Password"
            placeholder="Create Password"
            multiline
            type="Password"
            variant="standard"
            sx={{ mt: 5 }}
          />
          <Button type="submit" sx={{ mt: 5 }} variant="contained">
            Sign in
          </Button>
        </Box>
      </form>
    </div>
  );
};

export default Login;
