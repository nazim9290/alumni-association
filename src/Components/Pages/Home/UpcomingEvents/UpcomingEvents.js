import React from "react";
import Grid from "@mui/material/Grid";
import "./Upcoming.css";
import Button from "@mui/material/Button";

const UpcomingEvents = () => {
  return (
    <div>
      <Grid
        container
        spacing={1}
        sx={{ boxShadow: 3, my: 2, p: 4, bgcolor: "#e0f2f1" }}
      >
        <Grid item xs={12} md={6}>
          <img
            src="https://sayidan.kenzap.com/wp-content/uploads/2016/07/galery-popup-14-4-569x331.jpg"
            alt=""
            width="100%"
          />
        </Grid>
        <Grid item xs={8} md={5}>
          <div>
            <h2>UPCOMING EVENT</h2>
            <h3>CLUB SPONSORSHIP 2020-2021</h3>
          </div>
          <Grid container>
            <Grid item xs={6} md={8}>
              <div className="timer">
                <section>
                  <h2>87</h2>
                  <p>
                    <small>Days</small>
                  </p>
                </section>
                <span>:</span>
                <section>
                  <h2>87</h2>
                  <p>
                    <small>Hours</small>
                  </p>
                </section>
                <span>:</span>
                <section>
                  <h2>87</h2>
                  <p>
                    <small>Minute</small>
                  </p>
                </section>
                <span>:</span>
                <section>
                  <h2>87</h2>
                  <p>
                    <small>Seconds</small>
                  </p>
                </section>
              </div>
            </Grid>
            <Grid item xs={6} md={6}>
              <Button
                sx={{ width: "75%", p: 2 }}
                color="warning"
                variant="contained"
              >
                Join Now
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={4} md={1}>
          <div className="event-date">
            <h1>04</h1>
            <h5>December</h5>
            <p>2023</p>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default UpcomingEvents;
