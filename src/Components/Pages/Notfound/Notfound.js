import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Notfound = () => {
  return (
    <div>
      <h1>This page is Notfound 404</h1>
      <img src="https://i.ibb.co/m4dDgR6/under.jpg" alt="" />
      <br />
      <Link to="/">
        <Button variant="outlined" size="large">
          Go Back To Home
        </Button>
      </Link>
    </div>
  );
};

export default Notfound;
