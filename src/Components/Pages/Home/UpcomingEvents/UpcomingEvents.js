import React from "react";
import Grid from "@mui/material/Grid";
import "./Upcoming.css";
import Button from "@mui/material/Button";

const UpcomingEvents = () => {
  return (
    <div>
      <Grid
        sx={{ boxShadow: 3, my: 3, p: 4, bgcolor: "#e0f2f1" }}
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
        <Grid item xs={12} md={6}>
          <img
            src="https://sayidan.kenzap.com/wp-content/uploads/2016/07/galery-popup-14-4-569x331.jpg"
            alt=""
            width="100%"
          />
        </Grid>
        <Grid sx={{ textAlign: "left" }} item xs={12} md={6}>
          <Grid container>
            <Grid item xs={10} md={10}>
              <h3>UPCOMING EVENT</h3>
              <h1>CLUB SPONSORSHIP 2020-2021</h1>
            </Grid>
            <Grid className="event-date" item xs={2} md={2}>
              <h1>04</h1>
              <h5>December</h5>
              <p>2023</p>
            </Grid>
          </Grid>

          <Grid container spacing={2}>
            <Grid item xs={10} md={9} sx={{ display: "inline-flex" }}>
              <h1>
                03 : <span>Years</span>
              </h1>
              <h1>
                12 : <span>Month</span>
              </h1>
              <h1>
                12 : <span>minute</span>
              </h1>
              <h1>
                12 : <span>seconds</span>
              </h1>
            </Grid>
            <Grid item md={3} xs={2}>
              <Button
                sx={{ height: 60, width: "100%", mt: 5 }}
                color="warning"
                variant="contained"
              >
                Join Now
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default UpcomingEvents;
