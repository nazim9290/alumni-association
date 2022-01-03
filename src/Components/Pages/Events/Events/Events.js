import React from "react";
import Grid from "@mui/material/Grid";
import "../../Home/UpcomingEvents/Upcoming.css";
import Button from "@mui/material/Button";
import Countdown from "../../../Shared/Countdwon/Countdwon";
import { Typography } from "@mui/material";
import "../../Home/UpcomingEvents/Upcoming.css";
const Events = () => {
  return (
    <div>
      <Grid
        container
        spacing={1}
        sx={{ boxShadow: 3, my: 5, p: 4, bgcolor: "#e0f2f1" }}
      >
        <Grid item xs={12} md={6}>
          <img
            src="https://sayidan.kenzap.com/wp-content/uploads/2016/07/galery-popup-14-4-569x331.jpg"
            alt=""
            width="100%"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Grid container>
            <Grid item xs={9} md={10}>
              <div className="event-title">
                <h1>UPCOMING EVENT</h1>
                <h2>CLUB SPONSORSHIP 2020-2021</h2>
              </div>
            </Grid>
            <Grid item xs={3} md={2}>
              <div className="event-date">
                <h1>04</h1>
                <h5>December</h5>
                <p>2023</p>
              </div>
            </Grid>

            {/*  */}
            <Grid container sx={{ my: 2 }}>
              <Grid item xs={8} md={8}>
                <Typography component="div">
                  <Countdown />
                </Typography>
              </Grid>
              <Grid item xs={4} md={4}>
                <Button
                  sx={{ width: "100%", p: 2 }}
                  color="warning"
                  variant="contained"
                >
                  Join Now
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Events;
